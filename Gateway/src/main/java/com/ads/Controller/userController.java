package com.ads.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ads.pojo.User;
import com.ads.pojo.UserList;

@RestController
public class userController {
	
	@RequestMapping("/getusers")
	public UserList getallUsers(){
		
		List<User> users = new ArrayList<User>();
		
		User u1 = new User();
		u1.setName("Arjun");
		u1.setEmailID("arjbhavs@iu.edu");
		u1.setMobileNumber("8126508151");
		u1.setAddress("Woodbridge Appartments");
		users.add(u1);
		
		User u2 = new User();
		u2.setName("Ishita");
		u2.setEmailID("ishkumar@iu.edu");
		u2.setMobileNumber("8123693488");
		u2.setAddress("HC");
		users.add(u2);
		
		User u3 = new User();
		u3.setName("Kasturi");
		u3.setEmailID("knikharg@iu.edu");
		u3.setMobileNumber("8126508380");
		u3.setAddress("Woodbridge Appartments");
		users.add(u3);
		
		UserList uList = new UserList();
		uList.setUsers(users);
		return uList;
		
	}
	
	@GetMapping("/getuser/{id}")
	public User getMembers(@PathVariable("id")String nm) {
		List<User> users = new ArrayList<User>();
		
		User u1 = new User();
		u1.setName("Arjun");
		u1.setEmailID("arjbhavs@iu.edu");
		u1.setMobileNumber("8126508151");
		u1.setAddress("Woodbridge Appartments");
		users.add(u1);
		
		User u2 = new User();
		u2.setName("Ishita");
		u2.setEmailID("ishkumar@iu.edu");
		u2.setMobileNumber("8123693488");
		u2.setAddress("HC");
		users.add(u2);
		
		User u3 = new User();
		u3.setName("Kasturi");
		u3.setEmailID("knikharg@iu.edu");
		u3.setMobileNumber("8126508380");
		u3.setAddress("Woodbridge Appartments");
		users.add(u3);
		
		for(User u:users) {
			if(nm.equalsIgnoreCase(u.getName())) {
				return u;
			}
		}
		
		return null;
	}
	
	@PostMapping(path = "/user/add", consumes = "application/json", produces = "application/json")
	public UserList addUser(@RequestBody User u) {
		List<User> users = new ArrayList<User>();
		
		User u1 = new User();
		u1.setName("Arjun");
		u1.setEmailID("arjbhavs@iu.edu");
		u1.setMobileNumber("8126508151");
		u1.setAddress("Woodbridge Appartments");
		users.add(u1);
		
		User u2 = new User();
		u2.setName("Ishita");
		u2.setEmailID("ishkumar@iu.edu");
		u2.setMobileNumber("8123693488");
		u2.setAddress("HC");
		users.add(u2);
		
		User u3 = new User();
		u3.setName("Kasturi");
		u3.setEmailID("knikharg@iu.edu");
		u3.setMobileNumber("8126508380");
		u3.setAddress("Woodbridge Appartments");
		users.add(u3);
		
		users.add(u);
		

		UserList uList = new UserList();
		uList.setUsers(users);
		
		return uList;
	}

}
