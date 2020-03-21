import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import request from 'request';
import '../App.css'
import url from '../config/default.js';
import "../style/frontpage.css";

export default class Login extends React.Component {
	state = {
		"id": "",
		"name": "",
		"mobileNumber": "",
		"address": "",
		"emailID": "",
		"password": "",
		"status": ""
	}

	handleChange = e => {
		// this.setState({ userid: event.target.value });
		// this.setState({ fullname: event.target.value });
		// this.setState({ usergroup: event.target.value });
		// this.setState({ emailID: event.target.value });
		// this.setState({ mobile: event.target.value });
		// this.setState({ password: event.target.value });

		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	// }
	}

	handleSubmit = event => {
		event.preventDefault();

		const user = {
			name: this.state.name,
			id: this.state.id,
			mobileNumber: this.state.mobileNumber,
			address: this.state.address,
			emailID: this.state.emailID,
			password: this.state.password,
			status: this.state.status

		};

		// request
		// 	.post('http://localhost:8080/rest/login')
		// 	.on('response', function(response) {
		// 	console.log(response)
		// 	})null
		const { history } = this.props;
		console.log(user)
		axios.post(`/rest/login`, user, {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			}
		})
			.then(function (response) {

				if (response.status == "200") {
					console.log("logged in Succesfully");
					console.log("response",response)
					localStorage.setItem('user', response.data.id)
					console.log("val",user)
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
									value={this.state.emailID}
									onChange={this.handleChange}
									name="emailID"
								/>
							</div>

							<div className="password">
								<input
									type="password"
									placeholder="Password..."
									value={this.state.password}
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
