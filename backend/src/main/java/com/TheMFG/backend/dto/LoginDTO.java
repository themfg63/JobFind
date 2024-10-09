package com.TheMFG.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


/* login işleminde kullanılan dto */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {
    private String email;
    private String password;
}
