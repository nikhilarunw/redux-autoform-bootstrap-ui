'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HorizontalComponent = require('../common/HorizontalComponent');

var _HorizontalComponent2 = _interopRequireDefault(_HorizontalComponent);

var _VerticalComponent = require('../common/VerticalComponent');

var _VerticalComponent2 = _interopRequireDefault(_VerticalComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseGroup = function (_Component) {
    _inherits(BaseGroup, _Component);

    function BaseGroup() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BaseGroup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseGroup.__proto__ || Object.getPrototypeOf(BaseGroup)).call.apply(_ref, [this].concat(args))), _this), _this.getFieldMetadata = function (field) {
            var _this$props = _this.props,
                layout = _this$props.layout,
                fields = _this$props.fields;


            var fieldMetadata = fields.find(function (cp) {
                return cp.name === field.name;
            });

            if (!fieldMetadata) {
                throw Error('Could not find field. Field: ' + field.name);
            }

            // in case the field is going to render layouts internally, it's going to need information about the
            // layout and fields. I'm not sure if this is the best way to do it, probably not. TODO: Review it.
            fieldMetadata._extra = { layout: layout, fields: fields };

            return fieldMetadata;
        }, _this.getComponents = function () {
            var _this$props2 = _this.props,
                layout = _this$props2.layout,
                componentFactory = _this$props2.componentFactory,
                fields = _this$props2.fields;

            var components = void 0;

            if (layout.fields) {
                components = layout.fields.map(function (field) {
                    return {
                        data: _this.getFieldMetadata(field),
                        length: layout.fields.length,
                        component: componentFactory.buildFieldComponent(_this.getFieldMetadata(field))
                    };
                });
            } else if (layout.groups) {

                components = layout.groups.map(function (group) {
                    return {
                        data: group,
                        length: layout.groups.length,
                        component: componentFactory.buildGroupComponent({
                            component: group.component,
                            layout: group,
                            fields: fields,
                            componentFactory: componentFactory
                        })
                    };
                });
            }

            return components;
        }, _this.getSize = function (component) {
            var defaultSize = _this.isHorizontal() ? Math.floor(12 / component.length) : 12;
            return component.data.size || defaultSize;
        }, _this.isHorizontal = function () {
            var layout = _this.props.layout;

            return layout.orientation === 'horizontal';
        }, _this.isVisible = function (component) {
            return component.data.visible !== false;
        }, _this.getContent = function () {
            var components = _this.getComponents();

            return components.map(function (component, index) {
                var content = void 0,
                    size = void 0;

                if (_this.isVisible(component)) {
                    size = _this.getSize(component);
                    content = component.component;
                } else {
                    // invisible components should be hidden
                    content = null;
                }

                if (_this.isHorizontal()) {
                    return _react2.default.createElement(
                        _HorizontalComponent2.default,
                        { key: 'component-' + index + '-wrapper', size: size },
                        content
                    );
                } else {
                    return _react2.default.createElement(
                        _VerticalComponent2.default,
                        { key: 'component-' + index + '-wrapper', size: size },
                        content
                    );
                }
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return BaseGroup;
}(_react.Component);

BaseGroup.propTypes = {
    component: _propTypes2.default.string,
    fields: _propTypes2.default.array.isRequired,
    layout: _propTypes2.default.object.isRequired,
    componentFactory: _propTypes2.default.object.isRequired
};
exports.default = BaseGroup;
module.exports = exports['default'];