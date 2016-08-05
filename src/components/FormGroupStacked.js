import React, { Component, PropTypes } from 'react';
import { FormGroup as BootstrapFormGroup } from 'react-bootstrap';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';

class FormGroupStacked extends Component {
    static propTypes = {
        error: PropTypes.string,
        touched: PropTypes.bool,
        displayName: PropTypes.string,
        name: PropTypes.string,
        help: PropTypes.string,
        required: PropTypes.bool
    };
    
    getControlLabel = () => {
        let { displayName, name, required } = this.props;

        if (displayName != undefined) {
            // this will add a star on fields that are required
            let requiredStar = required ?  <span className="required-star">*</span> : null;
            return (
                <ControlLabel>
                    { displayName || name } {requiredStar}
                </ControlLabel>
            )
        } else {
            return null;
        }
    };

    getHelpBlock = () => {
        let { error, touched, help } = this.props;
        let helpText = (touched ? error : '') || help;

        if (helpText) {
            return (
                <HelpBlock>
                    {helpText}
                </HelpBlock>
            )
        } else {
            return null;
        }
    };

    render() {
        let { error, touched, children, innerSize, className } = this.props;
        let validationState =  error && touched ? 'error' : null;
        let formGroupProps = { className, validationState };
        let controlLabel = this.getControlLabel();
        let helpBlock = this.getHelpBlock();

        return <BootstrapFormGroup {...formGroupProps}>
            <Col className="no-padding-col" md={innerSize || 12}>
                { controlLabel }
                { children }
                { helpBlock }
            </Col>
            <div className="clearfix">
            </div>
        </BootstrapFormGroup>
    }
}

export default FormGroupStacked;