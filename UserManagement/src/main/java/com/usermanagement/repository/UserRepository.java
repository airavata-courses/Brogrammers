package com.usermanagement.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.usermanagement.document.User;

public interface UserRepository extends MongoRepository<User, String> {
	public User findUserByEmailID(String emailId);
}


