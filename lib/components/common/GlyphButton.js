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

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlyphButton = function (_Component) {
    _inherits(GlyphButton, _Component);

    function GlyphButton() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GlyphButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GlyphButton.__proto__ || Object.getPrototypeOf(GlyphButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleSave = function () {
            var onClick = _this.props.onClick;


            if (onClick) {
                onClick();
            }
        }, _this.getText = function () {
            var style = { marginLeft: 6 };
            var text = _this.props.text;


            if (text) {
                return _react2.default.createElement(
                    'span',
                    { style: style },
                    text
                );
            } else {
                return null;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GlyphButton, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                bsSize = _props.bsSize,
                bsStyle = _props.bsStyle,
                glyph = _props.glyph,
                disabled = _props.disabled;

            var text = this.getText();

            return _react2.default.createElement(
                _Button2.default,
                { disabled: disabled, bsStyle: bsStyle, bsSize: bsSize, onClick: this.handleSave },
                _react2.default.createElement(_Glyphicon2.default, { glyph: glyph }),
                text
            );
        }
    }]);

    return GlyphButton;
}(_react.Component);

GlyphButton.propTypes = {
    bsStyle: _propTypes2.default.string,
    bsSize: _propTypes2.default.string,
    text: _propTypes2.default.string,
    glyph: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func,
    disabled: _propTypes2.default.bool
};
GlyphButton.defaultProps = {
    disabled: false
};
exports.default = GlyphButton;
module.exports = exports['default'];