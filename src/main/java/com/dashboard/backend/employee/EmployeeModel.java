package com.dashboard.backend.employee;

import com.dashboard.backend.team.Team;
import com.dashboard.backend.team.TeamModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonRootName;
import lombok.*;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;
import javax.persistence.Transient;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@JsonRootName(value = "employee")
@Relation(collectionRelation = "employees")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class EmployeeModel extends RepresentationModel<EmployeeModel> {

    protected Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String jobTitle;
    private String phoneNumber;
    private String address;
    private Optional<String> avatar;
    private LocalDate dob;
    @Transient
    private String name;
    @Transient
    private Optional<Integer> age;

    private TeamModel team;


}
