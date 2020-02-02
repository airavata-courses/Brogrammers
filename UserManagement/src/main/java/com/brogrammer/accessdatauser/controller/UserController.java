package com.brogrammer.accessdatauser.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brogrammer.accessdatauser.document.User;
import com.brogrammer.accessdatauser.repository.UserRepository;

@RestController
@RequestMapping("/rest/users")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/all")
	public List<User> getAll(){
		return userRepository.findAll();
	}
	
	@PutMapping("/save")
	public User save(User userBean){
		userBean.setName("Ishita");
		userBean.setAddress("HC");
		userBean.setEmailID("ishkumar@iu.edu");
		return userRepository.save(userBean);
	}
	
	
}
