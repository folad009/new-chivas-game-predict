import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        name: { label: 'Name', type: 'text' },
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { name, email, password } = credentials;

        if (!email) {
          throw new Error('Email is required');
        }

        const existingUserByEmail = await prisma.user.findUnique({
          where: { email },
        });

        if (password) {
          // Admin login flow
          if (!existingUserByEmail) {
            throw new Error('No admin user found with this email');
          }
          if (existingUserByEmail.role !== 'admin') {
            throw new Error('Invalid role for password login');
          }
          const isValidPassword = await bcrypt.compare(password, existingUserByEmail.password);
          if (!isValidPassword) {
            throw new Error('Invalid password');
          }
          return {
            id: existingUserByEmail.id,
            email: existingUserByEmail.email,
            name: existingUserByEmail.name,
            role: existingUserByEmail.role,
          };
        } else {
          // Normal user login or registration (no password)
          if (!name) {
            throw new Error('Name is required for user login');
          }

          if (existingUserByEmail) {
            if (existingUserByEmail.name.toLowerCase() !== name.toLowerCase()) {
              throw new Error('Name does not match');
            }
            return {
              id: existingUserByEmail.id,
              email: existingUserByEmail.email,
              name: existingUserByEmail.name,
              role: existingUserByEmail.role,
            };
          }

          // No user found: registration flow
          const existingUserByName = await prisma.user.findFirst({
            where: { name: { equals: name, mode: 'insensitive' } },
          });

          if (existingUserByName) {
            throw new Error('Name already exists');
          }

          const defaultPassword = await bcrypt.hash('default', 10);

          const newUser = await prisma.user.create({
            data: {
              name,
              email,
              password: defaultPassword,
              role: 'user',
            },
          });

          return {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
            role: newUser.role,
          };
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
