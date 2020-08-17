package com.taskflow.taskflow.domains.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.taskflow.taskflow.security.TaskflowPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name = "users")
public class User {
  public static final PasswordEncoder PASSWORD_ENCODER = new TaskflowPasswordEncoder();

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String name;
  private String email;
  private String role = "TRIATOR";
  @JsonIgnore
  private String password;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    if (password != null && !password.isEmpty()) {
      this.password = PASSWORD_ENCODER.encode(password);
    }
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }
}