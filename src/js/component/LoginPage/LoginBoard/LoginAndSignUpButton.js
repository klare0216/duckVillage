import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonUi } from '../../Ui/Ui';

const LoginAndSignUpButton = props => {
  return (
    <div>
      <Link to='/'>
        <ButtonUi value='登入' />
      </Link>
      <Link to='/Login/SignUp'>
        <ButtonUi value='註冊' />
      </Link>
    </div>
  );
}

export default LoginAndSignUpButton;
