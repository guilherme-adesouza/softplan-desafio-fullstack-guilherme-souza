package com.taskflow.taskflow.domains.task;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Integer> {

  List<Task> findAll();
  Task findById(long id);
  void deleteById(long id);
  Task save(Task task);
}