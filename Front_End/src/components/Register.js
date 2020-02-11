import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import request from 'request';
import '../App.css'
import lala from "./giphy.gif";
import "../style/frontpage.css";

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			mobileNumber: "",
			address: "",
			emailID: '',
			password: '',
			status:''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	// http://localhost:8080/rest/user/register

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		// axios request will go
		console.log('You have successfully registered');
		console.log(this.state);
		
		// axios.post('url/register', {this.state})
		// .then(res => {
		// 	if res.status == '200' {
		// 		alert('sucess')
		// 		redirect to login
		// 	}
		// })
		// .catch(e => {
		// 	console.log(e)
		// })

		this.setState({
			fullname: '',
			email: '',
			password: ''
		});

		const { history } = this.props;
		const user = {
			name: this.state.name,
			id: this.state.id,
			mobileNumber:this.state.mobileNumber,
			address:this.state.address,
			emailID:this.state.emailID,
			password:this.state.password,
			status:this.state.status
		  
		  };
		
		axios.post('http://localhost:8080/rest/user/register', user, {headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		}})
		  .then(function (response) {
			 
			  if (response.status == "200")
			  {
				console.log("Registered Succesfully");
				history.push('/dashboard')
			

			  }
			console.log(response);
		  })
		  .catch(function (error) {
			console.log("",error);
			console.log("data", {user});
		  });
	}

	

	render() {
		return (
			<div className="bg-img1">
			<div className="container text-center">
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Register</h2>

					<div className="name">
						<input
							type="text"
							placeholder="Full Name"
							name="fullname"
							value={this.state.fullname}
							onChange={this.update}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>

					<div className="pasword">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>

					<div className="password">
						<input type="password" placeholder="Confirm Password" name="password1" />
					</div>

					<input type="submit" value="Login" />
				</form>

		<h5>Already have an Account?	<Link to="/login">Login Here</Link></h5>	
			</div>
			</div>
			</div>
		);
	}
}

export default Register;
