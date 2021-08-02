package com.dashboard.backend.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

//    List<Employee> findByTeam(Team team, Sort sort);


    @Query("SELECT u FROM Employee u WHERE u.email = ?1")
    Optional<Employee> findByEmployeeEmail(String email);


    }
