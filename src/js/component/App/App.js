import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage'
import Home from '../Home/Home'

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path='/Login' render={ () => (<LoginPage />) } />
            <Route path='/' exact render={ () => (<Home />) } />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
