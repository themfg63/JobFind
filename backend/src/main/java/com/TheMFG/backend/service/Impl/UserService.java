package com.TheMFG.backend.service.Impl;

import com.TheMFG.backend.dto.UserDTO;
import com.TheMFG.backend.entity.User;
import com.TheMFG.backend.exception.JobPortalException;
import com.TheMFG.backend.repository.UserRepository;
import com.TheMFG.backend.service.IUserService;
import com.TheMFG.backend.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service(value = "userService")
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException {
        Optional<User> optional = userRepository.findByEmail(userDTO.getEmail());
        if(optional.isPresent()){
            throw new JobPortalException("Kullanıcı Bulunamadı!");
        }
        userDTO.setId(Utilities.getNextSequence("users"));
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        User user = userDTO.toEntity();
        user = userRepository.save(user);
        return user.toDTO();
    }
}
