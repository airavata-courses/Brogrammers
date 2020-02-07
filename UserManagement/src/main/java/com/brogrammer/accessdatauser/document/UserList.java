package com.brogrammer.accessdatauser.document;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class UserList implements Serializable{
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5410688892699095113L;

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
