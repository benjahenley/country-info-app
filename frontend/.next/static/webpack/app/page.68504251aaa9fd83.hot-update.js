"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/../../../node_modules/axios/lib/axios.js\");\n/* harmony import */ var _infrastructure_components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/infrastructure/components/Title */ \"(app-pages-browser)/./src/infrastructure/components/Title.tsx\");\n/* harmony import */ var _infrastructure_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/infrastructure/components/Button */ \"(app-pages-browser)/./src/infrastructure/components/Button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [countries, setCountries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(\"http://localhost:9000\", \"/api/countries\")).then((response)=>setCountries(response.data)).catch((error)=>console.error(error));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gradient-to-tr from-orange-600 to-orange-300\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_infrastructure_components_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"text-center py-6 text-white\",\n                    children: \"Country Finder!\"\n                }, void 0, false, {\n                    fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_infrastructure_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: \"Go to finder\"\n            }, void 0, false, {\n                fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"u5xOCJaVOCLA9QSfvEC1BLxOVIw=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTRDO0FBQ2xCO0FBQzRCO0FBRUU7QUFPeEQsTUFBTUssT0FBTzs7SUFDWCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQVksRUFBRTtJQUV4REQsZ0RBQVNBLENBQUM7UUFDUkUsNkNBQUtBLENBQ0ZNLEdBQUcsQ0FBQyxHQUF1QyxPQUFwQ0MsdUJBQW1DLEVBQUMsbUJBQzNDRyxJQUFJLENBQUMsQ0FBQ0MsV0FBYU4sYUFBYU0sU0FBU0MsSUFBSSxHQUM3Q0MsS0FBSyxDQUFDLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQ0E7SUFDcEMsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNqQix3RUFBS0E7b0JBQUNpQixXQUFVOzhCQUE4Qjs7Ozs7Ozs7Ozs7MEJBR2pELDhEQUFDaEIseUVBQU1BOzBCQUFDOzs7Ozs7Ozs7Ozs7QUFHZDtHQW5CTUM7S0FBQUE7QUFxQk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIkAvaW5mcmFzdHJ1Y3R1cmUvY29tcG9uZW50cy9UaXRsZVwiO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiQC9pbmZyYXN0cnVjdHVyZS9jb21wb25lbnRzL1NlYXJjaEJhclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQC9pbmZyYXN0cnVjdHVyZS9jb21wb25lbnRzL0J1dHRvblwiO1xuXG5pbnRlcmZhY2UgQ291bnRyeSB7XG4gIGFscGhhMkNvZGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbY291bnRyaWVzLCBzZXRDb3VudHJpZXNdID0gdXNlU3RhdGU8Q291bnRyeVtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX1VSTH0vYXBpL2NvdW50cmllc2ApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHNldENvdW50cmllcyhyZXNwb25zZS5kYXRhKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXRyIGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtMzAwXCI+XG4gICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS02IHRleHQtd2hpdGVcIj5Db3VudHJ5IEZpbmRlciE8L1RpdGxlPlxuICAgICAgICB7LyogPFNlYXJjaEJhciBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBjb3VudHJ5XCI+PC9TZWFyY2hCYXI+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uPkdvIHRvIGZpbmRlcjwvQnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIlRpdGxlIiwiQnV0dG9uIiwiSG9tZSIsImNvdW50cmllcyIsInNldENvdW50cmllcyIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInNlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});