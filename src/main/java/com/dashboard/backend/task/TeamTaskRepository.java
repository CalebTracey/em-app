package com.dashboard.backend.task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamTaskRepository extends JpaRepository<TeamTask, Long> {

}
