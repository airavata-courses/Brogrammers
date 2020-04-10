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

import com.gateway.pojo.Session;
import com.gateway.pojo.SessionList;
import com.gateway.pojo.UserSession;
import com.gateway.service.SessionService;

@RunWith(SpringJUnit4ClassRunner.class)
public class SessionControllerTest {
	
	@Mock
	SessionService sessionService;
	
	@Mock
	SessionController sessionController; 
	
	@Before
    public void init(){
        MockitoAnnotations.initMocks(this);
        sessionController = new SessionController();
        sessionController.setUserDetailsServiceImpl(sessionService); 
    }


	@Test
	public void testGetSession() {
		UserSession session = new UserSession();
		session.setUser("Arjun");
		session.set_id("123");
		
		when(sessionService.saveSession(session)).thenReturn("Session Saved!");
		assertEquals("Session Saved!", sessionController.saveSession(session));
	}

	@Test
	public void testUserSessions() {
		UserSession session = new UserSession();
		session.setUser("Arjun");
		session.set_id("123");
		Session ss = new Session();
		ss.setDate("10-04-2020");
		ss.setDescription("Test");
		ss.setRadar("NATX");
		session.setSession(ss);
		
		UserSession session2 = new UserSession();
		session2.setUser("Arjun");
		session2.set_id("123");
		
		Session ss1 = new Session();
		ss1.setDate("10-04-2020");
		ss1.setDescription("Test");
		ss1.setRadar("IND");
		session2.setSession(ss1);
		
		List<UserSession> sList = new ArrayList<>();
		sList.add(session);
		sList.add(session2);
		
		SessionList sL = new SessionList();
		sL.setUserSession(sList);
		
		when(sessionService.getSessions("123")).thenReturn(sL);
		
		Assert.isInstanceOf(SessionList.class, sessionController.getUserSession("123"));
		assertEquals("NATX", sessionController.getUserSession("123").getUserSession().get(0).getSession().getRadar());
	}
}
