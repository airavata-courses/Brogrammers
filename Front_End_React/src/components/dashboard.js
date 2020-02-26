import React, { Component} from 'react';
import "../style/dashboard.css";
import Navbar from "./Navbar.js";
import { Link, Redirect } from 'react-router-dom';


export default class dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                
  <div className="sidebar " role="navigation">
        <div class="sidebar-nav navbar-dark bg-dark" >
          <ul class="nav flex-column" id="side-menu">
            {/* <li class="nav-item sidebar-search">
              <div class="input-group custom-search-form">
                <input type="text" class="form-control" placeholder="Search"/>
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </li>
   */}
  <li class="nav-item">
              <a href="#" class="active"><i class="fa fa-dashboard fa-fw"></i> </a>
            </li>
            <li class="nav-item">
              <a href="#" class="active"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
            </li>
            <li class="nav-item">
            <Link to ="/usersessions">User Activity</Link>
            </li>
            <li class="nav-item">
            <Link to ="/forms">Reflectivity Data </Link>
            </li>
            
            {/* <li class="nav-item ">
              <a data-toggle="collapse" href="#secondLevel" aria-expanded="false" aria-controls="collapseExample">
              <Link to ="/usersession">User Info</Link>
              </a>
              <ul class="collapse nav-second-level" id="secondLevel">
                <li class="nav-item">
                  <a href="#">Second </a>
                </li>
                <li class="nav-item">
                  <a href="#">Second </a>
                </li>
              </ul>
             
            </li> */}
          </ul>
        </div>
  
      </div>

      <div id="content">
      {/* <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul> */}
      <div class="card">
        <div class="card-block">
          {/* <h4 class="card-title" style={{textAlign:"center"}}>Data Download</h4>
          <h6 class="card-subtitle mb-2 text-muted">What Task would you like to carry out today</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      <center>
          {/* <div class="">
  <button class="btn btn btn-outline-secondary dropdown-toggle" >  <Redirect to ="/forms"/>Extract
  <span class="caret"></span></button>
</div> */}
</center>
        </div>
      </div>
    </div>
            </div>
        )
    }
}