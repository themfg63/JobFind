package com.TheMFG.backend.repository;

import com.TheMFG.backend.entity.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JobRepository extends MongoRepository<Job,Long> {
}
