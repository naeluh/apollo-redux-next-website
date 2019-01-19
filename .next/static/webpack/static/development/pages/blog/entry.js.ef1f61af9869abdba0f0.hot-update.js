webpackHotUpdate("static/development/pages/blog/entry.js",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
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
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _PostVoteUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostVoteUp */ "./components/PostVoteUp.js");
/* harmony import */ var _PostVoteDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostVoteDown */ "./components/PostVoteDown.js");
/* harmony import */ var _PostVoteCount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostVoteCount */ "./components/PostVoteCount.js");


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query web($id: ID!) {\n    web(id: $id) {\n      Title\n      Image {\n        url\n        ext\n        provider\n        size\n      }\n      Description\n      Data\n      URL\n      createdAt\n      updatedAt\n    }\n  }\n"]);

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
      className: "jsx-3109713535"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: web.id,
      className: "jsx-3109713535"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-3109713535"
    }, web.Title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3109713535"
    }, "ID: ", web.id, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3109713535"
    }), "URL: ", web.URL), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3109713535"
    }, web.Description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3109713535"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostVoteUp__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: Post.id,
      votes: Post.votes
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostVoteCount__WEBPACK_IMPORTED_MODULE_8__["default"], {
      votes: Post.votes
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostVoteDown__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: Post.id,
      votes: Post.votes
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "3109713535",
      css: "span.jsx-3109713535{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:14px;margin-right:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJvQixBQUcwQiwwRUFDRSxlQUNFLGlCQUNuQiIsImZpbGUiOiIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2Fwb2xsby1yZWR1eC1uZXh0LXdlYnNpdGUvY29tcG9uZW50cy9Qb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJ1xuaW1wb3J0IFBvc3RWb3RlVXAgZnJvbSAnLi9Qb3N0Vm90ZVVwJ1xuaW1wb3J0IFBvc3RWb3RlRG93biBmcm9tICcuL1Bvc3RWb3RlRG93bidcbmltcG9ydCBQb3N0Vm90ZUNvdW50IGZyb20gJy4vUG9zdFZvdGVDb3VudCdcblxuZnVuY3Rpb24gUG9zdCh7IGRhdGE6IHsgZXJyb3IsIHdlYiB9IH0pIHtcbiAgY29uc29sZS5sb2cod2ViKVxuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9J0Vycm9yIGxvYWRpbmcgYmxvZyBwb3N0LicgLz5cbiAgaWYgKHdlYikge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdiBrZXk9e3dlYi5pZH0+XG4gICAgICAgICAgPGgxPnt3ZWIuVGl0bGV9PC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIElEOiB7d2ViLmlkfVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBVUkw6IHt3ZWIuVVJMfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8c3Bhbj57d2ViLkRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxQb3N0Vm90ZVVwIGlkPXtQb3N0LmlkfSB2b3Rlcz17UG9zdC52b3Rlc30gLz5cbiAgICAgICAgICAgIDxQb3N0Vm90ZUNvdW50IHZvdGVzPXtQb3N0LnZvdGVzfSAvPlxuICAgICAgICAgICAgPFBvc3RWb3RlRG93biBpZD17UG9zdC5pZH0gdm90ZXM9e1Bvc3Qudm90ZXN9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG59XG5cbmNvbnN0IHBvc3QgPSBncWxgXG4gIHF1ZXJ5IHdlYigkaWQ6IElEISkge1xuICAgIHdlYihpZDogJGlkKSB7XG4gICAgICBUaXRsZVxuICAgICAgSW1hZ2Uge1xuICAgICAgICB1cmxcbiAgICAgICAgZXh0XG4gICAgICAgIHByb3ZpZGVyXG4gICAgICAgIHNpemVcbiAgICAgIH1cbiAgICAgIERlc2NyaXB0aW9uXG4gICAgICBEYXRhXG4gICAgICBVUkxcbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXBkYXRlZEF0XG4gICAgfVxuICB9XG5gXG5cbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoUG9zdExpc3QpXG5jb25zdCBDb21wb25lbnRXaXRoTXV0YXRpb24gPSBncmFwaHFsKHBvc3QsIHtcbiAgb3B0aW9uczogKHsgcm91dGVyOiB7IHF1ZXJ5IH0gfSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkOiBxdWVyeS5pZFxuICAgIH1cbiAgfSksXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YVxuICB9KVxufSkoUG9zdClcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihDb21wb25lbnRXaXRoTXV0YXRpb24pXG4iXX0= */\n/*@ sourceURL=/Applications/MAMP/htdocs/apollo-redux-next-website/components/Post.js */"
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

/***/ })

})
//# sourceMappingURL=entry.js.ef1f61af9869abdba0f0.hot-update.js.map