package com.TheMFG.backend.service.Interface;

import com.TheMFG.backend.dto.ProfileDTO;
import com.TheMFG.backend.exception.JobPortalException;

public interface ProfileService {
    public Long createProfile(String email) throws JobPortalException;
    public ProfileDTO getProfile(Long id) throws JobPortalException;
    public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException;
}
