webpackHotUpdate("static/development/pages/work/entry.js",{

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
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
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
      className: "jsx-1229777194" + " " + (extraClass || "")
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, title === undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      className: "jsx-1229777194"
    }, "Work"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "title",
      content: "Nick Hulea's Work and Projects",
      className: "jsx-1229777194"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "description",
      content: "Nick Hulea's Work and Projects",
      className: "jsx-1229777194"
    })) : ''), title === undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-1229777194"
    }, "Work") : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-1229777194"
    }, webs.map(function (post, index) {
      return post.URL !== title ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: index + 1,
        className: "jsx-1229777194"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        props: post._id,
        href: "/work/".concat(post.Data.Link),
        onClick: function onClick(event) {
          return handleClick(event, post._id, post.Data.Link);
        },
        className: "jsx-1229777194"
      }, post.Image !== null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          backgroundImage: "url(https://strapi.hulea.org/".concat(post.Image.url, ")")
        },
        className: "jsx-1229777194" + " " + "imgHero"
      }) : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-1229777194"
      }, post.Title))) : '';
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "1229777194",
      css: "*.jsx-1229777194{box-sizing:border-box;}section.jsx-1229777194{padding-bottom:20px;max-width:900px;margin:0 auto;}div.jsx-1229777194{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:2rem;position:relative;}a.jsx-1229777194{font-size:14px;-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;color:#111;font-weight:400;}ul.jsx-1229777194{margin:0;padding:0;list-style:none;}li.jsx-1229777194{border:1rem solid #111;display:block;margin-bottom:10px;}h2.jsx-1229777194{position:absolute;bottom:-10px;left:10px;padding:10px 25px;color:#fff;background-color:#111;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvUG9zdExpc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0IsQUFHbUMsQUFHRixBQUtELEFBS0osQUFRTixBQUtjLEFBS0wsU0FUUixNQVJXLEdBa0JSLENBVEcsQ0FuQkEsRUFIbEIsQ0EwQmdCLFFBTUosSUFUWixDQW5CZ0IsQ0F1QkssSUFNRCxTQTVCcEIsTUF1QkEsR0FNYSxNQXBCTSxLQXFCSyxZQXBCYixTQUNFLENBb0JiLENBNUJxQixTQVNKLFVBUkcsTUFTcEIsWUFSQSIsImZpbGUiOiIvbW50L2Qvd2FtcDY0L3d3dy9hcG9sbG8tcmVkdXgtc2FnYS9jb21wb25lbnRzL1Bvc3RMaXN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAxMFxuXG5mdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCwgaWQsIHVybCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIFJvdXRlci5wdXNoKHtcbiAgICBwYXRobmFtZTogYC93b3JrLyR7dXJsfWAsXG4gICAgYXNQYXRoOiBgL3dvcmsvJHt1cmx9YFxuICB9KTtcbn1cblxuZnVuY3Rpb24gUG9zdExpc3QoeyBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCB3ZWJzIH0sIHRpdGxlLCBleHRyYUNsYXNzIH0pIHtcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIHBvc3RzLicgLz5cbiAgaWYgKHdlYnMgJiYgd2Vicy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtleHRyYUNsYXNzfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAge3RpdGxlID09PSB1bmRlZmluZWQgPyBcbiAgICAgICAgICA8PlxuICAgICAgICAgIDx0aXRsZT5Xb3JrPC90aXRsZT4gXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD1cIk5pY2sgSHVsZWEncyBXb3JrIGFuZCBQcm9qZWN0c1wiPjwvbWV0YT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTmljayBIdWxlYSdzIFdvcmsgYW5kIFByb2plY3RzXCI+PC9tZXRhPlxuICAgICAgICAgIDwvPlxuICAgICAgICAgIDogJyd9XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAge3RpdGxlID09PSB1bmRlZmluZWQgPyA8aDE+V29yazwvaDE+IDogJyd9XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7d2Vicy5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICBwb3N0LlVSTCAhPT0gdGl0bGUgPyA8bGkga2V5PXtpbmRleCArIDF9PlxuICAgICAgICAgICAgICA8YSBwcm9wcz17cG9zdC5faWR9IGhyZWY9e2Avd29yay8ke3Bvc3QuRGF0YS5MaW5rfWB9IG9uQ2xpY2s9e2V2ZW50ID0+IGhhbmRsZUNsaWNrKGV2ZW50LCBwb3N0Ll9pZCwgcG9zdC5EYXRhLkxpbmspfT5cbiAgICAgICAgICAgICAgICB7cG9zdC5JbWFnZSAhPT0gbnVsbCA/IDxzcGFuIGNsYXNzTmFtZT1cImltZ0hlcm9cIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly9zdHJhcGkuaHVsZWEub3JnLyR7cG9zdC5JbWFnZS51cmx9KWAgfX0+PC9zcGFuPiA6ICcnfVxuICAgICAgICAgICAgICAgIDxoMj57cG9zdC5UaXRsZX08L2gyPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPiA6ICcnXG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgYm9yZGVyOiAxcmVtIHNvbGlkICMxMTE7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG59XG5cbmV4cG9ydCBjb25zdCBhbGxQb3N0cyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHdlYnMge1xuICAgICAgX2lkXG4gICAgICBUaXRsZVxuICAgICAgSW1hZ2Uge1xuICAgICAgICB1cmxcbiAgICAgICAgZXh0XG4gICAgICAgIHByb3ZpZGVyXG4gICAgICAgIHNpemVcbiAgICAgIH1cbiAgICAgIERlc2NyaXB0aW9uXG4gICAgICBEYXRhXG4gICAgICBVUkxcbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXBkYXRlZEF0XG4gICAgfVxuICB9XG5gXG5cblxuZXhwb3J0IGNvbnN0IGFsbFBvc3RzUXVlcnlWYXJzID0ge1xuICBza2lwOiAwLFxuICBmaXJzdDogUE9TVFNfUEVSX1BBR0Vcbn1cblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChQb3N0TGlzdClcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoYWxsUG9zdHMsIHtcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhLFxuICAgIGxvYWRNb3JlUG9zdHM6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNraXA6IGRhdGEuYWxsUG9zdHMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdHMgcmVzdWx0cyB0byB0aGUgb2xkIG9uZVxuICAgICAgICAgICAgYWxsUG9zdHM6IFsuLi5wcmV2aW91c1Jlc3VsdC5hbGxQb3N0cywgLi4uZmV0Y2hNb3JlUmVzdWx0LmFsbFBvc3RzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSkoUG9zdExpc3QpXG4iXX0= */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/PostList.jsx */"
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

/***/ })

})
//# sourceMappingURL=entry.js.798992e64bfa02478a48.hot-update.js.map