package com.taskflow.taskflow.user;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("user")
public class UserController {

    @GetMapping
	public ArrayList<User> getAllUser() {
        final ArrayList<User> userList = new ArrayList<>();
		return userList;
	}

}