import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import FrontPage from './components/frontpage';
import Register from './components/Register';
import UserSessions from './components/usersessions';
import Dashboard from './components/dashboard';
import './App.css';
import usersessions from './components/usersessions';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/usersessions" component={UserSessions} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;
