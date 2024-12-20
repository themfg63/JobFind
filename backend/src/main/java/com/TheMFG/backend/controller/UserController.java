package com.TheMFG.backend.controller;

import com.TheMFG.backend.dto.LoginDTO;
import com.TheMFG.backend.dto.ResponseDTO;
import com.TheMFG.backend.dto.UserDTO;
import com.TheMFG.backend.exception.JobPortalException;
import com.TheMFG.backend.service.IUserService;
import jakarta.validation.Valid;
import lombok.Getter;
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

    // Kullanıcı giriş API
    @PostMapping("/login")
    public ResponseEntity<UserDTO> loginUser(@RequestBody @Valid LoginDTO loginDTO) throws JobPortalException{
        return new ResponseEntity<>(userService.loginUser(loginDTO),HttpStatus.OK);
    }

    // Mail Gönderim API
    @PostMapping("/sendMail/{email}")
    public ResponseEntity<ResponseDTO> sendMail(@PathVariable String email) throws Exception {
        userService.sendMail(email);
        return new ResponseEntity<>(new ResponseDTO("Mail Gönderildi!"),HttpStatus.OK);
    }

    // gönderilen maildeki kodu doğrulama
    @GetMapping("/verifyMail/{email}/{otp}")
    public ResponseEntity<ResponseDTO> verifyEmail(@PathVariable String email, @PathVariable String otp)throws JobPortalException{
        userService.verifyMail(email,otp);
        return new ResponseEntity<>(new ResponseDTO("Kod Doğrulandı!"),HttpStatus.OK);
    }
}
