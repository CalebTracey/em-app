package com.dashboard.backend.team;

import com.dashboard.backend.employee.Employee;
import com.dashboard.backend.employee.EmployeeModel;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Configuration;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;




@Data
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Configuration
@Table(name = "TEAMS")
public class Team {


//    private static final long serialVersionUID = 1L;

    @Id
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
    private String teamName;
    private Integer team_id;
//    @JsonManagedReference
//    @OneToMany(mappedBy = "team")
//    private Set<TeamTask> teamTasks;

    @ManyToMany(mappedBy = "teams")
    private List<Employee> employees;

    public Team(String teamName) {
        this.teamName = teamName;
    }

    public Team(String teamName, List<Employee> employees) {
        this.teamName = teamName;
        this.employees = employees;
    }

    public Team(List<Employee> employees) {
        this.employees = employees;
    }

    //    public Optional<Set<TeamTask>> getTeamTasks() {
//        return Optional.ofNullable(teamTasks);
//    }
//
//    public void setTeamTasks(Set<TeamTask> teamTasks) {
//        this.teamTasks = teamTasks;
//    }


    public Long getId() {
        return id;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Team team = (Team) o;
        return id.equals(team.id) && teamName.equals(team.teamName)  && employees.equals(team.employees);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, teamName, employees);
    }
}