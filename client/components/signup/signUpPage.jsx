import React from 'react';
import SignupForm from './signupForm';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {userSignupRequest} from '../../actions/signupActions';
import {addFlashMessage} from '../../actions/flashMessages';

class signupPage extends React.Component{
    render(){
        const {userSignupRequest, addFlashMessage} = this.props;
        return(
            <div className="row">
            <h1>Signup Page</h1>
                <div className="col-md-4 col-md-offset-4"></div>
                <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
            </div>
        );
    }
}

signupPage.propTypes = {
    userSignupRequest:  PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest, addFlashMessage})(signupPage);