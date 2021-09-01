package com.dashboard.backend.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

//@CrossOrigin("https://employee-mngmt-dash.herokuapp.com/")
@CrossOrigin("*")
@RestController
@EnableSpringDataWebSupport
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
    public ResponseEntity<CollectionModel<EmployeeModel>> getAllEmployees() {
        List<Employee> employees = employeeService.findAll();

        return new ResponseEntity<>(
                assembler.toCollectionModel(employees),
                HttpStatus.OK);
    }

    @GetMapping("employees/{id}")
    public ResponseEntity<EmployeeModel> getEmployeeById(@PathVariable(value = "id") Long id) {
        return repository.findById(id)
                .map(assembler::toModel)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("employees")
    ResponseEntity<?> newEmployee(@RequestBody Employee employee) {
        EmployeeModel employeeModel = assembler.toModel(employeeService.save(employee));

        return ResponseEntity.created(employeeModel.
                getRequiredLink(IanaLinkRelations.SELF)
                .toUri()).body(employeeModel);
    }

        @DeleteMapping("employees/{id}")
    ResponseEntity<?> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }


//    @PutMapping("employees/{id}")
//    ResponseEntity<?> replaceEmployee(@RequestBody Employee newEmployee, @PathVariable Long id) {
//        Employee updatedEmployee = repository.findById(id)
//                .map(employee -> {
//                    employee.setFirstName(newEmployee.getFirstName());
//                    employee.setLastName(newEmployee.getLastName());
//                    employee.setJobTitle(newEmployee.getJobTitle());
//                    employee.setEmail(newEmployee.getEmail());
//                    employee.setAddress(newEmployee.getAddress());
//                    employee.setPhoneNumber(newEmployee.getPhoneNumber());
//                    return employeeService.save(newEmployee);
//                })
//                .orElseGet(() -> {
//                    return employeeService.save(newEmployee);
//                });
}
