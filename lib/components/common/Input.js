'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormControl = require('./FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
    _inherits(Input, _Component);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
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
                children = _props.children,
                inputType = _props.inputType,
                value = _props.value,
                placeholder = _props.placeholder,
                addonBefore = _props.addonBefore,
                addonAfter = _props.addonAfter,
                onChange = _props.onChange,
                onBlur = _props.onBlur,
                componentClass = _props.componentClass,
                rows = _props.rows,
                min = _props.min,
                max = _props.max,
                disabled = _props.disabled;


            var formGroupProps = {
                error: error,
                touched: touched,
                displayName: displayName,
                name: name,
                help: help,
                fieldLayout: fieldLayout,
                innerSize: innerSize
            };

            var formControlProps = {
                inputType: inputType,
                value: value,
                name: name,
                placeholder: placeholder,
                displayName: displayName,
                help: help,
                addonBefore: addonBefore,
                addonAfter: addonAfter,
                onChange: onChange,
                onBlur: onBlur,
                componentClass: componentClass,
                rows: rows,
                min: min,
                max: max,
                disabled: disabled
            };

            return _react2.default.createElement(
                _FormGroup2.default,
                formGroupProps,
                _react2.default.createElement(
                    _FormControl2.default,
                    formControlProps,
                    children
                )
            );
        }
    }]);

    return Input;
}(_react.Component);

Input.propTypes = {
    value: _propTypes2.default.any,
    onChange: _propTypes2.default.func.isRequired,
    placeholder: _propTypes2.default.string,
    displayName: _propTypes2.default.string,
    name: _propTypes2.default.string.isRequired,
    error: _propTypes2.default.string,
    addonBefore: _propTypes2.default.string,
    addonAfter: _propTypes2.default.string,
    fieldLayout: _propTypes2.default.string,
    componentClass: _propTypes2.default.string,
    inputType: _propTypes2.default.string
};
Input.defaultProps = {
    inputType: "text"
};
exports.default = Input;
module.exports = exports['default'];