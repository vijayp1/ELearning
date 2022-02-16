package com.proj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.proj.model.Course;
import com.proj.model.User;
import com.proj.model.websites;
import com.proj.repository.CourseRepository;
import com.proj.repository.UserRepository;
import com.proj.repository.WebsiteRepository;

@RestController
@CrossOrigin("*")
public class Controller {
	
	@Autowired
	CourseRepository courseRepository;
	
	@Autowired
	UserRepository UserRepository;
	
	@Autowired
	WebsiteRepository WebsiteRepository;
	
	@GetMapping("/getCouses")
	public List<Course> getCourses(){
		List<Course> courses = courseRepository.findAll();
		return courses;
	}
	
	@PostMapping("/addCourse")
	public Course addCourse(@RequestBody Course course) {
		System.out.println(course.toString());
		course = courseRepository.save(course);
		return course;
	}
	
	@DeleteMapping("/deleteCourses")
	public String deleteCourse() {
		courseRepository.deleteAll();
		return "success";
	}
	
	
	@GetMapping("/getUsers")
	public List<User> getUser(){
		List<User> courses = UserRepository.findAll();
		return courses;
	}
	

	@PostMapping("/findUser")
	public User getUser(@RequestBody User user){
		User user1 = UserRepository.findUserByUsernameAndPassword(user.getUsername(), user.getPassword());
		return user1;
	}
	
	@PostMapping("/addUser")
	public User addUser(@RequestBody User course) {
		System.out.println(course.toString());
		course = UserRepository.save(course);
		return course;
	}
	
	@DeleteMapping("/deleteUsers")
	public String deleteUsers() {
		UserRepository.deleteAll();
		return "success";
	}
	
	@PostMapping("/addWebsite")
	public websites addWebsite(@RequestBody websites website) {
		website = WebsiteRepository.save(website);
		return website;
	}
	
	@GetMapping("/deleteWebsite/{url_id}")
	public String deleteWebsite(@PathVariable("url_id") String url_id) {
		
		WebsiteRepository.deleteWebsiteById(url_id);
		return "{\"res\":\"success\"}";
	}
	
	@GetMapping("/getWebsites/{course_id}")
	public List<websites> getWebsites(@PathVariable("course_id") String course_id){
		List<websites> websites_list = WebsiteRepository.findWebsitesById(course_id);
		return websites_list;
	}
	
	@GetMapping("/getWebsites")
	public List<websites> getWebsites(){
		List<websites> websites_list = WebsiteRepository.findAll();
		return websites_list;
	}
	
}
