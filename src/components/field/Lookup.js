import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FormGroup from '../common/FormGroup';
import Select from 'react-select-plus';

class Lookup extends Component {
    fetchItems = () => {
        const {options} = this.props;

        return fetch(options.url)
            .then(response => response.json())
            .then(json => {
                return {options: json}
            });
    };

    render() {
        let {value, name, displayName, help, error, touched, onChange, onBlur, options, fieldLayout, disabled} = this.props;
        let formGroupProps = {error, touched, displayName, name, help, fieldLayout};
        let selectProps;

        if (Array.isArray(options)) {
            selectProps = {
                options,
                value,
                name,
                disabled,
                onChange,
                onBlur: (event) => onBlur()
            };

            return (
                <FormGroup {...formGroupProps}>
                    <Select {...selectProps}/>
                </FormGroup>
            )

        } else if (options.url) {
            selectProps = {
                value,
                name,
                onChange,
                onBlur: (event) => onBlur(),
                valueKey: options.valueKey || 'value',
                labelKey: options.labelKey || 'label'
            };

            return (
                <FormGroup {...formGroupProps}>
                    <Select.Async {...selectProps} loadOptions={this.fetchItems}/>
                </FormGroup>
            )
        }

        return false;
    }
}

export default Lookup;