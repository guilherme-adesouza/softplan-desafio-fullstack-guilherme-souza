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

	static class UserVO {
		public String name;
		public String email;
		public String password;
	}

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
	public ResponseEntity<User> updateUser(@PathVariable Integer userId, @RequestBody UserVO user) {
		final Optional<User> userOpt = this.userRepository.findById(userId);
		if (userOpt.isPresent()) {
			User currentUser = userOpt.get();
			currentUser.setEmail(user.email);
			currentUser.setName(user.name);
			currentUser.setPassword(user.password);
			return ResponseEntity.ok(this.userRepository.save(currentUser));
		}
		return ResponseEntity.notFound().build();
	}

	@PostMapping
	public void createUser(@RequestBody UserVO userVO) {
		User user = new User();
		user.setName(userVO.name);
		user.setEmail(userVO.email);
		user.setPassword(userVO.password);
		this.userRepository.save(user);
	}

}