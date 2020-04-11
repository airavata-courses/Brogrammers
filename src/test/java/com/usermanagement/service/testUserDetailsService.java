package com.usermanagement.service;

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

import com.usermanagement.document.User;
import com.usermanagement.document.UserList;
import com.usermanagement.repository.UserRepository;
import com.usermanagement.service.UserDetailServiceImpl;
import com.usermanagement.service.UserDetailsService;

@RunWith(SpringJUnit4ClassRunner.class)
public class testUserDetailsService {


	UserDetailsService userDetailsService;

	@Mock
	UserRepository userRepository;

	@Before 
	public void setup() { 
		MockitoAnnotations.initMocks(this);
		userDetailsService = new UserDetailServiceImpl();
		userDetailsService.setUserRepository(userRepository); 
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


		when(userRepository.findAll()).thenReturn(userL);
		Assert.isInstanceOf(UserList.class, userDetailsService.getAllUsers());
		assertEquals("Arjun", userDetailsService.getAllUsers().getUsers().get(0).getName());
	}
	
	@Test
	public void testSignOut() {
		
		User user = new User();
		user.setName("Arjun");
		user.setId("123");
		user.setEmailID("arjbhavs@iu.edu");
		user.setAddress("ABC");

		when(userRepository.save(user)).thenReturn(user);
		Assert.isInstanceOf(User.class, userDetailsService.signOut(user));
		assertEquals("Arjun", userDetailsService.signOut(user).getName());
		assertEquals("Signed Out", userDetailsService.signOut(user).getStatus());
	}
}
