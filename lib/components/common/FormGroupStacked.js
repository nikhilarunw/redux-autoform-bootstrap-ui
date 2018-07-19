'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _HelpBlock = require('react-bootstrap/lib/HelpBlock');

var _HelpBlock2 = _interopRequireDefault(_HelpBlock);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormGroupStacked = function (_Component) {
    _inherits(FormGroupStacked, _Component);

    function FormGroupStacked() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, FormGroupStacked);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormGroupStacked.__proto__ || Object.getPrototypeOf(FormGroupStacked)).call.apply(_ref, [this].concat(args))), _this), _this.getControlLabel = function () {
            var _this$props = _this.props,
                displayName = _this$props.displayName,
                name = _this$props.name;


            if (displayName != undefined) {
                return _react2.default.createElement(
                    _ControlLabel2.default,
                    null,
                    displayName || name
                );
            } else {
                return null;
            }
        }, _this.getHelpBlock = function () {
            var _this$props2 = _this.props,
                error = _this$props2.error,
                touched = _this$props2.touched,
                help = _this$props2.help;

            var helpText = (touched ? error : '') || help;

            if (helpText) {
                return _react2.default.createElement(
                    _HelpBlock2.default,
                    null,
                    helpText
                );
            } else {
                return null;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(FormGroupStacked, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                error = _props.error,
                touched = _props.touched,
                children = _props.children,
                innerSize = _props.innerSize,
                className = _props.className;

            var validationState = error && touched ? 'error' : null;
            var formGroupProps = { className: className, validationState: validationState };
            var controlLabel = this.getControlLabel();
            var helpBlock = this.getHelpBlock();

            return _react2.default.createElement(
                _reactBootstrap.FormGroup,
                formGroupProps,
                _react2.default.createElement(
                    _Col2.default,
                    { className: 'no-padding-col', md: innerSize || 12 },
                    controlLabel,
                    children,
                    helpBlock
                ),
                _react2.default.createElement('div', { className: 'clearfix' })
            );
        }
    }]);

    return FormGroupStacked;
}(_react.Component);

FormGroupStacked.propTypes = {
    error: _propTypes2.default.string,
    touched: _propTypes2.default.bool,
    displayName: _propTypes2.default.string,
    name: _propTypes2.default.string,
    help: _propTypes2.default.string
};
exports.default = FormGroupStacked;
module.exports = exports['default'];