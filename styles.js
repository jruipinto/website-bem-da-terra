(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/website-bem-da-terra/website-bem-da-terra/src/styles.css */"OmL/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "OmL/":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "W9N5");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "W9N5":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Lora&family=Montserrat:wght@400;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*\n* Global variables + Bootstrap color palette\n*/\n\n:root{\n  --font-family-sans-serif: 'Montserrat', sans-serif;\n  --font-family-serif: 'Lora', serif;\n  --blue: #0d6efd;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #d63384;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: white;\n  --black: black;\n  --gray-100: #f8f9fa;\n  --gray-200: #e9ecef;\n  --gray-300: #dee2e6;\n  --gray-400: #ced4da;\n  --gray-500: #adb5bd;\n  --gray-600: #6c757d;\n  --gray-700: #495057;\n  --gray-800: #343a40;\n  --gray-900: #212529;\n  --pallete-dark:#333333;\n  --pallete-white:white;\n  --pallete-palid-gray:#F2F2F2;\n  --pallete-light-gray:#DCD2D4;\n  --pallete-shock-green: #15A587;\n  --pallete-palid-green: #F7FCFB;\n  --primary: var(--pallete-black);\n  --secondary: var(--gray-600);\n  --success: var(--green);\n  --warning: var(--yellow);\n  --danger: var(--red);\n  --light: var(--gray-100);\n  --dark: var(--gray-800);\n  --global-border: 0;\n  --global-border-radius: 0px;\n  --global-font-color: var(--pallete-dark);\n  --global-bg-color: var(--pallete-white);\n  --global-paragraph-spacing: 2em;\n}\n\n/*\n* reset font + other initial common styles\n*/\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 14px;\n  line-height: 1.214em;\n}\n\nhtml,\nbody,\nnav,\nmain,\nform,\nheader,\nh1,\nh2,\np,\ninput,\nlabel,\nselect,\noption,\ntextarea,\nul,\nol,\nfieldset,\nlegend {\n  background-color: transparent;\n  border: var(--global-border);\n  box-sizing: border-box;\n  color: var(--global-font-color);\n  font-family: var(--font-family-sans-serif);\n  padding: 0;\n  margin: 0;\n}\n\nnav,\nform,\nsection,\narticle,\nfooter{\n  padding: calc(var(--global-paragraph-spacing)/2) var(--global-paragraph-spacing);\n}\n\nform,\nheader,\nh1,\nh2,\np,\nlabel,\ninput,\nselect,\noption,\ntextarea,\nul,\nol,\nfieldset,\nlegend {\n  margin: 0;\n  padding-bottom: calc(var(--global-paragraph-spacing)*0.7);\n  line-height: 1.2em;\n}\n\ninput,\nselect,\ntextarea {\n  margin-bottom: calc(var(--global-paragraph-spacing)*0.7);\n}\n\nli {\n  margin-left: 1em;\n}\n\n.flex-container {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 0;\n  padding-bottom: 4rem;\n  margin: auto;\n  max-width: 900px;\n}\n\n.block {\n  display: block;\n  width: 100%;\n  padding-bottom: calc(var(--global-paragraph-spacing) * 0.7);\n}\n\n.col-md-1,\n.col-md-2,\n.col-md-3,\n.col-md-4,\n.col-md-5,\n.col-md-6,\n.col-md-7,\n.col-md-8,\n.col-md-9,\n.col-md-10,\n.col-md-11,\n.col-md-12 {\n  display: block;\n  width: 100%;\n  padding: 0;\n}\n\n.flex-center {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.flex-end {\n  align-self: flex-end;\n}\n\n.col-1 {\n  width: calc(1 / 12 * 96%);\n}\n\n.col-2 {\n  width: calc(2 / 12 * 96%);\n}\n\n.col-3 {\n  width: calc(3 / 12 * 96%);\n}\n\n.col-4 {\n  width: calc(4 / 12 * 96%);\n}\n\n.col-5 {\n  width: calc(5 / 12 * 96%);\n}\n\n.col-6 {\n  width: calc(6 / 12 * 96%);\n}\n\n.col-7 {\n  width: calc(7 / 12 * 96%);\n}\n\n.col-8 {\n  width: calc(8 / 12 * 96%);\n}\n\n.col-9 {\n  width: calc(9 / 12 * 96%);\n}\n\n.col-10 {\n  width: calc(10 / 12 * 96%);\n}\n\n.col-11 {\n  width: calc(11 / 12 * 96%);\n}\n\n.col-12 {\n  width: calc(12 / 12 * 96%);\n}\n\n@media only screen and (min-width: 768px) {\n  .col-md-4 {\n    width: calc(4 / 12 * 96%);\n  }\n  .col-md-5 {\n    width: calc(5 / 12 * 96%);\n  }\n  .col-md-6 {\n    width: calc(6 / 12 * 96%);\n  }\n  .col-md-7 {\n    width: calc(7 / 12 * 96%);\n  }\n  .col-md-8 {\n    width: calc(8 / 12 * 96%);\n  }\n  .flex-reverse {\n    flex-direction: row-reverse;\n  }\n}\n\n/*\n* styles\n*/\n\nbody {\n  padding-top: 1rem;\n}\n\n.btn {\n  cursor: pointer;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n  border-radius: 2rem;\n  padding: calc(var(--global-paragraph-spacing) / 2)\n    var(--global-paragraph-spacing);\n  border: 1px solid var(--secondary);\n  color: var(--secondary);\n}\n\n.primary {\n  color: var(--pallete-white);\n  background-color: var(--pallete-shock-green);\n}\n\nsection {\n  min-height: 100vh;\n  padding-top: 7rem;\n  padding-bottom: 0;\n}\n\nmain > *:nth-child(odd) section {\n  background-color: var(--pallete-palid-green);\n}\n\nheader,\nh1,\nh2,\nh3 {\n  display: block;\n  font-family: var(--font-family-serif);\n  font-size: 26px;\n  text-align: left;\n  width: 100%;\n  padding-bottom: 3rem;\n}\n\nh2 {\n  font-size: 20px;\n  font-weight: 400;\n}\n\nh3  {\n  font-size: 16px;\n  font-weight: 400;\n}\n\np.description {\n  display: block;\n  text-align: justify;\n  width: 100%;\n  padding-left: 1rem;\n  border-left: 1px solid var(--global-font-color);\n  margin-bottom: 1em;\n}\n\np {\n  text-align: justify;\n}\n\napp-event-card p {\n  text-align: left;\n}\n\nimg {\n  width: 100%;\n  max-height: 360px;\n  /* object-fit: cover; */\n  object-fit: scale-down;\n}\n\nimg[alt] {\n  font-style: italic;\n  color: var(--secondary);\n}\n\n.justify-left {\n  justify-content: left;\n}\n\nform {\n  display: block;\n  width: 100%;\n}\n\nform label,\nform input,\nform textarea {\n  display: block;\n  width: 100%;\n  background-color: transparent;\n}\n\nform input[type=\"text\"],\nform input[type=\"email\"],\nform textarea {\n  border-radius: 2px;\n  border: 1px solid var(--pallete-light-gray);\n  background-color: transparent;\n  color: var(--secondary);\n  padding: 0.5rem;\n}\n\n.pb-0 {\n  padding-bottom: 0;\n}\n\nsection:not(#welcome_section) app-button-cta {\n  position: relative;\n  top: 4rem;\n}\n\n@media only screen and (min-width: 768px) {\n  section .flex-container {\n    justify-content: space-between;\n  }\n  .flex-reverse {\n    flex-direction: row-reverse;\n  }\n  section {\n    padding-top: 10rem;\n  }\n  section:not(#welcome_section) app-button-cta {\n    position: static;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/_vars.css","webpack://src/_reset.css","webpack://src/_grid.css","webpack://src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lora&family=Montserrat:wght@400;600&display=swap');\n\n/*\n* Global variables + Bootstrap color palette\n*/\n:root{\n  --font-family-sans-serif: 'Montserrat', sans-serif;\n  --font-family-serif: 'Lora', serif;\n  --blue: #0d6efd;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #d63384;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: white;\n  --black: black;\n  --gray-100: #f8f9fa;\n  --gray-200: #e9ecef;\n  --gray-300: #dee2e6;\n  --gray-400: #ced4da;\n  --gray-500: #adb5bd;\n  --gray-600: #6c757d;\n  --gray-700: #495057;\n  --gray-800: #343a40;\n  --gray-900: #212529;\n  --pallete-dark:#333333;\n  --pallete-white:white;\n  --pallete-palid-gray:#F2F2F2;\n  --pallete-light-gray:#DCD2D4;\n  --pallete-shock-green: #15A587;\n  --pallete-palid-green: #F7FCFB;\n  --primary: var(--pallete-black);\n  --secondary: var(--gray-600);\n  --success: var(--green);\n  --warning: var(--yellow);\n  --danger: var(--red);\n  --light: var(--gray-100);\n  --dark: var(--gray-800);\n  --global-border: 0;\n  --global-border-radius: 0px;\n  --global-font-color: var(--pallete-dark);\n  --global-bg-color: var(--pallete-white);\n  --global-paragraph-spacing: 2em;\n}","/*\n* reset font + other initial common styles\n*/\n* {\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 14px;\n  line-height: 1.214em;\n}\nhtml,\nbody,\nnav,\nmain,\nform,\nheader,\nh1,\nh2,\np,\ninput,\nlabel,\nselect,\noption,\ntextarea,\nul,\nol,\nfieldset,\nlegend {\n  background-color: transparent;\n  border: var(--global-border);\n  box-sizing: border-box;\n  color: var(--global-font-color);\n  font-family: var(--font-family-sans-serif);\n  padding: 0;\n  margin: 0;\n}\nnav,\nform,\nsection,\narticle,\nfooter{\n  padding: calc(var(--global-paragraph-spacing)/2) var(--global-paragraph-spacing);\n}\n\nform,\nheader,\nh1,\nh2,\np,\nlabel,\ninput,\nselect,\noption,\ntextarea,\nul,\nol,\nfieldset,\nlegend {\n  margin: 0;\n  padding-bottom: calc(var(--global-paragraph-spacing)*0.7);\n  line-height: 1.2em;\n}\ninput,\nselect,\ntextarea {\n  margin-bottom: calc(var(--global-paragraph-spacing)*0.7);\n}\nli {\n  margin-left: 1em;\n}\n",".flex-container {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 0;\n  padding-bottom: 4rem;\n  margin: auto;\n  max-width: 900px;\n}\n\n.block {\n  display: block;\n  width: 100%;\n  padding-bottom: calc(var(--global-paragraph-spacing) * 0.7);\n}\n\n.col-md-1,\n.col-md-2,\n.col-md-3,\n.col-md-4,\n.col-md-5,\n.col-md-6,\n.col-md-7,\n.col-md-8,\n.col-md-9,\n.col-md-10,\n.col-md-11,\n.col-md-12 {\n  display: block;\n  width: 100%;\n  padding: 0;\n}\n\n.flex-center {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.flex-end {\n  align-self: flex-end;\n}\n\n.col-1 {\n  width: calc(1 / 12 * 96%);\n}\n.col-2 {\n  width: calc(2 / 12 * 96%);\n}\n.col-3 {\n  width: calc(3 / 12 * 96%);\n}\n.col-4 {\n  width: calc(4 / 12 * 96%);\n}\n.col-5 {\n  width: calc(5 / 12 * 96%);\n}\n.col-6 {\n  width: calc(6 / 12 * 96%);\n}\n.col-7 {\n  width: calc(7 / 12 * 96%);\n}\n.col-8 {\n  width: calc(8 / 12 * 96%);\n}\n.col-9 {\n  width: calc(9 / 12 * 96%);\n}\n.col-10 {\n  width: calc(10 / 12 * 96%);\n}\n.col-11 {\n  width: calc(11 / 12 * 96%);\n}\n.col-12 {\n  width: calc(12 / 12 * 96%);\n}\n\n@media only screen and (min-width: 768px) {\n  .col-md-4 {\n    width: calc(4 / 12 * 96%);\n  }\n  .col-md-5 {\n    width: calc(5 / 12 * 96%);\n  }\n  .col-md-6 {\n    width: calc(6 / 12 * 96%);\n  }\n  .col-md-7 {\n    width: calc(7 / 12 * 96%);\n  }\n  .col-md-8 {\n    width: calc(8 / 12 * 96%);\n  }\n  .flex-reverse {\n    flex-direction: row-reverse;\n  }\n}\n","@import \"./_vars\";\n@import \"./_reset\";\n@import \"./_grid\";\n\n/*\n* styles\n*/\nbody {\n  padding-top: 1rem;\n}\n.btn {\n  cursor: pointer;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n  border-radius: 2rem;\n  padding: calc(var(--global-paragraph-spacing) / 2)\n    var(--global-paragraph-spacing);\n  border: 1px solid var(--secondary);\n  color: var(--secondary);\n}\n.primary {\n  color: var(--pallete-white);\n  background-color: var(--pallete-shock-green);\n}\nsection {\n  min-height: 100vh;\n  padding-top: 7rem;\n  padding-bottom: 0;\n}\nmain > *:nth-child(odd) section {\n  background-color: var(--pallete-palid-green);\n}\n\nheader,\nh1,\nh2,\nh3 {\n  display: block;\n  font-family: var(--font-family-serif);\n  font-size: 26px;\n  text-align: left;\n  width: 100%;\n  padding-bottom: 3rem;\n}\n\nh2 {\n  font-size: 20px;\n  font-weight: 400;\n}\n\nh3  {\n  font-size: 16px;\n  font-weight: 400;\n}\n\np.description {\n  display: block;\n  text-align: justify;\n  width: 100%;\n  padding-left: 1rem;\n  border-left: 1px solid var(--global-font-color);\n  margin-bottom: 1em;\n}\np {\n  text-align: justify;\n}\napp-event-card p {\n  text-align: left;\n}\nimg {\n  width: 100%;\n  max-height: 360px;\n  /* object-fit: cover; */\n  object-fit: scale-down;\n}\nimg[alt] {\n  font-style: italic;\n  color: var(--secondary);\n}\n.justify-left {\n  justify-content: left;\n}\nform {\n  display: block;\n  width: 100%;\n}\nform label,\nform input,\nform textarea {\n  display: block;\n  width: 100%;\n  background-color: transparent;\n}\nform input[type=\"text\"],\nform input[type=\"email\"],\nform textarea {\n  border-radius: 2px;\n  border: 1px solid var(--pallete-light-gray);\n  background-color: transparent;\n  color: var(--secondary);\n  padding: 0.5rem;\n}\n.pb-0 {\n  padding-bottom: 0;\n}\n\nsection:not(#welcome_section) app-button-cta {\n  position: relative;\n  top: 4rem;\n}\n\n@media only screen and (min-width: 768px) {\n  section .flex-container {\n    justify-content: space-between;\n  }\n  .flex-reverse {\n    flex-direction: row-reverse;\n  }\n  section {\n    padding-top: 10rem;\n  }\n  section:not(#welcome_section) app-button-cta {\n    position: static;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map