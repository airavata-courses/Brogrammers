package com.gateway.utils;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

import org.springframework.stereotype.Component;

@Component
public class Utils {

	public byte[] serialize(Object obj) throws IOException {
	    ByteArrayOutputStream out = new ByteArrayOutputStream();
	    ObjectOutputStream os = new ObjectOutputStream(out);
	    os.writeObject(obj);
	    return out.toByteArray();
	}

	public Object deserialize(byte[] data) throws IOException, ClassNotFoundException {
	    ByteArrayInputStream in = new ByteArrayInputStream(data);
	    ObjectInputStream is = new ObjectInputStream(in);
	    return is.readObject();
	}

	public String decryptpassFromUI(String password, int gatewayUISecurityKey) {

		if(null != password) {
			StringBuilder decrypted = new StringBuilder();
			for(int i = 0 ; i <password.length(); i++) {
				
				int asc = (int)password.charAt(i) - gatewayUISecurityKey;
				decrypted.append((char)asc);
			}
			return decrypted.toString();
		}
		
		return null;
	}

	public String encryptpassForUserM(String password, int userGatewaySecurityKey) {

		if(null != password) {
			StringBuilder encrypted = new StringBuilder();

			for(int i = 0 ; i <password.length(); i++) {
			
				int asc = (int)password.charAt(i) + userGatewaySecurityKey;
				
				encrypted.append((char)asc);
			}
			return encrypted.toString();
		}
		return null;
	}


}
