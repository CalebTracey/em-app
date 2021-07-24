package com.dashboard.backend.team;

import com.dashboard.backend.employee.Employee;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import javax.persistence.*;
import java.io.Serial;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Configuration
@Entity
@Table(name = "TEAMS")
public class Team {

    @Id
    @Serial
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "team_sequence"
    )
    @SequenceGenerator(
            name = "team_sequence",
            sequenceName = "team_sequence",
            allocationSize = 1
    )
    protected Long id;

    @Column(unique = true)
    private String teamName;

    @ManyToMany
    @JoinTable(name = "team_members",
            joinColumns =
            @JoinColumn(
                    name = "team_id",
                    referencedColumnName = "id"),
            inverseJoinColumns =
            @JoinColumn(
                    name = "employee_id",
                    referencedColumnName = "id")
    )
    private Set<Employee> employees = new HashSet<>();

    public Team() {
    }

    public Team(String teamName) {
        this.teamName = teamName;
    }

    public Team(String teamName, Set<Employee> employees) {
        this.teamName = teamName;
        this.employees = employees;
    }

    public Long getId() {
        return id;
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

    public void setEmployees(Set<Employee> employees) {
        this.employees = employees;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Team{" +
                "id=" + id +
                ", members=" +
                '}';
    }
}
