package com.TheMFG.backend.service.Impl;

import com.TheMFG.backend.dto.UserDTO;
import com.TheMFG.backend.entity.User;
import com.TheMFG.backend.repository.UserRepository;
import com.TheMFG.backend.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "userService")
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDTO registerUser(UserDTO userDTO){
        User user = userDTO.toEntity();
        user = userRepository.save(user);
        return user.toDTO();

    }
}
