import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LiveSchemaEditorForm from './LiveSchemaEditorForm';
import presets from '../../client/presets/presets';
import _ from 'underscore';
import pkg from '../../../package.json';
import { AutoForm } from 'redux-autoform';
import { EditComponentFactory, DetailsComponentFactory } from '../../../src/index';
import { Alert, Badge } from 'react-bootstrap';
import ButtonToolbar from './SubmitToolbar';
import FormOptions from './OptionsToolbar';
import SubmitDialog from './SubmitDialog';

class LiveSchemaEditorView extends Component {
    static propTypes = {
        preset: PropTypes.string,
        formOptions: PropTypes.object.isRequired,
        formOptionsActions: PropTypes.object.isRequired
    };

    state = {
        open: false,
        result: {}
    };

    handleResult = (args) => {
        this.setState({open: true, result: args});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    getButtonToolbar = () => {
        const { metaForm } = this.props;
        let layoutName = null;

        if (metaForm && metaForm.layoutName)
            layoutName = metaForm.layoutName.value;

        if (layoutName === 'wizard') {
            return () => <div></div>;
        } else {
            return ButtonToolbar;
        }
    };

    getAutoFormProps(formName, initialValues) {
        let { metaForm, formOptions } = this.props;

        if (!formName) throw Error('Form name cannot be empty');
        if (!metaForm) return undefined;

        let factory;

        if (formOptions.componentFactory == 'edit') {
            factory = EditComponentFactory;
        } else {
            factory = DetailsComponentFactory;
        }

        return {
            form: formName,
            fieldLayout: formOptions.fieldLayout,
            buttonBar: this.getButtonToolbar(),
            schema:  eval('(' + formOptions.schema + ')') , // eval('(' + metaForm.schema.value + ')'),
            entityName: metaForm.entityName.value,
            layoutName: metaForm.layoutName.value,
            componentFactory: factory,
            errorRenderer: this.errorRenderer,
            initialValues: initialValues,
            onSubmit: (...args) => this.handleResult(args)
        };
    }

    /**
     * Renders an exception box
     * @param ex
     * @returns {XML}
     */
    getErrorRenderer = (ex) => {
        return (
            <Alert bsStyle='danger'>
                <h4>Oh snap! The configuration is not valid.</h4>
                <p>Detailed information:
                    <b>{ex.message}</b>
                </p>
            </Alert>
        );
    };


    getUnderDevelopmentAlert = () => {
        let { formOptions } = this.props;

        if (formOptions.componentFactory == 'details') {
            return (
                <Alert bsStyle="danger">
                    <p><b>Experimental feature</b></p>
                    <p>Details forms are still under development. For now, it's just a lot of Static components instead of
                        editing components. Also,
                        it only works when the field doesn't explicitly specify the component, and it does'nt work for all types. Arrays,
                        for instance, are still not supported.</p>
                </Alert>
            );
        }

        return null;
    };

    getAutoform = () => {
        let { preset } = this.props;

        preset = preset || 'default';

        let presetObject = _.find(presets, p => p.name == preset);
        let autoFormProps;
        let autoForm;

        if (!presetObject) {
            throw Error(`Could not find preset. Preset name: ${preset}`);
        }

        try {
            autoFormProps = this.getAutoFormProps(preset, presetObject.initialValues);
            autoForm = autoFormProps ? <AutoForm {...autoFormProps}/> : null;
        } catch (ex) {
            autoForm = this.getErrorRenderer(ex);
        }

        return autoForm;
    };

    getPresetObject = () => {
        let { preset } = this.props;

        preset = preset || 'default';
        return _.find(presets, p => p.name == preset);
    };

    render() {
        let { reduxFormActions, preset, metaForm, formOptions, formOptionsActions } = this.props;
        let { open, result } = this.state;

        return (
            <div>
                <SubmitDialog open={open} args={result} handleClose={this.handleClose}/>
                <div className="live-schema-editor">
                    <div className='row'>
                        <div className="col-md-12">
                            <h2>redux-autoform-bootstrap-ui demo {pkg.version} <Badge>Ctrl + H = Redux DevTools</Badge>
                                <a className="pull-right" target="_blank" href="https://github.com/redux-autoform/redux-autoform"
                                    style={{color: 'black'}}>
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </a>
                            </h2>
                        </div>
                        <div className="col-md-5">
                            <LiveSchemaEditorForm formOptionActions={formOptionsActions} reduxFormActions={reduxFormActions} selectedPreset={preset} initialValues={this.getPresetObject()}/>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-12">
                                    <FormOptions editorSchema={metaForm ? metaForm.schema.value : ''} {...formOptions} {...formOptionsActions}/>
                                    {this.getUnderDevelopmentAlert()}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="live-schema-editor-mount-node">
                                        {this.getAutoform()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LiveSchemaEditorView;