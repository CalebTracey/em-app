package com.dashboard.backend.task;

public class TeamTaskNotFoundException extends RuntimeException {

    TeamTaskNotFoundException(Long id) {
        super ("Could not find a Team Task with the id: " +id);
    }
}
