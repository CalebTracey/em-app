package com.dashboard.backend.employee;

import javax.persistence.*;
import java.util.Objects;


@Entity
@Table()
public class Employee {

    @Id
    @SequenceGenerator(
            name="employee_sequence",
            sequenceName="employee_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "employee_sequence"
    )
    private Long employeeId;

    private String firstName;
    private String lastName;
    private String email;
    private String jobTitle;
    private String phoneNumber;
    private String address;

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    private String avatar;

    public Employee() {
    }

    public Employee(Long employeeId, String firstName, String lastName, String email, String jobTitle, String phoneNumber, String address, String avatar) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.jobTitle = jobTitle;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.avatar = avatar;
    }

    public Employee(
            String firstName,
            String lastName,
            String email,
            String jobTitle,
            String phoneNumber,
            String address, String avatar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.jobTitle = jobTitle;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.avatar = avatar;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
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
        String[] parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
//
//    public String getEmployeeAttributeJSON() {
//        return employeeAttributeJSON;
//    }
//
//    public void setEmployeeAttributeJSON(String employeeAttributeJSON) {
//        this.employeeAttributeJSON = employeeAttributeJSON;
//    }
//
//    @Convert(converter = JsonConverter.class)
//    private Map<String, Object> employeeAttributes;
//
//    public Map<String, Object> getEmployeeAttributes() {
//        return employeeAttributes;
//    }
//
//    public void setEmployeeAttributes(Map<String, Object> employeeAttributes) {
//        this.employeeAttributes = employeeAttributes;
//    }
//
//    private static final ObjectMapper objectMapper = new ObjectMapper();
//
//    public void serializeEmployeeAttributes() throws JsonProcessingException {
//        this.employeeAttributeJSON = objectMapper.writeValueAsString(employeeAttributes);
//    }
//
//    public void deserializeEmployeeAttributes() throws JsonProcessingException {
//        this.employeeAttributes = objectMapper.readValue(employeeAttributeJSON, Map.class);
//    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return employeeId.equals(employee.employeeId) &&
                firstName.equals(employee.firstName) &&
                lastName.equals(employee.lastName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(employeeId, firstName, lastName);
    }

}
