//package com.dashboard.backend.task;
//
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.context.annotation.Configuration;
//
//import javax.persistence.*;
//import java.io.Serial;
//import java.time.LocalDate;
//import java.time.Period;
//
//@ConfigurationProperties(prefix = "team_task")
//@Entity
//@Table(name = "TEAM_TASKS")
//public class TeamTask {
//    @Id
//    @Serial
//    @GeneratedValue(
//            strategy = GenerationType.SEQUENCE,
//            generator = "team_task_sequence"
//    )
//    @SequenceGenerator(
//            name = "team_task_sequence",
//            sequenceName = "team_task_sequence",
//            allocationSize = 1
//    )
//    @Column(
//            name = "id",
//            unique = true,
//            nullable = false
//    )
//    protected Long taskId;
//
//    private String name;
//    private String description;
//    private String client;
//    private String phone;
//    private LocalDate start;
//    private LocalDate end;
//    @Transient
//    private Integer duration;
//    private Integer remaining;
//
//    public TeamTask(
//            Long id,
//            String name,
//            String description,
//            String client,
//            String phone,
//            LocalDate start,
//            LocalDate end
//    ) {
//        this.taskId = taskId;
//        this.name = name;
//        this.description = description;
//        this.client = client;
//        this.phone = phone;
//        this.start = start;
//        this.end = end;
//    }
//
//    public TeamTask(
//            String name,
//            String description,
//            String client,
//            String phone,
//            LocalDate start,
//            LocalDate end
//    ) {
//        this.name = name;
//        this.description = description;
//        this.client = client;
//        this.phone = phone;
//        this.start = start;
//        this.end = end;
//    }
//
//    public TeamTask(Long taskId) {
//        this.taskId = taskId;
//    }
//
//    public TeamTask() {
//    }
//
//    public Long getId() {
//        return taskId;
//    }
//
//    public void setId(Long taskId) {
//        this.taskId = taskId;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    public String getClient() {
//        return client;
//    }
//
//    public void setClient(String client) {
//        this.client = client;
//    }
//
//    public String getPhone() {
//        return phone;
//    }
//
//    public void setPhone(String phone) {
//        this.phone = phone;
//    }
//
//    public LocalDate getStart() {
//        return start;
//    }
//
//    public void setStart(LocalDate start) {
//        this.start = start;
//    }
//
//    public LocalDate getEnd() {
//        return end;
//    }
//
//    public void setEnd(LocalDate end) {
//        this.end = end;
//    }
//
//    public Integer getDuration() {
//        return Period.between(start, LocalDate.now()).getDays();
//    }
//
//}
