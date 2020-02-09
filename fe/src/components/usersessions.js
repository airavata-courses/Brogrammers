import React, { Component } from 'react'


export default class usersessions extends Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: "50px", textAlign: "center" }}>Activity</h1>
        <div class="container">
          <div class="row">

            <div class="col-xs-12">
              <div class="table-responsive">
                <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" class="table table-bordered table-hover">
                  <caption>Users Management of Activity
         </caption>
                  <thead>
                    <tr>

                      <th>Authorization</th>
                      <th>Activity</th>
                      <th>Login Time</th>
                      <th>Logout Time</th>


                      <th>Usage</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Argentina</td>
                      <td>Spanish (official), English, Italian, German, French</td>
                      <td>41,803,125</td>
                      <td>31.3</td>
                      <td>2,780,387</td>
                    </tr>




                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
