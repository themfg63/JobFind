package com.TheMFG.backend.utility;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

/*
     Bu anotasyon, uygulama genelinde çalışacak bir "global exception handler" tanımlar.
     * Tüm controller sınıflarını etkiler.
     * Controller sınıflarında gerçekleşen hatalar bu sınıfta ele alınır.
     * Normal @ControllerAdvice’ın REST uyumlu versiyonudur (JSON/XML gibi çıktılar döndürür).
 */
@RestControllerAdvice
public class ExceptionControllerAdvice {
    /*
    Bu sınıf, Spring Boot uygulamasında global hata yönetimi sağlar.
    Merkezi bir noktada istisnaları yakalayıp özelleştirilmiş ve kullanıcı dostu bir hata mesajı döner.
    Bu, hata yönetimini kolaylaştırır ve uygulamanın güvenliğini artırır.
     */


    @ExceptionHandler(Exception.class) // Bu yöntem, belirli bir istisna türünü (burada Exception) yakalamak için kullanılır.
    public ResponseEntity<ErrorInfo> generalException(Exception exception){
        ErrorInfo error = new ErrorInfo(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR.value(), LocalDateTime.now());
        return new ResponseEntity<>(error,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    * ErrorInfo error = new ErrorInfo(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR.value(), LocalDateTime.now());
    -> Yeni bir ErrorInfo nesnesi oluşturur. Bu sınıf, özelleştirilmiş hata bilgilerini taşımak için tanımlanmış bir DTO (Data Transfer Object) sınıfıdır.
    -> exception.getMessage(): Hata mesajını alır.
    -> HttpStatus.INTERNAL_SERVER_ERROR.value(): HTTP durum kodunu (500) belirtir.
    -> LocalDateTime.now(): Hatanın gerçekleştiği zamanı belirtir.

    * return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    -> error: Hata bilgilerini içeren ErrorInfo nesnesi.
    -> HttpStatus.INTERNAL_SERVER_ERROR: HTTP durum kodu olarak 500 (Internal Server Error) gönderilir.
     */


    @ExceptionHandler({MethodArgumentNotValidException.class, ConstraintViolationException.class})
    public ResponseEntity<ErrorInfo> validatorExceptionHandle(Exception exception){
        String msg = "";
        if(exception instanceof MethodArgumentNotValidException manvException){
            msg = manvException.getAllErrors().stream().map(ObjectError::getDefaultMessage).collect(Collectors.joining(", "));
        }else{
            ConstraintViolationException cvException = (ConstraintViolationException) exception;
            msg = cvException.getConstraintViolations().stream().map(ConstraintViolation::getMessage).collect(Collectors.joining(", "));
        }
        ErrorInfo error = new ErrorInfo(msg, HttpStatus.BAD_REQUEST.value(), LocalDateTime.now());
        return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
    }
}
