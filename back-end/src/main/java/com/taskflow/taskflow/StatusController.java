package com.taskflow.taskflow;
    
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class StatusController {

	@RequestMapping("/")
	public String index() {
		return "Taskflow is working! \\o/";
	}
}