
import React, { Component} from 'react';
import "../style/dashboard.css";
import Navbar from "./Navbar.js";
import { Link, Redirect } from 'react-router-dom';
import '../App.css';

export default class dashboard extends Component {
    render() {
        return (
            <div>
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
      
      </div>
      <div id="content">
      <div class="jumbotron jumbotron-fluid">
  <div class="container">
      <div class="card-deck">
      < div class="card">
  <h5 class="card-header">How to Go About</h5>
  <div class="card-body">
    <h5 class="card-title">Weather  </h5>
    <p class="card-text">This website provides Next Generation Weather Radar (NEXRAD) data on the NCEI archive base data, called Level-II. We focus on the base data quantity, Reflectivity </p>
    <a href="https://www.ncdc.noaa.gov/data-access/radar-data/nexrad" className="btn btn-primary">More Information</a>
  </div>
</div>

< div class="card">
  <h5 class="card-header">About us </h5>
  <div class="card-body">
    <h5 class="card-title">Team Brogrammers</h5>
    <p class="card-text">This project is curated by a team of Engineers from Indiana University,Bloomington</p>
    <a href="https://github.com/airavata-courses/Brogrammers/" class="btn btn-primary">Github</a>
  </div>
</div>
</div>
    


  </div>
</div>

    
     
    </div>
 
            </div>
        )
    }
}
