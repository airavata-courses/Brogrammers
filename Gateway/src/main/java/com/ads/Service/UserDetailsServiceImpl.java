package com.ads.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ads.pojo.User;
import com.ads.pojo.UserList;
import com.ads.restclient.UserConsumer;

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
	
	
	
}
