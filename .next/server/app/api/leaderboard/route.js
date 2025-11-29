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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.js\");\n\n\nasync function GET(req) {\n    try {\n        // Correct way to extract 'view' from query stringss\n        const { searchParams } = new URL(req.url);\n        const view = searchParams.get(\"view\") || \"full-time\"; // Default to \"full-time\"\n        // Fetch all predictions with user data\n        const predictions = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prediction.findMany({\n            include: {\n                user: {\n                    select: {\n                        id: true,\n                        name: true\n                    }\n                }\n            }\n        });\n        if (!predictions.length) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                leaderboard: []\n            });\n        }\n        // Helper to format time\n        const formatTime = (date)=>{\n            const hours = String(date.getHours()).padStart(2, \"0\");\n            const minutes = String(date.getMinutes()).padStart(2, \"0\");\n            const seconds = String(date.getSeconds()).padStart(2, \"0\");\n            return `${hours}:${minutes}:${seconds}`;\n        };\n        // Sort manually by points\n        const sortedPredictions = predictions.sort((a, b)=>{\n            const aPoints = view === \"half-time\" ? a.halfTimePoints || 0 : a.fullTimePoints || 0;\n            const bPoints = view === \"half-time\" ? b.halfTimePoints || 0 : b.fullTimePoints || 0;\n            if (bPoints === aPoints) {\n                return new Date(a.createdAt) - new Date(b.createdAt);\n            }\n            return bPoints - aPoints;\n        });\n        // Map with ranks\n        const leaderboard = sortedPredictions.map(({ user, halfTimePoints, fullTimePoints, createdAt }, index)=>({\n                rank: index + 1,\n                userId: user.id,\n                userName: user.name,\n                halfTimePoints: halfTimePoints || 0,\n                fullTimePoints: fullTimePoints || 0,\n                predictionTime: formatTime(new Date(createdAt))\n            }));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            leaderboard\n        });\n    } catch (error) {\n        console.error(\"Error fetching leaderboard data:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch leaderboard data\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xlYWRlcmJvYXJkL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNUO0FBRTNCLGVBQWVFLElBQUlDLEdBQUc7SUFDM0IsSUFBSTtRQUNGLG9EQUFvRDtRQUNwRCxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLElBQUlHLEdBQUc7UUFDeEMsTUFBTUMsT0FBT0gsYUFBYUksR0FBRyxDQUFDLFdBQVcsYUFBYSx5QkFBeUI7UUFFL0UsdUNBQXVDO1FBQ3ZDLE1BQU1DLGNBQWMsTUFBTVIsbURBQU1BLENBQUNTLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDO1lBQ25EQyxTQUFTO2dCQUNQQyxNQUFNO29CQUNKQyxRQUFRO3dCQUFFQyxJQUFJO3dCQUFNQyxNQUFNO29CQUFLO2dCQUNqQztZQUNGO1FBQ0Y7UUFFQSxJQUFJLENBQUNQLFlBQVlRLE1BQU0sRUFBRTtZQUN2QixPQUFPakIscURBQVlBLENBQUNrQixJQUFJLENBQUM7Z0JBQUVDLGFBQWEsRUFBRTtZQUFDO1FBQzdDO1FBRUEsd0JBQXdCO1FBQ3hCLE1BQU1DLGFBQWEsQ0FBQ0M7WUFDbEIsTUFBTUMsUUFBUUMsT0FBT0YsS0FBS0csUUFBUSxJQUFJQyxRQUFRLENBQUMsR0FBRztZQUNsRCxNQUFNQyxVQUFVSCxPQUFPRixLQUFLTSxVQUFVLElBQUlGLFFBQVEsQ0FBQyxHQUFHO1lBQ3RELE1BQU1HLFVBQVVMLE9BQU9GLEtBQUtRLFVBQVUsSUFBSUosUUFBUSxDQUFDLEdBQUc7WUFDdEQsT0FBTyxHQUFHSCxNQUFNLENBQUMsRUFBRUksUUFBUSxDQUFDLEVBQUVFLFNBQVM7UUFDekM7UUFFQSwwQkFBMEI7UUFDMUIsTUFBTUUsb0JBQW9CckIsWUFBWXNCLElBQUksQ0FBQyxDQUFDQyxHQUFHQztZQUM3QyxNQUFNQyxVQUFVM0IsU0FBUyxjQUFjeUIsRUFBRUcsY0FBYyxJQUFJLElBQUlILEVBQUVJLGNBQWMsSUFBSTtZQUNuRixNQUFNQyxVQUFVOUIsU0FBUyxjQUFjMEIsRUFBRUUsY0FBYyxJQUFJLElBQUlGLEVBQUVHLGNBQWMsSUFBSTtZQUVuRixJQUFJQyxZQUFZSCxTQUFTO2dCQUN2QixPQUFPLElBQUlJLEtBQUtOLEVBQUVPLFNBQVMsSUFBSSxJQUFJRCxLQUFLTCxFQUFFTSxTQUFTO1lBQ3JEO1lBRUEsT0FBT0YsVUFBVUg7UUFDbkI7UUFFQSxpQkFBaUI7UUFDakIsTUFBTWYsY0FBY1csa0JBQWtCVSxHQUFHLENBQUMsQ0FBQyxFQUFFM0IsSUFBSSxFQUFFc0IsY0FBYyxFQUFFQyxjQUFjLEVBQUVHLFNBQVMsRUFBRSxFQUFFRSxRQUFXO2dCQUN6R0MsTUFBTUQsUUFBUTtnQkFDZEUsUUFBUTlCLEtBQUtFLEVBQUU7Z0JBQ2Y2QixVQUFVL0IsS0FBS0csSUFBSTtnQkFDbkJtQixnQkFBZ0JBLGtCQUFrQjtnQkFDbENDLGdCQUFnQkEsa0JBQWtCO2dCQUNsQ1MsZ0JBQWdCekIsV0FBVyxJQUFJa0IsS0FBS0M7WUFDdEM7UUFFQSxPQUFPdkMscURBQVlBLENBQUNrQixJQUFJLENBQUM7WUFBRUM7UUFBWTtJQUN6QyxFQUFFLE9BQU8yQixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxvQ0FBb0NBO1FBQ2xELE9BQU85QyxxREFBWUEsQ0FBQ2tCLElBQUksQ0FDdEI7WUFBRTRCLE9BQU87UUFBbUMsR0FDNUM7WUFBRUUsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9Qcm9qZWN0cy9uZXctY2hpdmFzLWdhbWUtcHJlZGljdC9hcHAvYXBpL2xlYWRlcmJvYXJkL3JvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxKSB7XG4gIHRyeSB7XG4gICAgLy8gQ29ycmVjdCB3YXkgdG8gZXh0cmFjdCAndmlldycgZnJvbSBxdWVyeSBzdHJpbmdzc1xuICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcS51cmwpO1xuICAgIGNvbnN0IHZpZXcgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidmlld1wiKSB8fCBcImZ1bGwtdGltZVwiOyAvLyBEZWZhdWx0IHRvIFwiZnVsbC10aW1lXCJcblxuICAgIC8vIEZldGNoIGFsbCBwcmVkaWN0aW9ucyB3aXRoIHVzZXIgZGF0YVxuICAgIGNvbnN0IHByZWRpY3Rpb25zID0gYXdhaXQgcHJpc21hLnByZWRpY3Rpb24uZmluZE1hbnkoe1xuICAgICAgaW5jbHVkZToge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgc2VsZWN0OiB7IGlkOiB0cnVlLCBuYW1lOiB0cnVlIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFwcmVkaWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGxlYWRlcmJvYXJkOiBbXSB9KTtcbiAgICB9XG5cbiAgICAvLyBIZWxwZXIgdG8gZm9ybWF0IHRpbWVcbiAgICBjb25zdCBmb3JtYXRUaW1lID0gKGRhdGUpID0+IHtcbiAgICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKGRhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgY29uc3Qgc2Vjb25kcyA9IFN0cmluZyhkYXRlLmdldFNlY29uZHMoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuICAgIH07XG5cbiAgICAvLyBTb3J0IG1hbnVhbGx5IGJ5IHBvaW50c1xuICAgIGNvbnN0IHNvcnRlZFByZWRpY3Rpb25zID0gcHJlZGljdGlvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgYVBvaW50cyA9IHZpZXcgPT09IFwiaGFsZi10aW1lXCIgPyBhLmhhbGZUaW1lUG9pbnRzIHx8IDAgOiBhLmZ1bGxUaW1lUG9pbnRzIHx8IDA7XG4gICAgICBjb25zdCBiUG9pbnRzID0gdmlldyA9PT0gXCJoYWxmLXRpbWVcIiA/IGIuaGFsZlRpbWVQb2ludHMgfHwgMCA6IGIuZnVsbFRpbWVQb2ludHMgfHwgMDtcblxuICAgICAgaWYgKGJQb2ludHMgPT09IGFQb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuY3JlYXRlZEF0KSAtIG5ldyBEYXRlKGIuY3JlYXRlZEF0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJQb2ludHMgLSBhUG9pbnRzO1xuICAgIH0pO1xuXG4gICAgLy8gTWFwIHdpdGggcmFua3NcbiAgICBjb25zdCBsZWFkZXJib2FyZCA9IHNvcnRlZFByZWRpY3Rpb25zLm1hcCgoeyB1c2VyLCBoYWxmVGltZVBvaW50cywgZnVsbFRpbWVQb2ludHMsIGNyZWF0ZWRBdCB9LCBpbmRleCkgPT4gKHtcbiAgICAgIHJhbms6IGluZGV4ICsgMSxcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgIHVzZXJOYW1lOiB1c2VyLm5hbWUsXG4gICAgICBoYWxmVGltZVBvaW50czogaGFsZlRpbWVQb2ludHMgfHwgMCxcbiAgICAgIGZ1bGxUaW1lUG9pbnRzOiBmdWxsVGltZVBvaW50cyB8fCAwLFxuICAgICAgcHJlZGljdGlvblRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoY3JlYXRlZEF0KSksXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbGVhZGVyYm9hcmQgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGxlYWRlcmJvYXJkIGRhdGE6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBsZWFkZXJib2FyZCBkYXRhXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcmlzbWEiLCJHRVQiLCJyZXEiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJ2aWV3IiwiZ2V0IiwicHJlZGljdGlvbnMiLCJwcmVkaWN0aW9uIiwiZmluZE1hbnkiLCJpbmNsdWRlIiwidXNlciIsInNlbGVjdCIsImlkIiwibmFtZSIsImxlbmd0aCIsImpzb24iLCJsZWFkZXJib2FyZCIsImZvcm1hdFRpbWUiLCJkYXRlIiwiaG91cnMiLCJTdHJpbmciLCJnZXRIb3VycyIsInBhZFN0YXJ0IiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJzZWNvbmRzIiwiZ2V0U2Vjb25kcyIsInNvcnRlZFByZWRpY3Rpb25zIiwic29ydCIsImEiLCJiIiwiYVBvaW50cyIsImhhbGZUaW1lUG9pbnRzIiwiZnVsbFRpbWVQb2ludHMiLCJiUG9pbnRzIiwiRGF0ZSIsImNyZWF0ZWRBdCIsIm1hcCIsImluZGV4IiwicmFuayIsInVzZXJJZCIsInVzZXJOYW1lIiwicHJlZGljdGlvblRpbWUiLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/leaderboard/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxrQkFBa0JDO0FBRXhCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQTtBQUV6RCxJQUFJSSxJQUFxQyxFQUFFSCxnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFcEUsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9Qcm9qZWN0cy9uZXctY2hpdmFzLWdhbWUtcHJlZGljdC9saWIvcHJpc21hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcztcblxuY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hO1xuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fleaderboard%2Froute&page=%2Fapi%2Fleaderboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fleaderboard%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fleaderboard%2Froute&page=%2Fapi%2Fleaderboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fleaderboard%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mac_Desktop_Projects_new_chivas_game_predict_app_api_leaderboard_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/leaderboard/route.js */ \"(rsc)/./app/api/leaderboard/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/leaderboard/route\",\n        pathname: \"/api/leaderboard\",\n        filename: \"route\",\n        bundlePath: \"app/api/leaderboard/route\"\n    },\n    resolvedPagePath: \"/Users/mac/Desktop/Projects/new-chivas-game-predict/app/api/leaderboard/route.js\",\n    nextConfigOutput,\n    userland: _Users_mac_Desktop_Projects_new_chivas_game_predict_app_api_leaderboard_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjBfcmVhY3QtZG9tQDE5LjIuMF9yZWFjdEAxOS4yLjBfX3JlYWN0QDE5LjIuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsZWFkZXJib2FyZCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbGVhZGVyYm9hcmQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsZWFkZXJib2FyZCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1hYyUyRkRlc2t0b3AlMkZQcm9qZWN0cyUyRm5ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1hYyUyRkRlc2t0b3AlMkZQcm9qZWN0cyUyRm5ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNnQztBQUM3RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL25ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvbGVhZGVyYm9hcmQvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xlYWRlcmJvYXJkL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbGVhZGVyYm9hcmRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2xlYWRlcmJvYXJkL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL25ldy1jaGl2YXMtZ2FtZS1wcmVkaWN0L2FwcC9hcGkvbGVhZGVyYm9hcmQvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fleaderboard%2Froute&page=%2Fapi%2Fleaderboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fleaderboard%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fleaderboard%2Froute&page=%2Fapi%2Fleaderboard%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fleaderboard%2Froute.js&appDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmac%2FDesktop%2FProjects%2Fnew-chivas-game-predict&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();