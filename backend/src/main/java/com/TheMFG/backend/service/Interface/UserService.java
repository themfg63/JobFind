package com.TheMFG.backend.service.Interface;

import com.TheMFG.backend.dto.UserDTO;
import com.TheMFG.backend.exception.JobPortalException;

public interface UserService {
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;
}
