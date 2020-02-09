import React, { Component } from 'react';
import Navbar from "./Navbar.js";
import { Link, Redirect, withRouter } from 'react-router-dom';
import "../style/forms.css"
import axios from 'axios';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import url from '../config/default'
import "react-datepicker/dist/react-datepicker.css";



class Forms extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            startDate: new Date(),
            event_description: '',
            event_category: ''
    
        };
      }

    
    handleChange = e => {
        // this.setState({
        //     startDate: e.target.value
        // });
        this.setState({
            event_description: e.target.value
        });
    };


    handleSubmit (e) {
        var obj = this.state
        obj.user = localStorage.getItem('user')
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

                <div class='container mt-5 mb-5'>
                    <form onSubmit={this.handleSubmit}>
                        <div class='row mt-5'>
                            <div class='col-sm-12'>
                                <div class='card'>
                                    <div class='card-header d-flex align-items-center'>
                                        <i class='material-icons mr-2' style={{ textAlign: "center" }}>Data Extractor</i>

                                    </div>
                                    <div class='card-body'>

                                        <div class='form-row'>
                                            <div class='col-sm-9'>
                                                <div class='form-group'>
                                                    <label for='event_category'>Category</label>
                                                    <select class='form-control' id='event_category' type='text'>
                                                        <option value='music' id="username" name="username">Weather</option>
                                                        <option value='music'>Weather</option>
                                                        <option value='music'>Weather</option>
                                                        <option value='music'>Weather</option>
                                                        <option value='music'>Weather</option>
                                                        <option value='music'>Weather</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                        <div class='form-row'>
                                            <div class='col-sm-6'>

                                            </div>

                                        </div>
                                        <label for=''>Date</label>
                                        <div class='form-group'>
                                            {/* <button class='btn btn-light d-flex align-items-center'>
                              <i class='material-icons mr-2'>add</i>
                          
                            </button> */}
                                            <DatePicker
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div class='form-group'>
                                            <label for='event_description'>Description</label>
                                            <textarea class='form-control' value={this.state.event_description} onChange={this.handleChange.bind(this)} id='event_description' name='event_description' placeholder='Write something about your event' rows='4'></textarea>
                                        </div>
                                        <div class='form-group'>
                                            <label for='event_image'>Image</label>

                                            <input accept='.jpg, .jpeg, .png' class='form-control' id='event_image' type='file' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class='form-group d-flex justify-content-center mt-3'>
                            <button class='btn d-flex align-items-center mr-3'>

                                Cancel
                    </button>
                            <button class='btn btn-primary d-flex align-items-center float-right' >

                                Sumbit
                    </button>
                        </div>
                    </form>
                </div>
            </div>
        );


    }
}

export default Forms;