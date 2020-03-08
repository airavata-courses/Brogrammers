package com.gateway.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.gateway.pojo.User;
import com.gateway.pojo.UserList;
import com.gateway.restclient.UserConsumer;
import com.gateway.utils.Utils;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserConsumer userConsumer;

	@Value("${com.gateWay.ui.securityKey}")
	private int gatewayUISecurityKey;
	
	@Value("${com.UserM.gateWay.securityKey}")
	private int userGatewaySecurityKey;
	
	@Autowired
	private Utils util;
	
	@Override
	public User login(User user) {
		
		if(null != user.getPassword()) {
			String pss = util.decryptpassFromUI(user.getPassword(),gatewayUISecurityKey);
			
			user.setPassword(util.encryptpassForUserM(pss,userGatewaySecurityKey));
		}
		
		return userConsumer.login(user);
		
		
	}

	@Override
	public UserList getAllUsers() {
		return userConsumer.getAllUsers();
	}

	@Override
	public User registernewUser(User user) {
		return userConsumer.registernewUser(user);
	}

	@Override
	public User signOut(User user) {
		return userConsumer.signout(user);
	}
	
	
	
}
