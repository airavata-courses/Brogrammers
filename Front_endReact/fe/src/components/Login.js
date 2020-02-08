import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			
            "id": null,
            "name": "Brogrammers",
            "mobileNumber": null,
            "address": null,
            "emailID": null,
            "password": "1234567890",
            "status": null
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You are logged in');
		console.log(this.state);

		// axios.post('http://localhost:8080/rest/login', {this.state})
		// .then(res => {
		// 	if res.status == '200' {
		// 		alert('sucess')
		// 		redirect to login
		//      how to store the this.state data in localstorage of react user: {name: '', id: '', email: ''}
		//      print the token
		//      
		// 	}
		// })
		// .catch(e => {
		// 	console.log(e)
		// })
		
		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="container">
			<div className="login">
				<form onSubmit={this.displayLogin}>
					<h2>Login</h2>
					<div className="username">
						<input
							type="text"
							placeholder="Username..."
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>

					<input type="submit" value="Login" />
				</form>

				<Link to="/register">Create an account</Link>
			</div>
			</div>
		);
	}
}

export default Login;
