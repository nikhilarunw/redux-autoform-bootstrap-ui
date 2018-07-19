'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormGroup = require('../common/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Static = function (_Component) {
    _inherits(Static, _Component);

    function Static() {
        _classCallCheck(this, Static);

        return _possibleConstructorReturn(this, (Static.__proto__ || Object.getPrototypeOf(Static)).apply(this, arguments));
    }

    _createClass(Static, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                name = _props.name,
                displayName = _props.displayName,
                help = _props.help,
                error = _props.error,
                touched = _props.touched,
                fieldLayout = _props.fieldLayout;

            var formGroupProps = { error: error, touched: touched, displayName: displayName, name: name, help: help, fieldLayout: fieldLayout };

            return _react2.default.createElement(
                _FormGroup2.default,
                formGroupProps,
                _react2.default.createElement(
                    _reactBootstrap.FormControl.Static,
                    null,
                    value
                )
            );
        }
    }]);

    return Static;
}(_react.Component);

exports.default = Static;
module.exports = exports['default'];