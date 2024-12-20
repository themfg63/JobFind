package com.TheMFG.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "otp")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Otp {
    @Id
    private String email;
    private String otpCode;
    private LocalDateTime creationTime;
}
