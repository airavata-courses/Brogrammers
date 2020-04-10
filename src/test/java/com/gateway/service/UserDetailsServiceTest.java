package com.gateway.service;

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
import com.gateway.restclient.UserConsumer;
import com.gateway.service.UserDetailsService;

@RunWith(SpringJUnit4ClassRunner.class)
public class UserDetailsServiceTest {

	UserDetailsService userDetailsService;

	@Mock
	UserConsumer userConsumer;
	
	
	 @Before 
	 public void setup() { 
		 MockitoAnnotations.initMocks(this);
		 userDetailsService = new UserDetailsServiceImpl();
		 userDetailsService.setUserConsumer(userConsumer); 
		 }
	 
	
	@Test
	public void testGetAllUserService() {
		User user = new User();
		user.setName("Arjun");
		user.setId("123");
		user.setEmailID("arjbhavs@iu.edu");
		user.setAddress("ABC");
		List<User> userL =new ArrayList<>();
		userL.add(user);
		UserList userList =new UserList();
		userList.setUsers(userL);


		when(userConsumer.getAllUsers()).thenReturn(userList);
		Assert.isInstanceOf(UserList.class, userDetailsService.getAllUsers());
		assertEquals("Arjun", userDetailsService.getAllUsers().getUsers().get(0).getName());
	}

	@Test
	public void testForRegisternewUser() {
		User user1 = new User();
		user1.setName("Arjun");
		user1.setId("123");
		user1.setEmailID("arjbhavs@iu.edu");
		user1.setAddress("ABC");
		
		when(userConsumer.registernewUser(user1)).thenReturn(user1);
		Assert.isInstanceOf(User.class, userDetailsService.registernewUser(user1));
		assertEquals("123", userDetailsService.registernewUser(user1).getId());
	}
	
	@Test
	public void testForSignOut() {
		
		User user1 = new User();
		user1.setName("Arjun");
		user1.setId("123");
		user1.setEmailID("arjbhavs@iu.edu");
		user1.setAddress("ABC");
		
		when(userConsumer.signout(user1)).thenReturn(user1);
		Assert.isInstanceOf(User.class, userDetailsService.signOut(user1));
		assertEquals("123", userDetailsService.signOut(user1).getId());
	}
	
}

