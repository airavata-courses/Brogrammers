import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Navbar extends Component {

    render() {
        return (
            <div>
           <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Brogrammers</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link"  ><Link to="/dashboard">Home</Link> <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link " style={{float: "right"}} ><Link to="/">Logout</Link> </a>
      </li>
     
    </ul>
   
   
  </div>
</nav>
</div>
        )
    }
}
