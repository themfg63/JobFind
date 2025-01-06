package com.TheMFG.backend.service.Impl;

import com.TheMFG.backend.dto.LoginDTO;
import com.TheMFG.backend.dto.ResponseDTO;
import com.TheMFG.backend.dto.UserDTO;
import com.TheMFG.backend.entity.Otp;
import com.TheMFG.backend.entity.User;
import com.TheMFG.backend.exception.JobPortalException;
import com.TheMFG.backend.repository.OtpRepository;
import com.TheMFG.backend.repository.UserRepository;
import com.TheMFG.backend.service.IUserService;
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
import java.util.List;
import java.util.Optional;

@Service(value = "userService")
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private OtpRepository otpRepository;

    @Override
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException {
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

    @Override
    public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException{
        User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(() -> new JobPortalException("USER_NOT_FOUND"));
        if(!passwordEncoder.matches(loginDTO.getPassword(),user.getPassword())){
            throw new JobPortalException("INVALID_CREDENTIALS");
        }
        return user.toDTO();
    }

    @Override
    public Boolean sendMail(String email) throws Exception{
        User user = userRepository.findByEmail(email).orElseThrow(() -> new JobPortalException("USER_NOT_FOUND"));
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage,true);
        mimeMessageHelper.setTo(email);
        mimeMessageHelper.setSubject("Doğrulama Kodu");
        String genOtp = Utilities.generateMail();
        Otp otp = new Otp(email,genOtp, LocalDateTime.now());
        otpRepository.save(otp);
        mimeMessageHelper.setText(Data.getMessageBody(genOtp, user.getName()),true);
        javaMailSender.send(mimeMessage);
        return true;
    }

    @Override
    public Boolean verifyMail(String email,String otp) throws JobPortalException{
        Otp otpEntity = otpRepository.findById(email).orElseThrow(() -> new JobPortalException("OTP_NOT_FOUND"));
        if(!otpEntity.getOtpCode().equals(otp)){
            throw new JobPortalException("OTP_INCORRECT");
        }
        return true;
    }

    @Override
    public ResponseDTO changePassword(LoginDTO loginDTO) throws JobPortalException{
        User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(() -> new JobPortalException("USER_NOT_FOUND"));
        user.setPassword(passwordEncoder.encode(loginDTO.getPassword()));
        userRepository.save(user);
        return new ResponseDTO("Şifre Değiştirildi!");
    }

    @Scheduled(fixedRate = 6000)
    public void removeExpiredOTPs(){
        LocalDateTime expiry = LocalDateTime.now().minusMinutes(5);
        List<Otp> expiredOTPs = otpRepository.findByCreationTimeBefore(expiry);
        if(!expiredOTPs.isEmpty()){
            otpRepository.deleteAll(expiredOTPs);
            System.out.println(expiredOTPs.size() + "süresi dolmuş doğrulama kodu silindi!");
        }
    }
}
