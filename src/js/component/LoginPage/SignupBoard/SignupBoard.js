import React from 'react';
import UserBasicInfoInput from './UserBasicInfoInput';
import SubmitButton from './SubmitButton';
import { ButtonUi } from '../../Ui/Ui';

class LoginBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      isPasswordCheckDifferent: false,
    }
  }

  render() {
    return (
      <div className='card-content signup'>
        <ButtonUi value="SignUp" />
        <UserBasicInfoInput onChange={
            { password: password => this.onChangePassword(password), 
              passwordCheck: password => this.onChangePasswordCheck(password), 
              email: email => this.onChangeEmail(email) }
          }/>
        <SubmitButton onClick={ () => this.onSubmitAndSignUp() }/>
      </div>
    );
  }
  
  onChangePassword(password) {
    this.setState({ password: password });
  }

  onChangePasswordCheck(password) {
    this.setState({ isPasswordCheckDifferent: password != this.state.password});
  }

  onChangeEmail(email) {
    this.setState({ email: email });
  }

  onSubmitAndSignUp() {
  
  }

  signIn() {
  }

}

export default LoginBoard;