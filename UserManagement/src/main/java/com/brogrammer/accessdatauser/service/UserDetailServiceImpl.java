package com.brogrammer.accessdatauser.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brogrammer.accessdatauser.document.User;
import com.brogrammer.accessdatauser.document.UserList;
import com.brogrammer.accessdatauser.repository.UserRepository;

@Service
public class UserDetailServiceImpl implements UserDetailsService{

	@Autowired
	private UserRepository userRepository;
	
	private static final String alreadyLogged = "existingUser";
	@Override
	public User isLogin(User userBean) {
		
		User user = new User();
		user = userRepository.findUserByName(userBean.getName());
		
		if(userBean.getPassword().equalsIgnoreCase(user.getPassword())){
			user.setStatus("LogIn");
			userRepository.save(user);
			return user;
		}else {
			user = new User();
			user.setName(userBean.getName());
			user.setStatus("Wrong Password");;
			return user;
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
				if(user.getEmailID().equals(userBean.getEmailID())) {
					userBean.setStatus(alreadyLogged);
					return userBean;
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
