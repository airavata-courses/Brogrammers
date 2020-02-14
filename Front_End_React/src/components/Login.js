import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import request from 'request';
import '../App.css'
import url from '../config/default.js';
import "../style/frontpage.css";

export default class Login extends React.Component {
	state = {
		"id": null,
		"name": null,
		"mobileNumber": null,
		"address": null,
		"emailID": null,
		"password": null,
		"status": null
	}

	handleChange = event => {
		this.setState({ userid: event.target.value });
		this.setState({ fullname: event.target.value });
		this.setState({ usergroup: event.target.value });
		this.setState({ emailID: event.target.value });
		this.setState({ mobile: event.target.value });
		this.setState({ password: event.target.value });
	}
	
	//

	//
	//
	//
	//



	handleSubmit = event => {
		event.preventDefault();

		

		// function encryptPassword(password, key) {
		// 	var newpass = ''
		// 	for (var i = 0; i < password.length; i++) {
		// 		var a = (password.charCodeAt(i) + 3) % 255
		// 		newpass += String.fromCharCode(a)
		// 	}
		// 	return newpass
		// }

		const user = {
			name: this.state.name,
			id: this.state.id,
			mobileNumber: this.state.mobileNumber,
			address: this.state.address,
			emailID: this.state.emailID,
			password: this.state.password,
			// password: encryptPassword(this.state.password, 3),
			status: this.state.status

		};

		// request
		// 	.post('http://localhost:8080/rest/login')
		// 	.on('response', function(response) {
		// 	console.log(response)
		// 	})
		const { history } = this.props;
		console.log(url)
		axios.post(`http://localhost:8080/rest/login`, user, {
		
		})
			.then(function (response) {

				if (response.status == "200") {
					console.log("logged in Succesfully");
					console.log("response",response)
					localStorage.setItem('user', response.data.id)
					localStorage.setItem('isAuthenticated', true)
					history.push('/dashboard')
					// localStorage.setItem(name,this.fullname)
					// return <Redirect to='/dashboard' />

				}
				console.log(response);
			})
			.catch(function (error) {
				console.log("ALLAL", error);
				console.log("data", { user });
			});

	}



	render() {
		return (
			<div className="bg-img1">
				<div className="container text-center">
					<div className="login" >
						<form onSubmit={this.handleSubmit}>
							<h2 style={{ color: "#000000" }}>Login</h2>
							<div className="username">
								<input
									type="text"
									placeholder="Username..."

									onChange={this.handleChange}
									name="email"
								/>
							</div>

							<div className="password">
								<input
									type="password"
									placeholder="Password..."

									onChange={this.handleChange}
									name="password"
								/>
							</div>
							<div className="wrapper text-center">
								<input style={{ justifyContent: "center" }} type="submit" />
							</div>
						</form>

						<Link to="/register">Create an account</Link>
					</div>
				</div>
			</div>
		);
	}
}


