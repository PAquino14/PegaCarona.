import React from 'react';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import styles from './Login.module.css';

const Login = () => {
  return (
    <section className={styles.login}>
    <div className={styles.forms}>
   
        
           <LoginForm />
           <LoginCreate />
          <LoginPasswordLost />
         <LoginPasswordReset />
             
    </div>
    </section> 
  );
};

export default Login;