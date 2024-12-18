package com.TheMFG.backend.entity;

import com.TheMFG.backend.dto.UserDTO;
import com.TheMFG.backend.dto.enums.AccountType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

// kullanıcı tablosu

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users") //  Bu anotasyon bir sınıfı MongoDB belgesi olarak işaretler
public class User {
    @Id
    private String id;
    private String name;

    @Indexed(unique = true) //Benzersiz bir indeks oluşturur
    private String email;
    private String password;
    private AccountType accountType;        // hesap türü (başvuran(kullanıcı), iş veren)


    //Metot, User sınıfındaki bir nesnenin verilerini alır ve bu verilerle bir UserDTO nesnesi oluşturur.
    public UserDTO toDTO(){
        return new UserDTO(
                this.id,
                this.name,
                this.email,
                this.password,
                this.accountType
        );
    }
}
