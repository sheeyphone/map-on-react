"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LMapOverItem = exports.LMapOver = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = require("prop-types");
require("./LMapOver.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function isNumber(n) {
  return Number(n) === n;
}
var LMapOver = /*#__PURE__*/function (_React$Component) {
  _inherits(LMapOver, _React$Component);
  var _super = _createSuper(LMapOver);
  function LMapOver() {
    _classCallCheck(this, LMapOver);
    return _super.apply(this, arguments);
  }
  _createClass(LMapOver, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "LMapOver"
      }, children);
    }
  }]);
  return LMapOver;
}(_react.default.Component);
exports.LMapOver = LMapOver;
_defineProperty(LMapOver, "propTypes", {
  children: _propTypes.PropTypes.any
});
var LMapOverItem = /*#__PURE__*/function (_React$Component2) {
  _inherits(LMapOverItem, _React$Component2);
  var _super2 = _createSuper(LMapOverItem);
  function LMapOverItem() {
    _classCallCheck(this, LMapOverItem);
    return _super2.apply(this, arguments);
  }
  _createClass(LMapOverItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        top = _this$props.top,
        bottom = _this$props.bottom,
        left = _this$props.left,
        right = _this$props.right;
      var styleInsert = {};
      if (isNumber(top)) {
        styleInsert.top = top;
      }
      if (isNumber(bottom)) {
        styleInsert.bottom = bottom;
      }
      if (isNumber(left)) {
        styleInsert.left = left;
      }
      if (isNumber(right)) {
        styleInsert.right = right;
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "LMapOverItem",
        style: styleInsert
      }, children);
    }
  }]);
  return LMapOverItem;
}(_react.default.Component);
exports.LMapOverItem = LMapOverItem;
_defineProperty(LMapOverItem, "propTypes", {
  children: _propTypes.PropTypes.any,
  top: _propTypes.PropTypes.any,
  bottom: _propTypes.PropTypes.any,
  left: _propTypes.PropTypes.any,
  right: _propTypes.PropTypes.any
});