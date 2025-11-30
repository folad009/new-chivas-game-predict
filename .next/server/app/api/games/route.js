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
exports.id = "app/api/games/route";
exports.ids = ["app/api/games/route"];
exports.modules = {

/***/ "(rsc)/./app/api/games/route.js":
/*!********************************!*\
  !*** ./app/api/games/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _libs_adminGames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/adminGames */ \"(rsc)/./libs/adminGames.js\");\n\nasync function GET() {\n    const games = await (0,_libs_adminGames__WEBPACK_IMPORTED_MODULE_0__.getAdminGames)();\n    return new Response(JSON.stringify({\n        games\n    }), {\n        status: 200,\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n}\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const newGame = await (0,_libs_adminGames__WEBPACK_IMPORTED_MODULE_0__.addAdminGames)(body);\n        return new Response(JSON.stringify({\n            message: \"Game added successfully\",\n            game: newGame\n        }), {\n            status: 201,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            error: error.message || \"Failed to add game\"\n        }), {\n            status: 400,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dhbWVzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRTtBQUUxRCxlQUFlRTtJQUNwQixNQUFNQyxRQUFRLE1BQU1GLCtEQUFhQTtJQUNqQyxPQUFPLElBQUlHLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztRQUFDSDtJQUFLLElBQUk7UUFDM0NJLFFBQVE7UUFDUkMsU0FBUztZQUFDLGdCQUFnQjtRQUFrQjtJQUM5QztBQUNGO0FBRU8sZUFBZUMsS0FBS0MsR0FBRztJQUM1QixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1FBQzNCLE1BQU1DLFVBQVUsTUFBTWIsK0RBQWFBLENBQUNXO1FBRXBDLE9BQU8sSUFBSVAsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUNRLFNBQVM7WUFBMkJDLE1BQU1GO1FBQU8sSUFBSTtZQUN2Rk4sUUFBUTtZQUNSQyxTQUFTO2dCQUFDLGdCQUFnQjtZQUFrQjtRQUM5QztJQUNGLEVBQUUsT0FBT1EsT0FBTztRQUNkLE9BQU8sSUFBSVosU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUNVLE9BQU9BLE1BQU1GLE9BQU8sSUFBSTtRQUFvQixJQUM1RDtZQUNFUCxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUMsZ0JBQWdCO1lBQWtCO1FBQzlDO0lBRUo7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL25ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvZ2FtZXMvcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkQWRtaW5HYW1lcywgZ2V0QWRtaW5HYW1lcyB9IGZyb20gXCJAL2xpYnMvYWRtaW5HYW1lc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICBjb25zdCBnYW1lcyA9IGF3YWl0IGdldEFkbWluR2FtZXMoKTtcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7Z2FtZXN9KSwge1xuICAgIHN0YXR1czogMjAwLFxuICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuICAgIGNvbnN0IG5ld0dhbWUgPSBhd2FpdCBhZGRBZG1pbkdhbWVzKGJvZHkpO1xuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7bWVzc2FnZTogXCJHYW1lIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLCBnYW1lOiBuZXdHYW1lfSksIHtcbiAgICAgIHN0YXR1czogMjAxLFxuICAgICAgaGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifSxcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7ZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gYWRkIGdhbWVcIn0pLFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifSxcbiAgICAgIH1cbiAgICApXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhZGRBZG1pbkdhbWVzIiwiZ2V0QWRtaW5HYW1lcyIsIkdFVCIsImdhbWVzIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiaGVhZGVycyIsIlBPU1QiLCJyZXEiLCJib2R5IiwianNvbiIsIm5ld0dhbWUiLCJtZXNzYWdlIiwiZ2FtZSIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/games/route.js\n");

/***/ }),

/***/ "(rsc)/./libs/adminGames.js":
/*!****************************!*\
  !*** ./libs/adminGames.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAdminGames: () => (/* binding */ addAdminGames),\n/* harmony export */   clearAdminGames: () => (/* binding */ clearAdminGames),\n/* harmony export */   getAdminGames: () => (/* binding */ getAdminGames)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function getAdminGames() {\n    return await prisma.game.findMany({\n        where: {\n            isArchived: false\n        }\n    });\n}\nasync function addAdminGames(game) {\n    const { team1, team2, date, team1Logo, team2Logo, gameType } = game;\n    if (!team1 || !team2 || !date || !team1Logo || !team2Logo || !gameType) {\n        throw new Error(\"All fields (team1, team2, date, team1Logo, team2Logo, gameType) are required.\");\n    }\n    await prisma.game.updateMany({\n        where: {\n            isArchived: false\n        },\n        data: {\n            isArchived: true\n        }\n    });\n    return await prisma.game.create({\n        data: {\n            team1,\n            team2,\n            date: new Date(date),\n            team1Logo,\n            team2Logo,\n            gameType,\n            isArchived: false\n        }\n    });\n}\nasync function clearAdminGames() {\n    return await prisma.game.deleteMany();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL2FkbWluR2FtZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsU0FBUyxJQUFJRCx3REFBWUE7QUFFeEIsZUFBZUU7SUFDbEIsT0FBTyxNQUFNRCxPQUFPRSxJQUFJLENBQUNDLFFBQVEsQ0FBQztRQUM5QkMsT0FBTztZQUFDQyxZQUFZO1FBQUs7SUFDN0I7QUFDSjtBQUVPLGVBQWVDLGNBQWNKLElBQUk7SUFDcEMsTUFBTSxFQUFFSyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFLEdBQUdWO0lBRS9ELElBQUksQ0FBQ0ssU0FBUyxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDQyxhQUFhLENBQUNDLFVBQVU7UUFDcEUsTUFBTSxJQUFJQyxNQUFNO0lBQ3BCO0lBRUEsTUFBTWIsT0FBT0UsSUFBSSxDQUFDWSxVQUFVLENBQUM7UUFDekJWLE9BQU87WUFBQ0MsWUFBWTtRQUFLO1FBQ3pCVSxNQUFNO1lBQUNWLFlBQVk7UUFBSTtJQUMzQjtJQUVBLE9BQU8sTUFBTUwsT0FBT0UsSUFBSSxDQUFDYyxNQUFNLENBQUM7UUFDNUJELE1BQU07WUFBRVI7WUFBT0M7WUFBT0MsTUFBTSxJQUFJUSxLQUFLUjtZQUFPQztZQUFXQztZQUFXQztZQUFVUCxZQUFZO1FBQU07SUFDbEc7QUFDSjtBQUVPLGVBQWVhO0lBQ2xCLE9BQU8sTUFBTWxCLE9BQU9FLElBQUksQ0FBQ2lCLFVBQVU7QUFDdkMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9Qcm9qZWN0cy9uZXctY2hpdmFzLWdhbWUtcHJlZGljdC9saWJzL2FkbWluR2FtZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFkbWluR2FtZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS5nYW1lLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHtpc0FyY2hpdmVkOiBmYWxzZX0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRBZG1pbkdhbWVzKGdhbWUpIHtcbiAgICBjb25zdCB7IHRlYW0xLCB0ZWFtMiwgZGF0ZSwgdGVhbTFMb2dvLCB0ZWFtMkxvZ28sIGdhbWVUeXBlIH0gPSBnYW1lO1xuXG4gICAgaWYgKCF0ZWFtMSB8fCAhdGVhbTIgfHwgIWRhdGUgfHwgIXRlYW0xTG9nbyB8fCAhdGVhbTJMb2dvIHx8ICFnYW1lVHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbGwgZmllbGRzICh0ZWFtMSwgdGVhbTIsIGRhdGUsIHRlYW0xTG9nbywgdGVhbTJMb2dvLCBnYW1lVHlwZSkgYXJlIHJlcXVpcmVkLlwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuZ2FtZS51cGRhdGVNYW55KHtcbiAgICAgICAgd2hlcmU6IHtpc0FyY2hpdmVkOiBmYWxzZX0sXG4gICAgICAgIGRhdGE6IHtpc0FyY2hpdmVkOiB0cnVlfVxuICAgIH0pXG5cbiAgICByZXR1cm4gYXdhaXQgcHJpc21hLmdhbWUuY3JlYXRlKHtcbiAgICAgICAgZGF0YTogeyB0ZWFtMSwgdGVhbTIsIGRhdGU6IG5ldyBEYXRlKGRhdGUpLCB0ZWFtMUxvZ28sIHRlYW0yTG9nbywgZ2FtZVR5cGUsIGlzQXJjaGl2ZWQ6IGZhbHNlIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhckFkbWluR2FtZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS5nYW1lLmRlbGV0ZU1hbnkoKTtcbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2V0QWRtaW5HYW1lcyIsImdhbWUiLCJmaW5kTWFueSIsIndoZXJlIiwiaXNBcmNoaXZlZCIsImFkZEFkbWluR2FtZXMiLCJ0ZWFtMSIsInRlYW0yIiwiZGF0ZSIsInRlYW0xTG9nbyIsInRlYW0yTG9nbyIsImdhbWVUeXBlIiwiRXJyb3IiLCJ1cGRhdGVNYW55IiwiZGF0YSIsImNyZWF0ZSIsIkRhdGUiLCJjbGVhckFkbWluR2FtZXMiLCJkZWxldGVNYW55Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./libs/adminGames.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgames%2Froute&page=%2Fapi%2Fgames%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgames%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgames%2Froute&page=%2Fapi%2Fgames%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgames%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mac_Desktop_Projects_new_chivas_game_predict_app_api_games_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/games/route.js */ \"(rsc)/./app/api/games/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/games/route\",\n        pathname: \"/api/games\",\n        filename: \"route\",\n        bundlePath: \"app/api/games/route\"\n    },\n    resolvedPagePath: \"/Users/mac/Desktop/Projects/new-chivas-game-predict/app/api/games/route.js\",\n    nextConfigOutput,\n    userland: _Users_mac_Desktop_Projects_new_chivas_game_predict_app_api_games_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjBfcmVhY3QtZG9tQDE5LjIuMF9yZWFjdEAxOS4yLjBfX3JlYWN0QDE5LjIuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnYW1lcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2FtZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnYW1lcyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1hYyUyRkRlc2t0b3AlMkZQcm9qZWN0cyUyRm5ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1hYyUyRkRlc2t0b3AlMkZQcm9qZWN0cyUyRm5ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMwQjtBQUN2RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL25ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvZ2FtZXMvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dhbWVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ2FtZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dhbWVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL25ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvZ2FtZXMvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgames%2Froute&page=%2Fapi%2Fgames%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgames%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgames%2Froute&page=%2Fapi%2Fgames%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgames%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();