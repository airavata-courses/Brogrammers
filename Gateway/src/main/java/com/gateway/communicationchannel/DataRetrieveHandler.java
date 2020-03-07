package com.gateway.communicationchannel;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

import org.springframework.stereotype.Component;

import com.gateway.pojo.UserSession;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DeliverCallback;

import net.minidev.json.JSONObject;

@Component
public class DataRetrieveHandler {

	private static final String REFLECTIVITYQUEUE = "data-retrieval-reflectivity";
	private static final String POSTANALYSISREFLECTIVITY = "post-analysis-reflectivity-gateway";
    private String outputMessage;

	public String sendInputForReflectivity(UserSession userSession) throws IOException, TimeoutException {
		ConnectionFactory factory =  new ConnectionFactory();
			factory.setUsername("guest");
			factory.setPassword("guest");
			factory.setVirtualHost("/");
			factory.setHost("rabbit");
			factory.setPort(5672);
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

		String uRL = new String();
		DeliverCallback deliverCallback = (consumerTag, delivery) -> {

	        String message = new String(delivery.getBody(), "UTF-8");

	        System.out.println(" [x] Received '" + message + "'");
	        try {
	            doWork(message);
	        } finally {
	            System.out.println(" [x] Done");
	            ch.basicAck(delivery.getEnvelope().getDeliveryTag(), false);
	        };
		};
		ch.basicConsume(POSTANALYSISREFLECTIVITY, true, deliverCallback, consumerTag -> { });
		
		
		return outputMessage;
	}


	private void doWork(String message) {
		outputMessage = message ;
		
	}
}
