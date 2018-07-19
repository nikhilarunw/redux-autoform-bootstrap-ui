'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attrAccept = require('attr-accept');

var _attrAccept2 = _interopRequireDefault(_attrAccept);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropZone = function (_Component) {
	_inherits(DropZone, _Component);

	function DropZone() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, DropZone);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropZone.__proto__ || Object.getPrototypeOf(DropZone)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			isDragActive: false
		}, _this.onDragStart = function (e) {
			if (_this.props.onDragStart) {
				_this.props.onDragStart.call(_this, e);
			}
		}, _this.onDragEnter = function (e) {
			var onDragEnter = _this.props.onDragEnter;


			e.preventDefault();

			// Count the dropzone and any children that are entered.
			++_this.enterCounter;

			// This is tricky. During the drag even the dataTransfer.files is null
			// But Chrome implements some drag store, which is accesible via dataTransfer.items
			var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

			// Now we need to convert the DataTransferList to Array
			var allFilesAccepted = _this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));

			_this.setState({
				isDragActive: allFilesAccepted,
				isDragReject: !allFilesAccepted
			});

			if (onDragEnter) {
				onDragEnter.call(_this, e);
			}
		}, _this.onDragOver = function (e) {
			e.preventDefault();
			e.stopPropagation();
			return false;
		}, _this.onDragLeave = function (e) {
			var onDragLeave = _this.props.onDragLeave;


			e.preventDefault();

			// Only deactivate once the dropzone and all children was left.
			if (--_this.enterCounter > 0) {
				return;
			}

			_this.setState({
				isDragActive: false,
				isDragReject: false
			});

			if (onDragLeave) {
				onDragLeave.call(_this, e);
			}
		}, _this.onDrop = function (e) {
			var _this$props = _this.props,
			    onDrop = _this$props.onDrop,
			    onDropAccepted = _this$props.onDropAccepted,
			    onDropRejected = _this$props.onDropRejected;


			e.preventDefault();

			// Reset the counter along with the drag on a drop.
			_this.enterCounter = 0;

			_this.setState({
				isDragActive: false,
				isDragReject: false
			});

			var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
			var max = _this.props.multiple ? droppedFiles.length : Math.min(droppedFiles.length, 1);
			var files = [];

			for (var i = 0; i < max; i++) {
				var file = droppedFiles[i];
				// We might want to disable the preview creation to support big files
				if (!_this.props.disablePreview) {
					file.preview = window.URL.createObjectURL(file);
				}

				files.push(file);
			}

			if (_this.allFilesAccepted(files)) {
				if (onDrop) {
					onDrop.call(_this, files, e);
				}

				if (onDropAccepted) {
					onDropAccepted.call(_this, files, e);
				}
			} else {
				if (onDropRejected) {
					onDropRejected.call(_this, files, e);
				}
			}
		}, _this.onClick = function () {
			if (!_this.props.disableClick) {
				_this.open();
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(DropZone, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.enterCounter = 0;
		}
	}, {
		key: 'allFilesAccepted',
		value: function allFilesAccepted(files) {
			var _this2 = this;

			return files.every(function (file) {
				return (0, _attrAccept2.default)(file, _this2.props.accept);
			});
		}
	}, {
		key: 'open',
		value: function open() {
			this.fileInputEl.value = null;
			this.fileInputEl.click();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props = this.props,
			    accept = _props.accept,
			    activeClassName = _props.activeClassName,
			    inputProps = _props.inputProps,
			    multiple = _props.multiple,
			    name = _props.name,
			    rejectClassName = _props.rejectClassName,
			    rest = _objectWithoutProperties(_props, ['accept', 'activeClassName', 'inputProps', 'multiple', 'name', 'rejectClassName']);

			var activeStyle = rest.activeStyle,
			    className = rest.className,
			    rejectStyle = rest.rejectStyle,
			    style = rest.style,
			    props = _objectWithoutProperties(rest, ['activeStyle', 'className', 'rejectStyle', 'style']);

			var _state = this.state,
			    isDragActive = _state.isDragActive,
			    isDragReject = _state.isDragReject;


			className = className || '';

			if (isDragActive && activeClassName) {
				className += ' ' + activeClassName;
			}
			if (isDragReject && rejectClassName) {
				className += ' ' + rejectClassName;
			}

			if (!className && !style && !activeStyle && !rejectStyle) {
				style = {
					backgroundColor: "#fafafa",
					width: 'auto',
					borderWidth: 1,
					borderColor: '#757575',
					borderStyle: 'dashed',
					borderRadius: 2
				};
				activeStyle = {
					borderStyle: 'solid',
					backgroundColor: '#fafafa'
				};
				rejectStyle = {
					borderStyle: 'solid',
					backgroundColor: '#fafafa'
				};
			}

			var appliedStyle = void 0;
			if (activeStyle && isDragActive) {
				appliedStyle = _extends({}, style, activeStyle);
			} else if (rejectStyle && isDragReject) {
				appliedStyle = _extends({}, style, rejectStyle);
			} else {
				appliedStyle = _extends({}, style);
			}

			var inputAttributes = {
				accept: accept,
				type: 'file',
				style: { display: 'none' },
				multiple: multiple,
				ref: function ref(el) {
					return _this3.fileInputEl = el;
				}, // eslint-disable-line
				onChange: this.onDrop
			};

			if (name && name.length) {
				inputAttributes.name = name;
			}

			// Remove custom properties before passing them to the wrapper div element
			var customProps = ['disablePreview', 'disableClick', 'onDropAccepted', 'onDropRejected'];
			var divProps = _extends({}, props);
			customProps.forEach(function (prop) {
				return delete divProps[prop];
			});

			return _react2.default.createElement(
				'div',
				_extends({
					className: className,
					style: appliedStyle
				}, divProps /* expand user provided props first so event handlers are never overridden */, {
					onClick: this.onClick,
					onDragStart: this.onDragStart,
					onDragEnter: this.onDragEnter,
					onDragOver: this.onDragOver,
					onDragLeave: this.onDragLeave,
					onDrop: this.onDrop
				}),
				this.props.children,
				_react2.default.createElement('input', _extends({}, inputProps /* expand user provided inputProps first so inputAttributes override them */, inputAttributes, {
					multiple: true }))
			);
		}
	}]);

	return DropZone;
}(_react.Component);

DropZone.propTypes = {
	// Overriding drop behavior
	onDrop: _propTypes2.default.func,
	onDropAccepted: _propTypes2.default.func,
	onDropRejected: _propTypes2.default.func,

	// Overriding drag behavior
	onDragStart: _propTypes2.default.func,
	onDragEnter: _propTypes2.default.func,
	onDragLeave: _propTypes2.default.func,

	children: _propTypes2.default.node, // Contents of the dropzone
	style: _propTypes2.default.object, // CSS styles to apply
	activeStyle: _propTypes2.default.object, // CSS styles to apply when drop will be accepted
	rejectStyle: _propTypes2.default.object, // CSS styles to apply when drop will be rejected
	className: _propTypes2.default.string, // Optional className
	activeClassName: _propTypes2.default.string, // className for accepted state
	rejectClassName: _propTypes2.default.string, // className for rejected state

	disablePreview: _propTypes2.default.bool, // Enable/disable preview generation
	disableClick: _propTypes2.default.bool, // Disallow clicking on the dropzone container to open file dialog

	inputProps: _propTypes2.default.object, // Pass additional attributes to the <input type="file"/> tag
	multiple: _propTypes2.default.bool, // Allow dropping multiple files
	accept: _propTypes2.default.string, // Allow specific types of files. See https://github.com/okonet/attr-accept for more information
	name: _propTypes2.default.string // name attribute for the input tag
};
DropZone.defaultProps = {
	disablePreview: false,
	disableClick: false,
	multiple: true
};
exports.default = DropZone;
module.exports = exports['default'];