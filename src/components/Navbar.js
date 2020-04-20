import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  logoutHandler = (e) => {
    this.props.history.push('/login')
  }
  render() {
    return (
      <div>

        <nav class="navbar   navbar-dark bg-dark">
          <a class="navbar-brand" href="#"><Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Brogrammers</Link></a>
          <ul class="navbar-nav ">
            <li class="nav-item active w-100">
            <a href="#" onClick={e=>this.logoutHandler(e)}>Lokkkgout</a>

              {/* <a class="nav-link"><Link to="/" style={{ color: "white", textDecoration: "none" }}>Logout</Link> </a> */}
            </li>
          </ul>
          {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
          {/* <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
        <a class="nav-link"  ><Link to="/">Logout</Link> </a>
      </li>
    </ul>
   
   
  </div> */}


        </nav>
      </div>
    )
  }
}
