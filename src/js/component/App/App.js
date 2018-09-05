import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Calendar from '../Calendar/Calendar'
class App extends React.Component {
	render() {
		return (
			<div>
				<HashRouter>
					<div>
						<Switch>
							<Route path='/Login' render={ () => (<LoginPage />) } />
							<Route path='/Home' exact render={ () => (<Home />) } />
							<Route path='/' exact render={ () => (<Calendar />) } />
						</Switch>
						<Navbar />
					</div>
				</HashRouter>
			</div>
		);
	}
}

export default App;
