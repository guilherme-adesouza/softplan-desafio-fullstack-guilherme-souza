package com.taskflow.taskflow.domains.user;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

  List<User> findAll();
  Optional<User> findByEmail(String email);
}