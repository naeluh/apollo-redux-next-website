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
        className: "jsx-4052954295" + " " + "offset60"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-4052954295"
      }, "Nick Hulea")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        id: "title",
        className: "jsx-4052954295"
      }, "Welcome!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        id: "description",
        className: "jsx-4052954295"
      }, "Hello you have arrived at the website of Nick Hulea !"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-4052954295"
      }, "Samples of my work can be found ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: "true",
        href: "/work"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-4052954295"
      }, "here")), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-4052954295"
      }, "If you would like to contact me or if you have any questions click ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: "true",
        href: "/contact"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-4052954295"
      }, "here")), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "block",
        ref: "block",
        style: {
          transform: 'rotate3d(1, 1, 1, ' + this.r + 'deg)',
          backgroundColor: this.color(),
          height: this.state.height,
          width: this.state.width
        },
        className: "jsx-4052954295"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4052954295" + " " + "clear"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4052954295",
        css: "#title.jsx-4052954295{font-weight:900;font-size:50px;line-height:1;-webkit-letter-spacing:-0.05em;-moz-letter-spacing:-0.05em;-ms-letter-spacing:-0.05em;letter-spacing:-0.05em;}p.jsx-4052954295{font-weight:600;font-size:24px;line-height:1.1;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}body.jsx-4052954295,#block.jsx-4052954295{overflow-x:hidden;}#block.jsx-4052954295{position:fixed;top:0;left:0;}.clear.jsx-4052954295{clear:both;height:75vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvSG9tZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERvQixBQUcyQixBQU1BLEFBTUMsQUFHRixBQUtKLFdBQ0MsSUFMTixDQWZTLEFBTUEsRUFNakIsR0FJUyxFQUtULEtBSkEsR0FoQmdCLEFBTUUsY0FMTyxFQU1BLDJHQUx6QixFQU1BIiwiZmlsZSI6Ii9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvSG9tZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgaGVpZ2h0OiAnJyxcclxuICAgIHdpZHRoOiAnJ1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WCA9IFwiaGlkZGVuXCI7XHJcbiAgICBjb25zdCBjbGllbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ2Jsb2NrJ10pLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XHJcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGhcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgZ2V0UmFuZG9tQXJiaXRyYXJ5ID0gKG1pbiwgbWF4KSA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluXHJcbiAgfVxyXG5cclxuICBjb2xvciA9ICgpID0+IHtcclxuICAgIHJldHVybiAnIycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyLCA4KS50b1VwcGVyQ2FzZSgpXHJcbiAgfVxyXG5cclxuICByID0gdGhpcy5nZXRSYW5kb21BcmJpdHJhcnkoMS4zNDMyLCA3MC42NTQ2KVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib2Zmc2V0NjBcIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5OaWNrIEh1bGVhPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgIDxoMSBpZD1cInRpdGxlXCI+XHJcbiAgICAgICAgICBXZWxjb21lIVxyXG4gICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPHAgaWQ9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgSGVsbG8geW91IGhhdmUgYXJyaXZlZCBhdCB0aGUgd2Vic2l0ZSBvZiBOaWNrIEh1bGVhICFcclxuICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPHA+U2FtcGxlcyBvZiBteSB3b3JrIGNhbiBiZSBmb3VuZCA8TGluayBwcmVmZXRjaD1cInRydWVcIiBocmVmPVwiL3dvcmtcIj48YT5oZXJlPC9hPjwvTGluaz4uPC9wPlxyXG5cclxuICAgICAgICA8cD5JZiB5b3Ugd291bGQgbGlrZSB0byBjb250YWN0IG1lIG9yIGlmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgY2xpY2sgPExpbmsgcHJlZmV0Y2g9XCJ0cnVlXCIgaHJlZj1cIi9jb250YWN0XCI+PGE+aGVyZTwvYT48L0xpbms+LjwvcD5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cImJsb2NrXCIgcmVmPVwiYmxvY2tcIiBzdHlsZT17e1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlM2QoMSwgMSwgMSwgJyArIHRoaXMuciArICdkZWcpJyxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5jb2xvcigpLFxyXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoXHJcbiAgICAgICAgfX0+PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICN0aXRsZXtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHksICNibG9jayB7XHJcbiAgICAgICAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2Jsb2NrIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbGVhciB7XHJcbiAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgIGhlaWdodDogNzV2aDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXX0= */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/Home.jsx */"
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.6d9e04dc29b2b2ca8b32.hot-update.js.map