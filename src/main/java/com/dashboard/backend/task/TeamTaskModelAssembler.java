package com.dashboard.backend.task;

import com.dashboard.backend.employee.EmployeeController;
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
    linkTo(methodOn(TeamTaskController.class).one(teamTask.getId())).withSelfRel(),
    linkTo(methodOn(TeamTaskController.class).all()).withRel("team_tasks"));
    }
}
