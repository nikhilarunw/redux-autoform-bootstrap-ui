'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormGroupInline = require('./FormGroupInline.js');

var _FormGroupInline2 = _interopRequireDefault(_FormGroupInline);

var _FormGroupStacked = require('./FormGroupStacked');

var _FormGroupStacked2 = _interopRequireDefault(_FormGroupStacked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormGroup = function (_Component) {
    _inherits(FormGroup, _Component);

    function FormGroup() {
        _classCallCheck(this, FormGroup);

        return _possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).apply(this, arguments));
    }

    _createClass(FormGroup, [{
        key: 'render',
        value: function render() {
            var fieldLayout = this.props.fieldLayout;

            var InnerFormGroup = fieldLayout == 'inline' ? _FormGroupInline2.default : _FormGroupStacked2.default;

            return _react2.default.createElement(InnerFormGroup, this.props);
        }
    }]);

    return FormGroup;
}(_react.Component);

FormGroup.propTypes = {
    error: _propTypes2.default.string,
    touched: _propTypes2.default.bool,
    displayName: _propTypes2.default.string,
    name: _propTypes2.default.string,
    help: _propTypes2.default.string
};
exports.default = FormGroup;
module.exports = exports['default'];