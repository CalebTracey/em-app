package com.dashboard.backend.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

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

    public Team findById(Long id) {
        return teamRepository.findById(id)
                .orElseThrow(() -> new TeamNotFoundException(id));
    }

    public Team save(Team team) {
        return teamRepository.save(team);
    }

    public void deleteTeam(Long id) {
        boolean exists = teamRepository.existsById(id);
        if (!exists) {
            throw new TeamNotFoundException("No Team found with provided id :" + id);
        }
        teamRepository.deleteById(id);
    }


}
