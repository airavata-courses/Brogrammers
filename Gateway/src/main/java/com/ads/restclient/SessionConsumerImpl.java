package com.ads.restclient;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestOperations;

import com.ads.pojo.SessionList;
import com.ads.pojo.UserSession;


@Component
public class SessionConsumerImpl implements SessionConsumer {
	
	@Autowired
	private RestOperations restOperations;

	@Value("${com.session.saveSessionurl}")
	private String urlToSaveSession;

	@Value("${com.session.getUserSessionURL}")
	private String urlToGetSessionsList;
	
	
	@Override
	public SessionList getSessions(String id) {
		SessionList output = new SessionList();
		Map<String, List<UserSession>> result = new HashMap<>();
		
		Object ss = new SessionList(); 
		ss = restOperations.getForObject(urlToGetSessionsList, Object.class,id);
		
		result = (Map)ss;
		
		output.setUserSession(result.get("userSessions"));
		return output;
	}

	@Override
	public String saveSession(UserSession session) {
		return restOperations.postForObject(urlToSaveSession, session, String.class);
	}
	
	

}
