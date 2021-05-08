"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _classnames = _interopRequireDefault(require("classnames"));

var _redux = require("redux");

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _v = _interopRequireDefault(require("uuid/v1"));

var _BoardContainer = _interopRequireDefault(require("./BoardContainer"));

var _createTranslate = _interopRequireDefault(require("../helpers/createTranslate"));

var _BoardReducer = _interopRequireDefault(require("../reducers/BoardReducer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const middlewares = process.env.REDUX_LOGGING ? [_reduxLogger.default] : [];

class Board extends _react.Component {
  constructor({
    id
  }) {
    super();
    (0, _defineProperty2.default)(this, "getStore", () => {
      //When you create multiple boards, unique stores are created for isolation
      return (0, _redux.createStore)(_BoardReducer.default, (0, _redux.applyMiddleware)(...middlewares));
    });
    this.store = this.getStore();
    this.id = id || (0, _v.default)();
  }

  render() {
    const _this$props = this.props,
          id = _this$props.id,
          className = _this$props.className,
          components = _this$props.components;
    const allClassNames = (0, _classnames.default)('react-trello-board', className || '');
    return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
      store: this.store
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(components.GlobalStyle, null), /*#__PURE__*/_react.default.createElement(_BoardContainer.default, (0, _extends2.default)({
      id: this.id
    }, this.props, {
      className: allClassNames
    }))));
  }

}

exports.default = Board;