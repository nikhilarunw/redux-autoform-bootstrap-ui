'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseGroup2 = require('./BaseGroup');

var _BaseGroup3 = _interopRequireDefault(_BaseGroup2);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mergeJson = function mergeJson(arr) {
    return arr.reduce(function (prev, actual) {
        return _extends({}, prev, actual);
    });
};

var WizardGroup = function (_BaseGroup) {
    _inherits(WizardGroup, _BaseGroup);

    function WizardGroup() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WizardGroup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WizardGroup.__proto__ || Object.getPrototypeOf(WizardGroup)).call.apply(_ref, [this].concat(args))), _this), _this.wizardContext = {
            fields: {},
            goToStep: function goToStep(stepName) {
                var steps = _this.getSteps();
                var foundStep = steps.find(function (step) {
                    return step.name === stepName;
                });

                if (foundStep) {
                    _this.trackStepFlow(foundStep.position);
                    _this.setState({ position: foundStep.position });
                } else console.error('Step ' + stepName + ' does not exists');
            },
            goToPosition: function goToPosition(position) {
                var totalSteps = _this.state.totalSteps;


                if (position >= 0 && position <= totalSteps) {
                    _this.trackStepFlow(position);
                    _this.setState({ position: position });
                } else console.error('Position ' + position + ' does not exists');
            },
            next: function next() {
                _this.nextStep();
            }
        }, _this.state = {
            position: 0,
            totalSteps: _this.props.layout.groups.length - 1,
            stepFlow: []
        }, _this.trackStepFlow = function (position) {
            var stepFlow = _this.state.stepFlow;


            stepFlow.push({
                originalPosition: _this.state.position,
                position: position
            });

            _this.setState({ stepFlow: stepFlow });

            console.log(JSON.stringify(stepFlow));
        }, _this.backToFlow = function () {
            var stepFlow = _this.state.stepFlow;

            var flowOnBack = stepFlow.pop();

            _this.setState({
                stepFlow: stepFlow,
                position: flowOnBack.originalPosition
            });
        }, _this.isFlowInMyPosition = function () {
            var _this$state = _this.state,
                stepFlow = _this$state.stepFlow,
                position = _this$state.position;
            var length = stepFlow.length;


            if (length > 0) return stepFlow[length - 1].position == position;

            return false;
        }, _this.nextStep = function () {
            var position = _this.state.position;


            _this.setState({ position: position + 1 });
        }, _this.backStep = function () {
            var position = _this.state.position;


            _this.setState({ position: position - 1 });
        }, _this.updateWizardContext = function () {
            var fields = _this.props.fields;

            // Reads each fields value of autoform and creates an object fieldName => fieldValue.

            _this.wizardContext.fields = mergeJson(fields.map(function (field) {
                return _defineProperty({}, field.name, field.reduxFormProps.value);
            }));
        }, _this.getButtonSection = function (steps) {
            var _this$state2 = _this.state,
                position = _this$state2.position,
                totalSteps = _this$state2.totalSteps;
            var submitting = _this.props.submitting;
            var transition = steps[position].transition;


            var nextButton = null;
            var backButton = null;
            var submitButton = null;

            if (position != 0) {
                backButton = _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsStyle: 'primary', bsSize: 'large', onClick: _this.isFlowInMyPosition() ? _this.backToFlow : _this.backStep },
                    'Back'
                );
            }

            if (position != totalSteps) {
                nextButton = _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsStyle: 'primary', bsSize: 'large', onClick: transition ? function () {
                            return transition(_this.wizardContext);
                        } : _this.nextStep },
                    'Next'
                );
            }

            if (position == totalSteps) {
                submitButton = _react2.default.createElement(
                    _reactBootstrap.Button,
                    { className: 'pull-right', bsStyle: 'success', bsSize: 'large', type: 'submit', disabled: submitting || false },
                    'Submit'
                );
            }

            return _react2.default.createElement(
                _reactBootstrap.Row,
                null,
                _react2.default.createElement(_reactBootstrap.Col, { xs: 6, md: 4 }),
                _react2.default.createElement(_reactBootstrap.Col, { xs: 6, md: 4 }),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 4 },
                    _react2.default.createElement(
                        _reactBootstrap.ButtonToolbar,
                        { className: 'button-toolbar pull-right' },
                        backButton,
                        nextButton,
                        submitButton
                    )
                )
            );
        }, _this.getSteps = function () {
            var layout = _this.props.layout;

            var content = _this.getContent();

            // Maps each content to his transition function
            // Each step has associated a name and a position.
            return layout.groups.map(function (group, index) {
                return {
                    content: content[index],
                    transition: group.transition,
                    name: group.name,
                    position: index
                };
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // Expose functions to the user in order to make the transitions, and the field values of the form


    // Saves an object containing the step position that started the flow and the position after that flow


    // Get the last flow and set the step position to the step that initiated the flow to the current step position.


    // Checks if the current step is the last step in stepFlow, if that's the case it returns true.


    _createClass(WizardGroup, [{
        key: 'render',
        value: function render() {
            var position = this.state.position;

            var steps = this.getSteps();
            var buttonSection = this.getButtonSection(steps);

            this.updateWizardContext();

            return _react2.default.createElement(
                'section',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'metaform-group' },
                        steps[position].content
                    )
                ),
                buttonSection
            );
        }
    }]);

    return WizardGroup;
}(_BaseGroup3.default);

WizardGroup.propTypes = {
    component: _propTypes2.default.string,
    fields: _propTypes2.default.array.isRequired,
    layout: _propTypes2.default.object.isRequired,
    componentFactory: _propTypes2.default.object.isRequired
};
exports.default = WizardGroup;
module.exports = exports['default'];