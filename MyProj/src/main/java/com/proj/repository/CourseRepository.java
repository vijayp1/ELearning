package com.proj.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proj.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
	
}
