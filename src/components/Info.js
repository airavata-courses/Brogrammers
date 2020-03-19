
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
            
            <li class="nav-item ">
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
             
            </li>
          </ul>
        </div>
  
      </div>

      <div id="content">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#"> Info </a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Github</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
       
       
      </ul>
     
    </div>
            </div>
        )
    }
}
