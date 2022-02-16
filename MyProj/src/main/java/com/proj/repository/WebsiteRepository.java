package com.proj.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.proj.model.websites;

public interface WebsiteRepository extends JpaRepository<websites, Long> {
	@Modifying
	@Transactional
	@Query(value = "delete from websites where url_id=?", nativeQuery = true)
	void deleteWebsiteById(String url_id);
	
	@Query(value = "select * from websites where course_id=?", nativeQuery = true)
	List<websites> findWebsitesById(String course_id);
}
