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

var _FormGroup = require('../common/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _reactSelectPlus = require('react-select-plus');

var _reactSelectPlus2 = _interopRequireDefault(_reactSelectPlus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lookup = function (_Component) {
    _inherits(Lookup, _Component);

    function Lookup() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Lookup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Lookup.__proto__ || Object.getPrototypeOf(Lookup)).call.apply(_ref, [this].concat(args))), _this), _this.fetchItems = function () {
            var options = _this.props.options;


            return fetch(options.url).then(function (response) {
                return response.json();
            }).then(function (json) {
                return { options: json };
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Lookup, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                name = _props.name,
                displayName = _props.displayName,
                help = _props.help,
                error = _props.error,
                touched = _props.touched,
                onChange = _props.onChange,
                _onBlur = _props.onBlur,
                options = _props.options,
                fieldLayout = _props.fieldLayout,
                disabled = _props.disabled;

            var formGroupProps = { error: error, touched: touched, displayName: displayName, name: name, help: help, fieldLayout: fieldLayout };
            var selectProps = void 0;

            if (Array.isArray(options)) {
                selectProps = {
                    options: options,
                    value: value,
                    name: name,
                    disabled: disabled,
                    onChange: onChange,
                    onBlur: function onBlur(event) {
                        return _onBlur();
                    }
                };

                return _react2.default.createElement(
                    _FormGroup2.default,
                    formGroupProps,
                    _react2.default.createElement(_reactSelectPlus2.default, selectProps)
                );
            } else if (options.url) {
                selectProps = {
                    value: value,
                    name: name,
                    onChange: onChange,
                    onBlur: function onBlur(event) {
                        return _onBlur();
                    },
                    valueKey: options.valueKey || 'value',
                    labelKey: options.labelKey || 'label'
                };

                return _react2.default.createElement(
                    _FormGroup2.default,
                    formGroupProps,
                    _react2.default.createElement(_reactSelectPlus2.default.Async, _extends({}, selectProps, { loadOptions: this.fetchItems }))
                );
            }

            return false;
        }
    }]);

    return Lookup;
}(_react.Component);

exports.default = Lookup;
module.exports = exports['default'];