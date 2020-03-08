package com.gateway.restclient;

import com.gateway.pojo.SessionList;
import com.gateway.pojo.UserSession;

public interface SessionConsumer {
	
	public String saveSession(UserSession session);

	public SessionList getSessions(String id);

}
