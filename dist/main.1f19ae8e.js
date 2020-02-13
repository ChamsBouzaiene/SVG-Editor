// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"SVGElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SVGElement =
/*#__PURE__*/
function () {
  function SVGElement(_ref) {
    var width = _ref.width,
        height = _ref.height,
        posX = _ref.posX,
        posY = _ref.posY,
        id = _ref.id,
        type = _ref.type;

    _classCallCheck(this, SVGElement);

    this.width = width || 100;
    this.height = height || 100;
    this.posX = posX || 100;
    this.posY = posY || 100;
    this.id = id || "svgElement";
    this.type = type || "svg";
    this.domNode = this.createSVGDOMNode(type);
  }

  _createClass(SVGElement, [{
    key: "createSVGDOMNode",
    value: function createSVGDOMNode() {
      var height = this.height,
          width = this.width,
          posY = this.posY,
          posX = this.posX,
          id = this.id,
          type = this.type;
      var svg = document.createElementNS("http://www.w3.org/2000/svg", type);
      svg.setAttribute("style", "border: 1px solid black;box-sizing: border-box"); //svg.setAttribute("style", "box-sizing: border-box");

      svg.setAttribute("id", id);
      svg.setAttribute("x", posX);
      svg.setAttribute("y", posY);
      svg.setAttribute("width", width);
      svg.setAttribute("height", height);
      svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
      return svg;
    }
  }]);

  return SVGElement;
}();

exports.default = SVGElement;
},{}],"Area.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SVGElement2 = _interopRequireDefault(require("./SVGElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Area =
/*#__PURE__*/
function (_SVGElement) {
  _inherits(Area, _SVGElement);

  function Area() {
    _classCallCheck(this, Area);

    return _possibleConstructorReturn(this, _getPrototypeOf(Area).apply(this, arguments));
  }

  _createClass(Area, [{
    key: "appendElement",
    value: function appendElement(element) {
      this.domNode.appendChild(element);
    }
  }, {
    key: "setDimentions",
    value: function setDimentions() {}
  }]);

  return Area;
}(_SVGElement2.default); // let test = new Area();
// console.log(test.domNode);


exports.default = Area;
},{"./SVGElement":"SVGElement.js"}],"Editor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Editor =
/*#__PURE__*/
function () {
  function Editor(_ref) {
    var targetNode = _ref.targetNode,
        playGround = _ref.playGround,
        eventHandler = _ref.eventHandler,
        selector = _ref.selector;

    _classCallCheck(this, Editor);

    this.targetNode = targetNode;
    this.playGround = playGround;
    this.domNode = this.createEditor();
    this.selector = selector;
    this.svgElements = [];
    this.EditorEventHandler = eventHandler.startListening({
      editor: this.domNode,
      selector: this.selector
    });
  } // [TODO] move SetDimentions to lower Layer


  _createClass(Editor, [{
    key: "setDimentions",
    value: function setDimentions(node, width, height) {
      node.setAttribute("width", width);
      node.setAttribute("height", height);
      return node;
    }
  }, {
    key: "createEditor",
    value: function createEditor() {
      // [TODO] move SetDimentions to lower Layer
      var editor = this.playGround.domNode;

      var _this$getEditorParams = this.getEditorParams(),
          width = _this$getEditorParams.width,
          height = _this$getEditorParams.height;

      this.setDimentions(editor, width, height);
      return editor;
    }
  }, {
    key: "getEditorParams",
    value: function getEditorParams() {
      var width = this.targetNode.offsetWidth - 10;
      var height = this.targetNode.offsetHeight - 10;
      return {
        width: width,
        height: height
      };
    }
  }, {
    key: "addElement",
    value: function addElement(_ref2) {
      var domNode = _ref2.domNode;
      this.playGround.appendElement(domNode);
    }
  }]);

  return Editor;
}();

exports.default = Editor;
},{}],"Selector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Selector =
/*#__PURE__*/
function () {
  function Selector(id) {
    _classCallCheck(this, Selector);

    this.id = id;
    this.selectorElem = document.getElementById(this.id);
  } // check if selected element is an svg inside area not the entire area


  _createClass(Selector, [{
    key: "isSelectable",
    value: function isSelectable(element, area) {
      if (element.isSameNode(area)) {
        return false;
      }

      return true;
    }
  }, {
    key: "toggleSelectionOverElement",
    value: function toggleSelectionOverElement(element) {
      var bound = element.getBoundingClientRect();
      var style = this.selectorElem.style;
      style.left = bound.left + "px";
      style.top = bound.top + "px";
      style.width = bound.width + "px";
      style.height = bound.height + "px";
      style.display = "block";
    }
  }, {
    key: "updateSelection",
    value: function updateSelection(element, area) {
      if (this.isSelectable(element, area)) {
        return this.toggleSelectionOverElement(element);
      }

      return this.hideSelection();
    }
  }, {
    key: "hideSelection",
    value: function hideSelection() {
      this.selectorElem.style.display = "none";
    }
  }]);

  return Selector;
}();

exports.default = Selector;
},{}],"EditorEventHandler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EditorEventHandler =
/*#__PURE__*/
function () {
  function EditorEventHandler() {
    _classCallCheck(this, EditorEventHandler);

    this.editor;
    this.selector;
    this.selected;
    this.offset = {
      x: 0,
      y: 0
    };
  }

  _createClass(EditorEventHandler, [{
    key: "startListening",
    value: function startListening(_ref) {
      var editor = _ref.editor,
          selector = _ref.selector;
      this.editor = editor;
      this.selector = selector;
      this.handleEditorEvents();
    }
  }, {
    key: "handleEditorEvents",
    value: function handleEditorEvents() {
      this.handleElementsHover();
      this.handleElementSelect();
      this.handleMoveElement();
      this.handleElementDeselect();
    }
  }, {
    key: "handleElementsHover",
    value: function handleElementsHover() {
      var _this = this;

      console.log(this);
      this.editor.addEventListener("mouseover", function (_ref2) {
        var target = _ref2.target;
        return _this.selector.updateSelection(target, _this.editor);
      });
    }
  }, {
    key: "getElementPositionRelativeToCursor",
    value: function getElementPositionRelativeToCursor() {}
  }, {
    key: "handleElementSelect",
    value: function handleElementSelect() {
      var _this2 = this;

      var domNode = this.editor.domNode,
          selector = this.selector,
          offset = this.offset;
      this.editor.addEventListener("mousedown", function (event) {
        var target = event.target,
            clientX = event.clientX,
            clientY = event.clientY;

        if (_this2.selector.isSelectable(target, domNode)) {
          _this2.offset.x = parseFloat(target.getAttribute("x")) - clientX;
          _this2.offset.y = parseFloat(target.getAttribute("y")) - clientY;
          _this2.selected = target;
        }
      });
    }
  }, {
    key: "handleElementDeselect",
    value: function handleElementDeselect() {
      var _this3 = this;

      this.editor.addEventListener("mouseup", function (event) {
        _this3.selected = null;
      });
    }
  }, {
    key: "handleMoveElement",
    value: function handleMoveElement() {
      var _this4 = this;

      var offset = this.offset,
          selector = this.selector;
      this.editor.addEventListener("mousemove", function (event) {
        var clientX = event.clientX,
            clientY = event.clientY;

        if (_this4.selected) {
          if (_this4.selected.tagName === "circle") {
            _this4.selected.setAttribute("cx", clientX + offset.x);

            _this4.selected.setAttribute("cy", clientY + offset.y);
          } else {
            _this4.selected.setAttribute("x", clientX + offset.x);

            _this4.selected.setAttribute("y", clientY + offset.y);

            selector.updateSelection(_this4.selected, _this4.editor);
          }

          selector.updateSelection(_this4.selected);
        }
      });
    }
  }]);

  return EditorEventHandler;
}();

exports.default = EditorEventHandler;
},{}],"Rect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SVGElement2 = _interopRequireDefault(require("./SVGElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rect =
/*#__PURE__*/
function (_SVGElement) {
  _inherits(Rect, _SVGElement);

  function Rect(_ref) {
    var posX = _ref.posX,
        posY = _ref.posY;

    _classCallCheck(this, Rect);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rect).call(this, {
      type: "rect",
      posX: posX,
      posY: posY
    }));
  }

  return Rect;
}(_SVGElement2.default);

exports.default = Rect;
},{"./SVGElement":"SVGElement.js"}],"main.js":[function(require,module,exports) {
"use strict";

require("./styles.scss");

var _Area = _interopRequireDefault(require("./Area.js"));

var _Editor = _interopRequireDefault(require("./Editor"));

var _Selector = _interopRequireDefault(require("./Selector"));

var _EditorEventHandler = _interopRequireDefault(require("./EditorEventHandler"));

var _Rect = _interopRequireDefault(require("./Rect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import SVGElement from "./SVGElement";
var main = document.getElementById("main");
var area = new _Area.default({});
var selector = new _Selector.default("outline");
var editorEventHandler = new _EditorEventHandler.default();
var editor = new _Editor.default({
  targetNode: main,
  playGround: area,
  selector: selector,
  eventHandler: editorEventHandler
}); // test phase

var testRect = new _Rect.default({});
var testRect2 = new _Rect.default({
  posX: 150,
  posY: 200
});
editor.addElement(testRect);
editor.addElement(testRect2);
main.appendChild(editor.domNode); // impliment in editor
//editorEventHandler.handleEditorEvents();
},{"./styles.scss":"styles.scss","./Area.js":"Area.js","./Editor":"Editor.js","./Selector":"Selector.js","./EditorEventHandler":"EditorEventHandler.js","./Rect":"Rect.js"}],"../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40203" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map