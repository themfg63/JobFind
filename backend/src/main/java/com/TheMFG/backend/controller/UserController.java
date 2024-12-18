package com.TheMFG.backend.controller;

import com.TheMFG.backend.dto.UserDTO;
import com.TheMFG.backend.exception.JobPortalException;
import com.TheMFG.backend.service.IUserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin // Tüm orijinlerden gelen isteklere izin verir
@Validated
public class UserController {
    @Autowired
    private IUserService userService;

    // kullanıcı kayıt API
    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody @Valid UserDTO userDTO) throws JobPortalException {
        userDTO = userService.registerUser(userDTO);
        return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
    }
}
