package com.dashboard.backend.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "api/v1/")
public class TeamTaskController {

    private TeamTaskService teamTaskService;
    private TeamTaskModelAssembler assembler;
    private TeamTaskRepository repository;

    @Autowired
    public TeamTaskController(TeamTaskService teamTaskService,
                              TeamTaskModelAssembler assembler,
                              TeamTaskRepository repository) {
        this.teamTaskService = teamTaskService;
        this.assembler = assembler;
        this.repository = repository;
    }

    @GetMapping("team_tasks/{id}")
    public ResponseEntity<TeamTaskModel> getTeamTaskById(@PathVariable(value="id") Long id) {
        return repository.findById(id).map(assembler::toModel)
                .map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("team_tasks")
    public ResponseEntity<CollectionModel<TeamTaskModel>> getAllTeamTasks(){
        List<TeamTask> teamTasks = teamTaskService.findAll();
        return new ResponseEntity<>(
                assembler.toCollectionModel(teamTasks),
                HttpStatus.OK);


    }

//    @GetMapping("team_tasks")
//    public CollectionModel<EntityModel<TeamTask>> all(){
//        List<EntityModel<TeamTask>> teamTasks = teamTaskService.getTeamTasks().stream().
//                map(assembler::toModel)
//                .collect(Collectors.toList());
//        return CollectionModel.of(teamTasks, linkTo(
//                methodOn(TeamTaskController.class).all()).withSelfRel());
//    }
//
//    @GetMapping("team_tasks/{id}")
//    public EntityModel<TeamTask> one(@PathVariable(value = "id") Long id){
//        TeamTask teamTask = teamTaskService.findById(id);
//        return assembler.toModel(teamTask);
//    }

//    @PostMapping("team_tasks")
//    public ResponseEntity<?> newTeamTask(@RequestBody TeamTask newTeamTask) {
//        EntityModel<TeamTask> entityModel =
//                assembler.toModel(teamTaskService.save(newTeamTask));
//        return ResponseEntity
//                .created(entityModel.
//                        getRequiredLink(IanaLinkRelations.SELF)
//                        .toUri()).body(entityModel);
//    }
//
//
}
