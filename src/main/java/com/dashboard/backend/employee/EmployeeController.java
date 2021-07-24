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
import java.util.Optional;
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

    @GetMapping("employees/{id}")
    public EntityModel<Employee> one(@PathVariable(value = "id") Long id) {
        Employee employee = employeeService.findById(id);
        return assembler.toModel(employee);
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

    @DeleteMapping("employees/{id}")
    ResponseEntity<?> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
//        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    
//    @PutMapping("employees/add/team/{id}")
//    ResponseEntity<?> addEmployeeTeam(@RequestBody Employee newEmployee, @PathVariable Long id) {
//        Employee updatedEmployee = repository.findById(id)
//                .map(employee -> {
//    }

    @PutMapping("employees/{id}")
    ResponseEntity<?> replaceEmployee(@RequestBody Employee newEmployee, @PathVariable Long id) {
        Employee updatedEmployee = repository.findById(id)
                .map(employee -> {
                    employee.setFirstName(newEmployee.getFirstName());
                    employee.setLastName(newEmployee.getLastName());
                    employee.setJobTitle(newEmployee.getJobTitle());
                    employee.setEmail(newEmployee.getEmail());
                    employee.setAddress(newEmployee.getAddress());
                    employee.setPhoneNumber(newEmployee.getPhoneNumber());
//                    employee.setDob(newEmployee.getDob());
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