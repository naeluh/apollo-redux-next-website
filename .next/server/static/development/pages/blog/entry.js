module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-976954282"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "976954282",
    css: "*{font-family:Menlo,Monaco,'Lucida Console','Liberation Mono', 'DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New', monospace,serif;}body{margin:0;padding:25px 50px;}a{color:#22bad9;}p{font-size:14px;line-height:24px;}h1{font-size:1.5rem;}article{text-align:left;margin:0;max-width:650px;}button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22bad9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px;}button:active{background-color:#1b9db7;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}button:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHdUIsQUFLMkIsQUFHVCxBQUlLLEFBR0MsQUFJRSxBQUdELEFBS0csQUFRTSxBQUlaLFNBOUJLLElBK0JwQixDQTNCQSxDQUdtQixDQU9SLENBSFgsUUFJa0IsQUFZaUIsRUExQm5DLEtBT0EsU0FRQSxvREFHMkIsTUFTM0IsbUJBUlcsU0FDRyxXQXhCZCxDQXlCZSwwRUFDRyxnQkFDbEIiLCJmaWxlIjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9hcG9sbG8tcmVkdXgtbmV4dC13ZWJzaXRlL2NvbXBvbmVudHMvQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8bWFpbj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgJ0x1Y2lkYSBDb25zb2xlJywgJ0xpYmVyYXRpb24gTW9ubycsXG4gICAgICAgICAgJ0RlamFWdSBTYW5zIE1vbm8nLCAnQml0c3RyZWFtIFZlcmEgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JyxcbiAgICAgICAgICBtb25vc3BhY2UsIHNlcmlmO1xuICAgICAgfVxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMjVweCA1MHB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMjJiYWQ5O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgICAgYXJ0aWNsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmJhZDk7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiA1cHggN3B4O1xuICAgICAgfVxuICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjlkYjc7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L21haW4+XG4pXG4iXX0= */\n/*@ sourceURL=/Applications/MAMP/htdocs/apollo-redux-next-website/components/App.js */"
  }));
});

/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var message = _ref.message;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
    className: "jsx-160792485"
  }, message, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "160792485",
    css: "aside.jsx-160792485{padding:1.5em;font-size:14px;color:white;background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHZ0IsQUFHdUIsY0FDQyxlQUNILFlBQ1MscUJBQ3ZCIiwiZmlsZSI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IG1lc3NhZ2UgfSkgPT4gKFxuICA8YXNpZGU+XG4gICAge21lc3NhZ2V9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYXNpZGUge1xuICAgICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYXNpZGU+XG4pXG4iXX0= */\n/*@ sourceURL=/Applications/MAMP/htdocs/apollo-redux-next-website/components/ErrorMessage.js */"
  }));
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);





var Header = function Header(_ref) {
  var pathname = _ref.router.pathname;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-3970066506"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3970066506" + " " + ((pathname === '/' ? 'is-active' : '') || "")
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3970066506" + " " + ((pathname === '/about' ? 'is-active' : '') || "")
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/blog"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3970066506" + " " + ((pathname === '/blog' ? 'is-active' : '') || "")
  }, "Blog")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3970066506",
    css: "header.jsx-3970066506{margin-bottom:25px;}a.jsx-3970066506{font-size:14px;margin-right:15px;-webkit-text-decoration:none;text-decoration:none;}.is-active.jsx-3970066506{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjZ0IsQUFHNEIsQUFHSixBQUtXLGVBSlIsSUFIcEIsY0FJdUIsMkJBSXZCLHVCQUhBIiwiZmlsZSI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgSGVhZGVyID0gKHsgcm91dGVyOiB7IHBhdGhuYW1lIH0gfSkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy8nPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy8nID8gJ2lzLWFjdGl2ZScgOiAnJ30+SG9tZTwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2Fib3V0Jz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvYWJvdXQnID8gJ2lzLWFjdGl2ZScgOiAnJ30+QWJvdXQ8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9ibG9nJz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvYmxvZycgPyAnaXMtYWN0aXZlJyA6ICcnfT5CbG9nPC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAuaXMtYWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihIZWFkZXIpXG4iXX0= */\n/*@ sourceURL=/Applications/MAMP/htdocs/apollo-redux-next-website/components/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Header));

/***/ }),

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _PostVoteUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostVoteUp */ "./components/PostVoteUp.js");
/* harmony import */ var _PostVoteDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostVoteDown */ "./components/PostVoteDown.js");
/* harmony import */ var _PostVoteCount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostVoteCount */ "./components/PostVoteCount.js");


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query web($id: ID!) {\n    web(id: $id) {\n      Title\n      _id\n      Image {\n        url\n        ext\n        provider\n        size\n      }\n      Description\n      Data\n      URL\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










function Post(_ref) {
  var _ref$data = _ref.data,
      error = _ref$data.error,
      web = _ref$data.web;
  console.log(web);
  if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: "Error loading blog post."
  });

  if (web) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-3508637325"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: web.id,
      className: "jsx-3508637325"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-3508637325"
    }, web.Title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3508637325"
    }, "ID: ", web._id, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3508637325"
    }), "URL: ", web.URL), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3508637325"
    }, web.Description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3508637325"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: web.Image !== null ? "https://strapi.hulea.org/".concat(web.Image.url) : '',
      className: "jsx-3508637325"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3508637325"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostVoteUp__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: Post.id,
      votes: Post.votes
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostVoteCount__WEBPACK_IMPORTED_MODULE_8__["default"], {
      votes: Post.votes
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostVoteDown__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: Post.id,
      votes: Post.votes
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "3508637325",
      css: "span.jsx-3508637325{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:14px;margin-right:5px;}img.jsx-3508637325{width:100%;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJvQixBQUcwQixBQUtGLFdBQ0MsWUFDZCxtREFOaUIsZUFDRSxpQkFDbkIiLCJmaWxlIjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9hcG9sbG8tcmVkdXgtbmV4dC13ZWJzaXRlL2NvbXBvbmVudHMvUG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcbmltcG9ydCBQb3N0Vm90ZVVwIGZyb20gJy4vUG9zdFZvdGVVcCdcbmltcG9ydCBQb3N0Vm90ZURvd24gZnJvbSAnLi9Qb3N0Vm90ZURvd24nXG5pbXBvcnQgUG9zdFZvdGVDb3VudCBmcm9tICcuL1Bvc3RWb3RlQ291bnQnXG5cbmZ1bmN0aW9uIFBvc3QoeyBkYXRhOiB7IGVycm9yLCB3ZWIgfSB9KSB7XG4gIGNvbnNvbGUubG9nKHdlYilcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIGJsb2cgcG9zdC4nIC8+XG4gIGlmICh3ZWIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXYga2V5PXt3ZWIuaWR9PlxuICAgICAgICAgIDxoMT57d2ViLlRpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJRDoge3dlYi5faWR9XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFVSTDoge3dlYi5VUkx9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPnt3ZWIuRGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxwPjxpbWcgc3JjPXsgd2ViLkltYWdlICE9PSBudWxsID8gYGh0dHBzOi8vc3RyYXBpLmh1bGVhLm9yZy8ke3dlYi5JbWFnZS51cmx9YCA6ICcnIH0gLz48L3A+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8UG9zdFZvdGVVcCBpZD17UG9zdC5pZH0gdm90ZXM9e1Bvc3Qudm90ZXN9IC8+XG4gICAgICAgICAgICA8UG9zdFZvdGVDb3VudCB2b3Rlcz17UG9zdC52b3Rlc30gLz5cbiAgICAgICAgICAgIDxQb3N0Vm90ZURvd24gaWQ9e1Bvc3QuaWR9IHZvdGVzPXtQb3N0LnZvdGVzfSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG59XG5cbmNvbnN0IHBvc3QgPSBncWxgXG4gIHF1ZXJ5IHdlYigkaWQ6IElEISkge1xuICAgIHdlYihpZDogJGlkKSB7XG4gICAgICBUaXRsZVxuICAgICAgX2lkXG4gICAgICBJbWFnZSB7XG4gICAgICAgIHVybFxuICAgICAgICBleHRcbiAgICAgICAgcHJvdmlkZXJcbiAgICAgICAgc2l6ZVxuICAgICAgfVxuICAgICAgRGVzY3JpcHRpb25cbiAgICAgIERhdGFcbiAgICAgIFVSTFxuICAgICAgY3JlYXRlZEF0XG4gICAgICB1cGRhdGVkQXRcbiAgICB9XG4gIH1cbmBcblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChQb3N0TGlzdClcbmNvbnN0IENvbXBvbmVudFdpdGhNdXRhdGlvbiA9IGdyYXBocWwocG9zdCwge1xuICBvcHRpb25zOiAoeyByb3V0ZXI6IHsgcXVlcnkgfSB9KSA9PiAoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IHF1ZXJ5LmlkXG4gICAgfVxuICB9KSxcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhXG4gIH0pXG59KShQb3N0KVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENvbXBvbmVudFdpdGhNdXRhdGlvbilcbiJdfQ== */\n/*@ sourceURL=/Applications/MAMP/htdocs/apollo-redux-next-website/components/Post.js */"
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
}

var post = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject()); // The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)

var ComponentWithMutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["graphql"])(post, {
  options: function options(_ref2) {
    var query = _ref2.router.query;
    return {
      variables: {
        id: query.id
      }
    };
  },
  props: function props(_ref3) {
    var data = _ref3.data;
    return {
      data: data
    };
  }
})(Post);
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ComponentWithMutation));

/***/ }),

/***/ "./components/PostVoteButton.js":
/*!**************************************!*\
  !*** ./components/PostVoteButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var id = _ref.id,
      votes = _ref.votes,
      onClickHandler = _ref.onClickHandler,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return onClickHandler();
    },
    className: "jsx-1276813132" + " " + (className || "")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1276813132",
    css: "button.jsx-1276813132{background-color:transparent;border:1px solid #e4e4e4;color:#000;}button.jsx-1276813132:active{background-color:transparent;}button.jsx-1276813132:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-color:transparent transparent #000000 transparent;border-style:solid;border-width:0 4px 6px 4px;content:'';height:0;margin-right:0px;width:0;}.downvote.jsx-1276813132{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.upvote.jsx-1276813132{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL1Bvc3RWb3RlQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVnQixBQUdzQyxBQUtBLEFBR1gsQUFVTyxBQUdGLDZCQXBCRSxBQUszQix5QkFKYSxXQUNiLE1BTTJELFVBYTNELE1BSEEseUNBVHFCLG1CQUNRLDJCQUNoQixXQUNGLFNBQ1EsaUJBQ1QsUUFDViIsImZpbGUiOiIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2Fwb2xsby1yZWR1eC1uZXh0LXdlYnNpdGUvY29tcG9uZW50cy9Qb3N0Vm90ZUJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IGlkLCB2b3Rlcywgb25DbGlja0hhbmRsZXIsIGNsYXNzTmFtZSB9KSA9PiAoXG4gIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tIYW5kbGVyKCl9PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzAwMDAwMCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDRweCA2cHggNHB4O1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICB9XG4gICAgICAuZG93bnZvdGUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgfVxuICAgICAgLnVwdm90ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9idXR0b24+XG4pXG4iXX0= */\n/*@ sourceURL=/Applications/MAMP/htdocs/apollo-redux-next-website/components/PostVoteButton.js */"
  }));
});

/***/ }),

/***/ "./components/PostVoteCount.js":
/*!*************************************!*\
  !*** ./components/PostVoteCount.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var votes = _ref.votes;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3877751716"
  }, votes, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3877751716",
    css: "span.jsx-3877751716{padding:0.5em 0.5em;font-size:14px;color:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL1Bvc3RWb3RlQ291bnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2dCLEFBRzZCLG9CQUNMLGVBQ0QsY0FDaEIiLCJmaWxlIjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9hcG9sbG8tcmVkdXgtbmV4dC13ZWJzaXRlL2NvbXBvbmVudHMvUG9zdFZvdGVDb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IHZvdGVzIH0pID0+IChcbiAgPHNwYW4+XG4gICAge3ZvdGVzfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHNwYW4ge1xuICAgICAgICBwYWRkaW5nOiAwLjVlbSAwLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc3Bhbj5cbilcbiJdfQ== */\n/*@ sourceURL=/Applications/MAMP/htdocs/apollo-redux-next-website/components/PostVoteCount.js */"
  }));
});

/***/ }),

/***/ "./components/PostVoteDown.js":
/*!************************************!*\
  !*** ./components/PostVoteDown.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostVoteButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostVoteButton */ "./components/PostVoteButton.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      __typename\n      votes\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function PostVoteDown(_ref) {
  var downvote = _ref.downvote,
      votes = _ref.votes,
      id = _ref.id;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostVoteButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: id,
    votes: votes,
    className: "downvote",
    onClickHandler: function onClickHandler() {
      return downvote(id, votes - 1);
    }
  });
}

var downvotePost = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_1__["graphql"])(downvotePost, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      downvote: function downvote(id, votes) {
        return mutate({
          variables: {
            id: id,
            votes: votes
          },
          optimisticResponse: {
            __typename: 'Mutation',
            updatePost: {
              __typename: 'Post',
              id: ownProps.id,
              votes: ownProps.votes - 1
            }
          }
        });
      }
    };
  }
})(PostVoteDown));

/***/ }),

/***/ "./components/PostVoteUp.js":
/*!**********************************!*\
  !*** ./components/PostVoteUp.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostVoteButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostVoteButton */ "./components/PostVoteButton.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      __typename\n      votes\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function PostVoteUp(_ref) {
  var upvote = _ref.upvote,
      votes = _ref.votes,
      id = _ref.id;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostVoteButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: id,
    votes: votes,
    className: "upvote",
    onClickHandler: function onClickHandler() {
      return upvote(id, votes + 1);
    }
  });
}

var upvotePost = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_1__["graphql"])(upvotePost, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      upvote: function upvote(id, votes) {
        return mutate({
          variables: {
            id: id,
            votes: votes
          },
          optimisticResponse: {
            __typename: 'Mutation',
            updatePost: {
              __typename: 'Post',
              id: ownProps.id,
              votes: ownProps.votes + 1
            }
          }
        });
      }
    };
  }
})(PostVoteUp));

/***/ }),

/***/ "./lib/initApollo.js":
/*!***************************!*\
  !*** ./lib/initApollo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initApollo; });
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);




var apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (true) {
  global.fetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default.a;
}

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    connectToDevTools: false,
    ssrMode: !false,
    // Disables forceFetch on the server (so queries are only run once)
    link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
      uri: 'https://strapi.hulea.org/graphql',
      // Server URL (must be absolute)
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`

    }),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]().restore(initialState || {})
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return create(initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

/***/ }),

/***/ "./lib/withApollo.js":
/*!***************************!*\
  !*** ./lib/withApollo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _initApollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initApollo */ "./lib/initApollo.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Gets the display name of a JSX component for dev tools

function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

/* harmony default export */ __webpack_exports__["default"] = (function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithApollo, _React$Component);

    _createClass(WithApollo, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo, state;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Initial serverState with apollo (empty)
                  serverState = {
                    apollo: {
                      data: {}
                    } // Evaluate the composed component's getInitialProps()

                  };
                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:
                  if (false) {}

                  apollo = Object(_initApollo__WEBPACK_IMPORTED_MODULE_5__["default"])();
                  _context.prev = 8;
                  _context.next = 11;
                  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["getDataFromTree"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
                    client: apollo
                  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComposedComponent, composedInitialProps)), {
                    router: {
                      asPath: ctx.asPath,
                      pathname: ctx.pathname,
                      query: ctx.query
                    }
                  });

                case 11:
                  _context.next = 15;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](8);

                case 15:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  next_head__WEBPACK_IMPORTED_MODULE_4___default.a.rewind(); // Extract query data from the store

                  state = {}; // Extract query data from the Apollo store

                  serverState = Object.assign(state, {
                    apollo: {
                      data: apollo.cache.extract()
                    }
                  });

                case 18:
                  return _context.abrupt("return", _objectSpread({
                    serverState: serverState
                  }, composedInitialProps));

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[8, 13]]);
        }));

        function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithApollo(props) {
      var _this;

      _classCallCheck(this, WithApollo);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WithApollo).call(this, props));
      _this.apollo = Object(_initApollo__WEBPACK_IMPORTED_MODULE_5__["default"])(props.serverState.apollo.data);
      return _this;
    }

    _createClass(WithApollo, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
          client: this.apollo
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComposedComponent, this.props));
      }
    }]);

    return WithApollo;
  }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component), _defineProperty(_class, "displayName", "WithApollo(".concat(getComponentDisplayName(ComposedComponent), ")")), _defineProperty(_class, "propTypes", {
    serverState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
  }), _temp;
});

/***/ }),

/***/ "./pages/blog/entry.js":
/*!*****************************!*\
  !*** ./pages/blog/entry.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_withApollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/withApollo */ "./lib/withApollo.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/App */ "./components/App.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Post */ "./components/Post.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withApollo__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Post__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}));

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/blog/entry.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/blog/entry.js */"./pages/blog/entry.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=entry.js.map