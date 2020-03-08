package com.gateway.pojo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class UserList implements Serializable{
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 4738449256976151371L;
	// Wrapper Class To Consume List of Users 

	private List<User> users;

	public UserList() {
		users = new ArrayList<>();
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}
}
