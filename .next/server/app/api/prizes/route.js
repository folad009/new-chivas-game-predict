/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/prizes/route";
exports.ids = ["app/api/prizes/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.13_next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0__react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.13_next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0__react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js\");\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: 'Credentials',\n            credentials: {\n                name: {\n                    label: 'Name',\n                    type: 'text'\n                },\n                email: {\n                    label: 'Email',\n                    type: 'email'\n                },\n                password: {\n                    label: 'Password',\n                    type: 'password'\n                }\n            },\n            async authorize (credentials) {\n                const { name, email, password } = credentials;\n                if (!email) {\n                    throw new Error('Email is required');\n                }\n                const existingUserByEmail = await prisma.user.findUnique({\n                    where: {\n                        email\n                    }\n                });\n                if (password) {\n                    // Admin login flow\n                    if (!existingUserByEmail) {\n                        throw new Error('No admin user found with this email');\n                    }\n                    if (existingUserByEmail.role !== 'admin') {\n                        throw new Error('Invalid role for password login');\n                    }\n                    const isValidPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].compare(password, existingUserByEmail.password);\n                    if (!isValidPassword) {\n                        throw new Error('Invalid password');\n                    }\n                    return {\n                        id: existingUserByEmail.id,\n                        email: existingUserByEmail.email,\n                        name: existingUserByEmail.name,\n                        role: existingUserByEmail.role\n                    };\n                } else {\n                    // Normal user login or registration (no password)\n                    if (!name) {\n                        throw new Error('Name is required for user login');\n                    }\n                    if (existingUserByEmail) {\n                        if (existingUserByEmail.name.toLowerCase() !== name.toLowerCase()) {\n                            throw new Error('Name does not match');\n                        }\n                        return {\n                            id: existingUserByEmail.id,\n                            email: existingUserByEmail.email,\n                            name: existingUserByEmail.name,\n                            role: existingUserByEmail.role\n                        };\n                    }\n                    // No user found: registration flow\n                    const existingUserByName = await prisma.user.findFirst({\n                        where: {\n                            name: {\n                                equals: name,\n                                mode: 'insensitive'\n                            }\n                        }\n                    });\n                    if (existingUserByName) {\n                        throw new Error('Name already exists');\n                    }\n                    const defaultPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hash('default', 10);\n                    const newUser = await prisma.user.create({\n                        data: {\n                            name,\n                            email,\n                            password: defaultPassword,\n                            role: 'user'\n                        }\n                    });\n                    return {\n                        id: newUser.id,\n                        email: newUser.email,\n                        name: newUser.name,\n                        role: newUser.role\n                    };\n                }\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async session ({ session, token }) {\n            session.user.id = token.sub;\n            session.user.role = token.role;\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.sub = user.id;\n                token.role = user.role;\n            }\n            return token;\n        }\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\nconst GET = handler;\nconst POST = handler;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFDcEI7QUFDaEI7QUFFOUIsTUFBTUksU0FBUyxJQUFJRix3REFBWUE7QUFFeEIsTUFBTUcsY0FBYztJQUN6QkMsV0FBVztRQUNUTCwyRUFBbUJBLENBQUM7WUFDbEJNLE1BQU07WUFDTkMsYUFBYTtnQkFDWEQsTUFBTTtvQkFBRUUsT0FBTztvQkFBUUMsTUFBTTtnQkFBTztnQkFDcENDLE9BQU87b0JBQUVGLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDRSxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUcsV0FBVUwsV0FBVztnQkFDekIsTUFBTSxFQUFFRCxJQUFJLEVBQUVJLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdKO2dCQUVsQyxJQUFJLENBQUNHLE9BQU87b0JBQ1YsTUFBTSxJQUFJRyxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNQyxzQkFBc0IsTUFBTVgsT0FBT1ksSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3ZEQyxPQUFPO3dCQUFFUDtvQkFBTTtnQkFDakI7Z0JBRUEsSUFBSUMsVUFBVTtvQkFDWixtQkFBbUI7b0JBQ25CLElBQUksQ0FBQ0cscUJBQXFCO3dCQUN4QixNQUFNLElBQUlELE1BQU07b0JBQ2xCO29CQUNBLElBQUlDLG9CQUFvQkksSUFBSSxLQUFLLFNBQVM7d0JBQ3hDLE1BQU0sSUFBSUwsTUFBTTtvQkFDbEI7b0JBQ0EsTUFBTU0sa0JBQWtCLE1BQU1qQix3REFBYyxDQUFDUyxVQUFVRyxvQkFBb0JILFFBQVE7b0JBQ25GLElBQUksQ0FBQ1EsaUJBQWlCO3dCQUNwQixNQUFNLElBQUlOLE1BQU07b0JBQ2xCO29CQUNBLE9BQU87d0JBQ0xRLElBQUlQLG9CQUFvQk8sRUFBRTt3QkFDMUJYLE9BQU9JLG9CQUFvQkosS0FBSzt3QkFDaENKLE1BQU1RLG9CQUFvQlIsSUFBSTt3QkFDOUJZLE1BQU1KLG9CQUFvQkksSUFBSTtvQkFDaEM7Z0JBQ0YsT0FBTztvQkFDTCxrREFBa0Q7b0JBQ2xELElBQUksQ0FBQ1osTUFBTTt3QkFDVCxNQUFNLElBQUlPLE1BQU07b0JBQ2xCO29CQUVBLElBQUlDLHFCQUFxQjt3QkFDdkIsSUFBSUEsb0JBQW9CUixJQUFJLENBQUNnQixXQUFXLE9BQU9oQixLQUFLZ0IsV0FBVyxJQUFJOzRCQUNqRSxNQUFNLElBQUlULE1BQU07d0JBQ2xCO3dCQUNBLE9BQU87NEJBQ0xRLElBQUlQLG9CQUFvQk8sRUFBRTs0QkFDMUJYLE9BQU9JLG9CQUFvQkosS0FBSzs0QkFDaENKLE1BQU1RLG9CQUFvQlIsSUFBSTs0QkFDOUJZLE1BQU1KLG9CQUFvQkksSUFBSTt3QkFDaEM7b0JBQ0Y7b0JBRUEsbUNBQW1DO29CQUNuQyxNQUFNSyxxQkFBcUIsTUFBTXBCLE9BQU9ZLElBQUksQ0FBQ1MsU0FBUyxDQUFDO3dCQUNyRFAsT0FBTzs0QkFBRVgsTUFBTTtnQ0FBRW1CLFFBQVFuQjtnQ0FBTW9CLE1BQU07NEJBQWM7d0JBQUU7b0JBQ3ZEO29CQUVBLElBQUlILG9CQUFvQjt3QkFDdEIsTUFBTSxJQUFJVixNQUFNO29CQUNsQjtvQkFFQSxNQUFNYyxrQkFBa0IsTUFBTXpCLHFEQUFXLENBQUMsV0FBVztvQkFFckQsTUFBTTJCLFVBQVUsTUFBTTFCLE9BQU9ZLElBQUksQ0FBQ2UsTUFBTSxDQUFDO3dCQUN2Q0MsTUFBTTs0QkFDSnpCOzRCQUNBSTs0QkFDQUMsVUFBVWdCOzRCQUNWVCxNQUFNO3dCQUNSO29CQUNGO29CQUVBLE9BQU87d0JBQ0xHLElBQUlRLFFBQVFSLEVBQUU7d0JBQ2RYLE9BQU9tQixRQUFRbkIsS0FBSzt3QkFDcEJKLE1BQU11QixRQUFRdkIsSUFBSTt3QkFDbEJZLE1BQU1XLFFBQVFYLElBQUk7b0JBQ3BCO2dCQUNGO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RjLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUNuQ0MsV0FBVztRQUNULE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFQyxLQUFLLEVBQUU7WUFDOUJELFFBQVF0QixJQUFJLENBQUNNLEVBQUUsR0FBR2lCLE1BQU1DLEdBQUc7WUFDM0JGLFFBQVF0QixJQUFJLENBQUNHLElBQUksR0FBR29CLE1BQU1wQixJQUFJO1lBQzlCLE9BQU9tQjtRQUNUO1FBQ0EsTUFBTUcsS0FBSSxFQUFFRixLQUFLLEVBQUV2QixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUnVCLE1BQU1DLEdBQUcsR0FBR3hCLEtBQUtNLEVBQUU7Z0JBQ25CaUIsTUFBTXBCLElBQUksR0FBR0gsS0FBS0csSUFBSTtZQUN4QjtZQUNBLE9BQU9vQjtRQUNUO0lBQ0Y7QUFDRixFQUFFO0FBRUYsTUFBTUcsVUFBVTFDLGdEQUFRQSxDQUFDSztBQUVsQixNQUFNc0MsTUFBTUQsUUFBUTtBQUNwQixNQUFNRSxPQUFPRixRQUFRIiwic291cmNlcyI6WyIvVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvbmV3LWNoaXZhcy1nYW1lLXByZWRpY3QvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgbmFtZTogeyBsYWJlbDogJ05hbWUnLCB0eXBlOiAndGV4dCcgfSxcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6ICdFbWFpbCcsIHR5cGU6ICdlbWFpbCcgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6ICdQYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzO1xuXG4gICAgICAgIGlmICghZW1haWwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtYWlsIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXJCeUVtYWlsID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgZW1haWwgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHBhc3N3b3JkKSB7XG4gICAgICAgICAgLy8gQWRtaW4gbG9naW4gZmxvd1xuICAgICAgICAgIGlmICghZXhpc3RpbmdVc2VyQnlFbWFpbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhZG1pbiB1c2VyIGZvdW5kIHdpdGggdGhpcyBlbWFpbCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXhpc3RpbmdVc2VyQnlFbWFpbC5yb2xlICE9PSAnYWRtaW4nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcm9sZSBmb3IgcGFzc3dvcmQgbG9naW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaXNWYWxpZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIGV4aXN0aW5nVXNlckJ5RW1haWwucGFzc3dvcmQpO1xuICAgICAgICAgIGlmICghaXNWYWxpZFBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGFzc3dvcmQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBleGlzdGluZ1VzZXJCeUVtYWlsLmlkLFxuICAgICAgICAgICAgZW1haWw6IGV4aXN0aW5nVXNlckJ5RW1haWwuZW1haWwsXG4gICAgICAgICAgICBuYW1lOiBleGlzdGluZ1VzZXJCeUVtYWlsLm5hbWUsXG4gICAgICAgICAgICByb2xlOiBleGlzdGluZ1VzZXJCeUVtYWlsLnJvbGUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBOb3JtYWwgdXNlciBsb2dpbiBvciByZWdpc3RyYXRpb24gKG5vIHBhc3N3b3JkKVxuICAgICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGlzIHJlcXVpcmVkIGZvciB1c2VyIGxvZ2luJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nVXNlckJ5RW1haWwpIHtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1VzZXJCeUVtYWlsLm5hbWUudG9Mb3dlckNhc2UoKSAhPT0gbmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBkb2VzIG5vdCBtYXRjaCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaWQ6IGV4aXN0aW5nVXNlckJ5RW1haWwuaWQsXG4gICAgICAgICAgICAgIGVtYWlsOiBleGlzdGluZ1VzZXJCeUVtYWlsLmVtYWlsLFxuICAgICAgICAgICAgICBuYW1lOiBleGlzdGluZ1VzZXJCeUVtYWlsLm5hbWUsXG4gICAgICAgICAgICAgIHJvbGU6IGV4aXN0aW5nVXNlckJ5RW1haWwucm9sZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTm8gdXNlciBmb3VuZDogcmVnaXN0cmF0aW9uIGZsb3dcbiAgICAgICAgICBjb25zdCBleGlzdGluZ1VzZXJCeU5hbWUgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgd2hlcmU6IHsgbmFtZTogeyBlcXVhbHM6IG5hbWUsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nVXNlckJ5TmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGVmYXVsdFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goJ2RlZmF1bHQnLCAxMCk7XG5cbiAgICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiBkZWZhdWx0UGFzc3dvcmQsXG4gICAgICAgICAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG5ld1VzZXIuaWQsXG4gICAgICAgICAgICBlbWFpbDogbmV3VXNlci5lbWFpbCxcbiAgICAgICAgICAgIG5hbWU6IG5ld1VzZXIubmFtZSxcbiAgICAgICAgICAgIHJvbGU6IG5ld1VzZXIucm9sZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLnN1YjtcbiAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZTtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uc3ViID0gdXNlci5pZDtcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcblxuZXhwb3J0IGNvbnN0IEdFVCA9IGhhbmRsZXI7XG5leHBvcnQgY29uc3QgUE9TVCA9IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiUHJpc21hQ2xpZW50IiwiYmNyeXB0IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJsYWJlbCIsInR5cGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJleGlzdGluZ1VzZXJCeUVtYWlsIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInJvbGUiLCJpc1ZhbGlkUGFzc3dvcmQiLCJjb21wYXJlIiwiaWQiLCJ0b0xvd2VyQ2FzZSIsImV4aXN0aW5nVXNlckJ5TmFtZSIsImZpbmRGaXJzdCIsImVxdWFscyIsIm1vZGUiLCJkZWZhdWx0UGFzc3dvcmQiLCJoYXNoIiwibmV3VXNlciIsImNyZWF0ZSIsImRhdGEiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwic3ViIiwiand0IiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./app/api/prizes/route.js":
/*!*********************************!*\
  !*** ./app/api/prizes/route.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.13_next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0__react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    if (!session) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: 'Not authenticated'\n        }, {\n            status: 403\n        });\n    }\n    // Static prize data\n    const staticPrizes = {\n        \"user1@example.com\": \"🏆 1st Place - Box 1\",\n        \"user2@example.com\": \"🥈 2nd Place - Box 2\",\n        \"user3@example.com\": \"🥉 3rd Place - Box 3\"\n    };\n    const prize = staticPrizes[session.user.email] || null;\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        prize\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ByaXplcy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QztBQUNvQjtBQUN0QjtBQUVwQyxlQUFlRyxJQUFJQyxHQUFHO0lBQzNCLE1BQU1DLFVBQVUsTUFBTUwsMkRBQWdCQSxDQUFDQyxxRUFBV0E7SUFFbEQsSUFBSSxDQUFDSSxTQUFTO1FBQ1osT0FBT0gscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW9CLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3pFO0lBRUEsb0JBQW9CO0lBQ3BCLE1BQU1DLGVBQWU7UUFDbkIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixxQkFBcUI7SUFDdkI7SUFFQSxNQUFNQyxRQUFRRCxZQUFZLENBQUNKLFFBQVFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUk7SUFFbEQsT0FBT1YscURBQVlBLENBQUNJLElBQUksQ0FBQztRQUFFSTtJQUFNO0FBQ25DIiwic291cmNlcyI6WyIvVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvbmV3LWNoaXZhcy1nYW1lLXByZWRpY3QvYXBwL2FwaS9wcml6ZXMvcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUnO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCcgfSwgeyBzdGF0dXM6IDQwMyB9KTtcbiAgfVxuXG4gIC8vIFN0YXRpYyBwcml6ZSBkYXRhXG4gIGNvbnN0IHN0YXRpY1ByaXplcyA9IHtcbiAgICBcInVzZXIxQGV4YW1wbGUuY29tXCI6IFwi8J+PhiAxc3QgUGxhY2UgLSBCb3ggMVwiLFxuICAgIFwidXNlcjJAZXhhbXBsZS5jb21cIjogXCLwn6WIIDJuZCBQbGFjZSAtIEJveCAyXCIsXG4gICAgXCJ1c2VyM0BleGFtcGxlLmNvbVwiOiBcIvCfpYkgM3JkIFBsYWNlIC0gQm94IDNcIixcbiAgfTtcblxuICBjb25zdCBwcml6ZSA9IHN0YXRpY1ByaXplc1tzZXNzaW9uLnVzZXIuZW1haWxdIHx8IG51bGw7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgcHJpemUgfSk7XG59XG4iXSwibmFtZXMiOlsiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwicmVxIiwic2Vzc2lvbiIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInN0YXRpY1ByaXplcyIsInByaXplIiwidXNlciIsImVtYWlsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/prizes/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprizes%2Froute&page=%2Fapi%2Fprizes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprizes%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprizes%2Froute&page=%2Fapi%2Fprizes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprizes%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mac_Desktop_Projects_new_chivas_game_predict_app_api_prizes_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/prizes/route.js */ \"(rsc)/./app/api/prizes/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/prizes/route\",\n        pathname: \"/api/prizes\",\n        filename: \"route\",\n        bundlePath: \"app/api/prizes/route\"\n    },\n    resolvedPagePath: \"/Users/mac/Desktop/Projects/new-chivas-game-predict/app/api/prizes/route.js\",\n    nextConfigOutput,\n    userland: _Users_mac_Desktop_Projects_new_chivas_game_predict_app_api_prizes_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjBfcmVhY3QtZG9tQDE5LjIuMF9yZWFjdEAxOS4yLjBfX3JlYWN0QDE5LjIuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcml6ZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnByaXplcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnByaXplcyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1hYyUyRkRlc2t0b3AlMkZQcm9qZWN0cyUyRm5ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1hYyUyRkRlc2t0b3AlMkZQcm9qZWN0cyUyRm5ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMyQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL25ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvcHJpemVzL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcml6ZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcml6ZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3ByaXplcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9tYWMvRGVza3RvcC9Qcm9qZWN0cy9uZXctY2hpdmFzLWdhbWUtcHJlZGljdC9hcHAvYXBpL3ByaXplcy9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprizes%2Froute&page=%2Fapi%2Fprizes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprizes%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0","vendor-chunks/next-auth@4.24.13_next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0__react-dom@19.2.0_react@19.2.0__react@19.2.0","vendor-chunks/@babel+runtime@7.28.4","vendor-chunks/jose@4.15.9","vendor-chunks/openid-client@5.7.1","vendor-chunks/bcryptjs@3.0.3","vendor-chunks/oauth@0.9.15","vendor-chunks/object-hash@2.2.0","vendor-chunks/preact@10.27.2","vendor-chunks/uuid@8.3.2","vendor-chunks/yallist@4.0.0","vendor-chunks/preact-render-to-string@5.2.6_preact@10.27.2","vendor-chunks/lru-cache@6.0.0","vendor-chunks/cookie@0.7.2","vendor-chunks/oidc-token-hash@5.2.0","vendor-chunks/@panva+hkdf@1.2.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprizes%2Froute&page=%2Fapi%2Fprizes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprizes%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();