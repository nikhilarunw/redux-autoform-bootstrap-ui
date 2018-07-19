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

var _filesize = require('filesize');

var _filesize2 = _interopRequireDefault(_filesize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileUploadItem = function (_Component) {
	_inherits(FileUploadItem, _Component);

	function FileUploadItem() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, FileUploadItem);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FileUploadItem.__proto__ || Object.getPrototypeOf(FileUploadItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			show: false
		}, _this.showModal = function (show) {
			_this.setState({ show: show });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(FileUploadItem, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    file = _props.file,
			    height = _props.height,
			    width = _props.width,
			    _onClick = _props.onClick;
			var show = this.state.show;


			var containerStyle = {
				margin: "auto",
				padding: "0px",
				backgroundColor: "#eeeeee",
				borderColor: '#757575',
				borderStyle: 'solid',
				borderWidth: 2,
				borderRadius: 6,
				marginBottom: "10px"
			};

			var fileNameStyle = {
				textAlign: 'center'
			};

			var trashContainerStyle = {
				display: "inline-block",
				textAlign: "left",
				paddingLeft: "10px",
				paddingBottom: "10px"
			};

			var fileSizeContainerStyle = {
				display: "inline-block",
				float: "right",
				paddingRight: "10px",
				paddingBottom: "10px"
			};

			var imgStyle = {
				marginTop: "10px",
				display: 'block',
				marginLeft: 'auto',
				marginRight: 'auto'
			};

			var textContainerStyle = {
				marginTop: "10px",
				color: "#212121"
			};

			var image = file.type.match(/image/) ? file.preview : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/file-text-icon.png";
			var filename = file.name.length <= 21 ? file.name : file.name.substring(0, 20);

			return _react2.default.createElement(
				_reactBootstrap.Col,
				{ xs: 4, md: 4 },
				_react2.default.createElement(
					_reactBootstrap.Modal,
					{ show: show },
					_react2.default.createElement(
						_reactBootstrap.Modal.Header,
						null,
						_react2.default.createElement(
							_reactBootstrap.Modal.Title,
							null,
							'Delete'
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Modal.Body,
						null,
						_react2.default.createElement(
							'p',
							null,
							'Are you sure that you want to delete this file: ',
							_react2.default.createElement(
								'b',
								null,
								file.name
							),
							'?'
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Modal.Footer,
						null,
						_react2.default.createElement(
							_reactBootstrap.Button,
							{ onClick: function onClick() {
									return _this2.showModal(false);
								} },
							'Close'
						),
						_react2.default.createElement(
							_reactBootstrap.Button,
							{ bsStyle: 'primary', onClick: function onClick() {
									_onClick();_this2.showModal(false);
								} },
							'Delete'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ style: containerStyle },
					_react2.default.createElement('img', { height: height, width: width, src: image, style: imgStyle }),
					_react2.default.createElement(
						'div',
						{ style: textContainerStyle },
						_react2.default.createElement(
							'p',
							{ style: fileNameStyle },
							filename
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'div',
								{ onClick: function onClick() {
										return _this2.showModal(true);
									}, style: trashContainerStyle },
								_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'trash' })
							),
							_react2.default.createElement(
								'div',
								{ style: fileSizeContainerStyle },
								_react2.default.createElement(
									'p',
									null,
									(0, _filesize2.default)(file.size)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return FileUploadItem;
}(_react.Component);

FileUploadItem.propTypes = {
	onClick: _propTypes2.default.func,
	file: _propTypes2.default.object.isRequired,
	height: _propTypes2.default.string,
	width: _propTypes2.default.string
};
FileUploadItem.defaultProps = {
	height: "150px",
	width: "150px"
};
exports.default = FileUploadItem;
module.exports = exports['default'];