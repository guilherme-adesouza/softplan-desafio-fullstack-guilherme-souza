package com.taskflow.taskflow.domains.task;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("task")
public class TaskController {

	private final TaskRepository taskRepository;

	@Autowired
	public TaskController(TaskRepository taskRepository) {
		this.taskRepository = taskRepository;
	}

    @GetMapping
	public List<Task> getAllTasks() {
		return this.taskRepository.findAll();
	}

	@GetMapping("/{taskId}")
	public ResponseEntity<Task> getTaskById(@PathVariable Integer taskId) {
		final Optional<Task> task = this.taskRepository.findById(taskId);
		if (task.isPresent()) {
			return ResponseEntity.ok(task.get());
		}
		return ResponseEntity.notFound().build();
	}

	@DeleteMapping("/{taskId}")
	public ResponseEntity<?> deleteTaskById(@PathVariable Integer taskId) {
		final Optional<Task> task = this.taskRepository.findById(taskId);
		if (task.isPresent()) {
			this.taskRepository.deleteById(taskId);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}

	@PutMapping("/{taskId}")
	public ResponseEntity<Task> updateTask(@PathVariable Integer taskId, @RequestBody Task task) {
		final Optional<Task> taskOpt = this.taskRepository.findById(taskId);
		if (taskOpt.isPresent()) {
			Task currentTask = taskOpt.get();
			currentTask.setTitle(task.getTitle());
			currentTask.setDescription(task.getDescription());
			currentTask.setStatus(task.getStatus());
			return ResponseEntity.ok(this.taskRepository.save(currentTask));
		}
		return ResponseEntity.notFound().build();
	}

	@PostMapping
	public void createUser(@RequestBody Task task) {
		this.taskRepository.save(task);
	}
}