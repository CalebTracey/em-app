package com.dashboard.backend.team;

import com.dashboard.backend.employee.Employee;
import com.dashboard.backend.employee.EmployeeController;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class TeamModelAssembler implements RepresentationModelAssembler<Team, EntityModel<Team>> {

        @Override
        public EntityModel<Team> toModel(Team team) {

            return EntityModel.of(team,
                    linkTo(methodOn(TeamController.class).one(team.getId())).withSelfRel(),
                    linkTo(methodOn(TeamController.class).all()).withRel("teams"));
        }
    }

