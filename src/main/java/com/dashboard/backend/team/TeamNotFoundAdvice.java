package com.dashboard.backend.team;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class TeamNotFoundAdvice {

        @ResponseBody
        @ExceptionHandler(TeamNotFoundException.class)
        @ResponseStatus(HttpStatus.NOT_FOUND)
        String teamNotFoundExceptionHandler(TeamNotFoundException ex) {
            return ex.getMessage();
        }
    }

