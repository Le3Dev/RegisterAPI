package com.le3dev.fullstack_backend.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id){
        super("Não foi possivel achar o usuario com o Id "+id);
    }
}
