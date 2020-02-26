package com.gateway.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gateway.pojo.User;
import com.gateway.pojo.UserList;
import com.gateway.restclient.UserConsumer;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserConsumer userConsumer;

	@Override
	public User login(User user) {
		return userConsumer.login(user);
	}

	@Override
	public UserList getAllUsers() {
		return userConsumer.getAllUsers();
	}

	@Override
	public User registernewUser(User user) {
		return userConsumer.registernewUser(user);
	}

	@Override
	public User signOut(User user) {
		return userConsumer.signout(user);
	}
	
	
	
}
