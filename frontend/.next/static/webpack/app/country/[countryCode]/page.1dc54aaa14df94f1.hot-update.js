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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/../../../node_modules/axios/lib/axios.js\");\n/* harmony import */ var _infrastructure_components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/infrastructure/components/Title */ \"(app-pages-browser)/./src/infrastructure/components/Title.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CountryPage = (param)=>{\n    let { params } = param;\n    _s();\n    const [countryInfo, setCountryInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(\"http://localhost:9000\", \"/api/country/\").concat(params.countryCode)).then((response)=>setCountryInfo(response.data)).catch((error)=>console.error(error));\n    }, [\n        params.countryCode\n    ]);\n    if (!countryInfo) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n        lineNumber: 19,\n        columnNumber: 28\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform  duration-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_infrastructure_components_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"text-center py-6 text-2xl font-bold text-gray-800\",\n                    children: countryInfo.name\n                }, void 0, false, {\n                    fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: countryInfo.flag,\n                        alt: \"Flag of \".concat(countryInfo.name),\n                        className: \"w-32 h-auto rounded-md shadow\"\n                    }, void 0, false, {\n                        fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-bold text-gray-700\",\n                            children: \"Border Countries:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc list-inside mt-2 space-y-1\",\n                            children: countryInfo.borders.map((border, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"text-gray-600\",\n                                    children: border.commonName\n                                }, key, false, {\n                                    fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-bold text-gray-700 text-center\",\n                            children: \"Population Over Time:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc list-inside mt-2 space-y-1 text-center\",\n                            children: countryInfo.population.populationCounts.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"text-gray-600\",\n                                    children: [\n                                        data.year,\n                                        \": \",\n                                        data.value.toLocaleString()\n                                    ]\n                                }, data.year, true, {\n                                    fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/country/[countryCode]/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountryPage, \"Q1K4Rqu8v9zX/hK08SNpAh+t5pc=\");\n_c = CountryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryPage);\nvar _c;\n$RefreshReg$(_c, \"CountryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY291bnRyeS9bY291bnRyeUNvZGVdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRTRDO0FBQ2xCO0FBQzRCO0FBRXRELE1BQU1JLGNBQWM7UUFBQyxFQUFFQyxNQUFNLEVBQXVDOztJQUNsRSxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQXFCO0lBRW5FRCxnREFBU0EsQ0FBQztRQUNSRSw2Q0FBS0EsQ0FDRk0sR0FBRyxDQUNGLEdBQXNESCxPQUFuREksdUJBQW1DLEVBQUMsaUJBQWtDLE9BQW5CSixPQUFPTyxXQUFXLEdBRXpFQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYVAsZUFBZU8sU0FBU0MsSUFBSSxHQUMvQ0MsS0FBSyxDQUFDLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQ0E7SUFDcEMsR0FBRztRQUFDWixPQUFPTyxXQUFXO0tBQUM7SUFFdkIsSUFBSSxDQUFDTixhQUFhLHFCQUFPLDhEQUFDYTtrQkFBSTs7Ozs7O0lBRTlCLHFCQUNFLDhEQUFDQTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ2pCLHdFQUFLQTtvQkFBQ2lCLFdBQVU7OEJBQ2RkLFlBQVllLElBQUk7Ozs7Ozs4QkFFbkIsOERBQUNGO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRTt3QkFDQ0MsS0FBS2pCLFlBQVlrQixJQUFJO3dCQUNyQkMsS0FBSyxXQUE0QixPQUFqQm5CLFlBQVllLElBQUk7d0JBQ2hDRCxXQUFVOzs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTTs0QkFBR04sV0FBVTtzQ0FBa0M7Ozs7OztzQ0FDaEQsOERBQUNPOzRCQUFHUCxXQUFVO3NDQUNYZCxZQUFZc0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsb0JBQ2hDLDhEQUFDQztvQ0FBYVosV0FBVTs4Q0FDckJVLE9BQU9HLFVBQVU7bUNBRFhGOzs7Ozs7Ozs7Ozs7Ozs7OzhCQU9mLDhEQUFDWjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNNOzRCQUFHTixXQUFVO3NDQUE4Qzs7Ozs7O3NDQUc1RCw4REFBQ087NEJBQUdQLFdBQVU7c0NBQ1hkLFlBQVk0QixVQUFVLENBQUNDLGdCQUFnQixDQUFDTixHQUFHLENBQUMsQ0FBQ2QscUJBQzVDLDhEQUFDaUI7b0NBQW1CWixXQUFVOzt3Q0FDM0JMLEtBQUtxQixJQUFJO3dDQUFDO3dDQUFHckIsS0FBS3NCLEtBQUssQ0FBQ0MsY0FBYzs7bUNBRGhDdkIsS0FBS3FCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNoQztHQXJETWhDO0tBQUFBO0FBdUROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY291bnRyeS9bY291bnRyeUNvZGVdL3BhZ2UudHN4P2IyNDciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiQC9pbmZyYXN0cnVjdHVyZS9jb21wb25lbnRzL1RpdGxlXCI7XG5cbmNvbnN0IENvdW50cnlQYWdlID0gKHsgcGFyYW1zIH06IHsgcGFyYW1zOiB7IGNvdW50cnlDb2RlOiBzdHJpbmcgfSB9KSA9PiB7XG4gIGNvbnN0IFtjb3VudHJ5SW5mbywgc2V0Q291bnRyeUluZm9dID0gdXNlU3RhdGU8Q291bnRyeUluZm8gfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFxuICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX1VSTH0vYXBpL2NvdW50cnkvJHtwYXJhbXMuY291bnRyeUNvZGV9YFxuICAgICAgKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXRDb3VudHJ5SW5mbyhyZXNwb25zZS5kYXRhKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgfSwgW3BhcmFtcy5jb3VudHJ5Q29kZV0pO1xuXG4gIGlmICghY291bnRyeUluZm8pIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWxnIG14LWF1dG8gYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zZm9ybSB0cmFuc2l0aW9uLXRyYW5zZm9ybSAgZHVyYXRpb24tMzAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICA8VGl0bGUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktNiB0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgIHtjb3VudHJ5SW5mby5uYW1lfVxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17Y291bnRyeUluZm8uZmxhZ31cbiAgICAgICAgICAgIGFsdD17YEZsYWcgb2YgJHtjb3VudHJ5SW5mby5uYW1lfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTMyIGgtYXV0byByb3VuZGVkLW1kIHNoYWRvd1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTcwMFwiPkJvcmRlciBDb3VudHJpZXM6PC9oMj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlIG10LTIgc3BhY2UteS0xXCI+XG4gICAgICAgICAgICB7Y291bnRyeUluZm8uYm9yZGVycy5tYXAoKGJvcmRlciwga2V5KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2tleX0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIHtib3JkZXIuY29tbW9uTmFtZX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBQb3B1bGF0aW9uIE92ZXIgVGltZTpcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGlzdC1pbnNpZGUgbXQtMiBzcGFjZS15LTEgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtjb3VudHJ5SW5mby5wb3B1bGF0aW9uLnBvcHVsYXRpb25Db3VudHMubWFwKChkYXRhKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2RhdGEueWVhcn0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLnllYXJ9OiB7ZGF0YS52YWx1ZS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50cnlQYWdlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJUaXRsZSIsIkNvdW50cnlQYWdlIiwicGFyYW1zIiwiY291bnRyeUluZm8iLCJzZXRDb3VudHJ5SW5mbyIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCIsImNvdW50cnlDb2RlIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwibmFtZSIsImltZyIsInNyYyIsImZsYWciLCJhbHQiLCJoMiIsInVsIiwiYm9yZGVycyIsIm1hcCIsImJvcmRlciIsImtleSIsImxpIiwiY29tbW9uTmFtZSIsInBvcHVsYXRpb24iLCJwb3B1bGF0aW9uQ291bnRzIiwieWVhciIsInZhbHVlIiwidG9Mb2NhbGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/country/[countryCode]/page.tsx\n"));

/***/ })

});