package com.dashboard.backend.team;

import com.dashboard.backend.employee.EmployeeModel;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;
import lombok.*;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@JsonRootName(value = "team")
@Relation(collectionRelation = "teams")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TeamModel extends RepresentationModel<TeamModel> {

    protected Long id;
    private String teamName;
    private List<EmployeeModel> employees;

}
