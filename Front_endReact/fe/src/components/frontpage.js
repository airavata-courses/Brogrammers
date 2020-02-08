import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image1 from "../images/wave-bot.png";


export default class frontpage extends Component {
    
    render() {
        return (
            <div >
                <div class="waveWrapperInner bgTop">

    {/* <div class="wave waveTop" style={{'url({$image1})'}}></div> */}
  </div>
  <div class="waveWrapperInner bgMiddle">
    {/* <div class="wave waveMiddle" style={{backgroundImage: url('http://front-end-noobs.com/jecko/img/wave-mid.png')}} ></div> */}
  </div>
  <div class="waveWrapperInner bgBottom">
    {/* <div class="wave waveBottom" style={{backgroundImage: url('http://front-end-noobs.com/jecko/img/wave-bot.png')}} ></div> */}
  </div>
              
  <div className='container'>
    <div className='row content'>
      <div className='col-lg-12'></div>
      <div className='col-lg-12'>
        <h1 style={{fontSize:"100px"}}>Brogrammers</h1>
        <h2 style={{maxWidth: "700px",
  fontSize: "30px",
  width: "90%"}}>Weather Forecast</h2>
        
        <span className='btn1'><Link to ="/login">Login</Link></span>
        <span className='btn1'><Link to ="/login">Register</Link></span>
      </div>
    </div>
  </div>
  <div style={{backgroundImage: `url(require("./images/gif.gif"))`}}>
  </div>

  

            </div>
        )
    }
}
