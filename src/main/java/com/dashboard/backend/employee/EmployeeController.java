package com.dashboard.backend.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

//@CrossOrigin(origins = "http://localhost:")
@RestController
@RequestMapping("/")
public class EmployeeController {

    String hello(){
        return "Hello World";
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
