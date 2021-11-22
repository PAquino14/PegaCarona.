import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import styles from './Login.module.css';

import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <BrowserRouter>
          <Switch>
            <LoginForm />
            <LoginCreate />
            <LoginPasswordLost />
            <LoginPasswordReset />
          </Switch>
        </BrowserRouter>
      </div>
    </section>
  );
};

export default Login;
