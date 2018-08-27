import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if(validator.isEmpty(data.username)){
        errors.username = 'This field is required';
    }

    if(validator.isEmpty(data.email)){
        errors.email = 'This field is required';
    }
    if(!validator.isEmail(data.email)){
        errors.email = 'Please provide a valid email';
    }

    if(validator.isEmpty(data.password)){
        errors.password = 'This field is required';
    }
    if(validator.isEmpty(data.passwordConfirmation)){
        errors.passwordConfirmation = 'This field is required';
    }
    if(!validator.equals(data.password,data.passwordConfirmation)){
        errors.passwordConfirmation = 'The passwords does not match';
    }

    if(validator.isEmpty(data.area)){
        errors.area = 'This field is required';
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    }
}