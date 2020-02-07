package com.ads.Reciever;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ads.Utils.Utils;
import com.ads.pojo.User;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

@Component
public class Reciever {
	
	@Autowired 
	private Utils util;

	public String login(User user) throws IOException, TimeoutException {

		ConnectionFactory factory =  new ConnectionFactory();

		Connection conn= factory.newConnection();

		Channel ch=  conn.createChannel();
		ch.queueDeclare("login-detail", false, false, false, null);

		
		ch.basicPublish("", "login-detail", null, util.serialize(user));
		
		
		return ch.basicConsume("login-detail",true, (consumerTag,message)->{
			User u = null;
			try {
				u = (User) util.deserialize(message.getBody());
			} catch (ClassNotFoundException e) {
				System.out.println("Error While deserializing");
			} 
			System.out.println("Received msg is - "+ u.toString());
		}, consumerTag->{});

	}


}
