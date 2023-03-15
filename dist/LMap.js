"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapContext = exports.LTileLayer = exports.LMap = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = require("prop-types");
require("./LMap.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 The MapContext functions to interchange data 
 between LMap and other layers.
 */
var MapContext = /*#__PURE__*/_react.default.createContext(null);

/*
 LMap is a base map container, specifying the unique 
 parameter 'mapId', which would create the leaflet 
 map context instead.
*/
exports.MapContext = MapContext;
var LMap = /*#__PURE__*/function (_React$Component) {
  _inherits(LMap, _React$Component);
  var _super = _createSuper(LMap);
  function LMap(props) {
    var _this;
    _classCallCheck(this, LMap);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "state", {
      mapReady: false,
      // use only once!
      mapConfig: {
        center: [22.65, 114.22],
        zoom: 9,
        minZoom: 5,
        maxZoom: 18,
        layers: [],
        zoomControl: false,
        attributionControl: false
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onMapReady", function (map) {
      _this.props.onMapReady(map);
    });
    _this.map = null;
    return _this;
  }
  _createClass(LMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._initialMap();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._deconstructMap();
    }
  }, {
    key: "render",
    value: function render() {
      var map = this.map;
      var mapReady = this.state.mapReady;
      var _this$props = this.props,
        mapId = _this$props.mapId,
        children = _this$props.children;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "LMap",
        id: mapId
      }, mapReady && /*#__PURE__*/_react.default.createElement(MapContext.Provider, {
        value: map
      }, children));
    }
    /* The component's methods should be defined below. */
  }, {
    key: "_initialMap",
    value: function _initialMap() {
      var _this$props2 = this.props,
        mapId = _this$props2.mapId,
        configs = _this$props2.configs;
      if (!mapId) {
        throw Error("You should specify the unique mapId props.");
      }
      if (!this.map) {
        var mapConfigDef = _objectSpread({}, this.state.mapConfig);
        if (configs) {
          mapConfigDef = _objectSpread({}, configs);
        }
        var map = L.map(mapId, mapConfigDef);
        this.map = map;
        this.setState({
          mapReady: true
        });
      }
    }
  }, {
    key: "_deconstructMap",
    value: function _deconstructMap() {
      if (this.map !== null) {
        this.map.remove();
        this.map = null;
        this.setState({
          mapReady: false
        });
      }
    }
  }]);
  return LMap;
}(_react.default.Component);
exports.LMap = LMap;
_defineProperty(LMap, "propTypes", {
  children: _propTypes.PropTypes.any,
  mapId: _propTypes.PropTypes.string.isRequired,
  configs: _propTypes.PropTypes.string,
  onMapReady: _propTypes.PropTypes.any
});
var LTileLayer = /*#__PURE__*/function (_React$Component2) {
  _inherits(LTileLayer, _React$Component2);
  var _super2 = _createSuper(LTileLayer);
  function LTileLayer() {
    var _this2;
    _classCallCheck(this, LTileLayer);
    _this2 = _super2.call(this);
    _this2.tileLayer = null;
    return _this2;
  }
  _createClass(LTileLayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._initialLayer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._removeLayer();
    }
  }, {
    key: "render",
    value: function render() {
      this._initialLayer();
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    }
    /* The component's methods should be defined below. */
  }, {
    key: "_initialLayer",
    value: function _initialLayer() {
      var map = this.context;
      var _this$props3 = this.props,
        url = _this$props3.url,
        options = _this$props3.options;
      if (map && !this.tileLayer) {
        var tileLayer = L.tileLayer(url, options);
        tileLayer.addTo(map);
        this.tileLayer = tileLayer;
      }
    }
  }, {
    key: "_removeLayer",
    value: function _removeLayer() {
      if (this.tileLayer) {
        this.tileLayer.remove();
        this.tileLayer = null;
      }
    }
  }]);
  return LTileLayer;
}(_react.default.Component);
exports.LTileLayer = LTileLayer;
_defineProperty(LTileLayer, "contextType", MapContext);
_defineProperty(LTileLayer, "propTypes", {
  url: _propTypes.PropTypes.string.isRequired,
  options: _propTypes.PropTypes.any
});