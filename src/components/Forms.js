import React, { Component } from 'react';
import Navbar from "./Navbar.js";
import { Link, Redirect, withRouter } from 'react-router-dom';
import "../style/forms.css"
import axios from 'axios';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import url from '../config/default'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'


class Forms extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.respone_url = ''
        this.state = {
            // startDate: new Date(),
            user:'',
            end:'',
            _id:"",
            __v:0, 
            session :{
                date:"",
                radar: '',
                description: ''

            } 
           
        };

    }
    // var sessionData = {
    //     user: req.body.user, 
    //     end: new Date(), 
    //     session: {
    //        description: req.body.description,
    //        date: req.body.date,
    //        radar: req.body.radar
    //     }
    //    }


    handleCategory = e => {

        this.setState({
            radar: e.target.value
        })

    };

    handleDate = e => {

        this.setState({
            date: e.target.value
        })

    };

    handleDescription = e => {
        this.setState({
            description: e.target.value
        })
    }



    handleSubmit(e) {
        e.stopPropagation();
        // console.log(this.data) 
        var SessionData = {}  
        var session = {
            radar: this.state.radar,
            description: this.state.description,
            date: this.state.date
        }
        SessionData.session = session
        SessionData._id = ""
        SessionData.__v = 0
        SessionData.end = new Date()
        // console.log(SessionData)
        // var SessionData

        SessionData.user = localStorage.getItem('user')
        console.log("user",user)
        console.log("request", SessionData)

        axios.post(`/rest/reflectivity/`, SessionData)
            .then(res => {
                if (res) {
                    this.setState({ loading: false });
                    localStorage.setItem("plot_url", JSON.stringify(res));
                    this.props.history.push(`/plot`);
                    console.log("this is our res",res);
                  }
                //this.respone_url = res.data
                // check the format of the response object.
                //var win = window.open(res.data, '_blank');
                //win.focus();
            }) 
            .catch(e => {
                console.log(e)
            })
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="container1" style={{backgroundColor:"#ebf6fa"}}>
                <div class='container mt-6 mb-6' >
                    <form onSubmit={this.handleSubmit} >
                        <div className='row mt-6' mt-6 mb-6>
                            <div className='col-sm-12'>
                                <div className='card' style={{backgroundColor:"#3b7fcc"}}>
                                    <div className='card-header d-flex align-items-center' style={{backgroundColor:"#ffffff"}}>
                                        <h3 className='material-icons mr-2' >Reflectivity Data Extractor</h3>

                                    </div>  
                                    <div className='card-body text-center'>
                                    <label for=''>Radar Type</label>
                                        <div className='form-row'>
                                            <div className='col-sm-12'>
                                                <input
                                                    style={{width: "100%"}}
                                                    type="text"
                                                    value={this.state.radar}
                                                    onChange={this.handleCategory}
                                                    id='radar'
                                                    placeholder="Enter Your Radar Configuration"
                                                    name="radar" />
                                            </div>

                                        </div>

                                        <label for=''>Date</label>
                                        <div class='form-group'>
                                        <input
                                                    style={{width: "100%"}}
                                                    type="date"
                                                    value={this.state.date}
                                                    onChange={this.handleDate}
                                                    id='date'
                                                    name="date" />
                                            </div>
                                     
                                        <div class='form-group'>
                                            <label for='description'>Description</label>
                                            <textarea className='form-control'
                                                value={this.state.description}
                                                onChange={this.handleDescription}
                                                id='description'
                                                name='description'
                                                placeholder='Enter Small Description'
                                                rows='4'></textarea>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='form-group d-flex justify-content-center mt-3'>
                            <button className='btn d-flex align-items-center mr-3'>
                            <Link to="/dashboard">Cancel</Link>
                                
                    </button>
                            <button className='btn btn-primary d-flex align-items-center float-right' >

                                Submit
                    </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        );


    }
}

export default Forms;
