package com.example.cognetSolutions.service;

import com.example.cognetSolutions.DTO.UserDTO;
import com.example.cognetSolutions.model.User;
import com.example.cognetSolutions.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User registerUser(UserDTO dto) {
        return userRepository.save(
                new User(dto.getFirstName(), dto.getLastName(), dto.getEmail(), dto.getMessage()));
    }
}
