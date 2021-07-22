package com.dashboard.backend.team;

import com.dashboard.backend.employee.Employee;
import org.springframework.context.annotation.Configuration;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Configuration
@Entity
@Table(name = "TEAMS")
public class Team {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "teams_sequence"
    )
    @SequenceGenerator(
            name = "teams_sequence",
            sequenceName = "teams_sequence",
            allocationSize = 1
    )
    private Long id;

    private String teamName;

    @OneToMany(
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            mappedBy = "team"
    )
    private Set<Employee> employees = new HashSet<>();

    public Team() {
    }

    public Team(String teamName) {
        this.teamName = teamName;
    }

    public Team(Long id, String teamName) {
        this.id = id;
        this.teamName = teamName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public Set<Employee> getEmployees() {
        return employees;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, employees);
    }

    @Override
    public String toString() {
        return "Team{" +
                "id=" + id +
                ", members=" + employees +
                '}';
    }
}
