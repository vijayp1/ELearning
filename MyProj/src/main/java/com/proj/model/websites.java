package com.proj.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "websites")
public class websites {
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getUrl_id() {
		return url_id;
	}

	public void setUrl_id(String url_id) {
		this.url_id = url_id;
	}

	@Column(name = "name")
	private String name;
	
	@Column(name = "url")
	private String url;
	
	@Column(name = "img")
	private String img;
	
	@Column(name = "price")
	private String price;
	
	@Id
	@Column(name = "url_id")
	private String url_id;
	
	@Column(name = "course_id")
	private String course_id;



	public String getCourse_id() {
		return course_id;
	}

	public void setCourse_id(String course_id) {
		this.course_id = course_id;
	}
	
}

