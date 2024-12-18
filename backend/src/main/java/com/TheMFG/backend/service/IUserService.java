package com.TheMFG.backend.service;

import com.TheMFG.backend.dto.UserDTO;
import com.TheMFG.backend.exception.JobPortalException;

public interface IUserService {
    // UserDTO dönüşlü kullanıcı kayıt metodu
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;
}
