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
exports.id = "app/api/admin/games/route";
exports.ids = ["app/api/admin/games/route"];
exports.modules = {

/***/ "(rsc)/./app/api/admin/games/route.js":
/*!**************************************!*\
  !*** ./app/api/admin/games/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _libs_adminGames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/adminGames */ \"(rsc)/./libs/adminGames.js\");\n/* harmony import */ var _auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/[...nextauth]/route */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.13_next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0__react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/api/server.js\");\n\n\n\n // ✅ Import NextResponse\nasync function GET() {\n    try {\n        const games = await (0,_libs_adminGames__WEBPACK_IMPORTED_MODULE_0__.getAdminGames)();\n        return new Response(JSON.stringify({\n            games\n        }), {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            error: \"Failed to fetch games\"\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__.authOptions); // ✅ Pass req to getServerSession\n    if (!session || session.user.role !== \"admin\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n            error: \"Access denied\"\n        }, {\n            status: 403\n        });\n    }\n    try {\n        const body = await req.json();\n        // ✅ Validate input data\n        if (!body.team1 || !body.team2 || !body.date || !body.team1Logo || !body.team2Logo || !body.gameType) {\n            return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n                error: \"Invalid game data\"\n            }, {\n                status: 400\n            });\n        }\n        const newGame = await (0,_libs_adminGames__WEBPACK_IMPORTED_MODULE_0__.addAdminGames)(body);\n        return new Response(JSON.stringify({\n            message: \"Game added successfully\",\n            game: newGame\n        }), {\n            status: 201,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            error: error.message || \"Failed to add game\"\n        }), {\n            status: 400,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL2dhbWVzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUU7QUFDSjtBQUNoQjtBQUNGLENBQUMsd0JBQXdCO0FBRTdELGVBQWVLO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxRQUFRLE1BQU1MLCtEQUFhQTtRQUNqQyxPQUFPLElBQUlNLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFSDtRQUFNLElBQUk7WUFDN0NJLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFDaEQ7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPLElBQUlMLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFRyxPQUFPO1FBQXdCLElBQUk7WUFDdEVGLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFDaEQ7SUFDRjtBQUNGO0FBRU8sZUFBZUUsS0FBS0MsR0FBRztJQUM1QixNQUFNQyxVQUFVLE1BQU1aLDJEQUFnQkEsQ0FBQ0QsNkRBQVdBLEdBQUcsaUNBQWlDO0lBRXRGLElBQUksQ0FBQ2EsV0FBV0EsUUFBUUMsSUFBSSxDQUFDQyxJQUFJLEtBQUssU0FBUztRQUM3QyxPQUFPYixxREFBWUEsQ0FBQ2MsSUFBSSxDQUFDO1lBQUVOLE9BQU87UUFBZ0IsR0FBRztZQUFFRixRQUFRO1FBQUk7SUFDckU7SUFFQSxJQUFJO1FBQ0YsTUFBTVMsT0FBTyxNQUFNTCxJQUFJSSxJQUFJO1FBRTNCLHdCQUF3QjtRQUN4QixJQUFJLENBQUNDLEtBQUtDLEtBQUssSUFBSSxDQUFDRCxLQUFLRSxLQUFLLElBQUksQ0FBQ0YsS0FBS0csSUFBSSxJQUFJLENBQUNILEtBQUtJLFNBQVMsSUFBSSxDQUFDSixLQUFLSyxTQUFTLElBQUksQ0FBQ0wsS0FBS00sUUFBUSxFQUFFO1lBQ3BHLE9BQU9yQixxREFBWUEsQ0FBQ2MsSUFBSSxDQUFDO2dCQUFFTixPQUFPO1lBQW9CLEdBQUc7Z0JBQUVGLFFBQVE7WUFBSTtRQUN6RTtRQUVBLE1BQU1nQixVQUFVLE1BQU0xQiwrREFBYUEsQ0FBQ21CO1FBRXBDLE9BQU8sSUFBSVosU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVrQixTQUFTO1lBQTJCQyxNQUFNRjtRQUFRLElBQ25FO1lBQ0VoQixRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2hEO0lBRUosRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBTyxJQUFJTCxTQUNUQyxLQUFLQyxTQUFTLENBQUM7WUFBRUcsT0FBT0EsTUFBTWUsT0FBTyxJQUFJO1FBQXFCLElBQzlEO1lBQ0VqQixRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2hEO0lBRUo7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL25ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvYWRtaW4vZ2FtZXMvcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkQWRtaW5HYW1lcywgZ2V0QWRtaW5HYW1lcyB9IGZyb20gXCJAL2xpYnMvYWRtaW5HYW1lc1wiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7IC8vIOKchSBJbXBvcnQgTmV4dFJlc3BvbnNlXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZ2FtZXMgPSBhd2FpdCBnZXRBZG1pbkdhbWVzKCk7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGdhbWVzIH0pLCB7XG4gICAgICBzdGF0dXM6IDIwMCxcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGdhbWVzXCIgfSksIHtcbiAgICAgIHN0YXR1czogNTAwLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7IC8vIOKchSBQYXNzIHJlcSB0byBnZXRTZXJ2ZXJTZXNzaW9uXG5cbiAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlci5yb2xlICE9PSBcImFkbWluXCIpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJBY2Nlc3MgZGVuaWVkXCIgfSwgeyBzdGF0dXM6IDQwMyB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICAvLyDinIUgVmFsaWRhdGUgaW5wdXQgZGF0YVxuICAgIGlmICghYm9keS50ZWFtMSB8fCAhYm9keS50ZWFtMiB8fCAhYm9keS5kYXRlIHx8ICFib2R5LnRlYW0xTG9nbyB8fCAhYm9keS50ZWFtMkxvZ28gfHwgIWJvZHkuZ2FtZVR5cGUpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludmFsaWQgZ2FtZSBkYXRhXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdHYW1lID0gYXdhaXQgYWRkQWRtaW5HYW1lcyhib2R5KTtcblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiR2FtZSBhZGRlZCBzdWNjZXNzZnVsbHlcIiwgZ2FtZTogbmV3R2FtZSB9KSxcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiAyMDEsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIH1cbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGFkZCBnYW1lXCIgfSksXG4gICAgICB7XG4gICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImFkZEFkbWluR2FtZXMiLCJnZXRBZG1pbkdhbWVzIiwiYXV0aE9wdGlvbnMiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwiZ2FtZXMiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJoZWFkZXJzIiwiZXJyb3IiLCJQT1NUIiwicmVxIiwic2Vzc2lvbiIsInVzZXIiLCJyb2xlIiwianNvbiIsImJvZHkiLCJ0ZWFtMSIsInRlYW0yIiwiZGF0ZSIsInRlYW0xTG9nbyIsInRlYW0yTG9nbyIsImdhbWVUeXBlIiwibmV3R2FtZSIsIm1lc3NhZ2UiLCJnYW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/games/route.js\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.13_next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0__react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.13_next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0__react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js\");\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: 'Credentials',\n            credentials: {\n                name: {\n                    label: 'Name',\n                    type: 'text'\n                },\n                email: {\n                    label: 'Email',\n                    type: 'email'\n                },\n                password: {\n                    label: 'Password',\n                    type: 'password'\n                }\n            },\n            async authorize (credentials) {\n                const { name, email, password } = credentials;\n                if (!email) {\n                    throw new Error('Email is required');\n                }\n                const existingUserByEmail = await prisma.user.findUnique({\n                    where: {\n                        email\n                    }\n                });\n                if (password) {\n                    // Admin login flow\n                    if (!existingUserByEmail) {\n                        throw new Error('No admin user found with this email');\n                    }\n                    if (existingUserByEmail.role !== 'admin') {\n                        throw new Error('Invalid role for password login');\n                    }\n                    const isValidPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].compare(password, existingUserByEmail.password);\n                    if (!isValidPassword) {\n                        throw new Error('Invalid password');\n                    }\n                    return {\n                        id: existingUserByEmail.id,\n                        email: existingUserByEmail.email,\n                        name: existingUserByEmail.name,\n                        role: existingUserByEmail.role\n                    };\n                } else {\n                    // Normal user login or registration (no password)\n                    if (!name) {\n                        throw new Error('Name is required for user login');\n                    }\n                    if (existingUserByEmail) {\n                        if (existingUserByEmail.name.toLowerCase() !== name.toLowerCase()) {\n                            throw new Error('Name does not match');\n                        }\n                        return {\n                            id: existingUserByEmail.id,\n                            email: existingUserByEmail.email,\n                            name: existingUserByEmail.name,\n                            role: existingUserByEmail.role\n                        };\n                    }\n                    // No user found: registration flow\n                    const existingUserByName = await prisma.user.findFirst({\n                        where: {\n                            name: {\n                                equals: name,\n                                mode: 'insensitive'\n                            }\n                        }\n                    });\n                    if (existingUserByName) {\n                        throw new Error('Name already exists');\n                    }\n                    const defaultPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hash('default', 10);\n                    const newUser = await prisma.user.create({\n                        data: {\n                            name,\n                            email,\n                            password: defaultPassword,\n                            role: 'user'\n                        }\n                    });\n                    return {\n                        id: newUser.id,\n                        email: newUser.email,\n                        name: newUser.name,\n                        role: newUser.role\n                    };\n                }\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async session ({ session, token }) {\n            session.user.id = token.sub;\n            session.user.role = token.role;\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.sub = user.id;\n                token.role = user.role;\n            }\n            return token;\n        }\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\nconst GET = handler;\nconst POST = handler;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFDcEI7QUFDaEI7QUFFOUIsTUFBTUksU0FBUyxJQUFJRix3REFBWUE7QUFFeEIsTUFBTUcsY0FBYztJQUN6QkMsV0FBVztRQUNUTCwyRUFBbUJBLENBQUM7WUFDbEJNLE1BQU07WUFDTkMsYUFBYTtnQkFDWEQsTUFBTTtvQkFBRUUsT0FBTztvQkFBUUMsTUFBTTtnQkFBTztnQkFDcENDLE9BQU87b0JBQUVGLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDRSxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUcsV0FBVUwsV0FBVztnQkFDekIsTUFBTSxFQUFFRCxJQUFJLEVBQUVJLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdKO2dCQUVsQyxJQUFJLENBQUNHLE9BQU87b0JBQ1YsTUFBTSxJQUFJRyxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNQyxzQkFBc0IsTUFBTVgsT0FBT1ksSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3ZEQyxPQUFPO3dCQUFFUDtvQkFBTTtnQkFDakI7Z0JBRUEsSUFBSUMsVUFBVTtvQkFDWixtQkFBbUI7b0JBQ25CLElBQUksQ0FBQ0cscUJBQXFCO3dCQUN4QixNQUFNLElBQUlELE1BQU07b0JBQ2xCO29CQUNBLElBQUlDLG9CQUFvQkksSUFBSSxLQUFLLFNBQVM7d0JBQ3hDLE1BQU0sSUFBSUwsTUFBTTtvQkFDbEI7b0JBQ0EsTUFBTU0sa0JBQWtCLE1BQU1qQix3REFBYyxDQUFDUyxVQUFVRyxvQkFBb0JILFFBQVE7b0JBQ25GLElBQUksQ0FBQ1EsaUJBQWlCO3dCQUNwQixNQUFNLElBQUlOLE1BQU07b0JBQ2xCO29CQUNBLE9BQU87d0JBQ0xRLElBQUlQLG9CQUFvQk8sRUFBRTt3QkFDMUJYLE9BQU9JLG9CQUFvQkosS0FBSzt3QkFDaENKLE1BQU1RLG9CQUFvQlIsSUFBSTt3QkFDOUJZLE1BQU1KLG9CQUFvQkksSUFBSTtvQkFDaEM7Z0JBQ0YsT0FBTztvQkFDTCxrREFBa0Q7b0JBQ2xELElBQUksQ0FBQ1osTUFBTTt3QkFDVCxNQUFNLElBQUlPLE1BQU07b0JBQ2xCO29CQUVBLElBQUlDLHFCQUFxQjt3QkFDdkIsSUFBSUEsb0JBQW9CUixJQUFJLENBQUNnQixXQUFXLE9BQU9oQixLQUFLZ0IsV0FBVyxJQUFJOzRCQUNqRSxNQUFNLElBQUlULE1BQU07d0JBQ2xCO3dCQUNBLE9BQU87NEJBQ0xRLElBQUlQLG9CQUFvQk8sRUFBRTs0QkFDMUJYLE9BQU9JLG9CQUFvQkosS0FBSzs0QkFDaENKLE1BQU1RLG9CQUFvQlIsSUFBSTs0QkFDOUJZLE1BQU1KLG9CQUFvQkksSUFBSTt3QkFDaEM7b0JBQ0Y7b0JBRUEsbUNBQW1DO29CQUNuQyxNQUFNSyxxQkFBcUIsTUFBTXBCLE9BQU9ZLElBQUksQ0FBQ1MsU0FBUyxDQUFDO3dCQUNyRFAsT0FBTzs0QkFBRVgsTUFBTTtnQ0FBRW1CLFFBQVFuQjtnQ0FBTW9CLE1BQU07NEJBQWM7d0JBQUU7b0JBQ3ZEO29CQUVBLElBQUlILG9CQUFvQjt3QkFDdEIsTUFBTSxJQUFJVixNQUFNO29CQUNsQjtvQkFFQSxNQUFNYyxrQkFBa0IsTUFBTXpCLHFEQUFXLENBQUMsV0FBVztvQkFFckQsTUFBTTJCLFVBQVUsTUFBTTFCLE9BQU9ZLElBQUksQ0FBQ2UsTUFBTSxDQUFDO3dCQUN2Q0MsTUFBTTs0QkFDSnpCOzRCQUNBSTs0QkFDQUMsVUFBVWdCOzRCQUNWVCxNQUFNO3dCQUNSO29CQUNGO29CQUVBLE9BQU87d0JBQ0xHLElBQUlRLFFBQVFSLEVBQUU7d0JBQ2RYLE9BQU9tQixRQUFRbkIsS0FBSzt3QkFDcEJKLE1BQU11QixRQUFRdkIsSUFBSTt3QkFDbEJZLE1BQU1XLFFBQVFYLElBQUk7b0JBQ3BCO2dCQUNGO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RjLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUNuQ0MsV0FBVztRQUNULE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFQyxLQUFLLEVBQUU7WUFDOUJELFFBQVF0QixJQUFJLENBQUNNLEVBQUUsR0FBR2lCLE1BQU1DLEdBQUc7WUFDM0JGLFFBQVF0QixJQUFJLENBQUNHLElBQUksR0FBR29CLE1BQU1wQixJQUFJO1lBQzlCLE9BQU9tQjtRQUNUO1FBQ0EsTUFBTUcsS0FBSSxFQUFFRixLQUFLLEVBQUV2QixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUnVCLE1BQU1DLEdBQUcsR0FBR3hCLEtBQUtNLEVBQUU7Z0JBQ25CaUIsTUFBTXBCLElBQUksR0FBR0gsS0FBS0csSUFBSTtZQUN4QjtZQUNBLE9BQU9vQjtRQUNUO0lBQ0Y7QUFDRixFQUFFO0FBRUYsTUFBTUcsVUFBVTFDLGdEQUFRQSxDQUFDSztBQUVsQixNQUFNc0MsTUFBTUQsUUFBUTtBQUNwQixNQUFNRSxPQUFPRixRQUFRIiwic291cmNlcyI6WyIvVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvbmV3LWNoaXZhcy1nYW1lLXByZWRpY3QvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgbmFtZTogeyBsYWJlbDogJ05hbWUnLCB0eXBlOiAndGV4dCcgfSxcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6ICdFbWFpbCcsIHR5cGU6ICdlbWFpbCcgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6ICdQYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzO1xuXG4gICAgICAgIGlmICghZW1haWwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtYWlsIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXJCeUVtYWlsID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgZW1haWwgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHBhc3N3b3JkKSB7XG4gICAgICAgICAgLy8gQWRtaW4gbG9naW4gZmxvd1xuICAgICAgICAgIGlmICghZXhpc3RpbmdVc2VyQnlFbWFpbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhZG1pbiB1c2VyIGZvdW5kIHdpdGggdGhpcyBlbWFpbCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXhpc3RpbmdVc2VyQnlFbWFpbC5yb2xlICE9PSAnYWRtaW4nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcm9sZSBmb3IgcGFzc3dvcmQgbG9naW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaXNWYWxpZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIGV4aXN0aW5nVXNlckJ5RW1haWwucGFzc3dvcmQpO1xuICAgICAgICAgIGlmICghaXNWYWxpZFBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGFzc3dvcmQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBleGlzdGluZ1VzZXJCeUVtYWlsLmlkLFxuICAgICAgICAgICAgZW1haWw6IGV4aXN0aW5nVXNlckJ5RW1haWwuZW1haWwsXG4gICAgICAgICAgICBuYW1lOiBleGlzdGluZ1VzZXJCeUVtYWlsLm5hbWUsXG4gICAgICAgICAgICByb2xlOiBleGlzdGluZ1VzZXJCeUVtYWlsLnJvbGUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBOb3JtYWwgdXNlciBsb2dpbiBvciByZWdpc3RyYXRpb24gKG5vIHBhc3N3b3JkKVxuICAgICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGlzIHJlcXVpcmVkIGZvciB1c2VyIGxvZ2luJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nVXNlckJ5RW1haWwpIHtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1VzZXJCeUVtYWlsLm5hbWUudG9Mb3dlckNhc2UoKSAhPT0gbmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBkb2VzIG5vdCBtYXRjaCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaWQ6IGV4aXN0aW5nVXNlckJ5RW1haWwuaWQsXG4gICAgICAgICAgICAgIGVtYWlsOiBleGlzdGluZ1VzZXJCeUVtYWlsLmVtYWlsLFxuICAgICAgICAgICAgICBuYW1lOiBleGlzdGluZ1VzZXJCeUVtYWlsLm5hbWUsXG4gICAgICAgICAgICAgIHJvbGU6IGV4aXN0aW5nVXNlckJ5RW1haWwucm9sZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTm8gdXNlciBmb3VuZDogcmVnaXN0cmF0aW9uIGZsb3dcbiAgICAgICAgICBjb25zdCBleGlzdGluZ1VzZXJCeU5hbWUgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgd2hlcmU6IHsgbmFtZTogeyBlcXVhbHM6IG5hbWUsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nVXNlckJ5TmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGVmYXVsdFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goJ2RlZmF1bHQnLCAxMCk7XG5cbiAgICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiBkZWZhdWx0UGFzc3dvcmQsXG4gICAgICAgICAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG5ld1VzZXIuaWQsXG4gICAgICAgICAgICBlbWFpbDogbmV3VXNlci5lbWFpbCxcbiAgICAgICAgICAgIG5hbWU6IG5ld1VzZXIubmFtZSxcbiAgICAgICAgICAgIHJvbGU6IG5ld1VzZXIucm9sZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLnN1YjtcbiAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZTtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uc3ViID0gdXNlci5pZDtcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcblxuZXhwb3J0IGNvbnN0IEdFVCA9IGhhbmRsZXI7XG5leHBvcnQgY29uc3QgUE9TVCA9IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiUHJpc21hQ2xpZW50IiwiYmNyeXB0IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJsYWJlbCIsInR5cGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJleGlzdGluZ1VzZXJCeUVtYWlsIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInJvbGUiLCJpc1ZhbGlkUGFzc3dvcmQiLCJjb21wYXJlIiwiaWQiLCJ0b0xvd2VyQ2FzZSIsImV4aXN0aW5nVXNlckJ5TmFtZSIsImZpbmRGaXJzdCIsImVxdWFscyIsIm1vZGUiLCJkZWZhdWx0UGFzc3dvcmQiLCJoYXNoIiwibmV3VXNlciIsImNyZWF0ZSIsImRhdGEiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwic3ViIiwiand0IiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./libs/adminGames.js":
/*!****************************!*\
  !*** ./libs/adminGames.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAdminGames: () => (/* binding */ addAdminGames),\n/* harmony export */   clearAdminGames: () => (/* binding */ clearAdminGames),\n/* harmony export */   getAdminGames: () => (/* binding */ getAdminGames)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function getAdminGames() {\n    return await prisma.game.findMany({\n        where: {\n            isArchived: false\n        }\n    });\n}\nasync function addAdminGames(game) {\n    const { team1, team2, date, team1Logo, team2Logo, gameType } = game;\n    if (!team1 || !team2 || !date || !team1Logo || !team2Logo || !gameType) {\n        throw new Error(\"All fields (team1, team2, date, team1Logo, team2Logo, gameType) are required.\");\n    }\n    await prisma.game.updateMany({\n        where: {\n            isArchived: false\n        },\n        data: {\n            isArchived: true\n        }\n    });\n    return await prisma.game.create({\n        data: {\n            team1,\n            team2,\n            date: new Date(date),\n            team1Logo,\n            team2Logo,\n            gameType,\n            isArchived: false\n        }\n    });\n}\nasync function clearAdminGames() {\n    return await prisma.game.deleteMany();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL2FkbWluR2FtZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsU0FBUyxJQUFJRCx3REFBWUE7QUFFeEIsZUFBZUU7SUFDbEIsT0FBTyxNQUFNRCxPQUFPRSxJQUFJLENBQUNDLFFBQVEsQ0FBQztRQUM5QkMsT0FBTztZQUFDQyxZQUFZO1FBQUs7SUFDN0I7QUFDSjtBQUVPLGVBQWVDLGNBQWNKLElBQUk7SUFDcEMsTUFBTSxFQUFFSyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFLEdBQUdWO0lBRS9ELElBQUksQ0FBQ0ssU0FBUyxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDQyxhQUFhLENBQUNDLFVBQVU7UUFDcEUsTUFBTSxJQUFJQyxNQUFNO0lBQ3BCO0lBRUEsTUFBTWIsT0FBT0UsSUFBSSxDQUFDWSxVQUFVLENBQUM7UUFDekJWLE9BQU87WUFBQ0MsWUFBWTtRQUFLO1FBQ3pCVSxNQUFNO1lBQUNWLFlBQVk7UUFBSTtJQUMzQjtJQUVBLE9BQU8sTUFBTUwsT0FBT0UsSUFBSSxDQUFDYyxNQUFNLENBQUM7UUFDNUJELE1BQU07WUFBRVI7WUFBT0M7WUFBT0MsTUFBTSxJQUFJUSxLQUFLUjtZQUFPQztZQUFXQztZQUFXQztZQUFVUCxZQUFZO1FBQU07SUFDbEc7QUFDSjtBQUVPLGVBQWVhO0lBQ2xCLE9BQU8sTUFBTWxCLE9BQU9FLElBQUksQ0FBQ2lCLFVBQVU7QUFDdkMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9Qcm9qZWN0cy9uZXctY2hpdmFzLWdhbWUtcHJlZGljdC9saWJzL2FkbWluR2FtZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFkbWluR2FtZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS5nYW1lLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHtpc0FyY2hpdmVkOiBmYWxzZX0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRBZG1pbkdhbWVzKGdhbWUpIHtcbiAgICBjb25zdCB7IHRlYW0xLCB0ZWFtMiwgZGF0ZSwgdGVhbTFMb2dvLCB0ZWFtMkxvZ28sIGdhbWVUeXBlIH0gPSBnYW1lO1xuXG4gICAgaWYgKCF0ZWFtMSB8fCAhdGVhbTIgfHwgIWRhdGUgfHwgIXRlYW0xTG9nbyB8fCAhdGVhbTJMb2dvIHx8ICFnYW1lVHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbGwgZmllbGRzICh0ZWFtMSwgdGVhbTIsIGRhdGUsIHRlYW0xTG9nbywgdGVhbTJMb2dvLCBnYW1lVHlwZSkgYXJlIHJlcXVpcmVkLlwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuZ2FtZS51cGRhdGVNYW55KHtcbiAgICAgICAgd2hlcmU6IHtpc0FyY2hpdmVkOiBmYWxzZX0sXG4gICAgICAgIGRhdGE6IHtpc0FyY2hpdmVkOiB0cnVlfVxuICAgIH0pXG5cbiAgICByZXR1cm4gYXdhaXQgcHJpc21hLmdhbWUuY3JlYXRlKHtcbiAgICAgICAgZGF0YTogeyB0ZWFtMSwgdGVhbTIsIGRhdGU6IG5ldyBEYXRlKGRhdGUpLCB0ZWFtMUxvZ28sIHRlYW0yTG9nbywgZ2FtZVR5cGUsIGlzQXJjaGl2ZWQ6IGZhbHNlIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhckFkbWluR2FtZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS5nYW1lLmRlbGV0ZU1hbnkoKTtcbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2V0QWRtaW5HYW1lcyIsImdhbWUiLCJmaW5kTWFueSIsIndoZXJlIiwiaXNBcmNoaXZlZCIsImFkZEFkbWluR2FtZXMiLCJ0ZWFtMSIsInRlYW0yIiwiZGF0ZSIsInRlYW0xTG9nbyIsInRlYW0yTG9nbyIsImdhbWVUeXBlIiwiRXJyb3IiLCJ1cGRhdGVNYW55IiwiZGF0YSIsImNyZWF0ZSIsIkRhdGUiLCJjbGVhckFkbWluR2FtZXMiLCJkZWxldGVNYW55Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./libs/adminGames.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fgames%2Froute&page=%2Fapi%2Fadmin%2Fgames%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fgames%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fgames%2Froute&page=%2Fapi%2Fadmin%2Fgames%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fgames%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mac_Desktop_Projects_new_chivas_game_predict_app_api_admin_games_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/games/route.js */ \"(rsc)/./app/api/admin/games/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/games/route\",\n        pathname: \"/api/admin/games\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/games/route\"\n    },\n    resolvedPagePath: \"/Users/mac/Desktop/Projects/new-chivas-game-predict/app/api/admin/games/route.js\",\n    nextConfigOutput,\n    userland: _Users_mac_Desktop_Projects_new_chivas_game_predict_app_api_admin_games_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjBfcmVhY3QtZG9tQDE5LjIuMF9yZWFjdEAxOS4yLjBfX3JlYWN0QDE5LjIuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRmdhbWVzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRmdhbWVzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZnYW1lcyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1hYyUyRkRlc2t0b3AlMkZQcm9qZWN0cyUyRm5ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1hYyUyRkRlc2t0b3AlMkZQcm9qZWN0cyUyRm5ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNnQztBQUM3RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL25ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvYWRtaW4vZ2FtZXMvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkbWluL2dhbWVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vZ2FtZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkbWluL2dhbWVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL25ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvYWRtaW4vZ2FtZXMvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fgames%2Froute&page=%2Fapi%2Fadmin%2Fgames%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fgames%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0","vendor-chunks/next-auth@4.24.13_next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0__react-dom@19.2.0_react@19.2.0__react@19.2.0","vendor-chunks/@babel+runtime@7.28.4","vendor-chunks/jose@4.15.9","vendor-chunks/openid-client@5.7.1","vendor-chunks/bcryptjs@3.0.3","vendor-chunks/oauth@0.9.15","vendor-chunks/object-hash@2.2.0","vendor-chunks/preact@10.27.2","vendor-chunks/uuid@8.3.2","vendor-chunks/yallist@4.0.0","vendor-chunks/preact-render-to-string@5.2.6_preact@10.27.2","vendor-chunks/lru-cache@6.0.0","vendor-chunks/cookie@0.7.2","vendor-chunks/oidc-token-hash@5.2.0","vendor-chunks/@panva+hkdf@1.2.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fgames%2Froute&page=%2Fapi%2Fadmin%2Fgames%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fgames%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();