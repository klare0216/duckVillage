import React from 'react';
import AccountAndPasswordInput from './AccountAndPasswordInput';
import LoginAndSignUpButton from './LoginAndSignUpButton';
import url from '../../../../../img/duck_house.svg';

class LoginBoard extends React.Component {
  render() {
    return (
      <div className='card-content login'>
        <img src={url} />
        <AccountAndPasswordInput />
        <LoginAndSignUpButton />
      </div>
    );
  }
}

export default LoginBoard;
