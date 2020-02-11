package com.ads.Service;

import java.util.Iterator;
import java.util.Map;

import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ads.pojo.SessionList;
import com.ads.pojo.UserSession;
import com.ads.restclient.SessionConsumer;

@Service
public class SessionServiceImpl implements SessionService {

	@Autowired
	private SessionConsumer sessionConsumer;


	@Override
	public String saveSession(UserSession session) {
		return sessionConsumer.saveSession(session);
	}


	@Override
	public SessionList getSessions(String id) {
		return sessionConsumer.getSessions(id);
	}

}
