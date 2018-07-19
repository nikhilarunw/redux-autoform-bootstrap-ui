'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _FormGroup = require('../common/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_Component) {
    _inherits(Radio, _Component);

    function Radio() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Radio);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Radio.__proto__ || Object.getPrototypeOf(Radio)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
            var onChange = _this.props.onChange;

            onChange(event.target.value);
        }, _this.getOptions = function (value) {
            var _this$props = _this.props,
                options = _this$props.options,
                name = _this$props.name,
                fieldLayout = _this$props.fieldLayout,
                disabled = _this$props.disabled;

            // these props don't vary per item

            var invariantRadioProps = { inline: fieldLayout == 'inline', name: name, onChange: _this.handleChange, disabled: disabled };

            return options.map(function (item, index) {
                return _react2.default.createElement(
                    _reactBootstrap.Radio,
                    _extends({ key: index, value: item.value, checked: item.value == value }, invariantRadioProps),
                    item.text
                );
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Radio, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                error = _props.error,
                touched = _props.touched,
                displayName = _props.displayName,
                name = _props.name,
                help = _props.help,
                fieldLayout = _props.fieldLayout,
                innerSize = _props.innerSize,
                value = _props.value;

            var formGroupProps = { error: error, touched: touched, displayName: displayName, name: name, help: help, fieldLayout: fieldLayout, innerSize: innerSize };
            var options = this.getOptions(value);

            return _react2.default.createElement(
                _FormGroup2.default,
                formGroupProps,
                options
            );
        }
    }]);

    return Radio;
}(_react.Component);

exports.default = Radio;
module.exports = exports['default'];