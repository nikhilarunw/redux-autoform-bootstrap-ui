'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertMessage = function AlertMessage(_ref) {
	var error = _ref.error;
	return _react2.default.createElement(
		_reactBootstrap.Alert,
		{ bsStyle: 'danger' },
		_react2.default.createElement(
			'h4',
			null,
			'Could not render the MetaFormGroup component. The schema is not valid.'
		),
		_react2.default.createElement(
			'p',
			null,
			'Detailed information:',
			_react2.default.createElement(
				'b',
				null,
				error.message
			)
		)
	);
};

exports.default = AlertMessage;
module.exports = exports['default'];