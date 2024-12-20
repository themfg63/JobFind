package com.TheMFG.backend.repository;

import com.TheMFG.backend.entity.Otp;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OtpRepository extends MongoRepository<Otp,String> {
}
