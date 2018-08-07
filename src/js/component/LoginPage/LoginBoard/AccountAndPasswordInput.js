import React from 'react';
import { InputUi } from '../../Ui/Ui';

export default props => {
  return (
    <div>
      <InputUi label='帳' type='text'/>
      <InputUi label='密' type='password'/>
      <a href='#'>忘記密碼?</a>
    </div>
  );
}
