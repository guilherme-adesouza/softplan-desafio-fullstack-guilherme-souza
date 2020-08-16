package com.taskflow.taskflow.domains.userTasks;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.taskflow.taskflow.domains.user.User;
import com.taskflow.taskflow.domains.task.Task;

public interface UserTaskRepository extends CrudRepository<UserTask, Long> {

  List<UserTask> findAll();
  List<UserTask> findByUser(User user);
  List<UserTask> findByTask(User user);
  UserTask findById(long id);
  void deleteById(long id);
}