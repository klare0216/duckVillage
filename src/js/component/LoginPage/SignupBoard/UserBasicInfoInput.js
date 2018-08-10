import React from 'react';
import { InputUi } from '../../Ui/Ui';

const UserBasicInfoInput = props => {
  return (
    <div>
      <InputUi label='email' type='text' 
        onChange={ event => props.onChange.email(event.target.value)} />
      <InputUi label='密碼' type='text' 
        onChange={ event => props.onChange.password(event.target.value) } />
      <InputUi label='確認密碼' type='text'
        onChange={ event => props.onChange.passwordCheck(event.target.value) } />
    </div>
  );
}

export default UserBasicInfoInput;
