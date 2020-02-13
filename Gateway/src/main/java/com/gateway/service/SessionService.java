package com.gateway.service;

import com.gateway.pojo.SessionList;
import com.gateway.pojo.UserSession;

public interface SessionService {

	public String saveSession(UserSession session) ;

	public SessionList getSessions(String id);
}
