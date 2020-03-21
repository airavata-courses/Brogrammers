import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import FrontPage from './components/frontpage';
import Register from './components/Register';
import UserSessions from './components/usersessions';
import Dashboard from './components/dashboard';
import Forms from './components/Forms.js';
import './App.css';
import Navbar from './components/Navbar';
import Plot from "./components/Plot";
import usersessions from './components/usersessions';

class App extends Component {
  
  render() {
    return (
      <div>
        {/* { ((window.location.pathname) = '/' || (window.location.pathname = '/login')) ? '': ' <Navbar />'} */}
      
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forms" component={Forms} />
        <Route path="/usersessions" component={UserSessions} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/plot" component={Plot} />
      </div>
    );
  }
}

export default App;
