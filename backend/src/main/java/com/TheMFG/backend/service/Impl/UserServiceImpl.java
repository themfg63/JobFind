package com.TheMFG.backend.service.Impl;

import com.TheMFG.backend.dto.LoginDTO;
import com.TheMFG.backend.dto.ResponseDTO;
import com.TheMFG.backend.dto.UserDTO;
import com.TheMFG.backend.entity.OTP;
import com.TheMFG.backend.entity.User;
import com.TheMFG.backend.exception.JobPortalException;
import com.TheMFG.backend.repository.OTPRepository;
import com.TheMFG.backend.repository.UserRepository;
import com.TheMFG.backend.service.Interface.UserService;
import com.TheMFG.backend.utility.Data;
import com.TheMFG.backend.utility.Utilities;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service(value = "userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private OTPRepository otpRepository;

    //DTO parametreli kullanıcı oluşturma methodu
    @Override
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException{
        Optional<User> optional = userRepository.findByEmail(userDTO.getEmail());
        if(optional.isPresent()){
            throw new JobPortalException("USER_FOUND");
        }
        userDTO.setId(Utilities.getNextSequence("users"));
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        User user = userDTO.toEntity();
        user = userRepository.save(user);
        return user.toDTO();
    }

    // DTO parametreli kullanıcı giriş methodu.
    @Override
    public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException{
        User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(()->new JobPortalException("USER_NOT_FOUND"));
        if(!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword()))throw new JobPortalException("INVALID_CREDENTIALS");
        return user.toDTO();
    }

    @Override
    public Boolean sendMail(String email) throws Exception{
        User user = userRepository.findByEmail(email).orElseThrow(()->new JobPortalException("USER_NOT_FOUND"));
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(message,true);
        messageHelper.setTo(email);
        messageHelper.setSubject("Doğrulama Kodu");
        String genOtp = Utilities.generateOTP();
        OTP otp = new OTP(email,genOtp,LocalDateTime.now());
        otpRepository.save(otp);
        messageHelper.setText(Data.getMessageBody(genOtp,user.getName()),true);
        mailSender.send(message);
        return true;
    }

    @Override
    public Boolean verifyMail(String email,String otp) throws JobPortalException{
        OTP otpEntity = otpRepository.findById(email).orElseThrow(()->new JobPortalException("OTP_NOT_FOUND"));
        if(!otpEntity.getOtpCode().equals(otp)) throw new JobPortalException("OTP_INCORRECT");
        return true;
    }

    @Override
    public ResponseDTO changePassword(LoginDTO loginDTO) throws JobPortalException{
        User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(()->new JobPortalException("USER_NOT_FOUND"));
        user.setPassword(passwordEncoder.encode(loginDTO.getPassword()));
        return new ResponseDTO("Şifre Başarıyla Değiştirildi!");
    }

    @Scheduled(fixedRate = 3000)
    public void removeExpiredOTPs(){
        System.out.println("Doğrulama kodu silme denemesi");
    }
}
