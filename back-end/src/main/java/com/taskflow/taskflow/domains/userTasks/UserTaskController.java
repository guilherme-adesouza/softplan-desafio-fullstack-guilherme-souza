package com.taskflow.taskflow.domains.userTasks;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("user-task")
public class UserTaskController {

	private final UserTaskRepository userTaskRepository;

	@Autowired
	public UserTaskController(UserTaskRepository userTaskRepository) {
		this.userTaskRepository = userTaskRepository;
	}

    @GetMapping
	public List<UserTask> getAllUserTasks() {
        final List<UserTask> userTaskList = this.userTaskRepository.findAll();
		return userTaskList;
	}

}