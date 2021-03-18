import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '../components/global/Button';
import TextInput from '../components/global/TextInput';
import LoginImage from '../assets/images/LoginImage';
// import signIn from '../services/authService';

import '../stylesheets/loginView.scss';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = function () {
    console.log(email, password);
  };

  // for testing without firebase authentication
  const signIn = function (emailTest, passwordTest) {
    // emailTest === 'email' && passwordTest === 'password'
    //   ? {return: true}
    //   : null;
    if (emailTest === 'email' && passwordTest === 'password') {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className='login'>
        <h1 className='welcome'>Welcome</h1>
        <div className='email_container'>
          <TextInput label='Email:' onChangeHandler={setEmail} type='email' />
        </div>
        <div className='password_container'>
          <TextInput
            label='Password:'
            onChangeHandler={setPassword}
            type='password'
          />
        </div>
        <div onClick={login} onKeyDown={login} role='button' tabIndex={0}>
          {signIn(email, password) ? (
            <Link to='/home'>
              <Button icon='rightArrow' text='Login' />
            </Link>
          ) : (
            <Button icon='rightArrow' text='Login' />
          )}
          {/* <Link to='/home'>
            <Button icon='rightArrow' text='Login' />
          </Link> */}
        </div>
        Don&#39;t have an account?&nbsp;
        <Link to='/signup' className='login_signup_link'>
          Sign Up here
        </Link>
      </div>
      <div className='login_background'>
        <LoginImage />
      </div>
    </>
  );
}
