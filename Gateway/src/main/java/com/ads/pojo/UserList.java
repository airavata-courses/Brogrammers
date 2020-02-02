package com.ads.pojo;

import java.util.ArrayList;
import java.util.List;

public class UserList {
	
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
