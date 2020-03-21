package com.gateway.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gateway.pojo.UserSession;
import com.gateway.service.ActivityService;
import com.gateway.service.SessionService;

@RestController()
@RequestMapping("/rest")
@CrossOrigin
public class ActivityController {
	
	@Autowired
	private ActivityService activityService;
	
	@Autowired
	private SessionService sessionService;
	
	@PostMapping("/reflectivity")
	public String getReflectivityPlot(@RequestBody UserSession userSession ) {
		System.out.println("Reached  Activity Controller");
		//Saving Session
		sessionService.saveSession(userSession);
		
		//Sending request to DataRetreival 
		return activityService.reflectityService(userSession);
	}
	
	

}
