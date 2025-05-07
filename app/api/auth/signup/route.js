import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';


export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password || !name) {
        console.error("Missing fields:", { name, email, password });  
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Hash the password before saving it
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error during signup:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
