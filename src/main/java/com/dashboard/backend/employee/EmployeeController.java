package com.dashboard.backend.employee;


import com.dashboard.backend.team.Team;
import com.dashboard.backend.team.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "api/v1/")
public class EmployeeController {

    private final EmployeeService employeeService;
    private final EmployeeModelAssembler assembler;
    private final EmployeeRepository repository;

    @Autowired
    public EmployeeController(
            EmployeeService employeeService,
            EmployeeModelAssembler assembler,
            EmployeeRepository repository) {

        this.employeeService = employeeService;
        this.assembler = assembler;
        this.repository = repository;
    }

    @GetMapping("employees")
    public CollectionModel<EntityModel<Employee>> all() {
        List<EntityModel<Employee>> employees =
                employeeService.findAll().stream()
                        .map(assembler::toModel)
                        .collect(Collectors.toList());

        return CollectionModel.of(employees, linkTo(
                methodOn(EmployeeController.class)
                        .all()).withSelfRel());
    }

    @GetMapping("employees/{employeeId}")
    public EntityModel<Employee> one(@PathVariable(value = "employeeId") Long employeeId) {
        Employee employee = employeeService.findById(employeeId);
        return assembler.toModel(employee);
    }

    @GetMapping("teams/{id}/employees")
    public CollectionModel<EntityModel<Employee>> getByTeamId(
            @PathVariable(value = "id") Team team, Sort sort) {

        List<EntityModel<Employee>> employees =
                employeeService.findByTeam(team, sort)
                .stream().map(assembler::toModel)
                .collect(Collectors.toList());

        return CollectionModel.of(employees, linkTo(
                methodOn(EmployeeController.class)
                        .all()).withSelfRel());
    }

    @PostMapping("employees")
    ResponseEntity<?> newEmployee(@RequestBody Employee newEmployee) {
        EntityModel<Employee> entityModel =
                assembler.toModel(employeeService.save(newEmployee));
        //(repository.save(newEmployee));
        return ResponseEntity
                .created(entityModel.
                        getRequiredLink(IanaLinkRelations.SELF)
                        .toUri()).body(entityModel);
    }

    @DeleteMapping("employees/{employeeId}")
    ResponseEntity<?> deleteEmployee(@PathVariable Long employeeId) {

        repository.deleteById(employeeId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("employees/{id}")
    ResponseEntity<?> replaceEmployee(@RequestBody Employee newEmployee, @PathVariable Long id) {
        Employee updatedEmployee = repository.findById(id)
                .map(employee -> {
                    employee.setName(newEmployee.getName());
                    employee.setJobTitle(newEmployee.getJobTitle());
                    employee.setEmail(newEmployee.getEmail());
                    employee.setAddress(newEmployee.getAddress());
                    employee.setAvatar(String.valueOf(newEmployee.getAvatar()));
                    return employeeService.save(newEmployee);
                    //return repository.save(employee);
                })
                .orElseGet(() -> {
                    return employeeService.save(newEmployee);
                    //return repository.save(newEmployee);
                });

        EntityModel<Employee> entityModel = assembler.toModel(updatedEmployee);

        return ResponseEntity //
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri()) //
                .body(entityModel);
    }
}