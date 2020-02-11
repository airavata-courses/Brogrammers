package com.ads.Service;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ads.communicationChannel.DataRetrieveHandler;
import com.ads.pojo.UserSession;

@Service
public class ActivityServiceImpl implements ActivityService {

	@Autowired 
	DataRetrieveHandler dataRetrieveHandler;
	
	@Override
	public String reflectityService(UserSession userSession) {
		
		try {
			return dataRetrieveHandler.sendInputForReflectivity(userSession);
		} catch (IOException | TimeoutException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
		
	}
}
