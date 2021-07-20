package com.dashboard.backend.employee;

import com.google.common.annotations.VisibleForTesting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping(path= "api/v1/employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {

        this.employeeService = employeeService;
    }

    @GetMapping
    public List<Employee> getEmployees(){

        return employeeService.getEmployees();
    };

    @PostMapping
    public void addNewEmployee(@RequestBody Employee employee){
        employeeService.addEmployee(employee);
    }

    @DeleteMapping(path = "{employeeId}")
    public void deleteEmployee(@PathVariable("employeeId") Long employeeId){
        employeeService.deleteEmployee(employeeId);
    }

    @PutMapping(path ="{employeeId}")
    public void updateEmployee(@PathVariable("employeeId") Long employeeId,
                               @RequestParam(required = false) String name,
                               @RequestParam(required = false) String email) {
        employeeService.updateEmployee(employeeId, name, email);
    }
}