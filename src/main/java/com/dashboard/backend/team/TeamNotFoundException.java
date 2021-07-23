package com.dashboard.backend.team;

public class TeamNotFoundException extends RuntimeException {

    TeamNotFoundException(String name) {
        super ("Could not find : "+ name);
    }

    TeamNotFoundException(Long id) {
        super ("Could not find : "+ id);
    }

}
