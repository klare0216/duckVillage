import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LoginBoard from './LoginBoard/LoginBoard';
import SignupBoard from './SignupBoard/SignupBoard';



class LoginPage extends React.Component {
	render() {
		return (
			<HashRouter>
				<div className='card login'>
					<Switch>
						<Route path='/Login' exact render={() => (<LoginBoard />)} />
						<Route path='/Login/SignUp' render={() => (<SignupBoard />)} />
					</Switch>
				</div>
			</HashRouter>
		);
	}
}

export default LoginPage;
