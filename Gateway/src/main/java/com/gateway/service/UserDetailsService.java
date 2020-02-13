package com.gateway.service;

import com.gateway.pojo.User;
import com.gateway.pojo.UserList;

public interface UserDetailsService {

	public User login(User user);
	
	public UserList getAllUsers();
	
	public User registernewUser(User user);

	public User signOut(User user);	

}
