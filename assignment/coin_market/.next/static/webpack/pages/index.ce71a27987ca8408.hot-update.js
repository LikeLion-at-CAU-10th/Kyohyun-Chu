"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_chugyohyeon_Desktop_LikeLion_carrot_market_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_chugyohyeon_Desktop_LikeLion_carrot_market_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_chugyohyeon_Desktop_LikeLion_carrot_market_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(), data = ref1[0], setData = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_chugyohyeon_Desktop_LikeLion_carrot_market_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res;\n                return _Users_chugyohyeon_Desktop_LikeLion_carrot_market_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            setLoading(true);\n                            _ctx.prev = 1;\n                            _ctx.next = 4;\n                            return axios__WEBPACK_IMPORTED_MODULE_5___default().get(\"https://f8486a5c-579f-4369-8f5c-332563cf73fe.mock.pstmn.io/list\");\n                        case 4:\n                            res = _ctx.sent;\n                            setData(res.data);\n                            _ctx.next = 11;\n                            break;\n                        case 8:\n                            _ctx.prev = 8;\n                            _ctx.t0 = _ctx[\"catch\"](1);\n                            console.log(_ctx.t0);\n                        case 11:\n                            setLoading(false);\n                        case 12:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        1,\n                        8\n                    ]\n                ]);\n            }));\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, []);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Carrot Market\"\n                }, void 0, false, {\n                    fileName: \"/Users/chugyohyeon/Desktop/LikeLion/carrot_market/pages/index.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chugyohyeon/Desktop/LikeLion/carrot_market/pages/index.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                fileName: \"/Users/chugyohyeon/Desktop/LikeLion/carrot_market/pages/index.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: data === null || data === void 0 ? void 0 : data.map(function(list) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"coin rank: \",\n                                    list.id\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chugyohyeon/Desktop/LikeLion/carrot_market/pages/index.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"coin name: \",\n                                    list.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chugyohyeon/Desktop/LikeLion/carrot_market/pages/index.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"price: $\",\n                                    list.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chugyohyeon/Desktop/LikeLion/carrot_market/pages/index.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: function() {\n                                    return next_router__WEBPACK_IMPORTED_MODULE_3__.router.push(\"/details/\".concat(list.name));\n                                },\n                                children: \"Detail Information\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chugyohyeon/Desktop/LikeLion/carrot_market/pages/index.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, list.id, true, {\n                        fileName: \"/Users/chugyohyeon/Desktop/LikeLion/carrot_market/pages/index.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/chugyohyeon/Desktop/LikeLion/carrot_market/pages/index.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"G5f9acNjTry/EqHGHSZaVQ2z19I=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE0QjtBQUNRO0FBQ1M7QUFDcEI7QUFDa0I7O0FBRTVCLFNBQVNNLElBQUksR0FBRzs7O0lBQzdCLElBQThCRixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXRDRyxPQUFPLEdBQWdCSCxHQUFlLEdBQS9CLEVBQUVJLFVBQVUsR0FBSUosR0FBZSxHQUFuQjtJQUMxQixJQUF3QkEsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTNCSyxJQUFJLEdBQWFMLElBQVUsR0FBdkIsRUFBRU0sT0FBTyxHQUFJTixJQUFVLEdBQWQ7SUFFcEJDLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1NLFNBQVM7dUJBQUcsb1FBQVk7b0JBR3BCQyxHQUFHOzs7OzRCQUZYSixVQUFVLENBQUMsSUFBSSxDQUFDOzs7bUNBRUlMLGdEQUFTLENBQ3pCLGlFQUFpRSxDQUNsRTs7NEJBRktTLEdBQUcsWUFFUjs0QkFFREYsT0FBTyxDQUFDRSxHQUFHLENBQUNILElBQUksQ0FBQzs7Ozs7OzRCQUVqQkssT0FBTyxDQUFDQyxHQUFHLFNBQUs7OzRCQUdsQlAsVUFBVSxDQUFDLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7YUFDbEI7NEJBYktHLFNBQVM7OztXQWFkO1FBQ0RBLFNBQVMsRUFBRTtLQUNaLEVBQUUsRUFBRSxDQUFDO0lBQ05HLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixJQUFJLENBQUM7SUFDakIscUJBQ0U7OzBCQUNFLDhEQUFDVCxrREFBSTswQkFDSCw0RUFBQ2dCLE9BQUs7OEJBQUMsZUFBYTs7Ozs7d0JBQVE7Ozs7O29CQUN2QjswQkFDUCw4REFBQ2Qsc0RBQU07Ozs7b0JBQUc7MEJBQ1YsOERBQUNlLEtBQUc7MEJBQ0RSLElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsSUFBSSxDQUFFUyxHQUFHLENBQUMsU0FBQ0MsSUFBSTt5Q0FDZCw4REFBQ0YsS0FBRzs7MENBQ0YsOERBQUNBLEtBQUc7O29DQUFDLGFBQVc7b0NBQUNFLElBQUksQ0FBQ0MsRUFBRTs7Ozs7O3FDQUFPOzBDQUMvQiw4REFBQ0gsS0FBRzs7b0NBQUMsYUFBVztvQ0FBQ0UsSUFBSSxDQUFDRSxJQUFJOzs7Ozs7cUNBQU87MENBQ2pDLDhEQUFDSixLQUFHOztvQ0FBQyxVQUFRO29DQUFDRSxJQUFJLENBQUNHLEtBQUs7Ozs7OztxQ0FBTzswQ0FDL0IsOERBQUNDLFFBQU07Z0NBQ0xDLElBQUksRUFBQyxRQUFRO2dDQUNiQyxPQUFPLEVBQUU7MkNBQU14QixvREFBVyxDQUFDLFdBQVUsQ0FBWSxPQUFWa0IsSUFBSSxDQUFDRSxJQUFJLENBQUUsQ0FBQztpQ0FBQTswQ0FDcEQsb0JBRUQ7Ozs7O3FDQUFTOzt1QkFUREYsSUFBSSxDQUFDQyxFQUFFOzs7OzZCQVVYO2lCQUNQLENBQUM7Ozs7O29CQUNFOztvQkFDTCxDQUNKO0NBQ0Y7R0E3Q3VCZCxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICAnaHR0cHM6Ly9mODQ4NmE1Yy01NzlmLTQzNjktOGY1Yy0zMzI1NjNjZjczZmUubW9jay5wc3Rtbi5pby9saXN0JyxcbiAgICAgICAgKVxuXG4gICAgICAgIHNldERhdGEocmVzLmRhdGEpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgfVxuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcbiAgY29uc29sZS5sb2coZGF0YSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DYXJyb3QgTWFya2V0PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtkYXRhPy5tYXAoKGxpc3QpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17bGlzdC5pZH0+XG4gICAgICAgICAgICA8ZGl2PmNvaW4gcmFuazoge2xpc3QuaWR9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PmNvaW4gbmFtZToge2xpc3QubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+cHJpY2U6ICR7bGlzdC5wcmljZX08L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvZGV0YWlscy8ke2xpc3QubmFtZX1gKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGV0YWlsIEluZm9ybWF0aW9uXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJyb3V0ZXIiLCJIZWFkZXIiLCJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaERhdGEiLCJyZXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJkaXYiLCJtYXAiLCJsaXN0IiwiaWQiLCJuYW1lIiwicHJpY2UiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});