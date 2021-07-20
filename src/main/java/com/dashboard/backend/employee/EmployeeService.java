package com.dashboard.backend.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getEmployees(){
        return employeeRepository.findAll();
    }

    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }

    public void deleteEmployee(Long employeeId) {
        boolean exists = employeeRepository.existsById(employeeId);

        if(!exists){
            throw new IllegalStateException("No employee with id :" + employeeId);
        }
        employeeRepository.deleteById(employeeId);
    }

    @Transactional
    public void updateEmployee(Long employeeId, String name, String email) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(() -> (
            new IllegalStateException("No employee with id: " + employeeId)
        ));
        if (name != null && name.length() > 0 && !Objects.equals(employee.getFirstName(), name)) {
            employee.setFirstName(name);
        }
        if (email != null && email.length() > 0 && !employee.getEmail().equals(email)) {
            Optional<Employee> employeeOptional = employeeRepository.findByEmployeeEmail(email);
            if (employeeOptional.isPresent()){
                throw new IllegalStateException("email taken");
            }
        }
        employee.setEmail(email);

    }
}
