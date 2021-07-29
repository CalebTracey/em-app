package com.dashboard.backend.employee;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import com.dashboard.backend.team.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class EmployeeModelAssembler extends RepresentationModelAssemblerSupport<Employee, EmployeeModel> {



    public EmployeeModelAssembler() {
        super(EmployeeService.class, EmployeeModel.class);
    }

    @Override
    public EmployeeModel toModel(Employee employee) {

        EmployeeModel employeeModel = instantiateModel(employee);

        employeeModel.add(linkTo(
                methodOn(EmployeeController.class)
                        .getEmployeeById(employee.getId()))
                            .withSelfRel());

        if (employee.getTeams() == null ) {
            employeeModel.setTeams(Collections.emptyList());
        } else {
            employeeModel.setTeams(toTeamModel(employee.getTeams()));
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

        CollectionModel<EmployeeModel> employeeModels = super.toCollectionModel(entities);

        employeeModels.add(linkTo(methodOn(EmployeeController.class).getAllEmployees()).withSelfRel());

        return employeeModels;
    }

    private List<TeamModel> toTeamModel(List<Team> teams) {
        if (teams.isEmpty()) {
            return Collections.emptyList();
        }
        return teams.stream().map(team ->
                TeamModel.builder()
                        .id(team.getId())
                        .teamName(team.getTeamName())
                        .build().add(
                        linkTo(methodOn(TeamController.class)
                                .getTeamById(team.getId())).withSelfRel()))
                .collect(Collectors.toList());


    }

}
