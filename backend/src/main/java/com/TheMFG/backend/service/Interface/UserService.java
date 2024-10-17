package com.TheMFG.backend.service.Interface;

import com.TheMFG.backend.dto.LoginDTO;
import com.TheMFG.backend.dto.ResponseDTO;
import com.TheMFG.backend.dto.UserDTO;
import com.TheMFG.backend.exception.JobPortalException;

public interface UserService {
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;
    public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;
    public Boolean sendMail(String email) throws Exception;
    public Boolean verifyMail(String email,String otp) throws JobPortalException;
    public ResponseDTO changePassword(LoginDTO loginDTO) throws JobPortalException;
}
