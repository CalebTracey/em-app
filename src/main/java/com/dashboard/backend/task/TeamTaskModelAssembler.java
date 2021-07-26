package com.dashboard.backend.task;

import com.dashboard.backend.employee.Employee;
import com.dashboard.backend.employee.EmployeeController;
import com.dashboard.backend.team.Team;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class TeamTaskModelAssembler implements RepresentationModelAssembler<TeamTask, EntityModel<TeamTask>> {



    @Override
    public EntityModel<TeamTask> toModel(TeamTask teamTask) {

    return EntityModel.of(teamTask,
    linkTo(methodOn(EmployeeController.class).one(teamTask.getId())).withSelfRel(),
    linkTo(methodOn(EmployeeController.class).all()).withRel("team_tasks"));
    }
}
