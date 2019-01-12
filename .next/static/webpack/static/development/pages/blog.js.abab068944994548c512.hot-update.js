webpackHotUpdate("static/development/pages/blog.js",{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _PostVoteUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostVoteUp */ "./components/PostVoteUp.js");
/* harmony import */ var _PostVoteDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostVoteDown */ "./components/PostVoteDown.js");
/* harmony import */ var _PostVoteCount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostVoteCount */ "./components/PostVoteCount.js");



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    webs {\n      Title\n      Image {\n        url\n        ext\n        provider\n        size\n      }\n      Description\n      Data\n      URL\n    }\n  }\n"]);

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
      loadMorePosts = _ref.loadMorePosts;
  if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: "Error loading posts."
  });

  if (allPosts && allPosts.length) {
    var areMorePosts = allPosts.length < _allPostsMeta.count;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-2126052553"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-2126052553"
    }, allPosts.map(function (post, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: post.id,
        className: "jsx-2126052553"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2126052553"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2126052553"
      }, index + 1, ". "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/blog/".concat(post.id),
        onClick: function onClick(event) {
          return handleClick(event, post.id);
        },
        className: "jsx-2126052553"
      }, post.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostVoteUp__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: post.id,
        votes: post.votes
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostVoteCount__WEBPACK_IMPORTED_MODULE_8__["default"], {
        votes: post.votes
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostVoteDown__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: post.id,
        votes: post.votes
      })));
    })), areMorePosts ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        return loadMorePosts();
      },
      className: "jsx-2126052553"
    }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "2126052553",
      css: "section.jsx-2126052553{padding-bottom:20px;}li.jsx-2126052553{display:block;margin-bottom:10px;}div.jsx-2126052553{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-2126052553{font-size:14px;margin-right:10px;-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;}span.jsx-2126052553{font-size:14px;margin-right:5px;}ul.jsx-2126052553{margin:0;padding:0;}button.jsx-2126052553:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:'';height:0;margin-right:5px;width:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvUG9zdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURvQixBQUdpQyxBQUdOLEFBSUssQUFJSixBQU9BLEFBSU4sQUFJUyxTQUhSLEtBbkJTLENBUUQsQUFPRCxJQUtuQixDQXZCQSxZQW1CQSxDQWZBLEFBUXVCLHNDQWNGLFlBYkYsT0FjVSxHQXBCZCxPQU9KLFNBQ1gsUUFhMkQsa0RBcEIzRCxPQXFCYSxXQUNGLFNBQ1EsaUJBQ1QsUUFDViIsImZpbGUiOiIvbW50L2Qvd2FtcDY0L3d3dy9hcG9sbG8tcmVkdXgtc2FnYS9jb21wb25lbnRzL1Bvc3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJ1xuaW1wb3J0IFBvc3RWb3RlVXAgZnJvbSAnLi9Qb3N0Vm90ZVVwJ1xuaW1wb3J0IFBvc3RWb3RlRG93biBmcm9tICcuL1Bvc3RWb3RlRG93bidcbmltcG9ydCBQb3N0Vm90ZUNvdW50IGZyb20gJy4vUG9zdFZvdGVDb3VudCdcblxuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAxMFxuXG5mdW5jdGlvbiBoYW5kbGVDbGljayAoZXZlbnQsIGlkKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgLy8gV2l0aCByb3V0ZSBuYW1lIGFuZCBwYXJhbXNcbiAgLy8gUm91dGVyLnB1c2hSb3V0ZSgnYmxvZy9lbnRyeScsIHsgaWQ6IGlkIH0pXG4gIC8vIFdpdGggcm91dGUgVVJMXG4gIFJvdXRlci5wdXNoUm91dGUoYC9ibG9nLyR7aWR9YClcbn1cblxuZnVuY3Rpb24gUG9zdExpc3QgKHtcbiAgZGF0YTogeyBsb2FkaW5nLCBlcnJvciwgYWxsUG9zdHMsIF9hbGxQb3N0c01ldGEgfSxcbiAgbG9hZE1vcmVQb3N0c1xufSkge1xuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9J0Vycm9yIGxvYWRpbmcgcG9zdHMuJyAvPlxuICBpZiAoYWxsUG9zdHMgJiYgYWxsUG9zdHMubGVuZ3RoKSB7XG4gICAgY29uc3QgYXJlTW9yZVBvc3RzID0gYWxsUG9zdHMubGVuZ3RoIDwgX2FsbFBvc3RzTWV0YS5jb3VudFxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHthbGxQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aW5kZXggKyAxfS4gPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL2Jsb2cvJHtwb3N0LmlkfWB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiBoYW5kbGVDbGljayhldmVudCwgcG9zdC5pZCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxQb3N0Vm90ZVVwIGlkPXtwb3N0LmlkfSB2b3Rlcz17cG9zdC52b3Rlc30gLz5cbiAgICAgICAgICAgICAgICA8UG9zdFZvdGVDb3VudCB2b3Rlcz17cG9zdC52b3Rlc30gLz5cbiAgICAgICAgICAgICAgICA8UG9zdFZvdGVEb3duIGlkPXtwb3N0LmlkfSB2b3Rlcz17cG9zdC52b3Rlc30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7YXJlTW9yZVBvc3RzID8gKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbG9hZE1vcmVQb3N0cygpfT5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICB7bG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTaG93IE1vcmUnfXsnICd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgJydcbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDZweCA0cHggMCA0cHg7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbn1cblxuZXhwb3J0IGNvbnN0IGFsbFBvc3RzID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgd2VicyB7XG4gICAgICBUaXRsZVxuICAgICAgSW1hZ2Uge1xuICAgICAgICB1cmxcbiAgICAgICAgZXh0XG4gICAgICAgIHByb3ZpZGVyXG4gICAgICAgIHNpemVcbiAgICAgIH1cbiAgICAgIERlc2NyaXB0aW9uXG4gICAgICBEYXRhXG4gICAgICBVUkxcbiAgICB9XG4gIH1cbmBcblxuXG5leHBvcnQgY29uc3QgYWxsUG9zdHNRdWVyeVZhcnMgPSB7XG4gIHNraXA6IDAsXG4gIGZpcnN0OiBQT1NUU19QRVJfUEFHRVxufVxuXG4vLyBUaGUgYGdyYXBocWxgIHdyYXBwZXIgZXhlY3V0ZXMgYSBHcmFwaFFMIHF1ZXJ5IGFuZCBtYWtlcyB0aGUgcmVzdWx0c1xuLy8gYXZhaWxhYmxlIG9uIHRoZSBgZGF0YWAgcHJvcCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgKFBvc3RMaXN0KVxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChhbGxQb3N0cywge1xuICBvcHRpb25zOiB7XG4gICAgdmFyaWFibGVzOiBhbGxQb3N0c1F1ZXJ5VmFyc1xuICB9LFxuICBwcm9wczogKHsgZGF0YSB9KSA9PiAoe1xuICAgIGRhdGEsXG4gICAgbG9hZE1vcmVQb3N0czogKCkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGEuZmV0Y2hNb3JlKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgc2tpcDogZGF0YS5hbGxQb3N0cy5sZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2aW91c1Jlc3VsdCwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSZXN1bHRcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBwb3N0cyByZXN1bHRzIHRvIHRoZSBvbGQgb25lXG4gICAgICAgICAgICBhbGxQb3N0czogWy4uLnByZXZpb3VzUmVzdWx0LmFsbFBvc3RzLCAuLi5mZXRjaE1vcmVSZXN1bHQuYWxsUG9zdHNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KShQb3N0TGlzdClcbiJdfQ== */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/PostList.js */"
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
  options: {
    variables: allPostsQueryVars
  },
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

/***/ })

})
//# sourceMappingURL=blog.js.abab068944994548c512.hot-update.js.map