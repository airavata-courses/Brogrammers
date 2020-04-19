import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image1 from "../images/wave-bot.png";
import image2 from "../images/wave-mid.png";
import image3 from "../images/wave-top.png";
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
        {/* <div>
        <div class="waveWrapperInner bgTop" style={{zIndex:"-1"}}>

          <div class="wave waveTop" style={{ backgroundImage: 'url(' + image1 + ')' }}></div>
        </div>
        <div class="waveWrapperInner bgMiddle">
          <div class="wave waveTop" style={{ backgroundImage: 'url(' + image2 + ')' }}></div>
        </div>
        <div class="waveWrapperInner bgBottom">
          <div class="wave waveTop" style={{ backgroundImage: 'url(' + image3 + ')' }}></div>
        </div>
        </div> */}
        <div >
        
         

        </div>

      </div>
    )
  }
}
