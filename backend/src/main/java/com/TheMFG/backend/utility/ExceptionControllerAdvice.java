package com.TheMFG.backend.utility;

import com.TheMFG.backend.exception.JobPortalException;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.stream.Collectors;


/* hata yönetim class'ı */
@RestControllerAdvice
public class ExceptionControllerAdvice {
    @Autowired
    private Environment environment;

    /* herhangi bir istisna fırlatıldığında uygulamanın çökmemesi için bu method çalışır. hata mesajı ve 500 durum kodunu return eder */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorInfo> generalException(Exception exception){
        ErrorInfo error = new ErrorInfo(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR.value(), LocalDateTime.now());
        return new ResponseEntity<>(error,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /* validation anatasyonlarından fırlatılan istisnaları yakalar. hata mesajı ve 400 durum kodunu return eder. */
    @ExceptionHandler({MethodArgumentNotValidException.class, ConstraintViolationException.class})
    public ResponseEntity<ErrorInfo> validatorExceptionHandler(Exception exception){
        String msg = " ";
        if(exception instanceof MethodArgumentNotValidException methodException){
            msg = methodException.getAllErrors().stream().map(ObjectError::getDefaultMessage).collect(Collectors.joining(", "));
        }else{
            ConstraintViolationException constraintException = (ConstraintViolationException) exception;
            msg = constraintException.getConstraintViolations().stream().map(ConstraintViolation::getMessage).collect(Collectors.joining(", "));
        }
        ErrorInfo errorInfo = new ErrorInfo(msg,HttpStatus.BAD_REQUEST.value(), LocalDateTime.now());
        return new ResponseEntity<>(errorInfo,HttpStatus.BAD_REQUEST);
    }

    // custom olarak tanımladığımız JobPortalException istisnalarını yakalar. Hata mesajı ve 500 durum kodunu return eder. */
    @ExceptionHandler(JobPortalException.class)
    public ResponseEntity<ErrorInfo> generalException(JobPortalException exception){
        String msg = environment.getProperty(exception.getMessage());
        ErrorInfo error = new ErrorInfo(msg,HttpStatus.INTERNAL_SERVER_ERROR.value(), LocalDateTime.now());
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
