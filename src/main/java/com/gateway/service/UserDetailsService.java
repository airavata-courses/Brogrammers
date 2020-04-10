package com.gateway.service;

import com.gateway.pojo.User;
import com.gateway.pojo.UserList;
import com.gateway.restclient.UserConsumer;

public interface UserDetailsService {

	public User login(User user);
	
	public UserList getAllUsers();
	
	public User registernewUser(User user);

	public User signOut(User user);

	public void setUserConsumer(UserConsumer userConsumer);	

}
