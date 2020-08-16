package com.taskflow.taskflow.domains.user;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
public class UserController {

	private final UserRepository userRepository;

	@Autowired
	public UserController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

    @GetMapping
	public List<User> getAllUser() {
		return this.userRepository.findAll();
	}

	@GetMapping("/{userId}")
	public ResponseEntity<User> getUserById(@PathVariable Integer userId) {
		final Optional<User> user = this.userRepository.findById(userId);
		if (user.isPresent()) {
			return ResponseEntity.ok(user.get());
		}
		return ResponseEntity.notFound().build();
	}

	@DeleteMapping("/{userId}")
	public ResponseEntity<?> deleteUserById(@PathVariable Integer userId) {
		final Optional<User> user = this.userRepository.findById(userId);
		if (user.isPresent()) {
			this.userRepository.deleteById(userId);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}

	@PutMapping("/{userId}")
	public ResponseEntity<User> updateUser(@PathVariable Integer userId, @RequestBody User user) {
		final Optional<User> userOpt = this.userRepository.findById(userId);
		if (userOpt.isPresent()) {
			User currentUser = userOpt.get();
			currentUser.setEmail(user.getEmail());
			currentUser.setName(user.getName());
			return ResponseEntity.ok(this.userRepository.save(currentUser));
		}
		return ResponseEntity.notFound().build();
	}

	@PostMapping
	public void createUser(@RequestBody User user) {
		this.userRepository.save(user);
	}

}