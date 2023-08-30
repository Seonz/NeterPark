package com.spr.neterpark.repository;

import com.spr.neterpark.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {

}
