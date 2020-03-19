package com.gateway.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gateway.pojo.User;
import com.gateway.pojo.UserList;
import com.gateway.service.UserDetailsService;

@RestController()
@RequestMapping("/rest")
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@RequestMapping("/getusers")
	public UserList getallUsers(){
		return userDetailsService.getAllUsers();
	}
	
	@PostMapping("/login")
	public User login(@RequestBody User user) {
		return userDetailsService.login(user);
	}
	
	@PostMapping(path = "/user/register", consumes = "application/json", produces = "application/json")
	public User addUser(@RequestBody User user) {
	
		return userDetailsService.registernewUser(user);
	}
	
	@PostMapping(path = "/user/signOut", consumes = "application/json", produces = "application/json")
	public User signOut(@RequestBody User user) {
		return userDetailsService.signOut(user);
	}

}
