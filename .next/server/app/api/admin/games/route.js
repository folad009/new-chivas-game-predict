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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _libs_adminGames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/adminGames */ \"(rsc)/./libs/adminGames.js\");\n/* harmony import */ var _auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/[...nextauth]/route */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n // ✅ Import NextResponse\nasync function GET() {\n    try {\n        const games = await (0,_libs_adminGames__WEBPACK_IMPORTED_MODULE_0__.getAdminGames)();\n        return new Response(JSON.stringify({\n            games\n        }), {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            error: \"Failed to fetch games\"\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__.authOptions); // ✅ Pass req to getServerSession\n    if (!session || session.user.role !== \"admin\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n            error: \"Access denied\"\n        }, {\n            status: 403\n        });\n    }\n    try {\n        const body = await req.json();\n        // ✅ Validate input data\n        if (!body.team1 || !body.team2 || !body.date || !body.team1Logo || !body.team2Logo || !body.gameType) {\n            return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n                error: \"Invalid game data\"\n            }, {\n                status: 400\n            });\n        }\n        const newGame = await (0,_libs_adminGames__WEBPACK_IMPORTED_MODULE_0__.addAdminGames)(body);\n        return new Response(JSON.stringify({\n            message: \"Game added successfully\",\n            game: newGame\n        }), {\n            status: 201,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            error: error.message || \"Failed to add game\"\n        }), {\n            status: 400,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL2dhbWVzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUU7QUFDSjtBQUNoQjtBQUNGLENBQUMsd0JBQXdCO0FBRTdELGVBQWVLO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxRQUFRLE1BQU1MLCtEQUFhQTtRQUNqQyxPQUFPLElBQUlNLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFSDtRQUFNLElBQUk7WUFDN0NJLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFDaEQ7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPLElBQUlMLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFRyxPQUFPO1FBQXdCLElBQUk7WUFDdEVGLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFDaEQ7SUFDRjtBQUNGO0FBRU8sZUFBZUUsS0FBS0MsR0FBRztJQUM1QixNQUFNQyxVQUFVLE1BQU1aLDJEQUFnQkEsQ0FBQ0QsNkRBQVdBLEdBQUcsaUNBQWlDO0lBRXRGLElBQUksQ0FBQ2EsV0FBV0EsUUFBUUMsSUFBSSxDQUFDQyxJQUFJLEtBQUssU0FBUztRQUM3QyxPQUFPYixxREFBWUEsQ0FBQ2MsSUFBSSxDQUFDO1lBQUVOLE9BQU87UUFBZ0IsR0FBRztZQUFFRixRQUFRO1FBQUk7SUFDckU7SUFFQSxJQUFJO1FBQ0YsTUFBTVMsT0FBTyxNQUFNTCxJQUFJSSxJQUFJO1FBRTNCLHdCQUF3QjtRQUN4QixJQUFJLENBQUNDLEtBQUtDLEtBQUssSUFBSSxDQUFDRCxLQUFLRSxLQUFLLElBQUksQ0FBQ0YsS0FBS0csSUFBSSxJQUFJLENBQUNILEtBQUtJLFNBQVMsSUFBSSxDQUFDSixLQUFLSyxTQUFTLElBQUksQ0FBQ0wsS0FBS00sUUFBUSxFQUFFO1lBQ3BHLE9BQU9yQixxREFBWUEsQ0FBQ2MsSUFBSSxDQUFDO2dCQUFFTixPQUFPO1lBQW9CLEdBQUc7Z0JBQUVGLFFBQVE7WUFBSTtRQUN6RTtRQUVBLE1BQU1nQixVQUFVLE1BQU0xQiwrREFBYUEsQ0FBQ21CO1FBRXBDLE9BQU8sSUFBSVosU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVrQixTQUFTO1lBQTJCQyxNQUFNRjtRQUFRLElBQ25FO1lBQ0VoQixRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2hEO0lBRUosRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBTyxJQUFJTCxTQUNUQyxLQUFLQyxTQUFTLENBQUM7WUFBRUcsT0FBT0EsTUFBTWUsT0FBTyxJQUFJO1FBQXFCLElBQzlEO1lBQ0VqQixRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2hEO0lBRUo7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL2NoaXZhcy1nYW1lLXByZWRpY3QvYXBwL2FwaS9hZG1pbi9nYW1lcy9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRBZG1pbkdhbWVzLCBnZXRBZG1pbkdhbWVzIH0gZnJvbSBcIkAvbGlicy9hZG1pbkdhbWVzXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjsgLy8g4pyFIEltcG9ydCBOZXh0UmVzcG9uc2VcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBnYW1lcyA9IGF3YWl0IGdldEFkbWluR2FtZXMoKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZ2FtZXMgfSksIHtcbiAgICAgIHN0YXR1czogMjAwLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggZ2FtZXNcIiB9KSwge1xuICAgICAgc3RhdHVzOiA1MDAsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTsgLy8g4pyFIFBhc3MgcmVxIHRvIGdldFNlcnZlclNlc3Npb25cblxuICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyLnJvbGUgIT09IFwiYWRtaW5cIikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkFjY2VzcyBkZW5pZWRcIiB9LCB7IHN0YXR1czogNDAzIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIC8vIOKchSBWYWxpZGF0ZSBpbnB1dCBkYXRhXG4gICAgaWYgKCFib2R5LnRlYW0xIHx8ICFib2R5LnRlYW0yIHx8ICFib2R5LmRhdGUgfHwgIWJvZHkudGVhbTFMb2dvIHx8ICFib2R5LnRlYW0yTG9nbyB8fCAhYm9keS5nYW1lVHlwZSkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiSW52YWxpZCBnYW1lIGRhdGFcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0dhbWUgPSBhd2FpdCBhZGRBZG1pbkdhbWVzKGJvZHkpO1xuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJHYW1lIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLCBnYW1lOiBuZXdHYW1lIH0pLFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IDIwMSxcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gYWRkIGdhbWVcIiB9KSxcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYWRkQWRtaW5HYW1lcyIsImdldEFkbWluR2FtZXMiLCJhdXRoT3B0aW9ucyIsImdldFNlcnZlclNlc3Npb24iLCJOZXh0UmVzcG9uc2UiLCJHRVQiLCJnYW1lcyIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImhlYWRlcnMiLCJlcnJvciIsIlBPU1QiLCJyZXEiLCJzZXNzaW9uIiwidXNlciIsInJvbGUiLCJqc29uIiwiYm9keSIsInRlYW0xIiwidGVhbTIiLCJkYXRlIiwidGVhbTFMb2dvIiwidGVhbTJMb2dvIiwiZ2FtZVR5cGUiLCJuZXdHYW1lIiwibWVzc2FnZSIsImdhbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/games/route.js\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: 'Credentials',\n            credentials: {\n                name: {\n                    label: 'Name',\n                    type: 'text'\n                },\n                email: {\n                    label: 'Email',\n                    type: 'email'\n                },\n                password: {\n                    label: 'Password',\n                    type: 'password'\n                }\n            },\n            async authorize (credentials) {\n                const { name, email, password } = credentials;\n                if (!email) {\n                    throw new Error('Email is required');\n                }\n                const existingUserByEmail = await prisma.user.findUnique({\n                    where: {\n                        email\n                    }\n                });\n                if (password) {\n                    // Admin login flow\n                    if (!existingUserByEmail) {\n                        throw new Error('No admin user found with this email');\n                    }\n                    if (existingUserByEmail.role !== 'admin') {\n                        throw new Error('Invalid role for password login');\n                    }\n                    const isValidPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].compare(password, existingUserByEmail.password);\n                    if (!isValidPassword) {\n                        throw new Error('Invalid password');\n                    }\n                    return {\n                        id: existingUserByEmail.id,\n                        email: existingUserByEmail.email,\n                        name: existingUserByEmail.name,\n                        role: existingUserByEmail.role\n                    };\n                } else {\n                    // Normal user login or registration (no password)\n                    if (!name) {\n                        throw new Error('Name is required for user login');\n                    }\n                    if (existingUserByEmail) {\n                        if (existingUserByEmail.name.toLowerCase() !== name.toLowerCase()) {\n                            throw new Error('Name does not match');\n                        }\n                        return {\n                            id: existingUserByEmail.id,\n                            email: existingUserByEmail.email,\n                            name: existingUserByEmail.name,\n                            role: existingUserByEmail.role\n                        };\n                    }\n                    // No user found: registration flow\n                    const existingUserByName = await prisma.user.findFirst({\n                        where: {\n                            name: {\n                                equals: name,\n                                mode: 'insensitive'\n                            }\n                        }\n                    });\n                    if (existingUserByName) {\n                        throw new Error('Name already exists');\n                    }\n                    const defaultPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hash('default', 10);\n                    const newUser = await prisma.user.create({\n                        data: {\n                            name,\n                            email,\n                            password: defaultPassword,\n                            role: 'user'\n                        }\n                    });\n                    return {\n                        id: newUser.id,\n                        email: newUser.email,\n                        name: newUser.name,\n                        role: newUser.role\n                    };\n                }\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async session ({ session, token }) {\n            session.user.id = token.sub;\n            session.user.role = token.role;\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.sub = user.id;\n                token.role = user.role;\n            }\n            return token;\n        }\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\nconst GET = handler;\nconst POST = handler;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFDcEI7QUFDaEI7QUFFOUIsTUFBTUksU0FBUyxJQUFJRix3REFBWUE7QUFFeEIsTUFBTUcsY0FBYztJQUN6QkMsV0FBVztRQUNUTCwyRUFBbUJBLENBQUM7WUFDbEJNLE1BQU07WUFDTkMsYUFBYTtnQkFDWEQsTUFBTTtvQkFBRUUsT0FBTztvQkFBUUMsTUFBTTtnQkFBTztnQkFDcENDLE9BQU87b0JBQUVGLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDRSxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUcsV0FBVUwsV0FBVztnQkFDekIsTUFBTSxFQUFFRCxJQUFJLEVBQUVJLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdKO2dCQUVsQyxJQUFJLENBQUNHLE9BQU87b0JBQ1YsTUFBTSxJQUFJRyxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNQyxzQkFBc0IsTUFBTVgsT0FBT1ksSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3ZEQyxPQUFPO3dCQUFFUDtvQkFBTTtnQkFDakI7Z0JBRUEsSUFBSUMsVUFBVTtvQkFDWixtQkFBbUI7b0JBQ25CLElBQUksQ0FBQ0cscUJBQXFCO3dCQUN4QixNQUFNLElBQUlELE1BQU07b0JBQ2xCO29CQUNBLElBQUlDLG9CQUFvQkksSUFBSSxLQUFLLFNBQVM7d0JBQ3hDLE1BQU0sSUFBSUwsTUFBTTtvQkFDbEI7b0JBQ0EsTUFBTU0sa0JBQWtCLE1BQU1qQix3REFBYyxDQUFDUyxVQUFVRyxvQkFBb0JILFFBQVE7b0JBQ25GLElBQUksQ0FBQ1EsaUJBQWlCO3dCQUNwQixNQUFNLElBQUlOLE1BQU07b0JBQ2xCO29CQUNBLE9BQU87d0JBQ0xRLElBQUlQLG9CQUFvQk8sRUFBRTt3QkFDMUJYLE9BQU9JLG9CQUFvQkosS0FBSzt3QkFDaENKLE1BQU1RLG9CQUFvQlIsSUFBSTt3QkFDOUJZLE1BQU1KLG9CQUFvQkksSUFBSTtvQkFDaEM7Z0JBQ0YsT0FBTztvQkFDTCxrREFBa0Q7b0JBQ2xELElBQUksQ0FBQ1osTUFBTTt3QkFDVCxNQUFNLElBQUlPLE1BQU07b0JBQ2xCO29CQUVBLElBQUlDLHFCQUFxQjt3QkFDdkIsSUFBSUEsb0JBQW9CUixJQUFJLENBQUNnQixXQUFXLE9BQU9oQixLQUFLZ0IsV0FBVyxJQUFJOzRCQUNqRSxNQUFNLElBQUlULE1BQU07d0JBQ2xCO3dCQUNBLE9BQU87NEJBQ0xRLElBQUlQLG9CQUFvQk8sRUFBRTs0QkFDMUJYLE9BQU9JLG9CQUFvQkosS0FBSzs0QkFDaENKLE1BQU1RLG9CQUFvQlIsSUFBSTs0QkFDOUJZLE1BQU1KLG9CQUFvQkksSUFBSTt3QkFDaEM7b0JBQ0Y7b0JBRUEsbUNBQW1DO29CQUNuQyxNQUFNSyxxQkFBcUIsTUFBTXBCLE9BQU9ZLElBQUksQ0FBQ1MsU0FBUyxDQUFDO3dCQUNyRFAsT0FBTzs0QkFBRVgsTUFBTTtnQ0FBRW1CLFFBQVFuQjtnQ0FBTW9CLE1BQU07NEJBQWM7d0JBQUU7b0JBQ3ZEO29CQUVBLElBQUlILG9CQUFvQjt3QkFDdEIsTUFBTSxJQUFJVixNQUFNO29CQUNsQjtvQkFFQSxNQUFNYyxrQkFBa0IsTUFBTXpCLHFEQUFXLENBQUMsV0FBVztvQkFFckQsTUFBTTJCLFVBQVUsTUFBTTFCLE9BQU9ZLElBQUksQ0FBQ2UsTUFBTSxDQUFDO3dCQUN2Q0MsTUFBTTs0QkFDSnpCOzRCQUNBSTs0QkFDQUMsVUFBVWdCOzRCQUNWVCxNQUFNO3dCQUNSO29CQUNGO29CQUVBLE9BQU87d0JBQ0xHLElBQUlRLFFBQVFSLEVBQUU7d0JBQ2RYLE9BQU9tQixRQUFRbkIsS0FBSzt3QkFDcEJKLE1BQU11QixRQUFRdkIsSUFBSTt3QkFDbEJZLE1BQU1XLFFBQVFYLElBQUk7b0JBQ3BCO2dCQUNGO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RjLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUNuQ0MsV0FBVztRQUNULE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFQyxLQUFLLEVBQUU7WUFDOUJELFFBQVF0QixJQUFJLENBQUNNLEVBQUUsR0FBR2lCLE1BQU1DLEdBQUc7WUFDM0JGLFFBQVF0QixJQUFJLENBQUNHLElBQUksR0FBR29CLE1BQU1wQixJQUFJO1lBQzlCLE9BQU9tQjtRQUNUO1FBQ0EsTUFBTUcsS0FBSSxFQUFFRixLQUFLLEVBQUV2QixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUnVCLE1BQU1DLEdBQUcsR0FBR3hCLEtBQUtNLEVBQUU7Z0JBQ25CaUIsTUFBTXBCLElBQUksR0FBR0gsS0FBS0csSUFBSTtZQUN4QjtZQUNBLE9BQU9vQjtRQUNUO0lBQ0Y7QUFDRixFQUFFO0FBRUYsTUFBTUcsVUFBVTFDLGdEQUFRQSxDQUFDSztBQUVsQixNQUFNc0MsTUFBTUQsUUFBUTtBQUNwQixNQUFNRSxPQUFPRixRQUFRIiwic291cmNlcyI6WyIvVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvY2hpdmFzLWdhbWUtcHJlZGljdC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBuYW1lOiB7IGxhYmVsOiAnTmFtZScsIHR5cGU6ICd0ZXh0JyB9LFxuICAgICAgICBlbWFpbDogeyBsYWJlbDogJ0VtYWlsJywgdHlwZTogJ2VtYWlsJyB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHM7XG5cbiAgICAgICAgaWYgKCFlbWFpbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRW1haWwgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlckJ5RW1haWwgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZTogeyBlbWFpbCB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocGFzc3dvcmQpIHtcbiAgICAgICAgICAvLyBBZG1pbiBsb2dpbiBmbG93XG4gICAgICAgICAgaWYgKCFleGlzdGluZ1VzZXJCeUVtYWlsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGFkbWluIHVzZXIgZm91bmQgd2l0aCB0aGlzIGVtYWlsJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChleGlzdGluZ1VzZXJCeUVtYWlsLnJvbGUgIT09ICdhZG1pbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByb2xlIGZvciBwYXNzd29yZCBsb2dpbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBpc1ZhbGlkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgZXhpc3RpbmdVc2VyQnlFbWFpbC5wYXNzd29yZCk7XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkUGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwYXNzd29yZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGV4aXN0aW5nVXNlckJ5RW1haWwuaWQsXG4gICAgICAgICAgICBlbWFpbDogZXhpc3RpbmdVc2VyQnlFbWFpbC5lbWFpbCxcbiAgICAgICAgICAgIG5hbWU6IGV4aXN0aW5nVXNlckJ5RW1haWwubmFtZSxcbiAgICAgICAgICAgIHJvbGU6IGV4aXN0aW5nVXNlckJ5RW1haWwucm9sZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vcm1hbCB1c2VyIGxvZ2luIG9yIHJlZ2lzdHJhdGlvbiAobm8gcGFzc3dvcmQpXG4gICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgaXMgcmVxdWlyZWQgZm9yIHVzZXIgbG9naW4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdVc2VyQnlFbWFpbCkge1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nVXNlckJ5RW1haWwubmFtZS50b0xvd2VyQ2FzZSgpICE9PSBuYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGRvZXMgbm90IG1hdGNoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBpZDogZXhpc3RpbmdVc2VyQnlFbWFpbC5pZCxcbiAgICAgICAgICAgICAgZW1haWw6IGV4aXN0aW5nVXNlckJ5RW1haWwuZW1haWwsXG4gICAgICAgICAgICAgIG5hbWU6IGV4aXN0aW5nVXNlckJ5RW1haWwubmFtZSxcbiAgICAgICAgICAgICAgcm9sZTogZXhpc3RpbmdVc2VyQnlFbWFpbC5yb2xlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBObyB1c2VyIGZvdW5kOiByZWdpc3RyYXRpb24gZmxvd1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlckJ5TmFtZSA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgICAgICB3aGVyZTogeyBuYW1lOiB7IGVxdWFsczogbmFtZSwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdVc2VyQnlOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWZhdWx0UGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCgnZGVmYXVsdCcsIDEwKTtcblxuICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IGRlZmF1bHRQYXNzd29yZCxcbiAgICAgICAgICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbmV3VXNlci5pZCxcbiAgICAgICAgICAgIGVtYWlsOiBuZXdVc2VyLmVtYWlsLFxuICAgICAgICAgICAgbmFtZTogbmV3VXNlci5uYW1lLFxuICAgICAgICAgICAgcm9sZTogbmV3VXNlci5yb2xlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uc3ViO1xuICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlO1xuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5zdWIgPSB1c2VyLmlkO1xuICAgICAgICB0b2tlbi5yb2xlID0gdXNlci5yb2xlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgY29uc3QgR0VUID0gaGFuZGxlcjtcbmV4cG9ydCBjb25zdCBQT1NUID0gaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJQcmlzbWFDbGllbnQiLCJiY3J5cHQiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImxhYmVsIiwidHlwZSIsImVtYWlsIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJFcnJvciIsImV4aXN0aW5nVXNlckJ5RW1haWwiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwicm9sZSIsImlzVmFsaWRQYXNzd29yZCIsImNvbXBhcmUiLCJpZCIsInRvTG93ZXJDYXNlIiwiZXhpc3RpbmdVc2VyQnlOYW1lIiwiZmluZEZpcnN0IiwiZXF1YWxzIiwibW9kZSIsImRlZmF1bHRQYXNzd29yZCIsImhhc2giLCJuZXdVc2VyIiwiY3JlYXRlIiwiZGF0YSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidG9rZW4iLCJzdWIiLCJqd3QiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./libs/adminGames.js":
/*!****************************!*\
  !*** ./libs/adminGames.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAdminGames: () => (/* binding */ addAdminGames),\n/* harmony export */   clearAdminGames: () => (/* binding */ clearAdminGames),\n/* harmony export */   getAdminGames: () => (/* binding */ getAdminGames)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function getAdminGames() {\n    return await prisma.game.findMany({\n        where: {\n            isArchived: false\n        }\n    });\n}\nasync function addAdminGames(game) {\n    const { team1, team2, date, team1Logo, team2Logo, gameType } = game;\n    if (!team1 || !team2 || !date || !team1Logo || !team2Logo || !gameType) {\n        throw new Error(\"All fields (team1, team2, date, team1Logo, team2Logo, gameType) are required.\");\n    }\n    await prisma.game.updateMany({\n        where: {\n            isArchived: false\n        },\n        data: {\n            isArchived: true\n        }\n    });\n    return await prisma.game.create({\n        data: {\n            team1,\n            team2,\n            date: new Date(date),\n            team1Logo,\n            team2Logo,\n            gameType,\n            isArchived: false\n        }\n    });\n}\nasync function clearAdminGames() {\n    return await prisma.game.deleteMany();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL2FkbWluR2FtZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsU0FBUyxJQUFJRCx3REFBWUE7QUFFeEIsZUFBZUU7SUFDbEIsT0FBTyxNQUFNRCxPQUFPRSxJQUFJLENBQUNDLFFBQVEsQ0FBQztRQUM5QkMsT0FBTztZQUFDQyxZQUFZO1FBQUs7SUFDN0I7QUFDSjtBQUVPLGVBQWVDLGNBQWNKLElBQUk7SUFDcEMsTUFBTSxFQUFFSyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFLEdBQUdWO0lBRS9ELElBQUksQ0FBQ0ssU0FBUyxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDQyxhQUFhLENBQUNDLFVBQVU7UUFDcEUsTUFBTSxJQUFJQyxNQUFNO0lBQ3BCO0lBRUEsTUFBTWIsT0FBT0UsSUFBSSxDQUFDWSxVQUFVLENBQUM7UUFDekJWLE9BQU87WUFBQ0MsWUFBWTtRQUFLO1FBQ3pCVSxNQUFNO1lBQUNWLFlBQVk7UUFBSTtJQUMzQjtJQUVBLE9BQU8sTUFBTUwsT0FBT0UsSUFBSSxDQUFDYyxNQUFNLENBQUM7UUFDNUJELE1BQU07WUFBRVI7WUFBT0M7WUFBT0MsTUFBTSxJQUFJUSxLQUFLUjtZQUFPQztZQUFXQztZQUFXQztZQUFVUCxZQUFZO1FBQU07SUFDbEc7QUFDSjtBQUVPLGVBQWVhO0lBQ2xCLE9BQU8sTUFBTWxCLE9BQU9FLElBQUksQ0FBQ2lCLFVBQVU7QUFDdkMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9Qcm9qZWN0cy9jaGl2YXMtZ2FtZS1wcmVkaWN0L2xpYnMvYWRtaW5HYW1lcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWRtaW5HYW1lcygpIHtcbiAgICByZXR1cm4gYXdhaXQgcHJpc21hLmdhbWUuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZToge2lzQXJjaGl2ZWQ6IGZhbHNlfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEFkbWluR2FtZXMoZ2FtZSkge1xuICAgIGNvbnN0IHsgdGVhbTEsIHRlYW0yLCBkYXRlLCB0ZWFtMUxvZ28sIHRlYW0yTG9nbywgZ2FtZVR5cGUgfSA9IGdhbWU7XG5cbiAgICBpZiAoIXRlYW0xIHx8ICF0ZWFtMiB8fCAhZGF0ZSB8fCAhdGVhbTFMb2dvIHx8ICF0ZWFtMkxvZ28gfHwgIWdhbWVUeXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFsbCBmaWVsZHMgKHRlYW0xLCB0ZWFtMiwgZGF0ZSwgdGVhbTFMb2dvLCB0ZWFtMkxvZ28sIGdhbWVUeXBlKSBhcmUgcmVxdWlyZWQuXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5nYW1lLnVwZGF0ZU1hbnkoe1xuICAgICAgICB3aGVyZToge2lzQXJjaGl2ZWQ6IGZhbHNlfSxcbiAgICAgICAgZGF0YToge2lzQXJjaGl2ZWQ6IHRydWV9XG4gICAgfSlcblxuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZ2FtZS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7IHRlYW0xLCB0ZWFtMiwgZGF0ZTogbmV3IERhdGUoZGF0ZSksIHRlYW0xTG9nbywgdGVhbTJMb2dvLCBnYW1lVHlwZSwgaXNBcmNoaXZlZDogZmFsc2UgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyQWRtaW5HYW1lcygpIHtcbiAgICByZXR1cm4gYXdhaXQgcHJpc21hLmdhbWUuZGVsZXRlTWFueSgpO1xufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnZXRBZG1pbkdhbWVzIiwiZ2FtZSIsImZpbmRNYW55Iiwid2hlcmUiLCJpc0FyY2hpdmVkIiwiYWRkQWRtaW5HYW1lcyIsInRlYW0xIiwidGVhbTIiLCJkYXRlIiwidGVhbTFMb2dvIiwidGVhbTJMb2dvIiwiZ2FtZVR5cGUiLCJFcnJvciIsInVwZGF0ZU1hbnkiLCJkYXRhIiwiY3JlYXRlIiwiRGF0ZSIsImNsZWFyQWRtaW5HYW1lcyIsImRlbGV0ZU1hbnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./libs/adminGames.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fgames%2Froute&page=%2Fapi%2Fadmin%2Fgames%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fgames%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fgames%2Froute&page=%2Fapi%2Fadmin%2Fgames%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fgames%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mac_Desktop_Projects_chivas_game_predict_app_api_admin_games_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/games/route.js */ \"(rsc)/./app/api/admin/games/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/games/route\",\n        pathname: \"/api/admin/games\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/games/route\"\n    },\n    resolvedPagePath: \"/Users/mac/Desktop/Projects/chivas-game-predict/app/api/admin/games/route.js\",\n    nextConfigOutput,\n    userland: _Users_mac_Desktop_Projects_chivas_game_predict_app_api_admin_games_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRmdhbWVzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRmdhbWVzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZnYW1lcyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1hYyUyRkRlc2t0b3AlMkZQcm9qZWN0cyUyRmNoaXZhcy1nYW1lLXByZWRpY3QlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGbWFjJTJGRGVza3RvcCUyRlByb2plY3RzJTJGY2hpdmFzLWdhbWUtcHJlZGljdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDNEI7QUFDekc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tYWMvRGVza3RvcC9Qcm9qZWN0cy9jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvYWRtaW4vZ2FtZXMvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkbWluL2dhbWVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vZ2FtZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkbWluL2dhbWVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL2NoaXZhcy1nYW1lLXByZWRpY3QvYXBwL2FwaS9hZG1pbi9nYW1lcy9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fgames%2Froute&page=%2Fapi%2Fadmin%2Fgames%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fgames%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fgames%2Froute&page=%2Fapi%2Fadmin%2Fgames%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fgames%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();