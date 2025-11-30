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
exports.id = "app/api/predictions/route";
exports.ids = ["app/api/predictions/route"];
exports.modules = {

/***/ "(rsc)/./app/api/predictions/route.js":
/*!**************************************!*\
  !*** ./app/api/predictions/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/api/server.js\");\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        console.log(\"Received body:\", body);\n        const { gameId, predictionType, winningTeam, losingTeam, goalDifference, userId } = body;\n        if (!gameId || !predictionType || goalDifference === undefined || !userId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error: \"Missing fields\"\n            }, {\n                status: 400\n            });\n        }\n        const userExists = await prisma.user.findUnique({\n            where: {\n                id: userId\n            }\n        });\n        if (!userExists) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        // Validate predictionType\n        const validPredictionTypes = [\n            'win',\n            'lose',\n            'draw'\n        ];\n        if (!validPredictionTypes.includes(predictionType)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error: \"Invalid prediction type\"\n            }, {\n                status: 400\n            });\n        }\n        // Handle missing team information for win/lose predictions\n        let predictedTeam = null;\n        let predictedLosingTeam = null;\n        if (predictionType === 'win') {\n            if (!winningTeam) {\n                return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                    error: \"Predicted winning team is required for win predictions\"\n                }, {\n                    status: 400\n                });\n            }\n            predictedTeam = winningTeam;\n        } else if (predictionType === 'lose') {\n            if (!losingTeam) {\n                return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                    error: \"Predicted losing team is required for lose predictions\"\n                }, {\n                    status: 400\n                });\n            }\n            predictedTeam = winningTeam;\n            predictedLosingTeam = losingTeam;\n        } else if (predictionType === 'draw') {\n            predictedTeam = null;\n            predictedLosingTeam = null;\n        }\n        const prediction = await prisma.prediction.create({\n            data: {\n                gameId,\n                predictionType,\n                predictedTeam,\n                losingTeam: predictedLosingTeam,\n                goalDifference: parseInt(goalDifference, 10),\n                userId\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Prediction saved!\",\n            prediction\n        });\n    } catch (error) {\n        console.error(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: \"Server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ByZWRpY3Rpb25zL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFDSDtBQUUzQyxNQUFNRSxTQUFTLElBQUlGLHdEQUFZQTtBQUV4QixlQUFlRyxLQUFLQyxHQUFHO0lBQzVCLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ELElBQUlFLElBQUk7UUFDM0JDLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JIO1FBRTlCLE1BQU0sRUFBRUksTUFBTSxFQUFFQyxjQUFjLEVBQUVDLFdBQVcsRUFBRUMsVUFBVSxFQUFFQyxjQUFjLEVBQUVDLE1BQU0sRUFBRSxHQUFHVDtRQUVwRixJQUFJLENBQUNJLFVBQVUsQ0FBQ0Msa0JBQWtCRyxtQkFBbUJFLGFBQWEsQ0FBQ0QsUUFBUTtZQUN6RSxPQUFPYixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO2dCQUFFVSxPQUFPO1lBQWlCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUN0RTtRQUVBLE1BQU1DLGFBQWEsTUFBTWhCLE9BQU9pQixJQUFJLENBQUNDLFVBQVUsQ0FBQztZQUM5Q0MsT0FBTztnQkFBRUMsSUFBSVI7WUFBTztRQUN0QjtRQUVBLElBQUksQ0FBQ0ksWUFBWTtZQUNmLE9BQU9qQixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO2dCQUFFVSxPQUFPO1lBQWlCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUN0RTtRQUVBLDBCQUEwQjtRQUMxQixNQUFNTSx1QkFBdUI7WUFBQztZQUFPO1lBQVE7U0FBTztRQUNwRCxJQUFJLENBQUNBLHFCQUFxQkMsUUFBUSxDQUFDZCxpQkFBaUI7WUFDbEQsT0FBT1QscURBQVlBLENBQUNLLElBQUksQ0FBQztnQkFBRVUsT0FBTztZQUEwQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDL0U7UUFFQSwyREFBMkQ7UUFDM0QsSUFBSVEsZ0JBQWdCO1FBQ3BCLElBQUlDLHNCQUFzQjtRQUUxQixJQUFJaEIsbUJBQW1CLE9BQU87WUFDNUIsSUFBSSxDQUFDQyxhQUFhO2dCQUNoQixPQUFPVixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO29CQUFFVSxPQUFPO2dCQUF5RCxHQUFHO29CQUFFQyxRQUFRO2dCQUFJO1lBQzlHO1lBQ0FRLGdCQUFnQmQ7UUFDbEIsT0FBTyxJQUFJRCxtQkFBbUIsUUFBUTtZQUNwQyxJQUFJLENBQUNFLFlBQVk7Z0JBQ2YsT0FBT1gscURBQVlBLENBQUNLLElBQUksQ0FBQztvQkFBRVUsT0FBTztnQkFBeUQsR0FBRztvQkFBRUMsUUFBUTtnQkFBSTtZQUM5RztZQUNBUSxnQkFBZ0JkO1lBQ2hCZSxzQkFBc0JkO1FBQ3hCLE9BQU8sSUFBSUYsbUJBQW1CLFFBQVE7WUFDcENlLGdCQUFnQjtZQUNoQkMsc0JBQXNCO1FBQ3hCO1FBRUEsTUFBTUMsYUFBYSxNQUFNekIsT0FBT3lCLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDO1lBQ2hEQyxNQUFNO2dCQUNKcEI7Z0JBQ0FDO2dCQUNBZTtnQkFDQWIsWUFBWWM7Z0JBQ1piLGdCQUFnQmlCLFNBQVNqQixnQkFBZ0I7Z0JBQ3pDQztZQUNGO1FBQ0Y7UUFFQSxPQUFPYixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQUV5QixTQUFTO1lBQXFCSjtRQUFXO0lBQ3RFLEVBQUUsT0FBT1gsT0FBTztRQUNkVCxRQUFRUyxLQUFLLENBQUNBO1FBQ2QsT0FBT2YscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUFFVSxPQUFPO1FBQWUsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDcEU7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL25ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvcHJlZGljdGlvbnMvcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGJvZHk6XCIsIGJvZHkpO1xuXG4gICAgY29uc3QgeyBnYW1lSWQsIHByZWRpY3Rpb25UeXBlLCB3aW5uaW5nVGVhbSwgbG9zaW5nVGVhbSwgZ29hbERpZmZlcmVuY2UsIHVzZXJJZCB9ID0gYm9keTtcblxuICAgIGlmICghZ2FtZUlkIHx8ICFwcmVkaWN0aW9uVHlwZSB8fCBnb2FsRGlmZmVyZW5jZSA9PT0gdW5kZWZpbmVkIHx8ICF1c2VySWQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIk1pc3NpbmcgZmllbGRzXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyRXhpc3RzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXVzZXJFeGlzdHMpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVzZXIgbm90IGZvdW5kXCIgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZSBwcmVkaWN0aW9uVHlwZVxuICAgIGNvbnN0IHZhbGlkUHJlZGljdGlvblR5cGVzID0gWyd3aW4nLCAnbG9zZScsICdkcmF3J107XG4gICAgaWYgKCF2YWxpZFByZWRpY3Rpb25UeXBlcy5pbmNsdWRlcyhwcmVkaWN0aW9uVHlwZSkpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludmFsaWQgcHJlZGljdGlvbiB0eXBlXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgbWlzc2luZyB0ZWFtIGluZm9ybWF0aW9uIGZvciB3aW4vbG9zZSBwcmVkaWN0aW9uc1xuICAgIGxldCBwcmVkaWN0ZWRUZWFtID0gbnVsbDtcbiAgICBsZXQgcHJlZGljdGVkTG9zaW5nVGVhbSA9IG51bGw7XG5cbiAgICBpZiAocHJlZGljdGlvblR5cGUgPT09ICd3aW4nKSB7XG4gICAgICBpZiAoIXdpbm5pbmdUZWFtKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlByZWRpY3RlZCB3aW5uaW5nIHRlYW0gaXMgcmVxdWlyZWQgZm9yIHdpbiBwcmVkaWN0aW9uc1wiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgICB9XG4gICAgICBwcmVkaWN0ZWRUZWFtID0gd2lubmluZ1RlYW07XG4gICAgfSBlbHNlIGlmIChwcmVkaWN0aW9uVHlwZSA9PT0gJ2xvc2UnKSB7XG4gICAgICBpZiAoIWxvc2luZ1RlYW0pIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiUHJlZGljdGVkIGxvc2luZyB0ZWFtIGlzIHJlcXVpcmVkIGZvciBsb3NlIHByZWRpY3Rpb25zXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICAgIH1cbiAgICAgIHByZWRpY3RlZFRlYW0gPSB3aW5uaW5nVGVhbTtcbiAgICAgIHByZWRpY3RlZExvc2luZ1RlYW0gPSBsb3NpbmdUZWFtO1xuICAgIH0gZWxzZSBpZiAocHJlZGljdGlvblR5cGUgPT09ICdkcmF3Jykge1xuICAgICAgcHJlZGljdGVkVGVhbSA9IG51bGw7XG4gICAgICBwcmVkaWN0ZWRMb3NpbmdUZWFtID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBwcmVkaWN0aW9uID0gYXdhaXQgcHJpc21hLnByZWRpY3Rpb24uY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZ2FtZUlkLFxuICAgICAgICBwcmVkaWN0aW9uVHlwZSxcbiAgICAgICAgcHJlZGljdGVkVGVhbSwgLy8gU3RvcmUgdGhlIHByZWRpY3RlZCB3aW5uaW5nIG9yIGxvc2luZyB0ZWFtXG4gICAgICAgIGxvc2luZ1RlYW06IHByZWRpY3RlZExvc2luZ1RlYW0sIC8vIFN0b3JlIHRoZSBwcmVkaWN0ZWQgbG9zaW5nIHRlYW0gKGZvciBcImxvc2VcIiB0eXBlIHByZWRpY3Rpb25zKVxuICAgICAgICBnb2FsRGlmZmVyZW5jZTogcGFyc2VJbnQoZ29hbERpZmZlcmVuY2UsIDEwKSxcbiAgICAgICAgdXNlcklkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiUHJlZGljdGlvbiBzYXZlZCFcIiwgcHJlZGljdGlvbiB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJTZXJ2ZXIgZXJyb3JcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImdhbWVJZCIsInByZWRpY3Rpb25UeXBlIiwid2lubmluZ1RlYW0iLCJsb3NpbmdUZWFtIiwiZ29hbERpZmZlcmVuY2UiLCJ1c2VySWQiLCJ1bmRlZmluZWQiLCJlcnJvciIsInN0YXR1cyIsInVzZXJFeGlzdHMiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJ2YWxpZFByZWRpY3Rpb25UeXBlcyIsImluY2x1ZGVzIiwicHJlZGljdGVkVGVhbSIsInByZWRpY3RlZExvc2luZ1RlYW0iLCJwcmVkaWN0aW9uIiwiY3JlYXRlIiwiZGF0YSIsInBhcnNlSW50IiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/predictions/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpredictions%2Froute&page=%2Fapi%2Fpredictions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredictions%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpredictions%2Froute&page=%2Fapi%2Fpredictions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredictions%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mac_Desktop_Projects_new_chivas_game_predict_app_api_predictions_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/predictions/route.js */ \"(rsc)/./app/api/predictions/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/predictions/route\",\n        pathname: \"/api/predictions\",\n        filename: \"route\",\n        bundlePath: \"app/api/predictions/route\"\n    },\n    resolvedPagePath: \"/Users/mac/Desktop/Projects/new-chivas-game-predict/app/api/predictions/route.js\",\n    nextConfigOutput,\n    userland: _Users_mac_Desktop_Projects_new_chivas_game_predict_app_api_predictions_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjBfcmVhY3QtZG9tQDE5LjIuMF9yZWFjdEAxOS4yLjBfX3JlYWN0QDE5LjIuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcmVkaWN0aW9ucyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJlZGljdGlvbnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcmVkaWN0aW9ucyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1hYyUyRkRlc2t0b3AlMkZQcm9qZWN0cyUyRm5ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1hYyUyRkRlc2t0b3AlMkZQcm9qZWN0cyUyRm5ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNnQztBQUM3RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL25ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvcHJlZGljdGlvbnMvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3ByZWRpY3Rpb25zL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJlZGljdGlvbnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3ByZWRpY3Rpb25zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL25ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvcHJlZGljdGlvbnMvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpredictions%2Froute&page=%2Fapi%2Fpredictions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredictions%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpredictions%2Froute&page=%2Fapi%2Fpredictions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredictions%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();