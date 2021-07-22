package com.dashboard.backend.team;

import java.util.function.Supplier;

public class TeamNotFoundException extends RuntimeException {

    TeamNotFoundException(Long teamId) {

        super ("Could not find Team : "+ teamId);
    }

}
