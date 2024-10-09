package com.TheMFG.backend.exception;


/* custom exception olarak tanımlanan class -> bu şekilde hataya göre istediğimiz mesajı kullancıya döndürebiliriz */
public class JobPortalException extends Exception{
    private static final long serialVersionUID = 1L;

    public JobPortalException(String message){
        super(message);
    }
}
