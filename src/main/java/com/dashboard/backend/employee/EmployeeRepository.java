package com.dashboard.backend.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

//@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Employee findByTeamId(Long teamId);

    @Query("SELECT u FROM Employee u WHERE u.email = ?1")
    Optional<Employee> findByEmployeeEmail(String email);


    }
