package com.dashboard.backend.task;

import com.dashboard.backend.team.Team;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.context.annotation.Configuration;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;
import java.util.Objects;

@Data
@Builder
@Entity
@AllArgsConstructor
@Configuration
@Embeddable
@Table(name = "TEAM_TASKS")
public class TeamTask {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "team_task_sequence"
    )
    @SequenceGenerator(
            name = "team_task_sequence",
            sequenceName = "team_task_sequence",
            allocationSize = 1
    )
    protected Long id;

    private String name;
    private String description;
    private String client;
    private String clientPhone;
    private LocalDate taskStart;
    private LocalDate taskEnd;
    @Transient
    private Integer duration;
    @Transient
    private Integer remaining;
    @Transient
    private Integer endDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    @JsonBackReference
    private Team team;

    public TeamTask() {
    }

    public TeamTask(Long id) {
        this.id = id;
    }

    public TeamTask(
            String name,
            String description,
            String client,
            String clientPhone,
            LocalDate taskStart,
            LocalDate taskEnd,
            Integer duration,
            Integer remaining,
            Team team,
            Integer endDate) {
        this.name = name;
        this.description = description;
        this.client = client;
        this.clientPhone = clientPhone;
        this.taskStart = taskStart;
        this.taskEnd = taskEnd;
        this.duration = duration;
        this.remaining = remaining;
        this.team = team;
        this.endDate = endDate;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public String getClientPhone() {
        return clientPhone;
    }

    public void setClientPhone(String clientPhone) {
        this.clientPhone = clientPhone;
    }

    public LocalDate getTaskStart() {
        return taskStart;
    }

    public void setTaskStart(LocalDate taskStart) {
        this.taskStart = taskStart;
    }

    public LocalDate getTaskEnd() {
        return taskEnd;
    }

    public void setTaskEnd(LocalDate taskEnd) {
        this.taskEnd = taskEnd;
    }

    @Temporal(TemporalType.TIMESTAMP)
    public Integer getDuration() {
        return Period.between(this.taskStart, LocalDate.now()).getDays();
    }

    @Temporal(TemporalType.TIME)
    public Integer getRemaining() {
        return Period.between(LocalDate.now(), this.taskEnd).getDays();
    }

    public Integer getEndMonth() {
        Calendar cal = Calendar.getInstance();
        cal.setTime(Date.from(this.getTaskEnd()
                .atStartOfDay(ZoneId.systemDefault()).toInstant()));
        return cal.get(Calendar.MONTH);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TeamTask teamTask = (TeamTask) o;
        return id.equals(teamTask.id) &&
                name.equals(teamTask.name) &&
                description.equals(teamTask.description) &&
                client.equals(teamTask.client) &&
                clientPhone.equals(teamTask.clientPhone) &&
                taskStart.equals(teamTask.taskStart) &&
                taskEnd.equals(teamTask.taskEnd) &&
                duration.equals(teamTask.duration) &&
                remaining.equals(teamTask.remaining) &&
                team.equals(teamTask.team);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description, client, clientPhone, taskStart, taskEnd, duration, remaining, team);
    }

    @Override
    public String toString() {
        return "TeamTask{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", client='" + client + '\'' +
                ", clientPhone='" + clientPhone + '\'' +
                ", taskStart=" + taskStart +
                ", taskEnd=" + taskEnd +
                ", duration=" + duration +
                ", remaining=" + remaining +
                ", team=" + team +
                '}';
    }
}