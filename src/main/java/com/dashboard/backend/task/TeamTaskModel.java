package com.dashboard.backend.task;

import com.dashboard.backend.team.TeamModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonRootName;
import lombok.*;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;
import javax.persistence.Transient;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@JsonRootName(value = "team_task")
@Relation(collectionRelation = "team_tasks")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TeamTaskModel extends RepresentationModel<TeamTaskModel> {

    protected Long id;

    private String name;
    private String description;
    private String client;
    private String clientPhone;
    private LocalDate taskStart;
    private LocalDate taskEnd;
    private TeamModel team;
    @Transient
    private Integer duration;
    @Transient
    private Integer endDate;
    @Transient
    private Integer remaining;
}
