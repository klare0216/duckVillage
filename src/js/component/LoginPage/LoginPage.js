import React from 'react';
import LoginBoard from './LoginBoard/LoginBoard';
import SignupBoard from './SignupBoard/SignupBoard';

class LoginPage extends React.Component {
  render() {
    return (
      <div className='card login'>
        <SignupBoard />
      </div>
    );
  }
}

export default LoginPage;
