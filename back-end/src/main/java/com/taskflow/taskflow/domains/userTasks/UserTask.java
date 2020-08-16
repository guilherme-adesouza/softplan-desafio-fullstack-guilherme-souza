package com.taskflow.taskflow.domains.userTasks;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.taskflow.taskflow.domains.task.Task;
import com.taskflow.taskflow.domains.user.User;


@Entity
@Table(name = "users_has_tasks")
public class UserTask {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "users_id")
  private User user;
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "tasks_id")
  private Task task;
  private String overview;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Task getTask() {
    return task;
  }

  public void setTask(Task task) {
    this.task = task;
  }

  public String getOverview() {
    return overview;
  }

  public void setOverview(String overview) {
    this.overview = overview;
  }
}