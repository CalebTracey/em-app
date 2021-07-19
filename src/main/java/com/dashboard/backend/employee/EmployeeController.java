package com.dashboard.backend.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

//    @GetMapping
//    public ResponseEntity<List<Employee>> getAllEmployees(@RequestParam(required = false) Integer id) {
//        try {
//            List<Employee> employees = new ArrayList<Employee>();
//
//            if (id != null) {
//                return employeeRepository.findAll();
//            }
//        }catch (IllegalStateException e) {
//                throw new IllegalStateException(e);
//            }
//            return employees;
//        }

    //}
}
