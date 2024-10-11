"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/country/[countryCode]/page",{

/***/ "(app-pages-browser)/./src/app/country/[countryCode]/page.tsx":
/*!************************************************!*\
  !*** ./src/app/country/[countryCode]/page.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/../../../node_modules/axios/lib/axios.js\");\n/* harmony import */ var _infrastructure_components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/infrastructure/components/Title */ \"(app-pages-browser)/./src/infrastructure/components/Title.tsx\");\n/* harmony import */ var _infrastructure_components_Chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/infrastructure/components/Chart */ \"(app-pages-browser)/./src/infrastructure/components/Chart.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst CountryPage = (param)=>{\n    let { params } = param;\n    _s();\n    const [countryInfo, setCountryInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(\"http://localhost:9000\", \"/api/country/\").concat(params.countryCode)).then((response)=>setCountryInfo(response.data)).catch((error)=>console.error(error));\n    }, [\n        params.countryCode\n    ]);\n    if (!countryInfo) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n        lineNumber: 20,\n        columnNumber: 28\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform  duration-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_infrastructure_components_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"text-center py-6 text-2xl font-bold text-gray-800\",\n                    children: countryInfo.name\n                }, void 0, false, {\n                    fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: countryInfo.flag,\n                        alt: \"Flag of \".concat(countryInfo.name),\n                        className: \"w-32 h-auto rounded-md shadow\"\n                    }, void 0, false, {\n                        fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-bold text-gray-700 \",\n                            children: \"Population Over Time:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc list-inside mt-2 space-y-1 \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_infrastructure_components_Chart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                populationCounts: countryInfo.population.populationCounts\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountryPage, \"Q1K4Rqu8v9zX/hK08SNpAh+t5pc=\");\n_c = CountryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryPage);\nvar _c;\n$RefreshReg$(_c, \"CountryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY291bnRyeS9bY291bnRyeUNvZGVdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU0QztBQUNsQjtBQUM0QjtBQUNVO0FBRWhFLE1BQU1LLGNBQWM7UUFBQyxFQUFFQyxNQUFNLEVBQXVDOztJQUNsRSxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQXFCO0lBRW5FRCxnREFBU0EsQ0FBQztRQUNSRSw2Q0FBS0EsQ0FDRk8sR0FBRyxDQUNGLEdBQXNESCxPQUFuREksdUJBQW1DLEVBQUMsaUJBQWtDLE9BQW5CSixPQUFPTyxXQUFXLEdBRXpFQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYVAsZUFBZU8sU0FBU0MsSUFBSSxHQUMvQ0MsS0FBSyxDQUFDLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQ0E7SUFDcEMsR0FBRztRQUFDWixPQUFPTyxXQUFXO0tBQUM7SUFFdkIsSUFBSSxDQUFDTixhQUFhLHFCQUFPLDhEQUFDYTtrQkFBSTs7Ozs7O0lBRTlCLHFCQUNFLDhEQUFDQTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ2xCLHdFQUFLQTtvQkFBQ2tCLFdBQVU7OEJBQ2RkLFlBQVllLElBQUk7Ozs7Ozs4QkFFbkIsOERBQUNGO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRTt3QkFDQ0MsS0FBS2pCLFlBQVlrQixJQUFJO3dCQUNyQkMsS0FBSyxXQUE0QixPQUFqQm5CLFlBQVllLElBQUk7d0JBQ2hDRCxXQUFVOzs7Ozs7Ozs7Ozs4QkFJZCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTTs0QkFBR04sV0FBVTtzQ0FBbUM7Ozs7OztzQ0FHakQsOERBQUNPOzRCQUFHUCxXQUFVO3NDQUNaLDRFQUFDakIsd0VBQWVBO2dDQUNkeUIsa0JBQWtCdEIsWUFBWXVCLFVBQVUsQ0FBQ0QsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZFO0dBekNNeEI7S0FBQUE7QUEyQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb3VudHJ5L1tjb3VudHJ5Q29kZV0vcGFnZS50c3g/YjI0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCJAL2luZnJhc3RydWN0dXJlL2NvbXBvbmVudHMvVGl0bGVcIjtcbmltcG9ydCBQb3B1bGF0aW9uQ2hhcnQgZnJvbSBcIkAvaW5mcmFzdHJ1Y3R1cmUvY29tcG9uZW50cy9DaGFydFwiO1xuXG5jb25zdCBDb3VudHJ5UGFnZSA9ICh7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBjb3VudHJ5Q29kZTogc3RyaW5nIH0gfSkgPT4ge1xuICBjb25zdCBbY291bnRyeUluZm8sIHNldENvdW50cnlJbmZvXSA9IHVzZVN0YXRlPENvdW50cnlJbmZvIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9VUkx9L2FwaS9jb3VudHJ5LyR7cGFyYW1zLmNvdW50cnlDb2RlfWBcbiAgICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc2V0Q291bnRyeUluZm8ocmVzcG9uc2UuZGF0YSkpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gIH0sIFtwYXJhbXMuY291bnRyeUNvZGVdKTtcblxuICBpZiAoIWNvdW50cnlJbmZvKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZyBteC1hdXRvIGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTYgdGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICB7Y291bnRyeUluZm8ubmFtZX1cbiAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLTRcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2NvdW50cnlJbmZvLmZsYWd9XG4gICAgICAgICAgICBhbHQ9e2BGbGFnIG9mICR7Y291bnRyeUluZm8ubmFtZX1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zMiBoLWF1dG8gcm91bmRlZC1tZCBzaGFkb3dcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIFwiPlxuICAgICAgICAgICAgUG9wdWxhdGlvbiBPdmVyIFRpbWU6XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlIG10LTIgc3BhY2UteS0xIFwiPlxuICAgICAgICAgICAgPFBvcHVsYXRpb25DaGFydFxuICAgICAgICAgICAgICBwb3B1bGF0aW9uQ291bnRzPXtjb3VudHJ5SW5mby5wb3B1bGF0aW9uLnBvcHVsYXRpb25Db3VudHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudHJ5UGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiVGl0bGUiLCJQb3B1bGF0aW9uQ2hhcnQiLCJDb3VudHJ5UGFnZSIsInBhcmFtcyIsImNvdW50cnlJbmZvIiwic2V0Q291bnRyeUluZm8iLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFDS0VORF9VUkwiLCJjb3VudHJ5Q29kZSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsIm5hbWUiLCJpbWciLCJzcmMiLCJmbGFnIiwiYWx0IiwiaDIiLCJ1bCIsInBvcHVsYXRpb25Db3VudHMiLCJwb3B1bGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/country/[countryCode]/page.tsx\n"));

/***/ })

});