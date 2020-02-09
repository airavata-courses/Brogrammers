package com.ads.communicationChannel;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

import org.springframework.stereotype.Component;

import com.ads.pojo.Reflectivity;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

import net.minidev.json.JSONObject;

@Component
public class DataRetrieveHandler {

	private static final String REFLECTIVITYQUEUE = "data-retrieval-reflectivity";


	public String sendInputForReflectivity(Reflectivity reflectivity) throws IOException, TimeoutException {
		ConnectionFactory factory =  new ConnectionFactory();

		Connection conn= factory.newConnection();

		Channel ch=  conn.createChannel();
		ch.queueDeclare(REFLECTIVITYQUEUE, false, false, false, null);

		JSONObject obj = new JSONObject();

		obj.put("date", reflectivity.getDate());
		obj.put("radar",reflectivity.getRadar());

		ch.basicPublish("", REFLECTIVITYQUEUE, null, obj.toJSONString().getBytes());
		return null; 


		/*
		 * return ch.basicConsume("login-detail",true, (consumerTag,message)->{ User u =
		 * null; try { u = (User) util.deserialize(message.getBody()); } catch
		 * (ClassNotFoundException e) { System.out.println("Error While deserializing");
		 * } System.out.println("Received msg is - "+ u.toString()); },
		 * consumerTag->{});
		 */
	}
}
