package com.gateway.pojo;

import java.io.Serializable;

public class Session implements Serializable{
	
	
	private static final long serialVersionUID = 2935094401209787918L;
	
	private String description;
	private String date;
	private String radar;
	
	public String getRadar() {
		return radar;
	}
	public void setRadar(String radar) {
		this.radar = radar;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
