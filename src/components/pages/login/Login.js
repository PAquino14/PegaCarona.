import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <BrowserRouter basename={'/'}>
          <Switch>
            <Route path={`/`} element={<LoginForm />} />
            <LoginCreate />
            <LoginPasswordLost />
            <LoginPasswordReset />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Login;
