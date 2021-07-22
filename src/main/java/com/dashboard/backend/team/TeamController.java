package com.dashboard.backend.team;

import com.dashboard.backend.employee.Employee;
import com.dashboard.backend.employee.EmployeeController;
import com.dashboard.backend.employee.EmployeeModelAssembler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "api/v1/")
public class TeamController {

    private TeamService teamService;
    private TeamModelAssembler assembler;
    private EmployeeModelAssembler employeeAssembler;

    @Autowired
    public TeamController(
            TeamService teamService,
            TeamModelAssembler assembler,
            EmployeeModelAssembler employeeAssembler) {
        this.teamService = teamService;
        this.assembler = assembler;
        this.employeeAssembler = employeeAssembler;
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

//    @GetMapping("/members/{id}")
//    public CollectionModel<EntityModel<Employee>> allMembers(Long id){
//        List<EntityModel<Employee>> members = teamService.findMembers(id).stream().
//                map(employeeAssembler::toModel)
//                .collect(Collectors.toList());
//        return CollectionModel.of(members, linkTo(methodOn(EmployeeController.class).all()).withSelfRel());
//    }
}
