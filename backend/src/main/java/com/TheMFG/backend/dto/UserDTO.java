package com.TheMFG.backend.dto;

import com.TheMFG.backend.entity.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private String id;

    @NotBlank(message = "Ad Soyad Boş Bırakılamaz!")
    private String name;

    @NotBlank(message = "Email Adresi Boş Bırakılamaz!")
    @Email(message = "Geçersiz Email Adresi")
    private String email;

    @NotBlank(message = "Şifre Boş Bırakılamaz!")
    private String password;

    private AccountType accountType;

    public User toEntity(){
        return new User(this.id, this.name, this.email, this.password, this.accountType);
    }
}
