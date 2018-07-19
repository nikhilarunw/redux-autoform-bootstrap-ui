'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HorizontalComponent = function HorizontalComponent(_ref) {
	var children = _ref.children,
	    size = _ref.size;
	return _react2.default.createElement(
		'div',
		{ className: 'col-md-' + size },
		children
	);
};

HorizontalComponent.propTypes = {
	children: _propTypes2.default.object,
	size: _propTypes2.default.number
};

exports.default = HorizontalComponent;
module.exports = exports['default'];