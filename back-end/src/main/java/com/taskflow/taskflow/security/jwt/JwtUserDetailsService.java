package com.taskflow.taskflow.security.jwt;

import java.util.ArrayList;
import java.util.Optional;

import com.taskflow.taskflow.domains.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Autowired
    public JwtUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        final Optional<com.taskflow.taskflow.domains.user.User> userOpt = this.userRepository.findByEmail(email);
        if (userOpt.isPresent()) {
            final com.taskflow.taskflow.domains.user.User user = userOpt.get();
            return new User(user.getEmail(), user.getPassword(), new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
    }

}
