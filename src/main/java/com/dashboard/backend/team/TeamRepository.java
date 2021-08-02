package com.dashboard.backend.team;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {
//    Collection<Team> findAll();

//    @Query("SELECT * FROM Team u WHERE u")
//    Optional<Employee> findEmployees(Long id);

    @Query("SELECT u FROM Team u WHERE u.id = ?1")
    Optional<Team> findByName(Long id);
}
