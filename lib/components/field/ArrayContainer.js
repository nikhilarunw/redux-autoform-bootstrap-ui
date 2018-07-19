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

var _GlyphButton = require('../common/GlyphButton.js');

var _GlyphButton2 = _interopRequireDefault(_GlyphButton);

var _Alert = require('react-bootstrap/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormGroup = require('../common/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _ArrayContainerItem = require('../common/ArrayContainerItem');

var _ArrayContainerItem2 = _interopRequireDefault(_ArrayContainerItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayContainer = function (_Component) {
    _inherits(ArrayContainer, _Component);

    function ArrayContainer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ArrayContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ArrayContainer.__proto__ || Object.getPrototypeOf(ArrayContainer)).call.apply(_ref, [this].concat(args))), _this), _this.handleAdd = function () {
            var reduxFormProps = _this.props.reduxFormProps;

            reduxFormProps.addField({});
        }, _this.handleItemAction = function (index, eventKey) {
            var _this$props = _this.props,
                id = _this$props.id,
                value = _this$props.value,
                fields = _this$props.fields,
                onChange = _this$props.onChange,
                _this$props$reduxForm = _this$props.reduxFormProps,
                swapFields = _this$props$reduxForm.swapFields,
                removeField = _this$props$reduxForm.removeField;


            switch (eventKey) {
                case "remove":
                    removeField(index);
                    break;
                case "moveUp":
                    if (index > 0) {
                        swapFields(index, index - 1);
                    }
                    break;
                case "moveDown":
                    if (index < fields.length - 1) {
                        swapFields(index, index + 1);
                    }
                    break;
                case "moveFirst":
                    swapFields(index, 0);
                    break;
                case "moveLast":
                    swapFields(index, fields.length - 1);
                    break;
            }

            if (onChange) {
                var values = {
                    id: id,
                    value: value
                };

                onChange(values);
            }
        }, _this.buildGroupComponent = function (field) {
            var _this$props2 = _this.props,
                componentFactory = _this$props2.componentFactory,
                layout = _this$props2.layout,
                disabled = _this$props2.disabled;


            field = field.map(function (field) {
                return _extends({}, field, { disabled: disabled });
            });

            return componentFactory.buildGroupComponent({
                component: layout.component,
                layout: layout,
                fields: field,
                componentFactory: componentFactory
            });
        }, _this.getComponents = function () {
            var fields = _this.props.fields;


            return fields.map(function (field, index) {
                return _react2.default.createElement(
                    _ArrayContainerItem2.default,
                    { key: index, index: index, onAction: _this.handleItemAction },
                    _this.buildGroupComponent(field)
                );
            });
        }, _this.getAddBar = function () {
            var _this$props3 = _this.props,
                addText = _this$props3.addText,
                disabled = _this$props3.disabled;


            var text = addText ? addText : "Add";
            var components = _this.getComponents();

            if (components.length) {
                return _react2.default.createElement(
                    'div',
                    { className: 'add-bar' },
                    _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(_GlyphButton2.default, { glyph: 'plus', text: text, bsSize: 'small', onClick: _this.handleAdd, disabled: disabled })
                    )
                );
            } else {
                return null;
            }
        }, _this.getAllComponents = function () {
            //TODO: We should replace a for button!
            var disabled = _this.props.disabled;

            var components = _this.getComponents();

            if (components.length) {
                return components;
            } else {
                return _react2.default.createElement(
                    _Alert2.default,
                    { bsStyle: 'warning' },
                    'This array is empty. Consider ',
                    _react2.default.createElement(
                        _Button2.default,
                        { bsStyle: 'link', disabled: disabled, onClick: _this.handleAdd },
                        'adding a new item'
                    ),
                    '.'
                );
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ArrayContainer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                displayName = _props.displayName,
                fieldLayout = _props.fieldLayout,
                innerSize = _props.innerSize,
                name = _props.name;

            var formGroupProps = { displayName: displayName, name: name, fieldLayout: fieldLayout, innerSize: innerSize };
            var components = this.getAllComponents();
            var addBar = this.getAddBar();

            return _react2.default.createElement(
                _FormGroup2.default,
                formGroupProps,
                _react2.default.createElement(
                    'div',
                    { className: 'array-container-content' },
                    components
                ),
                addBar
            );
        }
    }]);

    return ArrayContainer;
}(_react.Component);

ArrayContainer.propTypes = {
    name: _propTypes2.default.string.isRequired,
    addText: _propTypes2.default.string
};
exports.default = ArrayContainer;
module.exports = exports['default'];