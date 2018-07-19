'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactWidgets = require('react-widgets');

var _reduxAutoformUtils = require('redux-autoform-utils');

var _FormGroup = require('../common/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _moment3 = require('react-widgets/lib/localizers/moment');

var _moment4 = _interopRequireDefault(_moment3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _moment4.default)(_moment2.default);

var DateTimePicker = function (_Component) {
    _inherits(DateTimePicker, _Component);

    function DateTimePicker() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DateTimePicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.getFormat = function (format, type, formats) {
            if (!type) {
                throw Error('\'type\' should be truthy');
            }

            if (!formats) {
                throw Error('\'localizer\' should be truthy');
            }

            if (format) {
                return format;
            }

            switch (type) {
                case 'datetime':
                    return formats.default;
                case 'date':
                    return formats.date;
                case 'time':
                    return formats.time;
                default:
                    throw Error('Invalid type. Type: ' + type);
            }
        }, _this.setReactWidgetsProps = function (props, type) {
            if (!props) {
                throw Error('\'props\' should be truthy');
            }

            if (!type) {
                throw Error('\'type\' should be truthy');
            }

            switch (type) {
                case 'time':
                    props.calendar = false;
                    break;
                case 'date':
                    props.time = false;
                    break;
            }
        }, _this.onChange = function (date, dateAsString) {
            var onChange = _this.props.onChange;

            onChange(dateAsString);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * Returns the format prop for the given DateTimePicker props
     * @param format
     * @param type
     * @param formats
     * @returns {*}
     */


    /**
     * Sets ReactWidgetsDateTimePicker props depending on the the type metadata
     * @param props
     * @param type
     */


    _createClass(DateTimePicker, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                name = _props.name,
                displayName = _props.displayName,
                help = _props.help,
                error = _props.error,
                touched = _props.touched,
                onBlur = _props.onBlur,
                format = _props.format,
                type = _props.type,
                fieldLayout = _props.fieldLayout,
                disabled = _props.disabled;

            var localizer = (0, _reduxAutoformUtils.getDateLocalizer)();

            if (typeof value == 'string') {
                if (value == '') {
                    value = undefined;
                } else {
                    format = this.getFormat(format, type, localizer.formats);
                    value = localizer.parse(value, format);
                }
            }

            var reactWidgetsProps = { value: value, displayName: displayName, onChange: this.onChange, onBlur: onBlur, format: format, disabled: disabled };
            var formGroupProps = { error: error, touched: touched, displayName: displayName, name: name, help: help, fieldLayout: fieldLayout };

            this.setReactWidgetsProps(reactWidgetsProps, type);

            return _react2.default.createElement(
                _FormGroup2.default,
                formGroupProps,
                _react2.default.createElement(_reactWidgets.DateTimePicker, reactWidgetsProps)
            );
        }
    }]);

    return DateTimePicker;
}(_react.Component);

DateTimePicker.propTypes = {
    value: _propTypes2.default.any,
    onChange: _propTypes2.default.func.isRequired,
    displayName: _propTypes2.default.string,
    name: _propTypes2.default.string.isRequired,
    error: _propTypes2.default.string,
    format: _propTypes2.default.string
};
exports.default = DateTimePicker;
module.exports = exports['default'];