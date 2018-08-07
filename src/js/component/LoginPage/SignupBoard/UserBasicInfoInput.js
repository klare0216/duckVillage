import React from 'react';
import { InputUi } from '../../Ui/Ui';

export default props => {
  return (
    <div>
      <InputUi label='email' type='text' />
      <InputUi label='暱稱' type='text' />
      <InputUi label='密碼' type='text' />
      <InputUi label='確認密碼' type='text' />
    </div>
  );
}
