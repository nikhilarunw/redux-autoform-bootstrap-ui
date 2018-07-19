'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseGroup2 = require('./BaseGroup');

var _BaseGroup3 = _interopRequireDefault(_BaseGroup2);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var mergeJson = function mergeJson(arr) {
	return arr.reduce(function (prev, actual) {
		return _extends({}, prev, actual);
	});
};
var intersect = function intersect(a, b) {
	return new Set([].concat(_toConsumableArray(a)).filter(function (x) {
		return b.has(x);
	}));
};

var TabGroup = function (_BaseGroup) {
	_inherits(TabGroup, _BaseGroup);

	function TabGroup() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TabGroup);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabGroup.__proto__ || Object.getPrototypeOf(TabGroup)).call.apply(_ref, [this].concat(args))), _this), _this.tabsContext = {
			fields: []
		}, _this.state = {
			position: 0,
			fieldsMap: []
		}, _this.getComponents = function () {
			var _this$props = _this.props,
			    layout = _this$props.layout,
			    componentFactory = _this$props.componentFactory,
			    fields = _this$props.fields;

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
						data: _extends({}, group, { headLess: true }),
						length: layout.groups.length,
						component: componentFactory.buildGroupComponent({
							component: group.component,
							layout: _extends({}, group, { headLess: true }),
							fields: fields,
							componentFactory: componentFactory
						})
					};
				});
			}

			return components;
		}, _this.updateTabContext = function () {
			var fields = _this.props.fields;

			// Reads each field value of autoform and creates an object fieldName => error.

			_this.tabsContext.fields = Object.keys(mergeJson(fields.map(function (field) {
				if (field.reduxFormProps.touched) {
					return field.reduxFormProps.error ? _defineProperty({}, field.name, field.reduxFormProps.error) : null;
				}

				return null;
			})));
		}, _this.getFieldsByTabArray = function (layout) {
			var tabMap = layout.groups.map(function (group, index) {
				var json = void 0;

				if (group.groups) {
					json = _this.getFieldsByTabArray(group.groups);
				} else {
					json = _defineProperty({}, index, group.fields);
				}

				return json;
			});

			tabMap.forEach(function (tabNum, index) {
				tabNum[index] = tabNum[index].map(function (field) {
					return field.name;
				});
			});

			return mergeJson(tabMap);
		}, _this.getStyle = function (position) {
			var fieldsMap = _this.state.fieldsMap;

			var style = "";

			if (fieldsMap.length == 0) return style;

			var fieldsByTab = fieldsMap[position];

			var hasErrors = intersect(new Set(fieldsByTab), new Set(_this.tabsContext.fields)).size > 0;

			if (hasErrors) style = "alert-danger";

			return style;
		}, _this.onNavItemSelected = function (key) {
			return _this.setState({ position: key });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TabGroup, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var layout = this.props.layout;


			this.setState({
				fieldsMap: this.getFieldsByTabArray(layout)
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var layout = this.props.layout;
			var position = this.state.position;

			var content = this.getContent();

			this.updateTabContext();

			return _react2.default.createElement(
				'section',
				null,
				_react2.default.createElement(
					_reactBootstrap.Row,
					null,
					_react2.default.createElement(
						'div',
						{ className: 'metaform-group' },
						_react2.default.createElement(
							_reactBootstrap.Nav,
							{ bsStyle: 'tabs', activeKey: position, onSelect: this.onNavItemSelected },
							layout.groups.map(function (_ref3, index) {
								var title = _ref3.title;
								return _react2.default.createElement(
									_reactBootstrap.NavItem,
									{ key: index, eventKey: index },
									_react2.default.createElement(
										'div',
										{ className: _this2.getStyle(index) },
										title
									)
								);
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'metaform-group-content' },
							content[position]
						)
					)
				)
			);
		}
	}]);

	return TabGroup;
}(_BaseGroup3.default);

TabGroup.propTypes = {
	component: _propTypes2.default.string,
	fields: _propTypes2.default.array.isRequired,
	layout: _propTypes2.default.object.isRequired,
	componentFactory: _propTypes2.default.object.isRequired
};
exports.default = TabGroup;
module.exports = exports['default'];