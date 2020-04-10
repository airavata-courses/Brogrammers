package com.gateway.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;

import com.gateway.pojo.User;
import com.gateway.pojo.UserList;
import com.gateway.service.UserDetailsService;

@RunWith(SpringJUnit4ClassRunner.class)
public class UserControllerTest {

	UserController userController;

	@Mock
	UserDetailsService userDetailsService;//=new UserDetailsServiceImpl();


	@Before 
	public void setup() { 
		MockitoAnnotations.initMocks(this);
		userController = new UserController();
		userController.setUserDetailsServiceImpl(userDetailsService); 
	}


	@Test
	public void testGet() {
		User user = new User();
		user.setName("Arjun");
		user.setId("123");
		user.setEmailID("arjbhavs@iu.edu");
		user.setAddress("ABC");
		List<User> userL =new ArrayList<>();
		userL.add(user);
		UserList userList =new UserList();
		userList.setUsers(userL);

		when(userDetailsService.getAllUsers()).thenReturn(userList);
		Assert.isInstanceOf(UserList.class, userController.getallUsers());
		assertEquals("Arjun", userController.getallUsers().getUsers().get(0).getName());
	}


}
