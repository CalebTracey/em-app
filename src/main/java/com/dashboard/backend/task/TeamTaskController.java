package com.dashboard.backend.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "api/v1/")
public class TeamTaskController {

    private TeamTaskService teamTaskService;
    private TeamTaskModelAssembler assembler;

    @Autowired
    public TeamTaskController(TeamTaskService teamTaskService,
                              TeamTaskModelAssembler assembler) {
        this.teamTaskService = teamTaskService;
        this.assembler = assembler;
    }

    @GetMapping("team_tasks")
    public CollectionModel<EntityModel<TeamTask>> all(){
        List<EntityModel<TeamTask>> teamTasks = teamTaskService.getTeamTasks().stream().
                map(assembler::toModel)
                .collect(Collectors.toList());
        return CollectionModel.of(teamTasks, linkTo(
                methodOn(TeamTaskController.class).all()).withSelfRel());
    }

    @GetMapping("team_tasks/{id}")
    public EntityModel<TeamTask> one(@PathVariable(value = "id") Long id){
        TeamTask teamTask = teamTaskService.findById(id);
        return assembler.toModel(teamTask);
    }

    @PostMapping("team_tasks")
    public ResponseEntity<?> newTeamTask(@RequestBody TeamTask newTeamTask) {
        EntityModel<TeamTask> entityModel =
                assembler.toModel(teamTaskService.save(newTeamTask));
        return ResponseEntity
                .created(entityModel.
                        getRequiredLink(IanaLinkRelations.SELF)
                        .toUri()).body(entityModel);
    }
}
