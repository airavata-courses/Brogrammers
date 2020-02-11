package com.ads.Service;

import com.ads.pojo.User;
import com.ads.pojo.UserList;

public interface UserDetailsService {

	public User login(User user);
	
	public UserList getAllUsers();
	
	public User registernewUser(User user);

	public User signOut(User user);	

}
