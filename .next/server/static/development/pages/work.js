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

/***/ "./components/App.jsx":
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_font_inter_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/font/inter.css */ "./css/font/inter.css");
/* harmony import */ var _css_font_inter_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_font_inter_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ "./css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/document */ "next/document");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      Head = _ref.Head;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-4089680806"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4089680806",
    css: "*{font-family:\"Inter\",Menlo,Monaco,'Lucida Console','Liberation Mono','DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New',monospace,serif;}body{margin:0;padding:25px 50px;}p{font-size:14px;line-height:28px;}h1{font-size:1.5rem;}h2{line-height:40px;}section{padding-bottom:20px;max-width:900px;margin:0 auto;}button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22bad9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px;}button:active{background-color:#1b9db7;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}button:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPdUIsQUFHa0ssQUFHaEosQUFJTSxBQUlFLEFBR0EsQUFNRyxBQUtELEFBUU0sQUFJWixTQWpDSyxJQWtDcEIsRUE5Qm1CLEVBSW5CLEFBR0EsR0FNa0IsS0FhaUIsRUE3Qm5DLEtBSUEsSUFhZ0IsY0FDaEIsMkNBRzJCLE1BUzNCLG1CQVJXLFNBQ0csWUFDQyxLQTVCZixxRUE2QmtCLGdCQUNsQiIsImZpbGUiOiIvbW50L2Qvd2FtcDY0L3d3dy9hcG9sbG8tcmVkdXgtc2FnYS9jb21wb25lbnRzL0FwcC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Nzcy9mb250L2ludGVyLmNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9tYWluLmNzcyc7XG5pbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCBIZWFkIH0pID0+IChcbiAgPG1haW4+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAqIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgTWVubG8sIE1vbmFjbywgJ0x1Y2lkYSBDb25zb2xlJywgJ0xpYmVyYXRpb24gTW9ubycsICdEZWphVnUgU2FucyBNb25vJywgJ0JpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZSwgc2VyaWY7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDUwcHg7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgICAgYXJ0aWNsZSB7XG5cbiAgICAgIH1cbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiYWQ5O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogNXB4IDdweDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5ZGI3O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgICB9XG4gICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9tYWluPlxuKVxuIl19 */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/App.jsx */"
  }));
});

/***/ }),

/***/ "./components/ErrorMessage.jsx":
/*!*************************************!*\
  !*** ./components/ErrorMessage.jsx ***!
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
  var message = _ref.message;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
    className: "jsx-160792485"
  }, message, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "160792485",
    css: "aside.jsx-160792485{padding:1.5em;font-size:14px;color:white;background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHZ0IsQUFHdUIsY0FDQyxlQUNILFlBQ1MscUJBQ3ZCIiwiZmlsZSI6Ii9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IG1lc3NhZ2UgfSkgPT4gKFxuICA8YXNpZGU+XG4gICAge21lc3NhZ2V9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYXNpZGUge1xuICAgICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYXNpZGU+XG4pXG4iXX0= */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/ErrorMessage.jsx */"
  }));
});

/***/ }),

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
//===========//
// Footer.js //
//===========//



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontWeight: '900',
      marginBottom: '1rem'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", null, "Nick Hulea")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Contact: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    prefetch: "true",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Contact",
    alt: "Contact",
    href: "mailto:naeluh@gmail.com"
  }, "naeluh@gmail.com")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Github: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    prefetch: "true",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Github",
    alt: "Github",
    href: "https://github.com/naeluh"
  }, "https://github.com/naeluh")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    title: "About",
    alt: "About",
    prefetch: "true"
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/contact"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    title: "Contact",
    alt: "Contact",
    prefetch: "true"
  }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
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



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var links = [{
  href: '/',
  name: '127.0.0.1'
}, {
  href: '/work',
  name: 'work'
}, {
  href: '/contact',
  name: 'contact'
}, {
  href: '/about',
  name: 'about'
}];

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isActive: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleNav", function () {
      _this.setState(function (prevState) {
        return {
          isActive: !prevState.isActive
        };
      });
    });

    return _this;
  }

  _createClass(Header, [{
    key: "handleClick",
    value: function handleClick(event, url) {
      event.preventDefault();
      Router.push({
        pathname: "/work/".concat(url),
        asPath: "/work/".concat(url)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pathname = this.props.pathname;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-3585587421"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3585587421" + " " + ((this.state.isActive ? 'hide-overlay' : '') || "")
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-3585587421"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3585587421"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.toggleNav,
        "aria-label": this.state.isActive ? 'closed' : 'open',
        className: "jsx-3585587421" + " " + "list one"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "aria-label": this.state.isActive ? 'closed' : 'open',
        className: "jsx-3585587421" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3585587421" + " " + "overlay-content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        id: "close",
        onClick: this.toggleNav,
        className: "jsx-3585587421"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3585587421"
      }, "close")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        id: "weblist",
        className: "jsx-3585587421"
      }, links.map(function (link, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: index + 1,
          className: "jsx-3585587421" + " " + "bk"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: link.href
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          prefetch: "true",
          onClick: _this2.toggleNav,
          href: link.href,
          className: "jsx-3585587421" + " " + ((pathname === link.name ? 'is-active' : '') || "")
        }, link.name)));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3585587421",
        css: ".is-active.jsx-3585587421{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RG9CLEFBR3FDLDREQUM1QiIsImZpbGUiOiIvbW50L2Qvd2FtcDY0L3d3dy9hcG9sbG8tcmVkdXgtc2FnYS9jb21wb25lbnRzL0hlYWRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IGxpbmtzID0gW3tcbiAgaHJlZjogJy8nLFxuICBuYW1lOiAnMTI3LjAuMC4xJ1xufSwge1xuICBocmVmOiAnL3dvcmsnLFxuICBuYW1lOiAnd29yaydcbn0sIHtcbiAgaHJlZjogJy9jb250YWN0JyxcbiAgbmFtZTogJ2NvbnRhY3QnXG59LCB7XG4gIGhyZWY6ICcvYWJvdXQnLFxuICBuYW1lOiAnYWJvdXQnXG59XVxuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRlID0geyBpc0FjdGl2ZTogdHJ1ZSB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQsIHVybCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBSb3V0ZXIucHVzaCh7XG4gICAgICBwYXRobmFtZTogYC93b3JrLyR7dXJsfWAsXG4gICAgICBhc1BhdGg6IGAvd29yay8ke3VybH1gXG4gICAgfSk7XG4gIH1cbiAgXG5cbiAgdG9nZ2xlTmF2ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBpc0FjdGl2ZTogIXByZXZTdGF0ZS5pc0FjdGl2ZVxuICAgIH0pKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmlzQWN0aXZlID8gJ2hpZGUtb3ZlcmxheScgOiAnJ30+XG4gICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTmF2fSBjbGFzc05hbWU9XCJsaXN0IG9uZVwiIGFyaWEtbGFiZWw9e3RoaXMuc3RhdGUuaXNBY3RpdmUgPyAnY2xvc2VkJyA6ICdvcGVuJ30+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCIgYXJpYS1sYWJlbD17dGhpcy5zdGF0ZS5pc0FjdGl2ZSA/ICdjbG9zZWQnIDogJ29wZW4nfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheS1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTmF2fT48c3Bhbj5jbG9zZTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPHVsIGlkPVwid2VibGlzdFwiPlxuICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmtcIiBrZXk9e2luZGV4ICsgMX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsuaHJlZn0gPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIHByZWZldGNoPVwidHJ1ZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTmF2fSBocmVmPXtsaW5rLmhyZWZ9IGNsYXNzTmFtZT17cGF0aG5hbWUgPT09IGxpbmsubmFtZSA/ICdpcy1hY3RpdmUnIDogJyd9PntsaW5rLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pcy1hY3RpdmUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2hlYWRlcj5cbiAgICApXG4gIH1cbn1cblxuLyogXG5jb25zdCBIZWFkZXIgPSAoeyByb3V0ZXI6IHsgcGF0aG5hbWUgfSB9KSA9PiAoXG5cbiAgPGhlYWRlcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcyA/ICdoaWRlLW92ZXJsYXknIDogJyd9PlxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBvbkNsaWNrPXt0b2dnbGVOYXZ9IGNsYXNzTmFtZT1cImxpc3Qgb25lXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU5hdn0gaWQ9XCJtZW51X2J1dG9vblwiIGFyaWEtbGFiZWw9XCJjbG9zZWRcIiA+PC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheS1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBpZD1cImNsb3NlXCI+PHNwYW4+Y2xvc2U8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPHVsIGlkPVwid2VibGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJrXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy8nPjxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvJyA/ICdpcy1hY3RpdmUnIDogJyd9PjEyNy4wLjAuMTwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJrXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy93b3JrJz48YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL3dvcmsnID8gJ2lzLWFjdGl2ZScgOiAnJ30+V29yazwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJrXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9jb250YWN0Jz48YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2NvbnRhY3QnID8gJ2lzLWFjdGl2ZScgOiAnJ30+Q29udGFjdDwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJrXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+PGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9hYm91dCcgPyAnaXMtYWN0aXZlJyA6ICcnfT5BYm91dDwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogMTAwcHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIHRvcDogMDtcbiAgICAgIH1cbiAgICAgIGEge1xuXG4gICAgICB9XG4gICAgICAuaXMtYWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbikgKi9cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihIZWFkZXIpXG4iXX0= */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/Header.jsx */"
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* 
const Header = ({ router: { pathname } }) => (

  <header>
    <div className={this ? 'hide-overlay' : ''}>
      <nav>
        <ul>
          <li onClick={toggleNav} className="list one">
            <button onClick={toggleNav} id="menu_butoon" aria-label="closed" ></button>
          </li>
        </ul>
      </nav>
      <div className="overlay">
        <div className="overlay-content">
          <div id="close"><span>close</span></div>
          <ul id="weblist">
            <li className="bk">
              <Link prefetch href='/'><a className={pathname === '/' ? 'is-active' : ''}>127.0.0.1</a></Link>
            </li>
            <li className="bk">
              <Link prefetch href='/work'><a className={pathname === '/work' ? 'is-active' : ''}>Work</a></Link>
            </li>
            <li className="bk">
              <Link prefetch href='/contact'><a className={pathname === '/contact' ? 'is-active' : ''}>Contact</a></Link>
            </li>
            <li className="bk">
              <Link prefetch href='/about'><a className={pathname === '/about' ? 'is-active' : ''}>About</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <style jsx>{`
      header {
        position: fixed;
        right: 100px;
        z-index: 9999;
        top: 0;
      }
      a {

      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
) */


/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Header));

/***/ }),

/***/ "./components/PostList.jsx":
/*!*********************************!*\
  !*** ./components/PostList.jsx ***!
  \*********************************/
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
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);



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

function handleClick(event, id, url) {
  event.preventDefault();
  _routes__WEBPACK_IMPORTED_MODULE_4__["Router"].push({
    pathname: "/work/".concat(url),
    asPath: "/work/".concat(url)
  });
}

function PostList(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      webs = _ref$data.webs,
      title = _ref.title,
      extraClass = _ref.extraClass;
  if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: "Error loading posts."
  });

  if (webs && webs.length) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-756836106" + " " + (extraClass || "")
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, title === undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      className: "jsx-756836106"
    }, "Work"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "title",
      content: "Nick Hulea's Work and Projects",
      className: "jsx-756836106"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "description",
      content: "Nick Hulea's Work and Projects",
      className: "jsx-756836106"
    })) : ''), title === undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-756836106"
    }, "Work") : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-756836106"
    }, webs.map(function (post, index) {
      return post.URL !== title ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: index + 1,
        className: "jsx-756836106"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        props: post._id,
        href: "/work/".concat(post.Data.Link),
        onClick: function onClick(event) {
          return handleClick(event, post._id, post.Data.Link);
        },
        className: "jsx-756836106"
      }, post.Image !== null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          backgroundImage: "url(https://strapi.hulea.org/".concat(post.Image.url, ")")
        },
        className: "jsx-756836106" + " " + "imgHero"
      }) : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-756836106"
      }, post.Title))) : '';
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "756836106",
      css: "*.jsx-756836106{box-sizing:border-box;}section.jsx-756836106{padding-bottom:20px;max-width:900px;margin:0 auto;}a.jsx-756836106{position:relative;}ul.jsx-756836106{margin:0;padding:0;list-style:none;}li.jsx-756836106{border:1rem solid #111;margin-bottom:2em;}h2.jsx-756836106{position:absolute;bottom:-10px;left:10px;padding:10px 25px;color:#fff;background-color:#111;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvUG9zdExpc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0IsQUFHbUMsQUFHRixBQUtGLEFBR1QsQUFLYyxBQUlMLFNBUlIsU0FIWixBQVllLENBUkcsQ0FUQSxFQUhsQixDQWdCb0IsUUFLUixJQVJaLENBVGdCLEtBYWhCLEFBS29CLFNBakJwQixTQWtCYSxXQUNXLHNCQUN4QiIsImZpbGUiOiIvbW50L2Qvd2FtcDY0L3d3dy9hcG9sbG8tcmVkdXgtc2FnYS9jb21wb25lbnRzL1Bvc3RMaXN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAxMFxuXG5mdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCwgaWQsIHVybCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIFJvdXRlci5wdXNoKHtcbiAgICBwYXRobmFtZTogYC93b3JrLyR7dXJsfWAsXG4gICAgYXNQYXRoOiBgL3dvcmsvJHt1cmx9YFxuICB9KTtcbn1cblxuZnVuY3Rpb24gUG9zdExpc3QoeyBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCB3ZWJzIH0sIHRpdGxlLCBleHRyYUNsYXNzIH0pIHtcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIHBvc3RzLicgLz5cbiAgaWYgKHdlYnMgJiYgd2Vicy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtleHRyYUNsYXNzfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAge3RpdGxlID09PSB1bmRlZmluZWQgPyBcbiAgICAgICAgICA8PlxuICAgICAgICAgIDx0aXRsZT5Xb3JrPC90aXRsZT4gXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD1cIk5pY2sgSHVsZWEncyBXb3JrIGFuZCBQcm9qZWN0c1wiPjwvbWV0YT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTmljayBIdWxlYSdzIFdvcmsgYW5kIFByb2plY3RzXCI+PC9tZXRhPlxuICAgICAgICAgIDwvPlxuICAgICAgICAgIDogJyd9XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAge3RpdGxlID09PSB1bmRlZmluZWQgPyA8aDE+V29yazwvaDE+IDogJyd9XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7d2Vicy5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICBwb3N0LlVSTCAhPT0gdGl0bGUgPyA8bGkga2V5PXtpbmRleCArIDF9PlxuICAgICAgICAgICAgICA8YSBwcm9wcz17cG9zdC5faWR9IGhyZWY9e2Avd29yay8ke3Bvc3QuRGF0YS5MaW5rfWB9IG9uQ2xpY2s9e2V2ZW50ID0+IGhhbmRsZUNsaWNrKGV2ZW50LCBwb3N0Ll9pZCwgcG9zdC5EYXRhLkxpbmspfT5cbiAgICAgICAgICAgICAgICB7cG9zdC5JbWFnZSAhPT0gbnVsbCA/IDxzcGFuIGNsYXNzTmFtZT1cImltZ0hlcm9cIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly9zdHJhcGkuaHVsZWEub3JnLyR7cG9zdC5JbWFnZS51cmx9KWAgfX0+PC9zcGFuPiA6ICcnfVxuICAgICAgICAgICAgICAgIDxoMj57cG9zdC5UaXRsZX08L2gyPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPiA6ICcnXG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgYm9yZGVyOiAxcmVtIHNvbGlkICMxMTE7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG59XG5cbmV4cG9ydCBjb25zdCBhbGxQb3N0cyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHdlYnMge1xuICAgICAgX2lkXG4gICAgICBUaXRsZVxuICAgICAgSW1hZ2Uge1xuICAgICAgICB1cmxcbiAgICAgICAgZXh0XG4gICAgICAgIHByb3ZpZGVyXG4gICAgICAgIHNpemVcbiAgICAgIH1cbiAgICAgIERlc2NyaXB0aW9uXG4gICAgICBEYXRhXG4gICAgICBVUkxcbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXBkYXRlZEF0XG4gICAgfVxuICB9XG5gXG5cblxuZXhwb3J0IGNvbnN0IGFsbFBvc3RzUXVlcnlWYXJzID0ge1xuICBza2lwOiAwLFxuICBmaXJzdDogUE9TVFNfUEVSX1BBR0Vcbn1cblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChQb3N0TGlzdClcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoYWxsUG9zdHMsIHtcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhLFxuICAgIGxvYWRNb3JlUG9zdHM6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNraXA6IGRhdGEuYWxsUG9zdHMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdHMgcmVzdWx0cyB0byB0aGUgb2xkIG9uZVxuICAgICAgICAgICAgYWxsUG9zdHM6IFsuLi5wcmV2aW91c1Jlc3VsdC5hbGxQb3N0cywgLi4uZmV0Y2hNb3JlUmVzdWx0LmFsbFBvc3RzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSkoUG9zdExpc3QpXG4iXX0= */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/PostList.jsx */"
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

/***/ "./css/font/inter.css":
/*!****************************!*\
  !*** ./css/font/inter.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./pages/work/index.js":
/*!*****************************!*\
  !*** ./pages/work/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_withApollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/withApollo */ "./lib/withApollo.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/App */ "./components/App.jsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.jsx");
/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostList */ "./components/PostList.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.jsx");
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
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PostList__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
    }
  }]);

  return BlogIndex;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withApollo__WEBPACK_IMPORTED_MODULE_1__["default"])(BlogIndex));

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

routes.add('work/entry', '/work/:url');

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/work/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/work/index.js */"./pages/work/index.js");


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

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/document":
/*!********************************!*\
  !*** external "next/document" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/document");

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
//# sourceMappingURL=work.js.map