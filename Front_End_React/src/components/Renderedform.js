import React, { Component } from 'react';
import Navbar from "./Navbar.js";
import { Link, Redirect, withRouter } from 'react-router-dom';
import "../style/forms.css"
import axios from 'axios';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import url from '../config/default'
import "react-datepicker/dist/react-datepicker.css";


class RenderedForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleDate = this.handleDate.bind(this);

        this.state = {
            // startDate: new Date(),
            event_date:"",
            event_category: '',
            event_description: ''


        };

    }


    handleCategory = e => {

        this.setState({
            event_category: e.target.value
        })

    };

    handleDate = e => {

        this.setState({
            event_date: new Date(e.target.value)
        })

    };

    handleDescription = e => {
        this.setState({
            event_description: e.target.value
        })
    }



    handleSubmit(e) {
        var obj = this.state
        obj.user = localStorage.getItem('user')
        console.log(obj)
        axios.post(`${url.sessionManagement}/put_user_into_session`, obj)
            .then(res => {
                console.log(res)
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
                <div className="">
                <div class='container mt-6 mb-6'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='row mt-6'>
                            <div className='col-sm-12'>
                                <div className='card'>
                                    <div className='card-header d-flex align-items-center'>
                                        <i className='material-icons mr-2' >Reflectivity Data Extractor</i>

                                    </div>  
                                    <div className='card-body text-center'>
                                    <label for=''>Radar Type</label>
                                        <div className='form-row'>
                                            <div className='col-sm-12'>
                                                <input
                                                    style={{width: "100%"}}
                                                    type="text"
                                                    value={this.state.event_category}
                                                    onChange={this.handleCategory}
                                                    id='event_category'
                                                    placeholder="Enter Your Radar Configuration"
                                                    name="event_category" />
                                            </div>

                                        </div>

                                        <label for=''>Date</label>
                                        <div class='form-group'>
                                        <input
                                                    style={{width: "100%"}}
                                                    type="date"
                                                    value={this.state.date}
                                                    onChange={this.handleDate}
                                                    id='event_date'
                                                    name="event_date" />
                                            </div>
                                     
                                        <div class='form-group'>
                                            <label for='event_description'>Description</label>
                                            <textarea className='form-control'
                                                value={this.state.event_description}
                                                onChange={this.handleDescription}
                                                id='event_description'
                                                name='event_description'
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

                                Sumbit
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