package com.dashboard.backend.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // Create custom methods w JPA
       // List<Employee> findByLastName(String lastName);


//    @Override
//    default List<Employee> findAllById(Iterable<Long> iterable) {
//        return null;
//    }

    }
