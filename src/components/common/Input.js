import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FormGroup from './FormGroup';
import FormControl from './FormControl';

class Input extends Component {
    static propTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        displayName: PropTypes.string,
        name: PropTypes.string.isRequired,
        error: PropTypes.string,
        addonBefore: PropTypes.string,
        addonAfter: PropTypes.string,
        fieldLayout: PropTypes.string,
        componentClass: PropTypes.string,
        inputType: PropTypes.string
    };

    static defaultProps = {
        inputType: "text"
    };

    render() {
        let {
            error, touched, displayName, name, help, fieldLayout, innerSize, children, inputType,
            value, placeholder, addonBefore, addonAfter, onChange, onBlur, componentClass, rows,
            min, max, disabled
        } = this.props;

        let formGroupProps = {
            error,
            touched,
            displayName,
            name,
            help,
            fieldLayout,
            innerSize
        };

        let formControlProps = {
            inputType,
            value,
            name,
            placeholder,
            displayName,
            help,
            addonBefore,
            addonAfter,
            onChange,
            onBlur,
            componentClass,
            rows,
            min,
            max,
            disabled
        };

        return (
            <FormGroup {...formGroupProps}>
                <FormControl {...formControlProps}>
                    { children }
                </FormControl>
            </FormGroup>
        );
    }
}

export default Input;