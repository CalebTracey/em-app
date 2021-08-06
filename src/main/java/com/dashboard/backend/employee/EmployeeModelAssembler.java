package com.dashboard.backend.employee;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;
import com.dashboard.backend.team.*;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Component
public class EmployeeModelAssembler extends RepresentationModelAssemblerSupport<Employee, EmployeeModel> {

    public EmployeeModelAssembler() {
        super(EmployeeService.class, EmployeeModel.class);
    }

    @Override
    public EmployeeModel toModel(Employee employee) {

        EmployeeModel employeeModel = instantiateModel(employee);
        createModelWithId(employee.getId(), employee);
        employeeModel.add(linkTo(
                methodOn(EmployeeController.class)
                        .getEmployeeById(employee.getId()))
                .withSelfRel());

        if (employee.getTeam() == null) {
            TeamModel team = new TeamModel();
            employeeModel.setTeam(team);
        } else{
            employeeModel.setTeam(toTeamModel(employee.getTeam()));
//            employeeModel.add(linkTo(methodOn(TeamController.class).getTeamById(employee.getTeam().getId())).withSelfRel());
//            employeeModel.setTeam(employee.getTeam());
        }
        employeeModel.setId(employee.getId());
        employeeModel.setFirstName(employee.getFirstName());
        employeeModel.setLastName(employee.getLastName());
        employeeModel.setName(employee.getName());
        employeeModel.setEmail(employee.getEmail());
        employeeModel.setAddress(employee.getAddress());
        employeeModel.setPhoneNumber(employee.getPhoneNumber());
        employeeModel.setAvatar(employee.getAvatar());
        employeeModel.setDob(employee.getDob());
        employeeModel.setAge(employee.getAge());
        employeeModel.setJobTitle(employee.getJobTitle());

        return employeeModel;
    }

    @Override
    public CollectionModel<EmployeeModel> toCollectionModel(Iterable<? extends Employee> entities) {

        CollectionModel<EmployeeModel> employeeModels =
                super.toCollectionModel(entities);

        employeeModels.add(linkTo(methodOn(EmployeeController.class)
                .getAllEmployees()).withSelfRel(),
                linkTo(methodOn(TeamController.class).getAllTeams()).withRel("employee"));

        return employeeModels;
    }

    private TeamModel toTeamModel(Team team) {
//        if (teams.isEmpty()) {
//            return Collections.emptyList();
//        }
        return TeamModel.builder()
                        .id(team.getId())
                        .teamName(team.getTeamName())
                        .build().add(
                        linkTo(methodOn(TeamController.class)
                                .getTeamById(team.getId())).withSelfRel());
//                .collect(Collectors.toList());


    }

}
