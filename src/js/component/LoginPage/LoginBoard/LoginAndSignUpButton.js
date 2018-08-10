import React from 'react';
import { ButtonUi } from '../../Ui/Ui';
import url from '../../../../../img/duck_house.svg';

const LoginAndSignUpButton = props => {
  return (
    <div>
      <ButtonUi value='登入' />
      <ButtonUi value='註冊' />
    </div>
  );
}

export default LoginAndSignUpButton;
