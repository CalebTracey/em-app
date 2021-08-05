package com.dashboard.backend.task;

import com.dashboard.backend.team.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeamTaskRepository extends JpaRepository<TeamTask, Long> {




}
