package com.dashboard.backend.employee;

import com.dashboard.backend.team.Team;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;

import javax.annotation.Nonnull;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.Objects;

@Entity
@ConfigurationProperties(prefix = "employee")
@Table(name = "EMPLOYEES")
public class Employee {

    @Id

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "employees_sequence"
    )
    @SequenceGenerator(
            name = "employees_sequence",
            sequenceName = "employees_sequence",
            allocationSize = 1
    )
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="team_id", nullable = false)
    private Team team;

    private String firstName;
    private String lastName;
    private String email;
    private String jobTitle;
    private String phoneNumber;
    private String address;
    private String avatar;
    private LocalDate dob;
    @Transient
    private String name;
    private Integer age;

    public Employee() { }

    public Employee(Long id) {
        this.id = id;
    }

    public Employee(
            Long id,
            String firstName,
            String lastName,
            String email,
            String jobTitle,
            String phoneNumber,
            String address,
            String avatar,
            LocalDate dob) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.jobTitle = jobTitle;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.avatar = avatar;
        this.dob = dob;
    }

    public Employee(
            String firstName,
            String lastName,
            String email,
            String jobTitle,
            String phoneNumber,
            String address,
            String avatar,
            LocalDate dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.jobTitle = jobTitle;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.avatar = avatar;
        this.dob = dob;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getName() {
        return this.firstName + " " + this.lastName;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public Integer getAge() {
        return Period.between(dob, LocalDate.now()).getYears();
    }

    public Team getTeam() {
        return team;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(Integer age) {
        this.age = age;
    }


}
