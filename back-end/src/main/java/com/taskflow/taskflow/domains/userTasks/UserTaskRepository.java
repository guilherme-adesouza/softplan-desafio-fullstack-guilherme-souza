package com.taskflow.taskflow.domains.userTasks;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UserTaskRepository extends CrudRepository<UserTask, Integer> {

  List<UserTask> findAll();
  List<UserTask> findByUserId(Integer userId);
  List<UserTask> findByTaskId(Integer taskId);
  UserTask findById(long id);
  void deleteById(long id);
}