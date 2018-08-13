import React from 'react';
import { ButtonUi } from '../../Ui/Ui';

const SubmitButton = props => {
  return (
    <ButtonUi value='送出' onClick={ () => props.onClick() }/>
  );
}

export default SubmitButton;
