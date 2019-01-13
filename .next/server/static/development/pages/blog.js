module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
    css: "*{font-family:Menlo,Monaco,'Lucida Console','Liberation Mono', 'DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New', monospace,serif;}body{margin:0;padding:25px 50px;}a{color:#22bad9;}p{font-size:14px;line-height:24px;}h1{font-size:1.5rem;}article{text-align:left;margin:0;max-width:650px;}button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22bad9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px;}button:active{background-color:#1b9db7;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}button:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixBQUsyQixBQUdULEFBSUssQUFHQyxBQUlFLEFBR0QsQUFLRyxBQVFNLEFBSVosU0E5QkssSUErQnBCLENBM0JBLENBR21CLENBT1IsQ0FIWCxRQUlrQixBQVlpQixFQTFCbkMsS0FPQSxTQVFBLG9EQUcyQixNQVMzQixtQkFSVyxTQUNHLFdBeEJkLENBeUJlLDBFQUNHLGdCQUNsQiIsImZpbGUiOiIvbW50L2Qvd2FtcDY0L3d3dy9hcG9sbG8tcmVkdXgtc2FnYS9jb21wb25lbnRzL0FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPG1haW4+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAqIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sICdMdWNpZGEgQ29uc29sZScsICdMaWJlcmF0aW9uIE1vbm8nLFxuICAgICAgICAgICdEZWphVnUgU2FucyBNb25vJywgJ0JpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubycsICdDb3VyaWVyIE5ldycsXG4gICAgICAgICAgbW9ub3NwYWNlLCBzZXJpZjtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggNTBweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzIyYmFkOTtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgIGFydGljbGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiYWQ5O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogNXB4IDdweDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5ZGI3O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgICB9XG4gICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9tYWluPlxuKVxuIl19 */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/App.js */"
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
    css: "aside.jsx-160792485{padding:1.5em;font-size:14px;color:white;background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdnQixBQUd1QixjQUNDLGVBQ0gsWUFDUyxxQkFDdkIiLCJmaWxlIjoiL21udC9kL3dhbXA2NC93d3cvYXBvbGxvLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBtZXNzYWdlIH0pID0+IChcbiAgPGFzaWRlPlxuICAgIHttZXNzYWdlfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGFzaWRlIHtcbiAgICAgICAgcGFkZGluZzogMS41ZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2FzaWRlPlxuKVxuIl19 */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/ErrorMessage.js */"
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
    css: "header.jsx-3970066506{margin-bottom:25px;}a.jsx-3970066506{font-size:14px;margin-right:15px;-webkit-text-decoration:none;text-decoration:none;}.is-active.jsx-3970066506{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNnQixBQUc0QixBQUdKLEFBS1csZUFKUixJQUhwQixjQUl1QiwyQkFJdkIsdUJBSEEiLCJmaWxlIjoiL21udC9kL3dhbXA2NC93d3cvYXBvbGxvLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEhlYWRlciA9ICh7IHJvdXRlcjogeyBwYXRobmFtZSB9IH0pID0+IChcbiAgPGhlYWRlcj5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvJyA/ICdpcy1hY3RpdmUnIDogJyd9PkhvbWU8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Fib3V0JyA/ICdpcy1hY3RpdmUnIDogJyd9PkFib3V0PC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvYmxvZyc+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Jsb2cnID8gJ2lzLWFjdGl2ZScgOiAnJ30+QmxvZzwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLmlzLWFjdGl2ZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSGVhZGVyKVxuIl19 */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Header));

/***/ }),

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
/*! exports provided: allPosts, allPostsQueryVars, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPosts", function() { return allPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPostsQueryVars", function() { return allPostsQueryVars; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    webs {\n      _id\n      Title\n      Image {\n        url\n        ext\n        provider\n        size\n      }\n      Description\n      Data\n      URL\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var POSTS_PER_PAGE = 10;

function handleClick(event, id) {
  event.preventDefault(); // With route name and params
  // Router.pushRoute('blog/entry', { id: id })
  // With route URL

  _routes__WEBPACK_IMPORTED_MODULE_4__["Router"].pushRoute("/blog/".concat(id));
}

function PostList(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      allPosts = _ref$data.allPosts,
      _allPostsMeta = _ref$data._allPostsMeta,
      webs = _ref$data.webs,
      loadMorePosts = _ref.loadMorePosts;
  console.log(webs);
  if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: "Error loading posts."
  });

  if (webs && webs.length) {
    var areMorePosts = false;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-2126052553"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-2126052553"
    }, webs.map(function (post, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: index + 1,
        className: "jsx-2126052553"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2126052553"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2126052553"
      }, index + 1, ". "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/blog/".concat(post._id),
        onClick: function onClick(event) {
          return handleClick(event, post._id);
        },
        className: "jsx-2126052553"
      }, post.Title)));
    })), areMorePosts ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        return loadMorePosts();
      },
      className: "jsx-2126052553"
    }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "2126052553",
      css: "section.jsx-2126052553{padding-bottom:20px;}li.jsx-2126052553{display:block;margin-bottom:10px;}div.jsx-2126052553{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-2126052553{font-size:14px;margin-right:10px;-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;}span.jsx-2126052553{font-size:14px;margin-right:5px;}ul.jsx-2126052553{margin:0;padding:0;}button.jsx-2126052553:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:'';height:0;margin-right:5px;width:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvUG9zdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RvQixBQUdpQyxBQUdOLEFBSUssQUFJSixBQU9BLEFBSU4sQUFJUyxTQUhSLEtBbkJTLENBUUQsQUFPRCxJQUtuQixDQXZCQSxZQW1CQSxDQWZBLEFBUXVCLHNDQWNGLFlBYkYsT0FjVSxHQXBCZCxPQU9KLFNBQ1gsUUFhMkQsa0RBcEIzRCxPQXFCYSxXQUNGLFNBQ1EsaUJBQ1QsUUFDViIsImZpbGUiOiIvbW50L2Qvd2FtcDY0L3d3dy9hcG9sbG8tcmVkdXgtc2FnYS9jb21wb25lbnRzL1Bvc3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJ1xuXG5jb25zdCBQT1NUU19QRVJfUEFHRSA9IDEwXG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrIChldmVudCwgaWQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAvLyBXaXRoIHJvdXRlIG5hbWUgYW5kIHBhcmFtc1xuICAvLyBSb3V0ZXIucHVzaFJvdXRlKCdibG9nL2VudHJ5JywgeyBpZDogaWQgfSlcbiAgLy8gV2l0aCByb3V0ZSBVUkxcbiAgUm91dGVyLnB1c2hSb3V0ZShgL2Jsb2cvJHtpZH1gKVxufVxuXG5mdW5jdGlvbiBQb3N0TGlzdCAoe1xuICBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCBhbGxQb3N0cywgX2FsbFBvc3RzTWV0YSwgd2VicyB9LFxuICBsb2FkTW9yZVBvc3RzXG59KSB7XG4gIGNvbnNvbGUubG9nKHdlYnMpXG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT0nRXJyb3IgbG9hZGluZyBwb3N0cy4nIC8+XG4gIGlmICh3ZWJzICYmIHdlYnMubGVuZ3RoKSB7XG4gICAgY29uc3QgYXJlTW9yZVBvc3RzID0gZmFsc2VcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7d2Vicy5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleCArIDF9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPntpbmRleCArIDF9LiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYmxvZy8ke3Bvc3QuX2lkfWB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiBoYW5kbGVDbGljayhldmVudCwgcG9zdC5faWQpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwb3N0LlRpdGxlfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7YXJlTW9yZVBvc3RzID8gKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbG9hZE1vcmVQb3N0cygpfT5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICB7bG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTaG93IE1vcmUnfXsnICd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgJydcbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDZweCA0cHggMCA0cHg7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbn1cblxuZXhwb3J0IGNvbnN0IGFsbFBvc3RzID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgd2VicyB7XG4gICAgICBfaWRcbiAgICAgIFRpdGxlXG4gICAgICBJbWFnZSB7XG4gICAgICAgIHVybFxuICAgICAgICBleHRcbiAgICAgICAgcHJvdmlkZXJcbiAgICAgICAgc2l6ZVxuICAgICAgfVxuICAgICAgRGVzY3JpcHRpb25cbiAgICAgIERhdGFcbiAgICAgIFVSTFxuICAgICAgY3JlYXRlZEF0XG4gICAgICB1cGRhdGVkQXRcbiAgICB9XG4gIH1cbmBcblxuXG5leHBvcnQgY29uc3QgYWxsUG9zdHNRdWVyeVZhcnMgPSB7XG4gIHNraXA6IDAsXG4gIGZpcnN0OiBQT1NUU19QRVJfUEFHRVxufVxuXG4vLyBUaGUgYGdyYXBocWxgIHdyYXBwZXIgZXhlY3V0ZXMgYSBHcmFwaFFMIHF1ZXJ5IGFuZCBtYWtlcyB0aGUgcmVzdWx0c1xuLy8gYXZhaWxhYmxlIG9uIHRoZSBgZGF0YWAgcHJvcCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgKFBvc3RMaXN0KVxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChhbGxQb3N0cywge1xuICBwcm9wczogKHsgZGF0YSB9KSA9PiAoe1xuICAgIGRhdGEsXG4gICAgbG9hZE1vcmVQb3N0czogKCkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGEuZmV0Y2hNb3JlKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgc2tpcDogZGF0YS5hbGxQb3N0cy5sZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2aW91c1Jlc3VsdCwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSZXN1bHRcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBwb3N0cyByZXN1bHRzIHRvIHRoZSBvbGQgb25lXG4gICAgICAgICAgICBhbGxQb3N0czogWy4uLnByZXZpb3VzUmVzdWx0LmFsbFBvc3RzLCAuLi5mZXRjaE1vcmVSZXN1bHQuYWxsUG9zdHNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KShQb3N0TGlzdClcbiJdfQ== */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/PostList.js */"
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
}

var allPosts = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var allPostsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE // The `graphql` wrapper executes a GraphQL query and makes the results
  // available on the `data` prop of the wrapped component (PostList)

};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(allPosts, {
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data,
      loadMorePosts: function loadMorePosts() {
        return data.fetchMore({
          variables: {
            skip: data.allPosts.length
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }

            return Object.assign({}, previousResult, {
              // Append the new posts results to the old one
              allPosts: [].concat(_toConsumableArray(previousResult.allPosts), _toConsumableArray(fetchMoreResult.allPosts))
            });
          }
        });
      }
    };
  }
})(PostList));

/***/ }),

/***/ "./components/Submit.js":
/*!******************************!*\
  !*** ./components/Submit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PostList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostList */ "./components/PostList.js");



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function Submit(_ref) {
  var createPost = _ref.createPost;

  function handleSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new window.FormData(form);
    createPost(formData.get('title'), formData.get('url'));
    form.reset();
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "jsx-778314498"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-778314498"
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "title",
    name: "title",
    type: "text",
    required: true,
    className: "jsx-778314498"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "url",
    name: "url",
    type: "url",
    required: true,
    className: "jsx-778314498"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    className: "jsx-778314498"
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "778314498",
    css: "form.jsx-778314498{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px;}input.jsx-778314498{display:block;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvU3VibWl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHMkMsQUFLbEIsY0FDSyxrQkFMQyxDQU10QixtQkFMcUIsbUJBQ3JCIiwiZmlsZSI6Ii9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvU3VibWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBhbGxQb3N0cywgYWxsUG9zdHNRdWVyeVZhcnMgfSBmcm9tICcuL1Bvc3RMaXN0J1xuXG5mdW5jdGlvbiBTdWJtaXQgKHsgY3JlYXRlUG9zdCB9KSB7XG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyB3aW5kb3cuRm9ybURhdGEoZm9ybSlcbiAgICBjcmVhdGVQb3N0KGZvcm1EYXRhLmdldCgndGl0bGUnKSwgZm9ybURhdGEuZ2V0KCd1cmwnKSlcblxuICAgIGZvcm0ucmVzZXQoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxoMT5TdWJtaXQ8L2gxPlxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSd0aXRsZScgbmFtZT0ndGl0bGUnIHR5cGU9J3RleHQnIHJlcXVpcmVkIC8+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J3VybCcgbmFtZT0ndXJsJyB0eXBlPSd1cmwnIHJlcXVpcmVkIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9idXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuY29uc3QgY3JlYXRlUG9zdCA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlUG9zdCgkdGl0bGU6IFN0cmluZyEsICR1cmw6IFN0cmluZyEpIHtcbiAgICBjcmVhdGVQb3N0KHRpdGxlOiAkdGl0bGUsIHVybDogJHVybCkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICBjcmVhdGVkQXRcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChjcmVhdGVQb3N0LCB7XG4gIHByb3BzOiAoeyBtdXRhdGUgfSkgPT4gKHtcbiAgICBjcmVhdGVQb3N0OiAodGl0bGUsIHVybCkgPT5cbiAgICAgIG11dGF0ZSh7XG4gICAgICAgIHZhcmlhYmxlczogeyB0aXRsZSwgdXJsIH0sXG4gICAgICAgIHVwZGF0ZTogKHByb3h5LCB7IGRhdGE6IHsgY3JlYXRlUG9zdCB9IH0pID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcHJveHkucmVhZFF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBhbGxQb3N0cyxcbiAgICAgICAgICAgIHZhcmlhYmxlczogYWxsUG9zdHNRdWVyeVZhcnNcbiAgICAgICAgICB9KVxuICAgICAgICAgIHByb3h5LndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6IGFsbFBvc3RzLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICBhbGxQb3N0czogW2NyZWF0ZVBvc3QsIC4uLmRhdGEuYWxsUG9zdHNdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBhbGxQb3N0c1F1ZXJ5VmFyc1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH0pXG59KShTdWJtaXQpXG4iXX0= */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/Submit.js */"
  }));
}

var createPost = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(createPost, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createPost: function createPost(title, url) {
        return mutate({
          variables: {
            title: title,
            url: url
          },
          update: function update(proxy, _ref3) {
            var createPost = _ref3.data.createPost;
            var data = proxy.readQuery({
              query: _PostList__WEBPACK_IMPORTED_MODULE_4__["allPosts"],
              variables: _PostList__WEBPACK_IMPORTED_MODULE_4__["allPostsQueryVars"]
            });
            proxy.writeQuery({
              query: _PostList__WEBPACK_IMPORTED_MODULE_4__["allPosts"],
              data: _objectSpread({}, data, {
                allPosts: [createPost].concat(_toConsumableArray(data.allPosts))
              }),
              variables: _PostList__WEBPACK_IMPORTED_MODULE_4__["allPostsQueryVars"]
            });
          }
        });
      }
    };
  }
})(Submit));

/***/ }),

/***/ "./lib/clock/actions.js":
/*!******************************!*\
  !*** ./lib/clock/actions.js ***!
  \******************************/
/*! exports provided: actionTypes, startClock, tickClock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startClock", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickClock", function() { return tickClock; });
var actionTypes = {
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK'
};
function startClock() {
  var isServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    type: actionTypes.START_CLOCK,
    light: isServer,
    lastUpdate: null
  };
}
function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    lastUpdate: Date.now()
  };
}

/***/ }),

/***/ "./lib/clock/reducers.js":
/*!*******************************!*\
  !*** ./lib/clock/reducers.js ***!
  \*******************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/clock/actions.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  lastUpdate: 0,
  light: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].TICK_CLOCK:
      return _objectSpread({}, state, {
        lastUpdate: action.lastUpdate,
        light: !!action.light
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./lib/clock/sagas.js":
/*!****************************!*\
  !*** ./lib/clock/sagas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./lib/clock/actions.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(runClockSaga);






es6_promise__WEBPACK_IMPORTED_MODULE_3___default.a.polyfill();

function runClockSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function runClockSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["take"])(_actions__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].START_CLOCK);

        case 2:
          if (false) {}

          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["tickClock"])(false));

        case 5:
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(redux_saga__WEBPACK_IMPORTED_MODULE_1__["delay"], 800);

        case 7:
          _context.next = 2;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(runClockSaga));

/***/ }),

/***/ "./lib/count/actions.js":
/*!******************************!*\
  !*** ./lib/count/actions.js ***!
  \******************************/
/*! exports provided: actionTypes, countIncrease, countDecrease */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countIncrease", function() { return countIncrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countDecrease", function() { return countDecrease; });
var actionTypes = {
  COUNT_INCREASE: 'COUNT_INCREASE',
  COUNT_DECREASE: 'COUNT_DECREASE'
};
function countIncrease() {
  return {
    type: actionTypes.COUNT_INCREASE
  };
}
function countDecrease() {
  return {
    type: actionTypes.COUNT_DECREASE
  };
}

/***/ }),

/***/ "./lib/count/reducers.js":
/*!*******************************!*\
  !*** ./lib/count/reducers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/count/actions.js");

var initialState = 0;

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].COUNT_INCREASE:
      return state + 1;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].COUNT_DECREASE:
      return state - 1;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/***/ "./lib/placeholder/actions.js":
/*!************************************!*\
  !*** ./lib/placeholder/actions.js ***!
  \************************************/
/*! exports provided: actionTypes, loadData, loadDataSuccess, loadDataError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataSuccess", function() { return loadDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataError", function() { return loadDataError; });
var actionTypes = {
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_DATA_ERROR: 'LOAD_DATA_ERROR'
};
function loadData() {
  return {
    type: actionTypes.LOAD_DATA
  };
}
function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data: data
  };
}
function loadDataError(error) {
  return {
    type: actionTypes.LOAD_DATA_ERROR,
    error: error
  };
}

/***/ }),

/***/ "./lib/placeholder/reducers.js":
/*!*************************************!*\
  !*** ./lib/placeholder/reducers.js ***!
  \*************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/placeholder/actions.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  data: null,
  error: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_DATA_SUCCESS:
      return _objectSpread({}, state, {
        data: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_DATA_ERROR:
      return _objectSpread({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./lib/placeholder/sagas.js":
/*!**********************************!*\
  !*** ./lib/placeholder/sagas.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./lib/placeholder/actions.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadDataSaga);





es6_promise__WEBPACK_IMPORTED_MODULE_2___default.a.polyfill();

function loadDataSaga() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadDataSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://jsonplaceholder.typicode.com/users');

        case 3:
          res = _context.sent;
          _context.next = 6;
          return res.json();

        case 6:
          data = _context.sent;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadDataSuccess"])(data));

        case 9:
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadDataError"])(_context.t0));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 11]]);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].LOAD_DATA, loadDataSaga));

/***/ }),

/***/ "./lib/rootReducer.js":
/*!****************************!*\
  !*** ./lib/rootReducer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _clock_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock/reducers */ "./lib/clock/reducers.js");
/* harmony import */ var _count_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./count/reducers */ "./lib/count/reducers.js");
/* harmony import */ var _placeholder_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholder/reducers */ "./lib/placeholder/reducers.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  clock: _clock_reducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  count: _count_reducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  placeholder: _placeholder_reducers__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./lib/rootSaga.js":
/*!*************************!*\
  !*** ./lib/rootSaga.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _clock_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clock/sagas */ "./lib/clock/sagas.js");
/* harmony import */ var _placeholder_sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholder/sagas */ "./lib/placeholder/sagas.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);





function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([_clock_sagas__WEBPACK_IMPORTED_MODULE_2__["default"], _placeholder_sagas__WEBPACK_IMPORTED_MODULE_3__["default"]]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

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

/***/ "./lib/withReduxSaga.js":
/*!******************************!*\
  !*** ./lib/withReduxSaga.js ***!
  \******************************/
/*! exports provided: configureStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rootReducer */ "./lib/rootReducer.js");
/* harmony import */ var _rootSaga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rootSaga */ "./lib/rootSaga.js");







var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_5__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(sagaMiddleware)));
  store.sagaTask = sagaMiddleware.run(_rootSaga__WEBPACK_IMPORTED_MODULE_6__["default"]);
  return store;
}
/* harmony default export */ __webpack_exports__["default"] = (function (BaseComponent) {
  return next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(configureStore)(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(BaseComponent));
});

/***/ }),

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_withApollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/withApollo */ "./lib/withApollo.js");
/* harmony import */ var _lib_withReduxSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/withReduxSaga */ "./lib/withReduxSaga.js");
/* harmony import */ var _lib_clock_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/clock/actions */ "./lib/clock/actions.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/App */ "./components/App.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Submit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Submit */ "./components/Submit.js");
/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PostList */ "./components/PostList.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var BlogIndex =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlogIndex, _React$Component);

  function BlogIndex() {
    _classCallCheck(this, BlogIndex);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlogIndex).apply(this, arguments));
  }

  _createClass(BlogIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch(Object(_lib_clock_actions__WEBPACK_IMPORTED_MODULE_3__["startClock"])());
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Submit__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PostList__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return BlogIndex;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withReduxSaga__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_lib_withApollo__WEBPACK_IMPORTED_MODULE_1__["default"])(BlogIndex)));

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Parameterized Routing with next-route
 *
 * Benefits: Less code, and easily handles complex url structures
 **/
var routes = module.exports = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('blog/entry', '/blog/:id');

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/blog/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/blog/index.js */"./pages/blog/index.js");


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

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

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

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

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
//# sourceMappingURL=blog.js.map