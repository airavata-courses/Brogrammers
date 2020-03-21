package com.gateway.service;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gateway.communicationchannel.DataRetrieveHandler;
import com.gateway.pojo.UserSession;

@Service
public class ActivityServiceImpl implements ActivityService {

	@Autowired 
	DataRetrieveHandler dataRetrieveHandler;
	
	@Override
	public String reflectityService(UserSession userSession) {
		System.out.println("Testing for CI CD ");
		try {
			return dataRetrieveHandler.sendInputForReflectivity(userSession);
		} catch (IOException | TimeoutException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
		
	}
}
