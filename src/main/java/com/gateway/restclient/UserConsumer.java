package com.gateway.restclient;

import com.gateway.pojo.User;
import com.gateway.pojo.UserList;

public interface UserConsumer {

	public User login(User user);
	
	public UserList getAllUsers();
	
	public User registernewUser(User user);

	public User signout(User user);	

}
