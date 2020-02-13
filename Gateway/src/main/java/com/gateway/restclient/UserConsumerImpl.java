package com.gateway.restclient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestOperations;

import com.gateway.pojo.User;
import com.gateway.pojo.UserList;

@Component
public class UserConsumerImpl implements UserConsumer{

	@Value("${com.gateWay.getAllUsersURL}")
	private String urlToGetAllusers;

	@Value("${com.gateWay.getUserByIdURL}")
	private String urlToGetuserById;

	@Value("${com.gateWay.addNewUserURL}")
	private String urlToAddNewUser;

	@Value("${com.gateWay.signOutURL}")
	private String urlForSignOut;
	
	@Autowired
	private RestOperations restOperations;

	@Override
	public UserList getAllUsers() { 
		return restOperations.getForObject(urlToGetAllusers, UserList.class); 
	}

	@Override
	public User login(User user) {
		return restOperations.postForObject(urlToGetuserById, user, User.class);
	}

	@Override
	public User registernewUser(User user) {
		return restOperations.postForObject(urlToAddNewUser, user, User.class);
		}

	@Override
	public User signout(User user) {
		return restOperations.postForObject(urlForSignOut, user, User.class);
	}
	
}