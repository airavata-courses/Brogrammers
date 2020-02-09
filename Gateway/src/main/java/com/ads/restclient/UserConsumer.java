package com.ads.restclient;

import com.ads.pojo.User;
import com.ads.pojo.UserList;

public interface UserConsumer {

	public User login(User user);
	
	public UserList getAllUsers();
	
	public User registernewUser(User user);

	public User signout(User user);	

}
