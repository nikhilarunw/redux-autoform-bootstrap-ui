'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Glyphicon = require('react-bootstrap/lib/Glyphicon');

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var _MenuItem = require('react-bootstrap/lib/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Dropdown = require('react-bootstrap/lib/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayContainerItem = function (_Component) {
    _inherits(ArrayContainerItem, _Component);

    function ArrayContainerItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ArrayContainerItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ArrayContainerItem.__proto__ || Object.getPrototypeOf(ArrayContainerItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleAction = function (eventKey) {
            var _this$props = _this.props,
                onAction = _this$props.onAction,
                index = _this$props.index;


            onAction(index, eventKey);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ArrayContainerItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                index = _props.index,
                children = _props.children;


            return _react2.default.createElement(
                'div',
                { className: 'array-container-item' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-11' },
                        _react2.default.createElement(
                            'div',
                            { className: 'array-container-item-content' },
                            children
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-1' },
                        _react2.default.createElement(
                            'div',
                            { className: 'array-container-item-options' },
                            _react2.default.createElement(
                                _Dropdown2.default,
                                { id: index + '-dropdown', onSelect: this.handleAction, pullRight: true },
                                _react2.default.createElement(
                                    _Dropdown2.default.Toggle,
                                    { noCaret: true, bsStyle: 'link', bsSize: 'small' },
                                    _react2.default.createElement(_Glyphicon2.default, { glyph: 'menu-hamburger' })
                                ),
                                _react2.default.createElement(
                                    _Dropdown2.default.Menu,
                                    null,
                                    _react2.default.createElement(
                                        _MenuItem2.default,
                                        { eventKey: 'remove' },
                                        _react2.default.createElement(_Glyphicon2.default, { glyph: 'remove', className: 'text-danger' }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'glyphicon-text text-danger' },
                                            'Remove'
                                        )
                                    ),
                                    _react2.default.createElement(_MenuItem2.default, { divider: true }),
                                    _react2.default.createElement(
                                        _MenuItem2.default,
                                        { eventKey: 'moveUp' },
                                        _react2.default.createElement(_Glyphicon2.default, { glyph: 'chevron-up' }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'glyphicon-text' },
                                            'Move up'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _MenuItem2.default,
                                        { eventKey: 'moveDown' },
                                        _react2.default.createElement(_Glyphicon2.default, { glyph: 'chevron-down' }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'glyphicon-text' },
                                            'Move down'
                                        )
                                    ),
                                    _react2.default.createElement(_MenuItem2.default, { divider: true }),
                                    _react2.default.createElement(
                                        _MenuItem2.default,
                                        { eventKey: 'moveFirst' },
                                        _react2.default.createElement(_Glyphicon2.default, { glyph: 'chevron-up' }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'glyphicon-text' },
                                            'Move first'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _MenuItem2.default,
                                        { eventKey: 'moveLast' },
                                        _react2.default.createElement(_Glyphicon2.default, { glyph: 'chevron-down' }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'glyphicon-text' },
                                            'Move last'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ArrayContainerItem;
}(_react.Component);

ArrayContainerItem.propTypes = {
    index: _propTypes2.default.number.isRequired,
    onAction: _propTypes2.default.func.isRequired
};
exports.default = ArrayContainerItem;
module.exports = exports['default'];