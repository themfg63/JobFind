package com.TheMFG.backend.utility;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


/* alınan hatanın mesajı, kodu ve zamanını tutup özel olarak oluşturduğumuz exceptionlara yöneltme işlemi */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorInfo {
    private String errorMessage;
    private Integer errorCode;
    private LocalDateTime timeStamp;
}
