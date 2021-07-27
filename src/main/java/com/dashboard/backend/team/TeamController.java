package com.dashboard.backend.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "api/v1/")
public class TeamController {

    private TeamService teamService;
    private TeamRepository teamRepository;
    private TeamModelAssembler assembler;

    @Autowired
    public TeamController(
            TeamService teamService,
            TeamRepository teamRepository,
            TeamModelAssembler assembler) {
        this.teamService = teamService;
        this.teamRepository = teamRepository;
        this.assembler = assembler;
    }

    @GetMapping({"teams"})
    public CollectionModel<EntityModel<Team>> all(){
        List<EntityModel<Team>> teams = teamService.getTeams().stream().
                map(assembler::toModel)
                .collect(Collectors.toList());
        return CollectionModel.of(teams, linkTo(
                        methodOn(TeamController.class).all()).withSelfRel());
    }

    @GetMapping({"teams/{id}"})
    public EntityModel<Team> one(@PathVariable Long id){
        Team team = teamService.findById(id);
        return assembler.toModel(team);
    }

    @PostMapping("teams")
    ResponseEntity<?> newTeam(@RequestBody Team newTeam) {
        EntityModel<Team> entityModel =
                assembler.toModel(teamService.save(newTeam));
        return ResponseEntity
                .created(entityModel.
                        getRequiredLink(IanaLinkRelations.SELF)
                        .toUri()).body(entityModel);
    }

    @PutMapping("teams/{id}")
    public ResponseEntity<?> updateTeam(@PathVariable Long id, @Valid @RequestBody Team newTeam) {
        Team updatedTeam = teamRepository.findById(id).map(team -> {
            team.setTeamName(newTeam.getTeamName());
            team.setEmployees(newTeam.getEmployees());
            return teamService.save(newTeam);
        }).orElseGet(() -> {
            return teamService.save(newTeam);
        });
            EntityModel<Team> entityModel = assembler.toModel(updatedTeam);
            return ResponseEntity.created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                    .body(entityModel);

    }

    @DeleteMapping("teams/{id}")
    ResponseEntity<?> deleteTeam(@PathVariable Long id){
        teamService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
