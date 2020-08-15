import React from 'react';
import {Field, ErrorMessage} from 'formik';

import TextField from 'components/form/TextField';
import SelectField from 'components/form/SelectField';
import CheckboxField from 'components/form/CheckboxField';
import TimePickerField from 'components/form/TimePickerField';

const COMPONENTS = {
    "text": TextField,
    "checkbox": CheckboxField,
    "textarea": TextField,
    "password": TextField,
    "select": SelectField,
    "date": TimePickerField,
};

const InputWrapper = ({
                          id = '',
                          title = '',
                          field = {},
                          ...props
                      }) => {
    const _id = id || `form_field_${field.name}`;
    const Component = !!COMPONENTS[props.type] ? COMPONENTS[props.type] : TextField
    const _title = !!title ? `${title} ${!!props.required ? ' *' : ''}` : null;

    return (
        <div className="input-field">
            { props.type !== 'hidden' && <label className="field-description active" htmlFor={_id}>{_title}</label> }
            <Component id={_id} field={field} title={_title} {...props}/>
        </div>
    )
};

const MyField = ({
                     className = '',
                     name= '',
                     type = 'text',
                     title = null,
                     required = false,
                     ...props
                 }) => {
    return (
        <div className={`Field ${className}`}>
            <Field {...props}
                   title={title}
                   required={required}
                   name={name}
                   type={type}
                   component={InputWrapper}>
            </Field>
            <ErrorMessage component="span" className="Error" name={name}/>
        </div>
    )
};

export default MyField;
