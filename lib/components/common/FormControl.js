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

var _InputGroup = require('react-bootstrap/lib/InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormControl = function (_Component) {
    _inherits(FormControl, _Component);

    function FormControl() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, FormControl);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormControl.__proto__ || Object.getPrototypeOf(FormControl)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
            var onChange = _this.props.onChange;


            onChange(event.target.value);
        }, _this.handleBlur = function (event) {
            var onBlur = _this.props.onBlur;


            onBlur();
        }, _this.getInput = function () {
            var _this$props = _this.props,
                value = _this$props.value,
                placeholder = _this$props.placeholder,
                componentClass = _this$props.componentClass,
                children = _this$props.children,
                rows = _this$props.rows,
                inputType = _this$props.inputType,
                min = _this$props.min,
                max = _this$props.max,
                disabled = _this$props.disabled;

            var formControlProps = { value: value, placeholder: placeholder, componentClass: componentClass, rows: rows, min: min, max: max, disabled: disabled };

            return _react2.default.createElement(
                _reactBootstrap.FormControl,
                _extends({ type: inputType, ref: 'input', onChange: _this.handleChange, onBlur: _this.handleBlur }, formControlProps),
                children
            );
        }, _this.getAddonBefore = function () {
            var addonBefore = _this.props.addonBefore;


            if (addonBefore) {
                return _react2.default.createElement(
                    _InputGroup2.default.Addon,
                    null,
                    addonBefore
                );
            } else {
                return null;
            }
        }, _this.getAddonAfter = function () {
            var addonAfter = _this.props.addonAfter;


            if (addonAfter) {
                return _react2.default.createElement(
                    _InputGroup2.default.Addon,
                    null,
                    addonAfter
                );
            } else {
                return null;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(FormControl, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                addonBefore = _props.addonBefore,
                addonAfter = _props.addonAfter;

            var before = this.getAddonBefore();
            var input = this.getInput();
            var after = this.getAddonAfter();

            if (addonBefore || addonAfter) {
                return _react2.default.createElement(
                    _InputGroup2.default,
                    null,
                    before,
                    input,
                    after
                );
            } else {
                return input;
            }
        }
    }]);

    return FormControl;
}(_react.Component);

FormControl.propTypes = {
    error: _propTypes2.default.string,
    touched: _propTypes2.default.bool,
    displayName: _propTypes2.default.string,
    name: _propTypes2.default.string,
    help: _propTypes2.default.string
};
exports.default = FormControl;
module.exports = exports['default'];