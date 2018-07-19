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

var _Input = require('../common/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Number = function (_Component) {
    _inherits(Number, _Component);

    function Number() {
        _classCallCheck(this, Number);

        return _possibleConstructorReturn(this, (Number.__proto__ || Object.getPrototypeOf(Number)).apply(this, arguments));
    }

    _createClass(Number, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Input2.default, _extends({ componentClass: 'input', inputType: 'number' }, this.props));
        }
    }]);

    return Number;
}(_react.Component);

Number.propTypes = {
    value: _propTypes2.default.any,
    onChange: _propTypes2.default.func.isRequired,
    placeholder: _propTypes2.default.string,
    displayName: _propTypes2.default.string,
    name: _propTypes2.default.string.isRequired,
    error: _propTypes2.default.string,
    addonBefore: _propTypes2.default.string,
    addonAfter: _propTypes2.default.string,
    fieldLayout: _propTypes2.default.string,
    min: _propTypes2.default.number,
    max: _propTypes2.default.number
};
exports.default = Number;
module.exports = exports['default'];