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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EntityContainer = function (_Component) {
    _inherits(EntityContainer, _Component);

    function EntityContainer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EntityContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EntityContainer.__proto__ || Object.getPrototypeOf(EntityContainer)).call.apply(_ref, [this].concat(args))), _this), _this._renderHeader = function () {
            var displayName = _this.props.displayName;


            if (displayName) {
                return _react2.default.createElement(
                    'header',
                    { className: 'metaform-group-header no-lateral-margin' },
                    _react2.default.createElement(
                        'span',
                        { className: 'metaform-group-title' },
                        displayName
                    )
                );
            }

            return null;
        }, _this._renderComponents = function () {
            var _this$props = _this.props,
                componentFactory = _this$props.componentFactory,
                layout = _this$props.layout,
                fields = _this$props.fields,
                disabled = _this$props.disabled;

            fields = fields.map(function (field) {
                return _extends({}, field, { disabled: disabled });
            });
            return componentFactory.buildGroupComponent({
                component: layout.component,
                layout: layout,
                fields: fields,
                componentFactory: componentFactory
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EntityContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'entity-container' },
                this._renderHeader(),
                _react2.default.createElement(
                    'div',
                    { className: 'entity-container-content' },
                    this._renderComponents()
                )
            );
        }
    }]);

    return EntityContainer;
}(_react.Component);

EntityContainer.props = {
    //Number props
    innerSize: _propTypes2.default.number,

    //Any props
    value: _propTypes2.default.any,
    options: _propTypes2.default.any,

    //Bool props
    checked: _propTypes2.default.bool,
    valid: _propTypes2.default.bool,
    invalid: _propTypes2.default.bool,
    dirty: _propTypes2.default.bool,
    pristine: _propTypes2.default.bool,
    active: _propTypes2.default.bool,
    touched: _propTypes2.default.bool,
    visited: _propTypes2.default.bool,
    autofilled: _propTypes2.default.bool,
    required: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,

    //String props
    group: _propTypes2.default.string,
    addonBefore: _propTypes2.default.string,
    addonAfter: _propTypes2.default.string,
    component: _propTypes2.default.string,
    help: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    name: _propTypes2.default.string,
    error: _propTypes2.default.string,
    type: _propTypes2.default.string,
    displayName: _propTypes2.default.string,
    initialValue: _propTypes2.default.string,
    fieldLayout: _propTypes2.default.string,

    //Function props
    autofill: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    onDragStart: _propTypes2.default.func,
    onDrop: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onUpdate: _propTypes2.default.func,
    onChange: _propTypes2.default.func,

    //Object props
    componentFactory: _propTypes2.default.object,
    reduxFormProps: _propTypes2.default.object,
    _extra: _propTypes2.default.object
};

exports.default = EntityContainer;
module.exports = exports['default'];