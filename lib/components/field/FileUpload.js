'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DropZone = require('../common/DropZone');

var _DropZone2 = _interopRequireDefault(_DropZone);

var _GlyphButton = require('../common/GlyphButton');

var _GlyphButton2 = _interopRequireDefault(_GlyphButton);

var _FileInfo = require('../common/FileInfo');

var _FileInfo2 = _interopRequireDefault(_FileInfo);

var _reactBootstrap = require('react-bootstrap');

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileUpload = function (_Component) {
	_inherits(FileUpload, _Component);

	function FileUpload() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, FileUpload);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			files: [],
			disableUpload: true,
			status: null,
			message: null,
			alertVisible: false
		}, _this.onDrop = function (files) {
			//TODO filter to avoid duplicates
			var fileArray = [].concat(_toConsumableArray(files), _toConsumableArray(_this.state.files));

			_this.syncFields(fileArray);
			_this.setState({ files: fileArray, disableUpload: false });
		}, _this.onClick = function () {
			// TODO Handle response status for upload service
			var files = _this.state.files;
			var url = _this.props.url;


			var fileData = new FormData();

			files.forEach(function (file) {
				fileData.append("fileData", file);
			});

			(0, _isomorphicFetch2.default)(url, {
				method: "POST",
				body: fileData
			}).then(function (response) {
				return response.json();
			}).then(function (_ref2) {
				var status = _ref2.status,
				    message = _ref2.message;
				return _this.setState({
					status: status,
					message: message,
					alertVisible: true
				});
			});

			setTimeout(function () {
				return _this.dismissAlert();
			}, 4000);
		}, _this.dismissAlert = function () {
			_this.setState({ alertVisible: false });
		}, _this.deleteItem = function (position) {
			var files = _this.state.files;

			files.splice(position, 1);

			_this.syncFields(files);
			_this.setState({ files: files, disableUpload: files.length == 0 });
		}, _this.syncFields = function (files) {
			var onChange = _this.props.onChange;


			var fileNames = files.map(function (file) {
				return file.name;
			});

			onChange(fileNames);
		}, _this.openDropZone = function () {
			_this.refs.dropzone.open();
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(FileUpload, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    files = _state.files,
			    disableUpload = _state.disableUpload,
			    status = _state.status,
			    message = _state.message,
			    alertVisible = _state.alertVisible;


			var attachmentStyle = {
				marginTop: "6px",
				color: "#616161"
			};

			var messageContainerStyle = {
				marginTop: "10px"
			};

			var messageStyle = {
				textAlign: "center",
				color: "#616161"
			};

			var alertStyle = {
				textAlign: "center"
			};

			var rowStyle = {
				padding: "0px"
			};

			if (files) {
				rowStyle = {
					padding: "15px"
				};
			}

			var alert = void 0;

			if (status && message && alertVisible) {
				alert = _react2.default.createElement(
					_reactBootstrap.Alert,
					{ bsStyle: 'success', onDismiss: this.dismissAlert },
					_react2.default.createElement(
						'p',
						{ style: alertStyle },
						message
					)
				);
			} else if (!status && message && alertVisible) {
				alert = _react2.default.createElement(
					_reactBootstrap.Alert,
					{ bsStyle: 'warning', onDismiss: this.dismissAlert },
					_react2.default.createElement(
						'p',
						{ style: alertStyle },
						message
					)
				);
			} else {
				alert = null;
			}

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactBootstrap.Row,
					null,
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ xs: 2, md: 2 },
						_react2.default.createElement(
							'div',
							{ style: attachmentStyle },
							_react2.default.createElement(
								'b',
								null,
								'Attachment'
							)
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ xs: 10, md: 10 },
						_react2.default.createElement(
							_DropZone2.default,
							{ ref: 'dropzone', onDrop: this.onDrop, disableClick: true },
							_react2.default.createElement(
								'div',
								{ style: messageContainerStyle },
								_react2.default.createElement(
									'p',
									{ style: messageStyle },
									_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'cloud-upload' }),
									' Drop files to attach, or ',
									_react2.default.createElement(
										'a',
										{ onClick: this.openDropZone },
										'browse'
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ style: rowStyle },
								_react2.default.createElement(
									_reactBootstrap.Row,
									null,
									files.map(function (file, index) {
										return _react2.default.createElement(_FileInfo2.default, { key: index, file: file, onClick: function onClick() {
												return _this2.deleteItem(index);
											} });
									})
								)
							)
						),
						alert
					)
				),
				_react2.default.createElement(
					_reactBootstrap.Col,
					null,
					_react2.default.createElement(_GlyphButton2.default, { disabled: disableUpload, type: 'submit', glyph: 'cloud-upload', text: 'Upload', bsSize: 'sm', bsStyle: 'primary', onClick: this.onClick })
				)
			);
		}
	}]);

	return FileUpload;
}(_react.Component);

FileUpload.propTypes = {
	onChange: _propTypes2.default.func.isRequired,
	url: _propTypes2.default.string.isRequired
};
exports.default = FileUpload;
module.exports = exports['default'];