package com.TheMFG.backend.service.Impl;

import com.TheMFG.backend.dto.ProfileDTO;
import com.TheMFG.backend.entity.Profile;
import com.TheMFG.backend.exception.JobPortalException;
import com.TheMFG.backend.repository.ProfileRepository;
import com.TheMFG.backend.service.Interface.ProfileService;
import com.TheMFG.backend.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service(value = "profileService")
public class ProfileServiceImpl implements ProfileService {
    @Autowired
    private ProfileRepository profileRepository;
    @Override
    public Long createProfile(String email) throws JobPortalException {
        Profile profile = new Profile();
        profile.setId(Utilities.getNextSequence("profiles"));
        profile.setEmail(email);
        profile.setSkills(new ArrayList<>());
        profile.setExperiences(new ArrayList<>());
        profile.setCertifications(new ArrayList<>());
        profileRepository.save(profile);
        return profile.getId();
    }

    @Override
    public ProfileDTO getProfile(Long id) throws JobPortalException {
        return profileRepository.findById(id).orElseThrow(() -> new JobPortalException("PROFILE_NOT_FOUND")).toDTO();
    }

    @Override
    public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException{
        profileRepository.findById(profileDTO.getId()).orElseThrow(()->new JobPortalException("PROFILE_NOT_FOUND"));
        profileRepository.save(profileDTO.toEntity());
        return profileDTO;
    }
}
