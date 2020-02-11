package com.brogrammer.accessdatauser.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brogrammer.accessdatauser.document.User;
import com.brogrammer.accessdatauser.document.UserList;
import com.brogrammer.accessdatauser.service.UserDetailsService;

@RestController
@RequestMapping("/rest/user")
public class UserController {
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@GetMapping("/all")
	public UserList getAll(){
		return userDetailsService.getAllUsers();
	}
	
	@PostMapping("/login")
	public User login(@RequestBody User userBean) {
		return userDetailsService.isLogin(userBean);
	}
	
	@PostMapping("/register")
	public User register(@RequestBody User userBean){
		return userDetailsService.register(userBean);
	}
	
	@PostMapping("/signOut")
	public User signOut(@RequestBody User userBean){
		return userDetailsService.signOut(userBean);
	}
}
