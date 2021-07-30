package com.dashboard.backend.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamTaskService {

    private TeamTaskRepository teamTaskRepository;

    @Autowired
    public TeamTaskService(TeamTaskRepository teamTaskRepository) {
        this.teamTaskRepository = teamTaskRepository;
    }

    public List<TeamTask> findAll() {
        return teamTaskRepository.findAll();
    }

    public TeamTask findById(Long id) {
        return teamTaskRepository.findById(id)
                .orElseThrow(() -> new TeamTaskNotFoundException(id));
    }

    public TeamTask save(TeamTask newTeamTask) {
        return teamTaskRepository.save(newTeamTask);

    }


}