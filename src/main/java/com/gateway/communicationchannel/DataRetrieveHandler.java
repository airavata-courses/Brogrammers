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
		Connection conn= factory.newConnection();
		System.out.println("Connection received");
		//factory.setUsername("guest");
		//factory.setPassword("guest");
		//factory.setVirtualHost("/");
		factory.setHost("rabbitmq-service");
		//factory.setPort(5672);
		Channel ch=  conn.createChannel();
		ch.queueDeclare(REFLECTIVITYQUEUE, false, false, false, null);

		JSONObject obj = new JSONObject();

		obj.put("date", userSession.getSession().getDate());
		obj.put("radar",userSession.getSession().getRadar());
		obj.put("description",userSession.getSession().getDescription());
		System.out.println("Data" + obj);
		ch.basicPublish("", REFLECTIVITYQUEUE, null, obj.toJSONString().getBytes());
		System.out.println("Connection received");

		//Get URL from post Analysis
		ch.queueDeclare(POSTANALYSISREFLECTIVITY, false, false, false, null);
/*
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
		
		*/

		DeliverCallback deliverCallback = (consumerTag, delivery) -> {
			String message = new String(delivery.getBody(), "UTF-8");
			outputMessage = message;
			if(message != null){
				System.out.println("Result inside Data Retrieval Handler: Image received");
				System.out.println(" [x] Received and Set: Image");
			}
			else{
				System.out.println("Result inside Data Retrieval Handler: null");
				System.out.println("[x] Received and Set: null");
			}            
		};
		ch.basicConsume(POSTANALYSISREFLECTIVITY, true, deliverCallback, consumerTag -> { });
		try{Thread.sleep(40000);}catch(InterruptedException e){System.out.println(e);}  
		    if(outputMessage!=null) 
			System.out.println("Result outside DCQ: Image");
		    else
			System.out.println("Result outside DCQ: null");
		 

		return outputMessage;
	}
 
/*
	private void doWork(String message) {
		outputMessage = message ;
		
	}*/
}
