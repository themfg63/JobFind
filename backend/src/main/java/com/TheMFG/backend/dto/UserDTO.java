package com.TheMFG.backend.dto;

import com.TheMFG.backend.dto.enums.AccountType;
import com.TheMFG.backend.entity.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/* kullanıcı oluştururken kullanılan dto */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long id;

    @NotBlank(message = "{user.name.absent}")   // string değerin boş bırakılamayacağını belirten validation anatasyonu
    private String name;

    @NotBlank(message = "{user.email.absent}")
    @Email(message = "[user.email.invalid}")    // girilen string değerin email formatında olduğunu kontrol eder
    private String email;

    @NotBlank(message = "{user.password.absent}")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,15}$", message = "{user.password.invalid}")
    private String password;

    private AccountType accountType;

    private Long profileId;

    // mapper
    public User toEntity(){
        return new User(this.id, this.name, this.email, this.password, this.accountType,this.profileId);
    }
}
