'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root(_ref) {
    var fieldLayout = _ref.fieldLayout,
        children = _ref.children,
        handleSubmit = _ref.handleSubmit;


    // Setting the form class name to "form-horizontal" only affects Bootstrap.
    // ToDo: Make the UI to provide the form class name or the entire Form component
    var formClassName = fieldLayout == 'inline' ? "form-horizontal" : "";

    return _react2.default.createElement(
        'div',
        { className: 'meta-form' },
        _react2.default.createElement(
            'form',
            { onSubmit: handleSubmit, className: formClassName },
            _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                children
            )
        )
    );
};

exports.default = Root;
module.exports = exports['default'];