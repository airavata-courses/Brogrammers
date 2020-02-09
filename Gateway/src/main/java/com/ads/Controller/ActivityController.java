package com.ads.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ads.Service.ActivityService;
import com.ads.pojo.Reflectivity;

@RestController()
@RequestMapping("/rest")
public class ActivityController {
	
	@Autowired
	private ActivityService activityService;
	
	@PostMapping("/reflectivity")
	public void getReflectivityPlot(@RequestBody Reflectivity reflectivityBean ) {
		activityService.reflectityService(reflectivityBean);
	}
	
	

}
