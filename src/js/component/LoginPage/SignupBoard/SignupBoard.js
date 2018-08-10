import React from 'react';
import UserBasicInfoInput from './UserBasicInfoInput';
import SubmitButton from './SubmitButton';

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
        <UserBasicInfoInput onChange={
            { password: password => this.onChangePassword(password), 
              passwordCheck: password => this.onChangePasswordCheck(password), 
              email: email => this.onChangeEmail(email) }
          }/>
        <SubmitButton onSubmit={ () => this.onSubmitAndSignUp() }/>
      </div>
    );
  }
  
  onChangePassword(password) {
    this.setState({ password: password });
  }

  onChangePasswordCheck(password) {
    if(password != this.state.password)
      this.setState({ isPasswordCheckDifferent: true});
  }

  onChangeEmail(email) {
    this.setState({ email: email });
  }

  onSubmitAndSignUp() {
    // TODO: call firebase sign up api
  }

}

export default LoginBoard;