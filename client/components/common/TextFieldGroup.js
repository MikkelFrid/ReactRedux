import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({field, value, label, onChange, type, error}) => {
    return(
        <div className={classnames("form-group", {'has-error': error})}>
        <label className="control-label">{label}</label>
        <input 
            value={value}
            onChange={onChange}
            type={type}
            name={field}
            className="form-control"
        />
        {error && <span className="help-block">{error}</span>}
    </div>
    );
}

TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    errors: PropTypes.string
}

export default TextFieldGroup;