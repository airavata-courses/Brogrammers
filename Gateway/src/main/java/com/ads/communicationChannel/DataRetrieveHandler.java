package com.ads.communicationChannel;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

import org.springframework.stereotype.Component;

import com.ads.pojo.UserSession;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

import net.minidev.json.JSONObject;

@Component
public class DataRetrieveHandler {

	private static final String REFLECTIVITYQUEUE = "data-retrieval-reflectivity";
	private static final String POSTANALYSISREFLECTIVITY = "post-analysis-reflectivity-gateway";


	public String sendInputForReflectivity(UserSession userSession) throws IOException, TimeoutException {
		ConnectionFactory factory =  new ConnectionFactory();

		Connection conn= factory.newConnection();

		Channel ch=  conn.createChannel();
		ch.queueDeclare(REFLECTIVITYQUEUE, false, false, false, null);

		JSONObject obj = new JSONObject();

		obj.put("date", userSession.getSession().getDate());
		obj.put("radar",userSession.getSession().getRadar());
		obj.put("description",userSession.getSession().getDescription());

		ch.basicPublish("", REFLECTIVITYQUEUE, null, obj.toJSONString().getBytes());


		//Get URL from post Analysis
		ch.queueDeclare(POSTANALYSISREFLECTIVITY, false, false, false, null);

		/*
		 * ch.basicConsume("login-detail",true, (consumerTag,message)->{ User u = null;
		 * try { u = (User) util.deserialize(message.getBody()); } catch
		 * (ClassNotFoundException e) { System.out.println("Error While deserializing");
		 * } System.out.println("Received msg is - "+ u.toString()); },
		 * consumerTag->{});
		 */
		

		/*
		 * QueueingConsumer consumer = new QueueingConsumer(ch);
		 * ch.basicConsume(POSTANALYSISREFLECTIVITY, true, consumer);
		 * 
		 * while (true) { QueueingConsumer.Delivery delivery = consumer.nextDelivery();
		 * String message = new String(delivery.getBody());
		 * System.out.println(" [x] Received '" + message + "'"); }
		 * 
		 */		
		//ch.basicConsume(POSTANALYSISREFLECTIVITY, false, (consumerTag,message)-> {
			
		//});
		return "URL";
	}
}
