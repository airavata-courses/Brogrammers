import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Navbar extends Component {

    render() {
        return (
            <div>
           <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a class="navbar-brand"><Link to="/dashboard"></Link> Brogrammers</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link"  ><Link to="/"></Link> Logout</a>
      </li>
      
    </ul>
   
   
  </div>
</nav>
</div>
        )
    }
}
