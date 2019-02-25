/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"input[type=\\\"time\\\"] {\\r\\n  -moz-appearance: textfield;\\r\\n}\\r\\n\\r\\ninput[type=\\\"time\\\"]::-webkit-outer-spin-button,\\r\\ninput[type=\\\"time\\\"]::-webkit-inner-spin-button {\\r\\n  -webkit-appearance: none;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\ninput[type=\\\"time\\\"]::-webkit-clear-button {\\r\\n    display: none;\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_Mediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Mediator */ \"./src/modules/Mediator.js\");\n/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/app */ \"./src/modules/app.js\");\n\r\n\r\n\r\n\r\n\r\nfunction kek(data) {\r\n  console.log(data);\r\n}\r\n\r\n_modules_Mediator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe('ha', kek);\r\n\r\nwindow.onload = () => {\r\n  _modules_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/CalculateTime.js":
/*!**************************************!*\
  !*** ./src/modules/CalculateTime.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nvar CalcTime = (function() {\r\n\r\n  function sortData(data, field) {\r\n    var sorted = data.sort((a, b) => {\r\n        if (a[field] < b[field]) return -1;\r\n        if (a[field] > b[field]) return 1;\r\n        return 0;\r\n      })\r\n\r\n    return sorted;\r\n  }\r\n\r\n  function calcPeriod(start, end) {\r\n    var startArr = start.split(':'),\r\n      endArr = end.split(':'),\r\n      hours = parseInt(endArr[0]) - parseInt(startArr[0]),\r\n      minutes = parseInt(endArr[1]) - parseInt(startArr[1]);\r\n\r\n    hours = (hours < 0) ? hours + 24 : hours;\r\n    hours = (minutes < 0) ? hours - 1 : hours;\r\n    minutes = (minutes < 0) ? minutes + 60 : minutes;\r\n    console.log(start, end);\r\n    console.log(start, end, `=${(hours > 9 ? hours : (`0${hours}`))}:${(minutes > 9 ? minutes : (`0${minutes}`))}`);\r\n    return `${(hours > 9 ? hours : (`0${hours}`))}:${(minutes > 9 ? minutes : (`0${minutes}`))}`;\r\n  }\r\n\r\n  function sumTime(first, second) {\r\n    // console.log('sum', first, second);\r\n\r\n    var firstArr = first.split(':'),\r\n      secondArr = second.split(':'),\r\n      hours = parseInt(firstArr[0]) + parseInt(secondArr[0]),\r\n      minutes = parseInt(firstArr[1]) + parseInt(secondArr[1]);\r\n\r\n    console.log(hours, minutes);\r\n    hours = (minutes >= 60) ? hours + 1 : hours;\r\n    minutes = (minutes >= 60) ? minutes - 60 : minutes;\r\n    console.log(`${hours}:${minutes}`);\r\n    return `${(hours > 9 ? hours : (`0${hours}`))}:${(minutes > 9 ? minutes : (`0${minutes}`))}`;\r\n  }\r\n\r\n  function calculateTimeSummary(firstT, secondT) {\r\n    console.log(firstT, secondT);\r\n    var period = calcPeriod(secondT.start, secondT.end),\r\n      time = firstT ? sumTime(firstT.time, period) : period;\r\n    console.log('p', period, time);\r\n    return {time: time, name: secondT.name};\r\n  }\r\n\r\n  function calculate(data) {\r\n    var calculated = [],\r\n      sumBuffer = null,\r\n      sorted = sortData(data, 'name'),\r\n      sum = '00:00';\r\n\r\n    // console.log(data);\r\n    // console.log(sorted);\r\n    for(var i = 0; i < sorted.length; i++) {\r\n      if(calculated.find((task)=>{return task.name === sorted[i].name})) {\r\n        continue;\r\n      }\r\n      else {\r\n        var name = sorted[i].name;\r\n        for(var j = 0; j < sorted.length; j++) {\r\n          if(sorted[j].name === name) {\r\n            sumBuffer = calculateTimeSummary(sumBuffer, sorted[j]);\r\n          }\r\n        }\r\n        calculated.push(sumBuffer);\r\n        sumBuffer = null;\r\n      }\r\n      // if(sorted[i].name === sorted[i+1].name) {\r\n      //   console.log(sorted[i].name);\r\n      //   buffer.push(sorted[i+1]);\r\n      // }\r\n      // else {\r\n      //   buffer.forEach((task)=>{\r\n      //     sum = sumTime(sum, calcPeriod(task.start, task.end));\r\n      //   })\r\n      //   console.log(buffer);\r\n      //   calculated.push({\r\n      //     name: buffer[0].name,\r\n      //     time: sum\r\n      //   })\r\n      //   buffer = [sorted[i+1]];\r\n      //   sum = '00:00';\r\n      //   console.log(buffer);\r\n      // }\r\n    }\r\n    console.log(calculated);\r\n  };\r\n\r\n  return {\r\n    calculate\r\n  }\r\n}());\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CalcTime);\r\n\n\n//# sourceURL=webpack:///./src/modules/CalculateTime.js?");

/***/ }),

/***/ "./src/modules/Fabric.js":
/*!*******************************!*\
  !*** ./src/modules/Fabric.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TimeTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeTask */ \"./src/modules/TimeTask.js\");\n\r\n\r\nclass Fabric {\r\n  create(type, options = {}) {\r\n    console.log(type);\r\n    switch (type) {\r\n      case 'task':\r\n        return new _TimeTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"](options);\r\n        break;\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fabric);\r\n\n\n//# sourceURL=webpack:///./src/modules/Fabric.js?");

/***/ }),

/***/ "./src/modules/Mediator.js":
/*!*********************************!*\
  !*** ./src/modules/Mediator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// pattern mediarot 'pub-sub'\r\n\r\nvar mediator = (function () {\r\n  var subscribe = function(channel, fn) {\r\n      if(!mediator.channels[channel]) {\r\n        mediator.channels[channel] = [];\r\n      }\r\n      mediator.channels[channel].push({context: this, callback: fn});\r\n      return this;\r\n    },\r\n\r\n    publish = function(channel) {\r\n      if(!mediator.channels[channel]) return false;\r\n\r\n      var args = Array.prototype.slice.call(arguments, 1),\r\n        subscription = null;\r\n\r\n      for (var i = 0, l = mediator.channels[channel].length; i < l; i++) {\r\n        subscription = mediator.channels[channel][i];\r\n        subscription.callback.apply(subscription.context, args);\r\n      }\r\n\r\n      return this;\r\n    };\r\n\r\n    return {\r\n      channels: {},\r\n      publish: publish,\r\n      subscribe: subscribe,\r\n      installTo: function(obj) {\r\n        obj.subscribe = subscribe;\r\n        obj.publish = publish;\r\n      }\r\n    };\r\n\r\n}());\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (mediator);\r\n\n\n//# sourceURL=webpack:///./src/modules/Mediator.js?");

/***/ }),

/***/ "./src/modules/TimeTask.js":
/*!*********************************!*\
  !*** ./src/modules/TimeTask.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uuid */ \"./src/modules/uuid.js\");\n/* harmony import */ var _Mediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mediator */ \"./src/modules/Mediator.js\");\n/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timer */ \"./src/modules/Timer.js\");\n\r\n\r\n\r\n\r\nclass TimeTask {\r\n  constructor({start, end, name, id}) {\r\n    var template = `<input type=\"time\" class=\"calculator__time-input startTime\">\r\n      <button type=\"button\" class=\"calculator__time-item-button startBtn\">+</button>\r\n      <input type=\"time\" class=\"calculator__time-input endTime\" placeholder=\"hh:mm\" pattern=\"${`(1[0-2]|0[1-9])\\/(1[5-9]|2\\d)`}\">\r\n      <button type=\"button\" class=\"calculator__time-item-button endBtn\">+</button>\r\n      <input type=\"text\" class=\"calculator__task-input taskInput\">\r\n      <button type=\"button\" class=\"calculator__time-delete-button deleteBtn\">X</button>`;\r\n\r\n    console.log(start, end, name, id);\r\n    this.container = document.createElement('div');\r\n    this.id = id || Object(_uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    this.start = start || _Timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getTime('hh:mm');\r\n    this.end = end || '';\r\n    this.taskName = name || '';\r\n\r\n    this.container.classList.add('calculator__calculated-list-item');\r\n    this.container.innerHTML = template;\r\n\r\n    this.startInput = this.container.querySelector('.startTime');\r\n    this.startBtn = this.container.querySelector('.startBtn');\r\n    this.endInput = this.container.querySelector('.endTime');\r\n    this.endBtn = this.container.querySelector('.endBtn');\r\n    this.taskInput = this.container.querySelector('.taskInput');\r\n    this.deleteBtn = this.container.querySelector('.deleteBtn');\r\n\r\n    this.startInput.value = this.start;\r\n    this.endInput.value = this.end;\r\n    this.taskInput.value = this.taskName;\r\n\r\n    this.startInput.onchange = this.changeStart.bind(this);\r\n    this.endInput.onchange = this.changeEnd.bind(this);\r\n    this.taskInput.onchange = this.changeTaskName.bind(this);\r\n\r\n    this.startBtn.onclick = this.refreshStart.bind(this);\r\n    this.endBtn.onclick = this.refreshEnd.bind(this);\r\n    this.deleteBtn.onclick = this.deleteTask.bind(this);\r\n  }\r\n\r\n  changeTask() {\r\n    _Mediator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publish('save task', {\r\n      start: this.start,\r\n      end: this.end,\r\n      name: this.taskName,\r\n      id: this.id\r\n    });\r\n  }\r\n\r\n  changeStart() {\r\n    this.start = this.startInput.value;\r\n    console.log('change start x');\r\n    this.changeTask();\r\n  }\r\n\r\n  changeEnd() {\r\n    this.end = this.endInput.value;\r\n    this.changeTask();\r\n  }\r\n\r\n  changeTaskName() {\r\n    this.taskName = this.taskInput.value;\r\n    this.changeTask();\r\n  }\r\n\r\n  refreshStart() {\r\n    console.log('start');\r\n    var time = _Timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getTime('hh:mm');\r\n    this.startInput.value = time;\r\n    this.changeStart();\r\n  }\r\n\r\n  refreshEnd() {\r\n    console.log('end');\r\n    var time = _Timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getTime('hh:mm');\r\n    this.endInput.value = time;\r\n    this.changeEnd();\r\n  }\r\n\r\n  deleteTask() {\r\n    console.log('dele');\r\n    _Mediator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publish('delete task', {\r\n      id: this.id\r\n    });\r\n\r\n    this.destroy();\r\n  }\r\n\r\n  destroy() {\r\n    this.startInput.onchange = null;\r\n    this.endInput.onchange = null;\r\n    this.taskInput.onchange = null;\r\n\r\n    this.startBtn.onclick = null;\r\n    this.endBtn.onclick = null;\r\n    this.deleteBtn.onclick = null;\r\n\r\n    this.container.parentNode.removeChild(this.container);\r\n  }\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimeTask);\r\n\n\n//# sourceURL=webpack:///./src/modules/TimeTask.js?");

/***/ }),

/***/ "./src/modules/Timer.js":
/*!******************************!*\
  !*** ./src/modules/Timer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Timer = (function () {\r\n\r\n  function getTime(foramt) {\r\n    var currentTime = new Date(),\r\n      hours = currentTime.getHours(),\r\n      minutes = currentTime.getMinutes(),\r\n      seconds = currentTime.getSeconds(),\r\n      tStrHM = `${(hours > 9 ? hours : `0${hours}`)}:${(minutes > 9 ? minutes : `0${minutes}`)}`;\r\n\r\n      switch (foramt) {\r\n        case 'hh:mm':\r\n          return tStrHM;\r\n          break;\r\n        case 'hh:mm:ss':\r\n          return `${tStrHM}:${(seconds > 9 ? seconds : `0${seconds}`)}`;\r\n          break;\r\n        default:\r\n          return tStrHM;\r\n      }\r\n  }\r\n\r\n  return {\r\n    getTime\r\n  }\r\n\r\n}());\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\r\n\n\n//# sourceURL=webpack:///./src/modules/Timer.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fabric */ \"./src/modules/Fabric.js\");\n/* harmony import */ var _Mediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mediator */ \"./src/modules/Mediator.js\");\n/* harmony import */ var _CalculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalculateTime */ \"./src/modules/CalculateTime.js\");\n\r\n\r\n\r\n\r\n\r\nvar TimeTracker = (function() {\r\n  var fabric = new _Fabric__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\r\n    _data = [],\r\n    _addBtn = null,\r\n    _cleanBtn = null,\r\n    _calcBtn = null,\r\n    _totalLine = null,\r\n    _tasksContainer = null;\r\n\r\n  function checkData(data) {\r\n    if(data.length === 0) return 0;\r\n\r\n    return true;\r\n  };\r\n\r\n  function getData(key) {\r\n\r\n    var timeData = null;\r\n\r\n    return new Promise((resolve, reject) => {\r\n      try {\r\n          timeData = JSON.parse(window.localStorage.getItem(key));\r\n          if(timeData) {\r\n            resolve(timeData);\r\n          }\r\n          else {\r\n            reject();\r\n          }\r\n      } catch (e) {\r\n          reject();\r\n      }\r\n    })\r\n  };\r\n\r\n  function saveData() {\r\n    window.localStorage.setItem('timeTasks', JSON.stringify(_data));\r\n  }\r\n\r\n  function renderTimeList() {\r\n    _data.map((item) => {\r\n      var task = fabric.create('task', item);\r\n      _tasksContainer.appendChild(task.container);\r\n    })\r\n  };\r\n\r\n  function loadData() {\r\n    getData('timeTasks')\r\n      .then(\r\n        response => response,\r\n        error => []\r\n      )\r\n      .then(\r\n        (data) => {\r\n          _data = data;\r\n          renderTimeList()\r\n        }\r\n      );\r\n  };\r\n\r\n  function createTask() {\r\n    var task = fabric.create('task');\r\n    _tasksContainer.appendChild(task.container);\r\n  };\r\n\r\n  function saveTask(task) {\r\n    var isValue = false;\r\n    _data.map((item)=>{\r\n      if(item.id === task.id) {\r\n        item.start = task.start;\r\n        item.end = task.end;\r\n        item.name = task.name;\r\n        isValue = true;\r\n      }\r\n    });\r\n\r\n    if(!isValue) { _data.push(task) };\r\n\r\n    saveData();\r\n  }\r\n\r\n  function deleteTaskInStorage({ id }) {\r\n    _data.forEach((item, i) => {\r\n      if(item.id === id) {\r\n        _data.splice(i, 1);\r\n      }\r\n    });\r\n\r\n    saveData();\r\n  }\r\n\r\n  function calculateTime() {\r\n    console.log('calc');\r\n    _CalculateTime__WEBPACK_IMPORTED_MODULE_2__[\"default\"].calculate(_data);\r\n  };\r\n\r\n  function cleanTaskList() {\r\n    console.log('clean');\r\n    window.localStorage.removeItem('timeTasks');\r\n\r\n    _tasksContainer.innerHTML = '';\r\n  };\r\n\r\n  function init (modules) {\r\n    console.log('init');\r\n\r\n    _addBtn = document.querySelector('.add-btn');\r\n    _calcBtn = document.querySelector('.calc-btn');\r\n    _cleanBtn = document.querySelector('.clean-btn');\r\n    _totalLine = document.querySelector('.calculator__total-num');\r\n    _tasksContainer = document.querySelector('.calculator__time-list');\r\n\r\n    _addBtn.onclick = createTask;\r\n    _calcBtn.onclick = calculateTime;\r\n    _cleanBtn.onclick = cleanTaskList;\r\n\r\n    loadData();\r\n\r\n    _Mediator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe('save task', saveTask);\r\n    _Mediator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe('delete task', deleteTaskInStorage);\r\n  };\r\n\r\n  return {\r\n    init: init\r\n  }\r\n}());\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimeTracker);\r\n\n\n//# sourceURL=webpack:///./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/uuid.js":
/*!*****************************!*\
  !*** ./src/modules/uuid.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return uuidv4; });\nfunction uuidv4() {\r\n  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {\r\n    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);\r\n    return v.toString(16);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/uuid.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/index.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/index.css?");

/***/ })

/******/ });