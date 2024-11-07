package com.TheMFG.backend.entity;

import com.TheMFG.backend.dto.enums.AccountType;
import com.TheMFG.backend.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


/* User entity class -> veritabanında bir tabloya eşdeğer */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "user")
public class User {
    @Id
    private Long id;

    private String name;

    @Indexed(unique = true)
    private String email;

    private String password;

    private AccountType accountType;

    private Long profileId;

    public UserDTO toDTO(){
        return new UserDTO(this.id, this.name, this.email, this.password, this.accountType,this.profileId);
    }
}
