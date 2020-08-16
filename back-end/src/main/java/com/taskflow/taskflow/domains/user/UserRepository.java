package com.taskflow.taskflow.domains.user;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

  List<User> findAll();
}