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

var _FormGroupInlineControlLabel = require('./FormGroupInlineControlLabel');

var _FormGroupInlineControlLabel2 = _interopRequireDefault(_FormGroupInlineControlLabel);

var _FormGroupInlineContent = require('./FormGroupInlineContent');

var _FormGroupInlineContent2 = _interopRequireDefault(_FormGroupInlineContent);

var _reduxAutoformUtils = require('redux-autoform-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormGroupInline = function (_Component) {
    _inherits(FormGroupInline, _Component);

    function FormGroupInline() {
        _classCallCheck(this, FormGroupInline);

        return _possibleConstructorReturn(this, (FormGroupInline.__proto__ || Object.getPrototypeOf(FormGroupInline)).apply(this, arguments));
    }

    _createClass(FormGroupInline, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                error = _props.error,
                touched = _props.touched,
                displayName = _props.displayName,
                name = _props.name,
                children = _props.children,
                help = _props.help,
                className = _props.className,
                innerSize = _props.innerSize;

            displayName = (0, _reduxAutoformUtils.getDisplayName)(displayName, name);

            var controlLabelProps = { displayName: displayName };
            var contentProps = { error: error, touched: touched, children: children, help: help, hasControlLabel: displayName != null, innerSize: innerSize };
            var formGroupProps = { className: className };

            if (error && touched) {
                formGroupProps.validationState = 'error';
            }

            return _react2.default.createElement(
                _reactBootstrap.FormGroup,
                formGroupProps,
                _react2.default.createElement(_FormGroupInlineControlLabel2.default, controlLabelProps),
                _react2.default.createElement(
                    _FormGroupInlineContent2.default,
                    contentProps,
                    children
                )
            );
        }
    }]);

    return FormGroupInline;
}(_react.Component);

FormGroupInline.propTypes = {
    error: _propTypes2.default.string,
    touched: _propTypes2.default.bool,
    displayName: _propTypes2.default.string,
    name: _propTypes2.default.string,
    help: _propTypes2.default.string
};
exports.default = FormGroupInline;
module.exports = exports['default'];