package com.dashboard.backend.employee;

import com.dashboard.backend.team.Team;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Configuration;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;
import java.util.*;
import java.util.stream.Collectors;


@Data
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Configuration
@Table(name = "employees")
public class Employee{

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "employee_sequence"
    )
    @SequenceGenerator(
            name = "employee_sequence",
            sequenceName = "employee_sequence",
            allocationSize = 1
    )
    protected Long id;

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
    @Transient
    private Integer age;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    private Team team;

    public Employee(
            String firstName,
            String lastName,
            String email,
            String jobTitle,
            String phoneNumber,
            String address,
            String avatar,
            LocalDate dob,
            Team Team
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.jobTitle = jobTitle;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.avatar = avatar;
        this.dob = dob;
        this.team = team;
    }

    public void setTeam(Team Team) {
        this.team = team;
    }

    public Long getId() {
        return id;
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

    public void setName(String name) {
        this.name = name;
    }

    public Optional<String> getAvatar() {
        return Optional.ofNullable(avatar);
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

    @Temporal(TemporalType.TIMESTAMP)
    public Optional<Integer> getAge() {
        Integer age = null;
        if (this.dob != null) {
            age = Period.between(this.dob, LocalDate.now()).getYears();
        }
        return Optional.ofNullable(age);
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Team getTeam() {
        return team;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return id.equals(employee.id) &&
                firstName.equals(employee.firstName) &&
                lastName.equals(employee.lastName) &&
                email.equals(employee.email) &&
                jobTitle.equals(employee.jobTitle) &&
                phoneNumber.equals(employee.phoneNumber) &&
                address.equals(employee.address) &&
                avatar.equals(employee.avatar) &&
                dob.equals(employee.dob) &&
                name.equals(employee.name) &&
                age.equals(employee.age);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                id,
                firstName,
                lastName,
                email,
                jobTitle,
                phoneNumber,
                address,
                avatar,
                dob,
                name,
                age
        );
    }
}