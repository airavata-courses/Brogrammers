package com.ads.pojo;

import java.util.Date;

public class Reflectivity {
	
	private Date date;
	private String radar;
	private String description;
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getRadar() {
		return radar;
	}
	public void setRadar(String radar) {
		this.radar = radar;
	}
}
