package com.TheMFG.backend.repository;

import com.TheMFG.backend.entity.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProfileRepository extends MongoRepository<Profile,Long> {
}
