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

var _BaseGroup2 = require('./BaseGroup');

var _BaseGroup3 = _interopRequireDefault(_BaseGroup2);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabGroup = function (_BaseGroup) {
	_inherits(TabGroup, _BaseGroup);

	function TabGroup() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TabGroup);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabGroup.__proto__ || Object.getPrototypeOf(TabGroup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			position: 0,
			totalSteps: _this.props.layout.groups.length - 1
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
		}, _this.onNavItemSelected = function (key) {
			return _this.setState({ position: key });
		}, _this.nextStep = function () {
			var position = _this.state.position;

			_this.setState({ position: position + 1 });
		}, _this.backStep = function () {
			var position = _this.state.position;

			_this.setState({ position: position - 1 });
		}, _this.getButtonSection = function () {
			var _this$state = _this.state,
			    position = _this$state.position,
			    totalSteps = _this$state.totalSteps;

			var nextButton = null;
			var backButton = null;

			if (position != 0) {
				backButton = _react2.default.createElement(
					_reactBootstrap.Button,
					{ bsStyle: 'primary', onClick: _this.backStep },
					'Previous'
				);
			}

			if (position != totalSteps) {
				nextButton = _react2.default.createElement(
					_reactBootstrap.Button,
					{ bsStyle: 'primary', onClick: _this.nextStep },
					'Next'
				);
			}

			return _react2.default.createElement(
				_reactBootstrap.Row,
				null,
				_react2.default.createElement(_reactBootstrap.Col, { xs: 6, md: 4 }),
				_react2.default.createElement(_reactBootstrap.Col, { xs: 6, md: 4 }),
				_react2.default.createElement(
					_reactBootstrap.Col,
					{ xs: 6, md: 4 },
					_react2.default.createElement(
						_reactBootstrap.ButtonToolbar,
						{ className: 'button-toolbar pull-right' },
						backButton,
						nextButton
					)
				)
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TabGroup, [{
		key: 'render',
		value: function render() {
			var layout = this.props.layout;
			var position = this.state.position;

			var content = this.getContent();
			var buttonSection = this.getButtonSection();

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
							layout.groups.map(function (_ref2, index) {
								var title = _ref2.title;
								return _react2.default.createElement(
									_reactBootstrap.NavItem,
									{ key: index, eventKey: index },
									title
								);
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'metaform-group-content' },
							content[position]
						)
					)
				),
				buttonSection
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