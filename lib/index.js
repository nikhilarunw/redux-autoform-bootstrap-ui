'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailsComponentFactory = exports.EditComponentFactory = undefined;

var _BootstrapFactory = require('./factory/BootstrapFactory');

var _BootstrapFactory2 = _interopRequireDefault(_BootstrapFactory);

var _TypeConstants = require('./factory/constants/TypeConstants');

var _TypeConstants2 = _interopRequireDefault(_TypeConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditComponentFactory = exports.EditComponentFactory = new _BootstrapFactory2.default(_TypeConstants2.default.edit);
var DetailsComponentFactory = exports.DetailsComponentFactory = new _BootstrapFactory2.default(_TypeConstants2.default.details);