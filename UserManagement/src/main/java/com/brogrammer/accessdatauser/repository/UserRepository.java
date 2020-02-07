package com.brogrammer.accessdatauser.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.brogrammer.accessdatauser.document.User;

public interface UserRepository extends MongoRepository<User, String> {
	public User findUserByName(String firstName);
}
