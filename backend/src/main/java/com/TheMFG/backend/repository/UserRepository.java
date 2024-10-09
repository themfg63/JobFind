package com.TheMFG.backend.repository;

import com.TheMFG.backend.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User,Long> {
    public Optional<User> findByEmail(String email);    // veritabanında email değişkenine göre verinin olup olmadığını kontrol eder
}
