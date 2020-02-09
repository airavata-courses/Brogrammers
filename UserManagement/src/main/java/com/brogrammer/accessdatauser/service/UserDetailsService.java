package com.brogrammer.accessdatauser.service;

import com.brogrammer.accessdatauser.document.User;
import com.brogrammer.accessdatauser.document.UserList;

public interface UserDetailsService {

	public User isLogin(User userBean);
	
	public UserList getAllUsers();
	
	public User register(User userBean);

	public User signOut(User userBean);
}
