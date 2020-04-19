import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../style/frontpage.css";



export default class frontpage extends Component {

  render() {
    return (
      <div >
        <div className="bg-img"></div>
          <div className='container' style={{position: "absolute" }}>
            <div className='row content'>
              <div className='col-lg-12'></div>
              <div className='col-lg-12'>
                <h1 style={{ fontSize: "100px" }}>Weather Forecast</h1>
                <h2 style={{
                  maxWidth: "700px",
                  fontSize: "30px",
                  width: "90%"
                }}>Team Brogrammers</h2>

                <span className='btn1'><Link to="/login">Login</Link></span>
                <span className='btn1'><Link to="/register">Register</Link></span>
              </div>
            </div>
          </div>
       
        <div >
        
         

        </div>

      </div>
    )
  }
}
