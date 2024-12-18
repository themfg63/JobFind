package com.TheMFG.backend.service;

import com.TheMFG.backend.dto.UserDTO;

public interface IUserService {
    // UserDTO dönüşlü kullanıcı kayıt metodu
    public UserDTO registerUser(UserDTO userDTO);
}
