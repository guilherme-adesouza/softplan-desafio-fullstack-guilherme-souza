package com.taskflow.taskflow.domains.task;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {

  List<Task> findAll();
  Task findById(long id);
  void deleteById(long id);
}