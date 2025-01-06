package com.TheMFG.backend.repository;

import com.TheMFG.backend.entity.Otp;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface OtpRepository extends MongoRepository<Otp,String> {
    List<Otp> findByCreationTimeBefore(LocalDateTime expiry);
}
