import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Welcome from './components/welcome.jsx';
import signUpPage from './components/signup/signUpPage.jsx';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Welcome} />
        <Route path="signup" component={signUpPage} />
    </Route>
)