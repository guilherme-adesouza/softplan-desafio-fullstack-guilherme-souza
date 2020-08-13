package com.taskflow.taskflow.user;

import java.util.List;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping("user")
public class UserController {

    @GetMapping
	public List<User> getAllUser() {
        List<User> userList = new ArrayList();
		return userList;
	}

}