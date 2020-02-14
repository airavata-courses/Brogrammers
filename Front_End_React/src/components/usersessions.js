import React, { Component } from 'react'
import axios from 'axios';
import url from '../config/default'
  
import moment from 'moment';
import Navbar from "./Navbar.js";

import Forms from './Forms'

export default class usersessions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activity: []
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${url.gateway}/getSessions/${localStorage.getItem('user')}`)
      .then(response => {
        console.log(response.data);
       

        this.setState({ activity: response.data.userSession });
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    return (
      <div>
        <Navbar></Navbar>
        <h1 style={{ fontSize: "50px", textAlign: "center" }}>Activity</h1>
        <div className="container2">
          <div className="row">

            <div className="col-xs-12">
              <div className="table-responsive">
                <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" className="table table-bordered table-hover">
                  <caption>Users Management of Activity
         </caption>
                  <thead>
                    <tr>
                      <th>Created</th>
                      <th>Log Date</th>
                      <th>Radar Type</th>
                      <th>Description</th>
                      {/* <th>History</th> */}
                    </tr>
                  </thead>
                  {this.state.activity.map(activity=> (
                    <tbody>
                      <tr>
                        <td>{moment(activity.created  ).format('DD MMM YYYY')}</td>
                        <td>{moment(activity.session.date).format('DD MMM YYYY')}</td>
                        <td>{activity.session.radar}</td>
                        <td>{activity.session.description}</td>
                       {/* <td>
                       <button
                        classNameName="btn btn-info"
                          style={{
                          
                            backgroundColor:"lightBlue",
                            border:"none",
                            fontSize:"1rem",
                            
                          }}
                         
                        >Go
                        </button>
                       </td> */}
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
