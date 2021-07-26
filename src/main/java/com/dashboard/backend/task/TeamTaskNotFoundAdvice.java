package com.dashboard.backend.task;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class TeamTaskNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(TeamTaskNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String teamTaskNotFoundHandler(TeamTaskNotFoundException ex) {
        return ex.getMessage();
    }
}
