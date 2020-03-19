package com.gateway.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gateway.pojo.SessionList;
import com.gateway.pojo.UserSession;
import com.gateway.service.SessionService;

@RestController
@RequestMapping("/rest")
@CrossOrigin
public class SessionController {

	@Autowired
	private SessionService sessionService;
	
	@PostMapping("/saveSession")
	public String saveSession(@RequestBody UserSession session ) {
		return sessionService.saveSession(session);
	}
	
	@GetMapping("/getSessions/{id}")
	public SessionList getUserSession(@PathVariable final String id ) {
		return sessionService.getSessions(id);
	}
}
