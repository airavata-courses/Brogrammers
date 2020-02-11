package com.ads.restclient;

import com.ads.pojo.SessionList;
import com.ads.pojo.UserSession;

public interface SessionConsumer {
	
	public String saveSession(UserSession session);

	public SessionList getSessions(String id);

}
