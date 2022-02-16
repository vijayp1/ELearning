package com.proj.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Courses")
public class Course {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCourse_Id() {
		return course_Id;
	}

	public void setCourse_Id(String course_Id) {
		this.course_Id = course_Id;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	@Column(name = "name")
	private String name;
	
	@Column(name = "course_Id")
	private String course_Id;
	
	@Column(name = "img")
	private String img;
	
}

