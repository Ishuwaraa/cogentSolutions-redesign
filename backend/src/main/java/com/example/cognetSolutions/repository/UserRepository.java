package com.example.cognetSolutions.repository;

import com.example.cognetSolutions.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
