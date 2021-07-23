package com.dashboard.backend.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeamService {


    private TeamRepository teamRepository;

    @Autowired
    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<Team> getTeams() {
        return teamRepository.findAll();
    }

//    public Optional<Team> findByName(String teamName) {
//        try {
//            return teamRepository.findByName(teamName);
//        } catch (IllegalStateException e) {
//            throw new TeamNotFoundException(teamName);
//        }
//    }

    public Team findById(Long id) {
        return teamRepository.findById(id)
                .orElseThrow(() -> new TeamNotFoundException(id));
    }

    public Team save(Team team) {
        return teamRepository.save(team);
    }

}
