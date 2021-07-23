package com.dashboard.backend.team;

import com.dashboard.backend.employee.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

    @Query("SELECT u FROM Team u WHERE u.id = ?1")
    Optional<Team> findByName(Long id);
}
