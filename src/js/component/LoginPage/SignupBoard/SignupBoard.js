import React from 'react';
import UserBasicInfoInput from './UserBasicInfoInput';
import SubmitButton from './SubmitButton';

class LoginBoard extends React.Component {
  render() {
    return (
      <div className='card-content signup'>
        <UserBasicInfoInput />
        <SubmitButton />
      </div>
    );
  }
}

export default LoginBoard;