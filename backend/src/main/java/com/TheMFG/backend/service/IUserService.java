package com.TheMFG.backend.service;

import com.TheMFG.backend.dto.LoginDTO;
import com.TheMFG.backend.dto.UserDTO;
import com.TheMFG.backend.exception.JobPortalException;

public interface IUserService {
    // UserDTO dönüşlü kullanıcı kayıt metodu
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;

    // User login işlemi
    public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;

    //Mail gönderme işlemi
    public Boolean sendMail(String email) throws Exception;

    //Mail ile gönderilen kodu doğrulama işlemi
    public Boolean verifyMail(String email,String otp) throws JobPortalException;

}
