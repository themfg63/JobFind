package com.TheMFG.backend.controller;

import com.TheMFG.backend.dto.ProfileDTO;
import com.TheMFG.backend.exception.JobPortalException;
import com.TheMFG.backend.service.Interface.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/profiles")
public class ProfileController {
    @Autowired
    private ProfileService profileService;

    // id'ye göre profil getirme
    @GetMapping("/get/{id}")
    public ResponseEntity<ProfileDTO> getProfile(@PathVariable Long id) throws JobPortalException{
        return new ResponseEntity<>(profileService.getProfile(id), HttpStatus.OK);
    }

    //id'ye göre profil güncelleme
    @PutMapping("/update")
    public ResponseEntity<ProfileDTO> updateProfile(@RequestBody ProfileDTO profileDTO) throws JobPortalException{
        return new ResponseEntity<>(profileService.updateProfile(profileDTO),HttpStatus.OK);
    }
}
