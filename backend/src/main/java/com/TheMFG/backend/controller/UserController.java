package com.TheMFG.backend.controller;

import com.TheMFG.backend.dto.LoginDTO;
import com.TheMFG.backend.dto.ResponseDTO;
import com.TheMFG.backend.dto.UserDTO;
import com.TheMFG.backend.exception.JobPortalException;
import com.TheMFG.backend.service.Interface.UserService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/users")
@Validated
public class UserController {
    @Autowired
    private UserService userService;


    // Kullanıcı oluşturma Post işlemi
    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody @Valid UserDTO userDTO) throws JobPortalException {
        userDTO = userService.registerUser(userDTO);
        return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
    }

    /* PostMappin Anatasyonu ile kullanıcı giriş işlemi */
    @PostMapping("/login")
    public ResponseEntity<UserDTO> loginUser(@RequestBody @Valid LoginDTO loginDTO) throws JobPortalException{
        return new ResponseEntity<>(userService.loginUser(loginDTO), HttpStatus.OK);
    }

    // mail gönderim API'i
    @PostMapping("/sendMail/{email}")
    public ResponseEntity<ResponseDTO> sendMail(@PathVariable @Email(message = "{user.email.invalid}") String email) throws Exception{
        userService.sendMail(email);
        return new ResponseEntity<>(new ResponseDTO("Doğrulama Kodunuz Gönderildi!"),HttpStatus.OK);
    }

    //email'e gönderilen doğrulama kodunun doğrulunu ve süresini kontrol eder
    @GetMapping("/verifyMail/{email}/{otp}")
    public ResponseEntity<ResponseDTO> verifyMail(@PathVariable @Email(message = "{user.email.invalid}")String email, @PathVariable @Pattern(regexp = "^[0-9]{6}$",message = "{otp.invalid}")String otp) throws JobPortalException{
        userService.verifyMail(email,otp);
        return new ResponseEntity<>(new ResponseDTO("Kod Doğrulandı!"),HttpStatus.OK);
    }

    //şifre değiştirme
    @PostMapping("/changePass")
    public ResponseEntity<ResponseDTO> changePassword(@RequestBody @Valid LoginDTO loginDTO) throws JobPortalException{
        return new ResponseEntity<>(userService.changePassword(loginDTO),HttpStatus.OK);
    }
}
