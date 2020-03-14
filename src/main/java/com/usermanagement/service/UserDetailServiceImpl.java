package com.usermanagement.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.usermanagement.document.User;
import com.usermanagement.document.UserList;
import com.usermanagement.repository.UserRepository;
import com.usermanagement.utils.Utils;

@Service
public class UserDetailServiceImpl implements UserDetailsService{

	@Autowired
	private UserRepository userRepository;

	@Autowired 
	private Utils utils; 
	
	@Value("${com.UserM.gateWay.securityKey}")
	private int userGatewaySecurityKey;	
	
	
	private static final String USER_EXISTS = "User already exists";
	private static final String INCORRECT_PASSOWRD = "incorrect password.Try logging in again";
	private static final String LOGGED_IN = "Logged In"; 
	private static final String NO_USER = "No user found."; 
	@Override
	public User isLogin(User userBean) {

		User user = new User();
		user = userRepository.findUserByEmailID(userBean.getEmailID());
		
		if (null != user) {
			if(null != user.getPassword() && null != userBean.getPassword()) {
				
				String pass = utils.decryptpassFromGateway(userBean.getPassword(), userGatewaySecurityKey);
				
				if (pass.equals(user.getPassword())) {
					user.setStatus(LOGGED_IN);
					userRepository.save(user);
					return user;
				} else {
					userBean.setPassword("");
					userBean.setStatus(INCORRECT_PASSOWRD);
					return userBean;
				}
			}else{
				userBean.setStatus(INCORRECT_PASSOWRD);
				return userBean;
			}
		} else {
			userBean.setStatus(NO_USER);
			return userBean;

		}

	}

	@Override
	public UserList getAllUsers() {
		UserList uList = new UserList();
		uList.setUsers(userRepository.findAll());
		return uList;
	}

	@Override
	public User register(User userBean) {

		if(userBean!=null) {
			List<User> userList = new ArrayList<User>();
			userList = userRepository.findAll();
			for(User user:userList) {
				if(null != user.getEmailID() && null != userBean.getEmailID()) {
					if(user.getEmailID().equals(userBean.getEmailID())) {
						userBean.setStatus(USER_EXISTS);
						return userBean;
					}
				}
			}
		}
		return userRepository.save(userBean);
	}

	@Override
	public User signOut(User userBean) {
		userBean.setStatus("Signed Out");
		return userRepository.save(userBean);
	}
}
