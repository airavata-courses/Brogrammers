package com.ads.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ads.Service.ActivityService;
import com.ads.Service.SessionService;
import com.ads.pojo.UserSession;

@RestController()
@RequestMapping("/rest")
@CrossOrigin(value = "http://localhost:3000")
public class ActivityController {
	
	@Autowired
	private ActivityService activityService;
	
	@Autowired
	private SessionService sessionService;
	
	@PostMapping("/reflectivity")
	public String getReflectivityPlot(@RequestBody UserSession userSession ) {

		//Saving Session
		sessionService.saveSession(userSession);
		
		//Sending request to DataRetreival 
		return activityService.reflectityService(userSession);
	}
	
	

}