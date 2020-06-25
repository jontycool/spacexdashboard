import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import LoginCheck from './components/LoginCheck';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' exact component={withRouter(LoginCheck)} />
            <Route path='/home' component={withRouter(Home)} />
            <Route path='/login' exact component={withRouter(Login)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
