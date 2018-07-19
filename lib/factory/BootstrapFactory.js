'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentFactory2 = require('redux-autoform-utils/lib/factory/ComponentFactory');

var _ComponentFactory3 = _interopRequireDefault(_ComponentFactory2);

var _TextBox = require('../components/field/TextBox');

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Password = require('../components/field/Password');

var _Password2 = _interopRequireDefault(_Password);

var _Email = require('../components/field/Email');

var _Email2 = _interopRequireDefault(_Email);

var _Select = require('../components/field/Select');

var _Select2 = _interopRequireDefault(_Select);

var _TextArea = require('../components/field/TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _ArrayContainer = require('../components/field/ArrayContainer');

var _ArrayContainer2 = _interopRequireDefault(_ArrayContainer);

var _DateTimePicker = require('../components/field/DateTimePicker');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

var _Lookup = require('../components/field/Lookup');

var _Lookup2 = _interopRequireDefault(_Lookup);

var _Static = require('../components/field/Static');

var _Static2 = _interopRequireDefault(_Static);

var _FieldGroup = require('../components/field/FieldGroup');

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

var _CheckBox = require('../components/field/CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Radio = require('../components/field/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _FileUpload = require('../components/field/FileUpload');

var _FileUpload2 = _interopRequireDefault(_FileUpload);

var _EntityContainer = require('../components/field/EntityContainer');

var _EntityContainer2 = _interopRequireDefault(_EntityContainer);

var _Number = require('../components/field/Number');

var _Number2 = _interopRequireDefault(_Number);

var _Group = require('../components/group/Group');

var _Group2 = _interopRequireDefault(_Group);

var _TabGroup = require('../components/group/TabGroup');

var _TabGroup2 = _interopRequireDefault(_TabGroup);

var _WizardGroup = require('../components/group/WizardGroup');

var _WizardGroup2 = _interopRequireDefault(_WizardGroup);

var _WizardTabGroup = require('../components/group/WizardTabGroup');

var _WizardTabGroup2 = _interopRequireDefault(_WizardTabGroup);

var _Root = require('../components/common/Root');

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BootstrapFactory = function (_ComponentFactory) {
    _inherits(BootstrapFactory, _ComponentFactory);

    function BootstrapFactory(config) {
        _classCallCheck(this, BootstrapFactory);

        var _this = _possibleConstructorReturn(this, (BootstrapFactory.__proto__ || Object.getPrototypeOf(BootstrapFactory)).call(this));

        _initialiseProps.call(_this);

        _this.setBaseComponents();
        _this.setDefaultConfiguration(config);
        return _this;
    }

    return BootstrapFactory;
}(_ComponentFactory3.default);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.setBaseComponents = function () {
        _this2.registerFieldComponent('TextBox', ['string', 'int', 'float', 'datetime', 'date', 'time'], _TextBox2.default);
        _this2.registerFieldComponent('Password', ['string'], _Password2.default);
        _this2.registerFieldComponent('Email', ['string'], _Email2.default);
        _this2.registerFieldComponent('Select', ['string'], _Select2.default);
        _this2.registerFieldComponent('Radio', ['string'], _Radio2.default);
        _this2.registerFieldComponent('Lookup', ['string'], _Lookup2.default);
        _this2.registerFieldComponent('TextArea', ['string'], _TextArea2.default);
        _this2.registerFieldComponent('ArrayContainer', ['array'], _ArrayContainer2.default);
        _this2.registerFieldComponent('DateTimePicker', ['datetime', 'date', 'time'], _DateTimePicker2.default);
        _this2.registerFieldComponent('Checkbox', ['bool'], _CheckBox2.default);
        _this2.registerFieldComponent('Static', ['string', 'int', 'float', 'datetime', 'date', 'time', 'bool'], _Static2.default);
        _this2.registerFieldComponent('FieldGroup', ['group'], _FieldGroup2.default);
        _this2.registerFieldComponent('FileUpload', ['string'], _FileUpload2.default);
        _this2.registerFieldComponent('EntityContainer', ['entity'], _EntityContainer2.default);
        _this2.registerFieldComponent('Number', ['int'], _Number2.default);

        _this2.registerGroupComponent('Group', _Group2.default);
        _this2.registerGroupComponent('TabGroup', _TabGroup2.default);
        _this2.registerGroupComponent('WizardGroup', _WizardGroup2.default);
        _this2.registerGroupComponent('WizardTabGroup', _WizardTabGroup2.default);

        _this2.registerRootComponent("default", _Root2.default);
    };

    this.setDefaultConfiguration = function (config) {
        _this2.setDefaultFieldComponents(config);
        _this2.setDefaultGroupComponent('Group');
        _this2.setCurrentRoot("default");
    };
};

exports.default = BootstrapFactory;
module.exports = exports['default'];