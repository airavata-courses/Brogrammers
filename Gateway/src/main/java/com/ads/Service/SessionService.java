package com.ads.Service;

import com.ads.pojo.SessionList;
import com.ads.pojo.UserSession;

public interface SessionService {

	public String saveSession(UserSession session) ;

	public SessionList getSessions(String id);
}
