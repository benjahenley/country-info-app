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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/../../../node_modules/axios/lib/axios.js\");\n/* harmony import */ var _infrastructure_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/infrastructure/components/Button */ \"(app-pages-browser)/./src/infrastructure/components/Button.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _infrastructure_components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/infrastructure/components/Banner */ \"(app-pages-browser)/./src/infrastructure/components/Banner.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [countries, setCountries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(\"http://localhost:9000\", \"/api/countries\")).then((response)=>setCountries(response.data)).catch((error)=>console.error(error));\n    }, []);\n    function handleClick() {\n        router.push(\"/countries\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-gray-100 min-h-[100vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_infrastructure_components_Banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: \"Country Info App\"\n            }, void 0, false, {\n                fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-5 text-center mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-5 px-2 max-w-lg m-auto text-xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Welcome To country info app. Press the button to see available countries to learn about their population and geography\"\n                        }, void 0, false, {\n                            fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_infrastructure_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onClick: handleClick,\n                        children: \"Go to finder\"\n                    }, void 0, false, {\n                        fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/benjaminhenley/Desktop/country-info-app/country-info-app-frontend/src/app/page.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"IOU5AxkT1m4MJ1B0iuzed+WDb/s=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0QztBQUNsQjtBQUc4QjtBQUNaO0FBQ1k7QUFPeEQsTUFBTU0sT0FBTzs7SUFDWCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQVksRUFBRTtJQUN4RCxNQUFNUSxTQUFTTCwwREFBU0E7SUFFeEJKLGdEQUFTQSxDQUFDO1FBQ1JFLDZDQUFLQSxDQUNGUSxHQUFHLENBQUMsR0FBdUMsT0FBcENDLHVCQUFtQyxFQUFDLG1CQUMzQ0csSUFBSSxDQUFDLENBQUNDLFdBQWFQLGFBQWFPLFNBQVNDLElBQUksR0FDN0NDLEtBQUssQ0FBQyxDQUFDQyxRQUFVQyxRQUFRRCxLQUFLLENBQUNBO0lBQ3BDLEdBQUcsRUFBRTtJQUVMLFNBQVNFO1FBQ1BYLE9BQU9ZLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ2xCLHlFQUFNQTswQkFBQzs7Ozs7OzBCQUNSLDhEQUFDbUI7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0U7c0NBQUU7Ozs7Ozs7Ozs7O2tDQUtMLDhEQUFDdEIseUVBQU1BO3dCQUFDdUIsU0FBU047a0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QztHQTdCTWQ7O1FBRVdGLHNEQUFTQTs7O0tBRnBCRTtBQStCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiQC9pbmZyYXN0cnVjdHVyZS9jb21wb25lbnRzL1RpdGxlXCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvaW5mcmFzdHJ1Y3R1cmUvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBCYW5uZXIgZnJvbSBcIkAvaW5mcmFzdHJ1Y3R1cmUvY29tcG9uZW50cy9CYW5uZXJcIjtcblxuaW50ZXJmYWNlIENvdW50cnkge1xuICBhbHBoYTJDb2RlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW2NvdW50cmllcywgc2V0Q291bnRyaWVzXSA9IHVzZVN0YXRlPENvdW50cnlbXT4oW10pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9hcGkvY291bnRyaWVzYClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc2V0Q291bnRyaWVzKHJlc3BvbnNlLmRhdGEpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgcm91dGVyLnB1c2goXCIvY291bnRyaWVzXCIpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBtaW4taC1bMTAwdmhdXCI+XG4gICAgICA8QmFubmVyPkNvdW50cnkgSW5mbyBBcHA8L0Jhbm5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHRleHQtY2VudGVyIG10LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNSBweC0yIG1heC13LWxnIG0tYXV0byB0ZXh0LXhsXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXZWxjb21lIFRvIGNvdW50cnkgaW5mbyBhcHAuIFByZXNzIHRoZSBidXR0b24gdG8gc2VlIGF2YWlsYWJsZVxuICAgICAgICAgICAgY291bnRyaWVzIHRvIGxlYXJuIGFib3V0IHRoZWlyIHBvcHVsYXRpb24gYW5kIGdlb2dyYXBoeVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkdvIHRvIGZpbmRlcjwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQnV0dG9uIiwidXNlUm91dGVyIiwiQmFubmVyIiwiSG9tZSIsImNvdW50cmllcyIsInNldENvdW50cmllcyIsInJvdXRlciIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUNsaWNrIiwicHVzaCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});