package com.ads.pojo;

import java.io.Serializable;
import java.util.List;

public class SessionList implements Serializable{
	
	private static final long serialVersionUID = 9025401633812161678L;
	private List<UserSession> userSessions;

	public List<UserSession> getUserSession() {
		return userSessions;
	}

	public void setUserSession(List<UserSession> userSessions) {
		this.userSessions = userSessions;
	}

}
