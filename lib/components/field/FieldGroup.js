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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldGroup = function (_Component) {
    _inherits(FieldGroup, _Component);

    function FieldGroup() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, FieldGroup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FieldGroup.__proto__ || Object.getPrototypeOf(FieldGroup)).call.apply(_ref, [this].concat(args))), _this), _this.getGroupContent = function () {
            var _this$props = _this.props,
                componentFactory = _this$props.componentFactory,
                _this$props$_extra = _this$props._extra,
                layout = _this$props$_extra.layout,
                fields = _this$props$_extra.fields,
                groupName = _this$props.group;

            var group = layout.groups.find(function (g) {
                return g.name == groupName;
            });
            var groupProps = {
                component: group.component,
                layout: group,
                fields: fields,
                componentFactory: componentFactory
            };

            if (!group) {
                throw Error('Could not find group. Group: ' + groupName);
            }

            return componentFactory.buildGroupComponent(groupProps);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(FieldGroup, [{
        key: 'render',
        value: function render() {
            // let { value, placeholder, addonBefore, addonAfter, onChange, onBlur, componentClass, children, rows, // textarea only,};
            var _props = this.props,
                name = _props.name,
                displayName = _props.displayName,
                help = _props.help,
                error = _props.error,
                touched = _props.touched,
                fieldLayout = _props.fieldLayout,
                innerSize = _props.innerSize;

            var formGroupProps = { error: error, touched: touched, displayName: displayName, name: name, help: help, fieldLayout: fieldLayout, innerSize: innerSize };
            var groupContent = this.getGroupContent();

            return _react2.default.createElement(
                _FormGroup2.default,
                _extends({ className: 'field-group' }, formGroupProps),
                groupContent
            );
        }
    }]);

    return FieldGroup;
}(_react.Component);

FieldGroup.propTypes = {
    value: _propTypes2.default.any,
    onChange: _propTypes2.default.func.isRequired,
    placeholder: _propTypes2.default.string,
    displayName: _propTypes2.default.string,
    name: _propTypes2.default.string.isRequired,
    error: _propTypes2.default.string,
    addonBefore: _propTypes2.default.string,
    addonAfter: _propTypes2.default.string,
    fieldLayout: _propTypes2.default.string
};
exports.default = FieldGroup;
module.exports = exports['default'];