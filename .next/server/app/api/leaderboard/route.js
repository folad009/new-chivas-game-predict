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
exports.id = "app/api/leaderboard/route";
exports.ids = ["app/api/leaderboard/route"];
exports.modules = {

/***/ "(rsc)/./app/api/leaderboard/route.js":
/*!**************************************!*\
  !*** ./app/api/leaderboard/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.js\");\n\n\nasync function GET(req) {\n    try {\n        // Correct way to extract 'view' from query stringss\n        const { searchParams } = new URL(req.url);\n        const view = searchParams.get(\"view\") || \"full-time\"; // Default to \"full-time\"\n        // Fetch all predictions with user data\n        const predictions = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prediction.findMany({\n            include: {\n                user: {\n                    select: {\n                        id: true,\n                        name: true\n                    }\n                }\n            }\n        });\n        if (!predictions.length) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                leaderboard: []\n            });\n        }\n        // Helper to format time\n        const formatTime = (date)=>{\n            const hours = String(date.getHours()).padStart(2, \"0\");\n            const minutes = String(date.getMinutes()).padStart(2, \"0\");\n            const seconds = String(date.getSeconds()).padStart(2, \"0\");\n            return `${hours}:${minutes}:${seconds}`;\n        };\n        // Sort manually by points\n        const sortedPredictions = predictions.sort((a, b)=>{\n            const aPoints = view === \"half-time\" ? a.halfTimePoints || 0 : a.fullTimePoints || 0;\n            const bPoints = view === \"half-time\" ? b.halfTimePoints || 0 : b.fullTimePoints || 0;\n            if (bPoints === aPoints) {\n                return new Date(a.createdAt) - new Date(b.createdAt);\n            }\n            return bPoints - aPoints;\n        });\n        // Map with ranks\n        const leaderboard = sortedPredictions.map(({ user, halfTimePoints, fullTimePoints, createdAt }, index)=>({\n                rank: index + 1,\n                userId: user.id,\n                userName: user.name,\n                halfTimePoints: halfTimePoints || 0,\n                fullTimePoints: fullTimePoints || 0,\n                predictionTime: formatTime(new Date(createdAt))\n            }));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            leaderboard\n        });\n    } catch (error) {\n        console.error(\"Error fetching leaderboard data:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch leaderboard data\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xlYWRlcmJvYXJkL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNUO0FBRTNCLGVBQWVFLElBQUlDLEdBQUc7SUFDM0IsSUFBSTtRQUNGLG9EQUFvRDtRQUNwRCxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLElBQUlHLEdBQUc7UUFDeEMsTUFBTUMsT0FBT0gsYUFBYUksR0FBRyxDQUFDLFdBQVcsYUFBYSx5QkFBeUI7UUFFL0UsdUNBQXVDO1FBQ3ZDLE1BQU1DLGNBQWMsTUFBTVIsbURBQU1BLENBQUNTLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDO1lBQ25EQyxTQUFTO2dCQUNQQyxNQUFNO29CQUNKQyxRQUFRO3dCQUFFQyxJQUFJO3dCQUFNQyxNQUFNO29CQUFLO2dCQUNqQztZQUNGO1FBQ0Y7UUFFQSxJQUFJLENBQUNQLFlBQVlRLE1BQU0sRUFBRTtZQUN2QixPQUFPakIscURBQVlBLENBQUNrQixJQUFJLENBQUM7Z0JBQUVDLGFBQWEsRUFBRTtZQUFDO1FBQzdDO1FBRUEsd0JBQXdCO1FBQ3hCLE1BQU1DLGFBQWEsQ0FBQ0M7WUFDbEIsTUFBTUMsUUFBUUMsT0FBT0YsS0FBS0csUUFBUSxJQUFJQyxRQUFRLENBQUMsR0FBRztZQUNsRCxNQUFNQyxVQUFVSCxPQUFPRixLQUFLTSxVQUFVLElBQUlGLFFBQVEsQ0FBQyxHQUFHO1lBQ3RELE1BQU1HLFVBQVVMLE9BQU9GLEtBQUtRLFVBQVUsSUFBSUosUUFBUSxDQUFDLEdBQUc7WUFDdEQsT0FBTyxHQUFHSCxNQUFNLENBQUMsRUFBRUksUUFBUSxDQUFDLEVBQUVFLFNBQVM7UUFDekM7UUFFQSwwQkFBMEI7UUFDMUIsTUFBTUUsb0JBQW9CckIsWUFBWXNCLElBQUksQ0FBQyxDQUFDQyxHQUFHQztZQUM3QyxNQUFNQyxVQUFVM0IsU0FBUyxjQUFjeUIsRUFBRUcsY0FBYyxJQUFJLElBQUlILEVBQUVJLGNBQWMsSUFBSTtZQUNuRixNQUFNQyxVQUFVOUIsU0FBUyxjQUFjMEIsRUFBRUUsY0FBYyxJQUFJLElBQUlGLEVBQUVHLGNBQWMsSUFBSTtZQUVuRixJQUFJQyxZQUFZSCxTQUFTO2dCQUN2QixPQUFPLElBQUlJLEtBQUtOLEVBQUVPLFNBQVMsSUFBSSxJQUFJRCxLQUFLTCxFQUFFTSxTQUFTO1lBQ3JEO1lBRUEsT0FBT0YsVUFBVUg7UUFDbkI7UUFFQSxpQkFBaUI7UUFDakIsTUFBTWYsY0FBY1csa0JBQWtCVSxHQUFHLENBQUMsQ0FBQyxFQUFFM0IsSUFBSSxFQUFFc0IsY0FBYyxFQUFFQyxjQUFjLEVBQUVHLFNBQVMsRUFBRSxFQUFFRSxRQUFXO2dCQUN6R0MsTUFBTUQsUUFBUTtnQkFDZEUsUUFBUTlCLEtBQUtFLEVBQUU7Z0JBQ2Y2QixVQUFVL0IsS0FBS0csSUFBSTtnQkFDbkJtQixnQkFBZ0JBLGtCQUFrQjtnQkFDbENDLGdCQUFnQkEsa0JBQWtCO2dCQUNsQ1MsZ0JBQWdCekIsV0FBVyxJQUFJa0IsS0FBS0M7WUFDdEM7UUFFQSxPQUFPdkMscURBQVlBLENBQUNrQixJQUFJLENBQUM7WUFBRUM7UUFBWTtJQUN6QyxFQUFFLE9BQU8yQixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxvQ0FBb0NBO1FBQ2xELE9BQU85QyxxREFBWUEsQ0FBQ2tCLElBQUksQ0FDdEI7WUFBRTRCLE9BQU87UUFBbUMsR0FDNUM7WUFBRUUsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9Qcm9qZWN0cy9jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvbGVhZGVyYm9hcmQvcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEpIHtcbiAgdHJ5IHtcbiAgICAvLyBDb3JyZWN0IHdheSB0byBleHRyYWN0ICd2aWV3JyBmcm9tIHF1ZXJ5IHN0cmluZ3NzXG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XG4gICAgY29uc3QgdmlldyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ2aWV3XCIpIHx8IFwiZnVsbC10aW1lXCI7IC8vIERlZmF1bHQgdG8gXCJmdWxsLXRpbWVcIlxuXG4gICAgLy8gRmV0Y2ggYWxsIHByZWRpY3Rpb25zIHdpdGggdXNlciBkYXRhXG4gICAgY29uc3QgcHJlZGljdGlvbnMgPSBhd2FpdCBwcmlzbWEucHJlZGljdGlvbi5maW5kTWFueSh7XG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIG5hbWU6IHRydWUgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXByZWRpY3Rpb25zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbGVhZGVyYm9hcmQ6IFtdIH0pO1xuICAgIH1cblxuICAgIC8vIEhlbHBlciB0byBmb3JtYXQgdGltZVxuICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAoZGF0ZSkgPT4ge1xuICAgICAgY29uc3QgaG91cnMgPSBTdHJpbmcoZGF0ZS5nZXRIb3VycygpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICBjb25zdCBtaW51dGVzID0gU3RyaW5nKGRhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICBjb25zdCBzZWNvbmRzID0gU3RyaW5nKGRhdGUuZ2V0U2Vjb25kcygpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfWA7XG4gICAgfTtcblxuICAgIC8vIFNvcnQgbWFudWFsbHkgYnkgcG9pbnRzXG4gICAgY29uc3Qgc29ydGVkUHJlZGljdGlvbnMgPSBwcmVkaWN0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBhUG9pbnRzID0gdmlldyA9PT0gXCJoYWxmLXRpbWVcIiA/IGEuaGFsZlRpbWVQb2ludHMgfHwgMCA6IGEuZnVsbFRpbWVQb2ludHMgfHwgMDtcbiAgICAgIGNvbnN0IGJQb2ludHMgPSB2aWV3ID09PSBcImhhbGYtdGltZVwiID8gYi5oYWxmVGltZVBvaW50cyB8fCAwIDogYi5mdWxsVGltZVBvaW50cyB8fCAwO1xuXG4gICAgICBpZiAoYlBvaW50cyA9PT0gYVBvaW50cykge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5jcmVhdGVkQXQpIC0gbmV3IERhdGUoYi5jcmVhdGVkQXQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYlBvaW50cyAtIGFQb2ludHM7XG4gICAgfSk7XG5cbiAgICAvLyBNYXAgd2l0aCByYW5rc1xuICAgIGNvbnN0IGxlYWRlcmJvYXJkID0gc29ydGVkUHJlZGljdGlvbnMubWFwKCh7IHVzZXIsIGhhbGZUaW1lUG9pbnRzLCBmdWxsVGltZVBvaW50cywgY3JlYXRlZEF0IH0sIGluZGV4KSA9PiAoe1xuICAgICAgcmFuazogaW5kZXggKyAxLFxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgdXNlck5hbWU6IHVzZXIubmFtZSxcbiAgICAgIGhhbGZUaW1lUG9pbnRzOiBoYWxmVGltZVBvaW50cyB8fCAwLFxuICAgICAgZnVsbFRpbWVQb2ludHM6IGZ1bGxUaW1lUG9pbnRzIHx8IDAsXG4gICAgICBwcmVkaWN0aW9uVGltZTogZm9ybWF0VGltZShuZXcgRGF0ZShjcmVhdGVkQXQpKSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBsZWFkZXJib2FyZCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbGVhZGVyYm9hcmQgZGF0YTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGxlYWRlcmJvYXJkIGRhdGFcIiB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByaXNtYSIsIkdFVCIsInJlcSIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsInZpZXciLCJnZXQiLCJwcmVkaWN0aW9ucyIsInByZWRpY3Rpb24iLCJmaW5kTWFueSIsImluY2x1ZGUiLCJ1c2VyIiwic2VsZWN0IiwiaWQiLCJuYW1lIiwibGVuZ3RoIiwianNvbiIsImxlYWRlcmJvYXJkIiwiZm9ybWF0VGltZSIsImRhdGUiLCJob3VycyIsIlN0cmluZyIsImdldEhvdXJzIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInNlY29uZHMiLCJnZXRTZWNvbmRzIiwic29ydGVkUHJlZGljdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJhUG9pbnRzIiwiaGFsZlRpbWVQb2ludHMiLCJmdWxsVGltZVBvaW50cyIsImJQb2ludHMiLCJEYXRlIiwiY3JlYXRlZEF0IiwibWFwIiwiaW5kZXgiLCJyYW5rIiwidXNlcklkIiwidXNlck5hbWUiLCJwcmVkaWN0aW9uVGltZSIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/leaderboard/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxrQkFBa0JDO0FBRXhCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQTtBQUV6RCxJQUFJSSxJQUFxQyxFQUFFSCxnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFcEUsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9Qcm9qZWN0cy9jaGl2YXMtZ2FtZS1wcmVkaWN0L2xpYi9wcmlzbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzO1xuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwicHJvY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fleaderboard%2Froute&page=%2Fapi%2Fleaderboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fleaderboard%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fleaderboard%2Froute&page=%2Fapi%2Fleaderboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fleaderboard%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mac_Desktop_Projects_chivas_game_predict_app_api_leaderboard_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/leaderboard/route.js */ \"(rsc)/./app/api/leaderboard/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/leaderboard/route\",\n        pathname: \"/api/leaderboard\",\n        filename: \"route\",\n        bundlePath: \"app/api/leaderboard/route\"\n    },\n    resolvedPagePath: \"/Users/mac/Desktop/Projects/chivas-game-predict/app/api/leaderboard/route.js\",\n    nextConfigOutput,\n    userland: _Users_mac_Desktop_Projects_chivas_game_predict_app_api_leaderboard_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsZWFkZXJib2FyZCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbGVhZGVyYm9hcmQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsZWFkZXJib2FyZCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1hYyUyRkRlc2t0b3AlMkZQcm9qZWN0cyUyRmNoaXZhcy1nYW1lLXByZWRpY3QlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGbWFjJTJGRGVza3RvcCUyRlByb2plY3RzJTJGY2hpdmFzLWdhbWUtcHJlZGljdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDNEI7QUFDekc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tYWMvRGVza3RvcC9Qcm9qZWN0cy9jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvbGVhZGVyYm9hcmQvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xlYWRlcmJvYXJkL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbGVhZGVyYm9hcmRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2xlYWRlcmJvYXJkL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL2NoaXZhcy1nYW1lLXByZWRpY3QvYXBwL2FwaS9sZWFkZXJib2FyZC9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fleaderboard%2Froute&page=%2Fapi%2Fleaderboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fleaderboard%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fleaderboard%2Froute&page=%2Fapi%2Fleaderboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fleaderboard%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fchivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();