package com.dashboard.backend.team;

import com.dashboard.backend.employee.EmployeeModelAssembler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.ExposesResourceFor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import java.util.List;

//@CrossOrigin("https://employee-mngmt-dash.herokuapp.com/")
@CrossOrigin("*")
@RestController
@EnableSpringDataWebSupport
@RequestMapping(path = "api/v1/")
public class TeamController {

    private final TeamRepository teamRepository;
    private final TeamService teamService;
    private final TeamModelAssembler assembler;

    @Autowired
    public TeamController(
            TeamRepository teamRepository,
            TeamService teamService,
            TeamModelAssembler assembler) {
        this.teamRepository = teamRepository;
        this.teamService = teamService;
        this.assembler = assembler;
    }

    @GetMapping({"teams"})
    public ResponseEntity<CollectionModel<TeamModel>> getAllTeams(){
        System.out.println("Get Teams");
        List<Team> teams = teamRepository.findAll();
        return new ResponseEntity<>(
                assembler.toCollectionModel(teams),
                HttpStatus.OK);

    }

    @GetMapping("teams/{id}")
    public ResponseEntity<TeamModel> getTeamById(@PathVariable("id") Long id)
    {
        return teamRepository.findById(id)
                .map(assembler::toModel)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("teams")
    ResponseEntity<?> newTeam(@RequestBody Team team) {
        TeamModel teamModel = assembler.toModel(teamService.save(team));

        return ResponseEntity.created(teamModel.
                getRequiredLink(IanaLinkRelations.SELF)
                .toUri()).body(teamModel);
    }

    @DeleteMapping("teams/{id}")
    ResponseEntity<?> deleteTeam(@PathVariable Long id) {
        teamService.deleteTeam(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("teams/{id}")
    ResponseEntity<?> updateTeam(@PathVariable Long id, @RequestBody Team newTeam) {
        Team updatedTeam = teamRepository.findById(id).map(team -> {
            team.setTeamName(newTeam.getTeamName());
            team.setTeamTasks(newTeam.getTeamTasks());
            team.setEmployees(newTeam.getEmployees());
            return teamService.save(newTeam);
        }).orElseGet(() -> {
            return teamService.save(newTeam);
        });
        TeamModel teamModel = assembler.toModel(updatedTeam);
        return ResponseEntity.created(teamModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(teamModel);
    }

//    @PutMapping("teams/{id}")
//    public ResponseEntity<?> updateTeam(@PathVariable Long id, @Valid @RequestBody Team newTeam) {
//        Team updatedTeam = teamRepository.findById(id).map(team -> {
//            team.setTeamName(newTeam.getTeamName());
//            team.setEmployees(newTeam.getEmployees());
//            return teamService.save(newTeam);
//        }).orElseGet(() -> {
//            return teamService.save(newTeam);
//        });
//        EntityModel<Team> entityModel = assembler.toModel(updatedTeam);
//        return ResponseEntity.created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
//                .body(entityModel);
//
//    }
//
}