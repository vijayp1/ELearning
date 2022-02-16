package com.proj.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.proj.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	@Query(value = "SELECT * FROM Users u WHERE u.username = ? and password = ?", nativeQuery = true)
	User findUserByUsernameAndPassword(String username,String password);

}
