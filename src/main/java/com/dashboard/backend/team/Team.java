package com.dashboard.backend.team;

import com.dashboard.backend.employee.Employee;
import com.dashboard.backend.task.TeamTask;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.context.annotation.Configuration;
import javax.persistence.*;
import java.util.List;
import java.util.Objects;
//@DiscriminatorColumn(name="product_type",
//        discriminatorType = DiscriminatorType.INTEGER)
@Data
@Builder
@Entity
@AllArgsConstructor
@Configuration
@Table(name = "teams", schema="public")
public class Team {

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


    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    private List<TeamTask> teamTasks;

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    private List<Employee> employees;

    public Team() { super();
    }

    public Team(String teamName) {
        super();
        this.teamName = teamName;
    }

    public Team(String teamName, List<Employee> employees) {
        this.teamName = teamName;
        this.employees = employees;
    }

    public Team(String teamName, List<TeamTask> teamTasks, List<Employee> employees) {
        this.teamName = teamName;
        this.teamTasks = teamTasks;
        this.employees = employees;
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

    public List<TeamTask> getTeamTasks() {
        return teamTasks;
    }

    public void setTeamTasks(List<TeamTask> teamTasks) {
        this.teamTasks = teamTasks;
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
        return id.equals(team.id) && teamName.equals(team.teamName) && teamTasks.equals(team.teamTasks) && employees.equals(team.employees);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, teamName, teamTasks, employees);
    }

    @Override
    public String toString() {
        return "Team{" +
                "id=" + id +
                ", teamName='" + teamName + '\'' +
                ", teamTasks=" + teamTasks +
                ", employees=" + employees +
                '}';
    }


}