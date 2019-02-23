webpackHotUpdate("static/development/pages/work/entry.js",{

/***/ "./components/Post.jsx":
/*!*****************************!*\
  !*** ./components/Post.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.jsx");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PostList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostList */ "./components/PostList.jsx");


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query webs($url: String!) {\n    webs( where: { URL: $url }, limit: 1) {\n      Title\n      _id\n      Image {\n        url\n        ext\n        provider\n        size\n      }\n      Description\n      Data\n      URL\n      Link\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @ts-check









function Post(_ref) {
  var _ref$data = _ref.data,
      error = _ref$data.error,
      webs = _ref$data.webs;
  var web = webs[0];
  var image = web.Image !== null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "image",
    className: "imgHero",
    style: {
      backgroundImage: "url(https://strapi.hulea.org/".concat(web.Image.url, ")"),
      border: "1em solid #111",
      marginBottom: "20px"
    }
  }) : '';
  if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: "Error loading blog post."
  });

  if (web) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "jsx-60045850"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-60045850"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      className: "jsx-60045850"
    }, web.Title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: web.id,
      className: "jsx-60045850"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-60045850"
    }, web.Title), image, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      prefetch: "true",
      target: "_blank",
      href: web.Link,
      className: "jsx-60045850"
    }, web.Title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
      source: web.Description
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: web.URL,
      extraClass: "worklist"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "60045850",
      css: "*.jsx-60045850{box-sizing:border-box;}section.jsx-60045850{padding-bottom:20px;max-width:900px;margin:0 auto;}li.jsx-60045850{display:block;margin-bottom:10px;}figure.jsx-60045850{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:2rem;position:relative;}.imgHero.jsx-60045850{border:1rem solid #000;}a.jsx-60045850{line-height:1.5;margin-bottom:20px;word-wrap:break-word;font-size:1.5em;font-weight:600;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;-webkit-text-decoration:none;text-decoration:none;border-bottom:dashed 1px;}a.jsx-60045850:hover{color:#ccc;border-bottom:solid 1px;}span.jsx-60045850{border:1rem solid #000;}ul.jsx-60045850{margin:0;padding:0;}img.jsx-60045850{object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvUG9zdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNrQixBQUdtQyxBQUdGLEFBS04sQUFJSyxBQU1JLEFBR1AsQUFVTCxBQUlZLEFBR2QsQUFJUSxTQUhQLEVBUGMsR0F2QkwsRUFhQSxDQXFCckIsRUFIQSxDQXBDa0IsRUFIbEIsQ0FrQkEsQUFpQkEsVUExQkEsRUFhdUIsQUFVdkIsQ0E1QmdCLGNBQ2hCLE1Ba0JrQixnQkFDQSxnQkFDSSxLQWJQLDBFQUNNLGtCQWFFLENBWkgsa0JBQ3BCLCtCQVkyQix5QkFDM0IiLCJmaWxlIjoiL21udC9kL3dhbXA2NC93d3cvYXBvbGxvLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9Qb3N0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1jaGVja1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB3aXRoUm91dGVyLCBSb3V0ZXIsIExpbmsgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4vUG9zdExpc3QnXG5cbmZ1bmN0aW9uIFBvc3QoeyBkYXRhOiB7IGVycm9yLCB3ZWJzIH0gfSkge1xuICBsZXQgd2ViID0gd2Vic1swXTtcbiAgbGV0IGltYWdlID0gd2ViLkltYWdlICE9PSBudWxsID8gPHNwYW4gaWQ9XCJpbWFnZVwiIGNsYXNzTmFtZT1cImltZ0hlcm9cIlxuICAgIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly9zdHJhcGkuaHVsZWEub3JnLyR7d2ViLkltYWdlLnVybH0pYCxcbiAgICAgIGJvcmRlcjogYDFlbSBzb2xpZCAjMTExYCxcbiAgICAgIG1hcmdpbkJvdHRvbTogYDIwcHhgXG4gICAgfX0+PC9zcGFuPiA6ICcnO1xuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9J0Vycm9yIGxvYWRpbmcgYmxvZyBwb3N0LicgLz5cbiAgaWYgKHdlYikge1xuICAgIHJldHVybiAoXG4gICAgICA8YXJ0aWNsZT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3dlYi5UaXRsZX08L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYga2V5PXt3ZWIuaWR9PlxuICAgICAgICAgIDxoMT57d2ViLlRpdGxlfTwvaDE+XG4gICAgICAgICAge2ltYWdlfVxuICAgICAgICAgIDxhIHByZWZldGNoPVwidHJ1ZVwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3dlYi5MaW5rfT57d2ViLlRpdGxlfTwvYT5cbiAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3dlYi5EZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8UG9zdExpc3QgdGl0bGU9e3dlYi5VUkx9IGV4dHJhQ2xhc3M9XCJ3b3JrbGlzdFwiPjwvUG9zdExpc3Q+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZ3VyZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWdIZXJvIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXJlbSBzb2xpZCAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCAxcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcmVtIHNvbGlkICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG4gIH1cbiAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxufVxuXG5jb25zdCBwb3N0ID0gZ3FsYFxuICBxdWVyeSB3ZWJzKCR1cmw6IFN0cmluZyEpIHtcbiAgICB3ZWJzKCB3aGVyZTogeyBVUkw6ICR1cmwgfSwgbGltaXQ6IDEpIHtcbiAgICAgIFRpdGxlXG4gICAgICBfaWRcbiAgICAgIEltYWdlIHtcbiAgICAgICAgdXJsXG4gICAgICAgIGV4dFxuICAgICAgICBwcm92aWRlclxuICAgICAgICBzaXplXG4gICAgICB9XG4gICAgICBEZXNjcmlwdGlvblxuICAgICAgRGF0YVxuICAgICAgVVJMXG4gICAgICBMaW5rXG4gICAgICBjcmVhdGVkQXRcbiAgICAgIHVwZGF0ZWRBdFxuICAgIH1cbiAgfVxuYFxuXG4vLyBUaGUgYGdyYXBocWxgIHdyYXBwZXIgZXhlY3V0ZXMgYSBHcmFwaFFMIHF1ZXJ5IGFuZCBtYWtlcyB0aGUgcmVzdWx0c1xuLy8gYXZhaWxhYmxlIG9uIHRoZSBgZGF0YWAgcHJvcCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgKFBvc3RMaXN0KVxuY29uc3QgQ29tcG9uZW50V2l0aE11dGF0aW9uID0gZ3JhcGhxbChwb3N0LCB7XG4gIG9wdGlvbnM6ICh7IHJvdXRlcjogeyBxdWVyeSB9IH0pID0+ICh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICB1cmw6IHF1ZXJ5LnVybFxuICAgIH1cbiAgfSksXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YVxuICB9KVxufSkoUG9zdClcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihDb21wb25lbnRXaXRoTXV0YXRpb24pXG4iXX0= */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/Post.jsx */"
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
        url: query.url
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

/***/ })

})
//# sourceMappingURL=entry.js.48ba1bea8ac451eb9a11.hot-update.js.map