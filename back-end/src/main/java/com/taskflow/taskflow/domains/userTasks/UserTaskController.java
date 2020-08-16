package com.taskflow.taskflow.domains.userTasks;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user-task")
public class UserTaskController {

	private final UserTaskRepository userTaskRepository;

	@Autowired
	public UserTaskController(UserTaskRepository userTaskRepository) {
		this.userTaskRepository = userTaskRepository;
	}

    @GetMapping
	public List<UserTask> getAllUsersTasks() {
		return this.userTaskRepository.findAll();
	}

	@GetMapping("/users/{userId}")
	public List<UserTask> getUserTasks(@PathVariable Integer userId) {
		return this.userTaskRepository.findByUserId(userId);
	}

}