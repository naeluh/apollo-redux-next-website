webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home.jsx":
/*!*****************************!*\
  !*** ./components/Home.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);


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






var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      height: '',
      width: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRandomArbitrary", function (min, max) {
      return Math.random() * (max - min) + min;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "color", function () {
      return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "r", _this.getRandomArbitrary(1.3432, 70.6546));

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.style.overflowX = "hidden";
      var client = react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.findDOMNode(this.refs['block']).getBoundingClientRect();
      this.setState(function (state) {
        return {
          height: window.innerHeight,
          width: window.innerWidth
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-2981538694" + " " + "offset60"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-2981538694"
      }, "Nick Hulea")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        id: "title",
        className: "jsx-2981538694"
      }, "Nick Hulea"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        id: "description",
        className: "jsx-2981538694"
      }, "Hello you have arrived at the website of Nick Hulea !"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2981538694"
      }, "Samples of my work can be found ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: "true",
        href: "/work"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-2981538694"
      }, "here")), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2981538694"
      }, "If you would like to contact me or if you have any questions click ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: "true",
        href: "/contact"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-2981538694"
      }, "here")), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "block",
        ref: "block",
        style: {
          transform: 'rotate3d(1, 1, 1, ' + this.r + 'deg)',
          backgroundColor: this.color(),
          height: this.state.height,
          width: this.state.width
        },
        className: "jsx-2981538694"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2981538694" + " " + "clear"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2981538694",
        css: "body.jsx-2981538694,#block.jsx-2981538694{overflow-x:hidden;}#block.jsx-2981538694{position:absolute;top:0;left:0;}.clear.jsx-2981538694{clear:both;height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL0hvbWUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREb0IsQUFHNEIsQUFHQyxBQUtSLFdBQ0csT0FSZixBQUdRLE1BQ0MsQUFLVCxPQUpBIiwiZmlsZSI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL0hvbWUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGhlaWdodDogJycsXHJcbiAgICB3aWR0aDogJydcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1ggPSBcImhpZGRlblwiO1xyXG4gICAgY29uc3QgY2xpZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzWydibG9jayddKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xyXG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIGdldFJhbmRvbUFyYml0cmFyeSA9IChtaW4sIG1heCkgPT4ge1xyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pblxyXG4gIH1cclxuXHJcbiAgY29sb3IgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJyMnICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMiwgOCkudG9VcHBlckNhc2UoKVxyXG4gIH1cclxuXHJcbiAgciA9IHRoaXMuZ2V0UmFuZG9tQXJiaXRyYXJ5KDEuMzQzMiwgNzAuNjU0NilcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib2Zmc2V0NjBcIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5OaWNrIEh1bGVhPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgIDxoMSBpZD1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgIE5pY2sgSHVsZWFcclxuICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgPHAgaWQ9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBIZWxsbyB5b3UgaGF2ZSBhcnJpdmVkIGF0IHRoZSB3ZWJzaXRlIG9mIE5pY2sgSHVsZWEgIVxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIDxwPlNhbXBsZXMgb2YgbXkgd29yayBjYW4gYmUgZm91bmQgPExpbmsgcHJlZmV0Y2g9XCJ0cnVlXCIgaHJlZj1cIi93b3JrXCI+PGE+aGVyZTwvYT48L0xpbms+LjwvcD5cclxuXHJcbiAgICAgICAgICA8cD5JZiB5b3Ugd291bGQgbGlrZSB0byBjb250YWN0IG1lIG9yIGlmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgY2xpY2sgPExpbmsgcHJlZmV0Y2g9XCJ0cnVlXCIgaHJlZj1cIi9jb250YWN0XCI+PGE+aGVyZTwvYT48L0xpbms+LjwvcD5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGlkPVwiYmxvY2tcIiByZWY9XCJibG9ja1wiIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUzZCgxLCAxLCAxLCAnICsgdGhpcy5yICsgJ2RlZyknLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmNvbG9yKCksXHJcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUud2lkdGhcclxuICAgICAgICB9fT48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiPjwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBib2R5LCAjYmxvY2sge1xyXG4gICAgICAgICAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNibG9jayB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xlYXIge1xyXG4gICAgICAgICAgY2xlYXI6Ym90aDtcclxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXX0= */\n/*@ sourceURL=/Applications/MAMP/htdocs/apollo-redux-next-website/components/Home.jsx */"
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.82829905f0fef78343e8.hot-update.js.map