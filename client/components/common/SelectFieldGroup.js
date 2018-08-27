import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectFieldGroup = ({field, value, label, onChange, type, error, defualtText, data}) => {
    return(
        <div className={classnames("form-group", {'has-error': error})}>
            <label className="control-label">{label}</label>
            <select 
                value={value}
                onChange={onChange}
                name={field}
                className="form-control"
            >
                <option value="" disabled>{defualtText}</option>
                {data}
            </select>
            {error && <span className="help-block">{error}</span>}
        </div>  
    );
}


SelectFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    defualtText: PropTypes.string.isRequired,
    errors: PropTypes.string,
    data: PropTypes.array.isRequired
}


export default SelectFieldGroup;