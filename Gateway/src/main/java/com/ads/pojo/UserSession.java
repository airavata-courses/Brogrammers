package com.ads.pojo;

import java.io.Serializable;

public class UserSession implements Serializable{

	@Override
	public String toString() {
		return "UserSession [end=" + end + ", _id=" + _id + ", user=" + user + ", session=" + session + ", __v=" + __v
				+ "]";
	}
	/**
	 * 
	 */
	private static final long serialVersionUID = 455814259562583447L;
	private String end;
	private String _id;
	private String user;
	private Session session;
	private int __v;
	
	public String getEnd() {
		return end;
	}
	public void setEnd(String end) {
		
		this.end = end;
	}
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public int get_v() {
		return __v;
	}
	public void set_v(int __v) {
		this.__v = __v;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	/**
	 * @return the session
	 */
	public Session getSession() {
		return session;
	}
	/**
	 * @param session the session to set
	 */
	public void setSession(Session session) {
		this.session = session;
	}
	
}
