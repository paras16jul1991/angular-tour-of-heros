package com.splitmoney;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface ApplicationUserRepository extends Repository<ApplicationUser, String> {

	List<ApplicationUser> findAll();

	ApplicationUser save(ApplicationUser stock);
	
	void delete(ApplicationUser stock);
	
	ApplicationUser findByUsername(String username);
	
}
