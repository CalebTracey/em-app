package com.dashboard.backend.team;

import com.dashboard.backend.employee.Employee;
import com.dashboard.backend.employee.EmployeeRepository;
import com.dashboard.backend.employee.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Set;

//@Service
public class TeamService {

    private TeamRepository teamRepository;
//    private Set<Employee> members = employeeService.findAll();

//    @Autowired
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

//    public Collection<Employee> findMembers(Long id) {
//        return teamRepository.findAllById(id);
//    }
}
