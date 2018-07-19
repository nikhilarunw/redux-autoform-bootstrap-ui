'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxAutoformUtils = require('redux-autoform-utils');

var _reactBootstrap = require('react-bootstrap');

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
    _inherits(Checkbox, _Component);

    function Checkbox() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Checkbox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.getContent = function () {
            var _this$props = _this.props,
                value = _this$props.value,
                name = _this$props.name,
                displayName = _this$props.displayName,
                error = _this$props.error,
                touched = _this$props.touched,
                onChange = _this$props.onChange,
                onBlur = _this$props.onBlur,
                disabled = _this$props.disabled;

            var validationState = error && touched ? 'error' : null;
            var checkboxProps = { checked: value, onChange: onChange, onBlur: onBlur, validationState: validationState, disabled: disabled };

            return _react2.default.createElement(
                _reactBootstrap.Checkbox,
                _extends({ className: 'cb-fix' }, checkboxProps),
                (0, _reduxAutoformUtils.getDisplayName)(displayName, name)
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Checkbox, [{
        key: 'render',
        value: function render() {
            var fieldLayout = this.props.fieldLayout;

            var content = this.getContent();

            if (fieldLayout == 'inline') {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'col-fixed-140' },
                        _react2.default.createElement('label', null)
                    ),
                    _react2.default.createElement(
                        _Col2.default,
                        { md: 12, className: 'col-offset-140 no-padding-col' },
                        content
                    )
                );
            } else {
                return content;
            }
        }
    }]);

    return Checkbox;
}(_react.Component);

exports.default = Checkbox;
module.exports = exports['default'];