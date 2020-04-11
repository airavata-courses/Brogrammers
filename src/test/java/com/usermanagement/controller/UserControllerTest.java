package com.usermanagement.controller;

import static org.junit.Assert.assertEquals;
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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.usermanagement.document.User;
import com.usermanagement.document.UserList;
import com.usermanagement.service.UserDetailsService;

@RunWith(SpringJUnit4ClassRunner.class)
public class UserControllerTest {
	
	@Mock
	UserDetailsService userDetailsService;
	
	UserController userController;
		
	@Before 
	public void setup() { 
		MockitoAnnotations.initMocks(this);
		userController = new UserController();
		userController.setUserDetailsService(userDetailsService); 
	}
	
	@Test
	public void testGetAll(){
		
		User user = new User();
		user.setName("Arjun");
		user.setId("123");
		user.setEmailID("arjbhavs@iu.edu");
		user.setAddress("ABC");
		List<User> userL =new ArrayList<>();
		userL.add(user);
		UserList uList = new UserList();
		uList.setUsers(userL);

		when(userDetailsService.getAllUsers()).thenReturn(uList);
		
		Assert.isInstanceOf(UserList.class, userController.getAll());
		assertEquals("Arjun", userController.getAll().getUsers().get(0).getName());
		
	}

	
	@Test
	public void testLogin() {
		
		User user = new User();
		user.setName("Arjun");
		user.setId("123");
		user.setEmailID("arjbhavs@iu.edu");
		user.setAddress("ABC");
		
		when(userDetailsService.isLogin(user)).thenReturn(user);
		Assert.isInstanceOf(User.class, userController.login(user));
		assertEquals("Arjun", userController.login(user).getName());
	}
	
	@Test
	public void testRegister() {
		
		User user = new User();
		user.setName("Arjun");
		user.setId("123");
		user.setEmailID("arjbhavs@iu.edu");
		user.setAddress("ABC");
		
		when(userDetailsService.register(user)).thenReturn(user);
		Assert.isInstanceOf(User.class, userController.register(user));
		assertEquals("Arjun", userController.register(user).getName());
	}

	@Test
	public void testSignOut() {
		
		User user = new User();
		user.setName("Arjun");
		user.setId("123");
		user.setEmailID("arjbhavs@iu.edu");
		user.setAddress("ABC");
		
		when(userDetailsService.signOut(user)).thenReturn(user);
		Assert.isInstanceOf(User.class, userController.signOut(user));
		assertEquals("Arjun", userController.signOut(user).getName());
	}
	
}
