package com.TheMFG.backend.repository;

import com.TheMFG.backend.entity.OTP;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OTPRepository extends MongoRepository<OTP, String> {
}
