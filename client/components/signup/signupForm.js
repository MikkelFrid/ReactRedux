import React from 'react';
import area from '../../data/area';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectFieldGroup from '../common/SelectFieldGroup';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            area: '',
            errors: {},
            isLoading: false
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    isValid(){
        const {errors, isValid } = validateInput(this.state);

        if(!isValid){
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();

        if(this.isValid()){
            this.setState({ errors: {}, isLoading: true }); // clear 
            this.props.userSignupRequest(this.state).then(
                () => {
                    this.context.router.push('/');
                },
                ({ data }) => this.setState({errors:data, isLoading:false})
            );
        }
    }

    render() {
        const {errors} = this.state;
        const options = map(area, (val, key) =>
            <option key={val} value={val}>{key}</option>    
        );
        return(
            <div>
            <h2>Provide user data</h2>
            <form onSubmit={this.onSubmit}>
                <TextFieldGroup 
                    label='Username'                
                    field='username'
                    value={this.state.username}
                    type='text'
                    onChange={this.onChange}
                    error={errors.username}
                />

                <TextFieldGroup 
                    label='Email'                
                    field='email'
                    value={this.state.email}
                    type='text'
                    onChange={this.onChange}
                    error={errors.email}
                />      

                <SelectFieldGroup 
                    label='Area'                
                    field='area'
                    value={this.state.area}
                    type='text'
                    onChange={this.onChange}
                    error={errors.area}
                    defualtText='Choose your area'
                    data={options}
                />

                <TextFieldGroup 
                    label='Password'                
                    field='password'
                    value={this.state.password}
                    type='password'
                    onChange={this.onChange}
                    error={errors.password}
                />
                
                <TextFieldGroup 
                    label='Password Confirmation'                
                    field='passwordConfirmation'
                    value={this.state.passwordConfirmation}
                    type='password'
                    onChange={this.onChange}
                    error={errors.passwordConfirmation}
                />

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign up</button>
                </div>
            </form>
            </div>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest:  PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default SignupForm;