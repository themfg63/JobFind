package com.TheMFG.backend.repository;

import com.TheMFG.backend.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,String> {
}
