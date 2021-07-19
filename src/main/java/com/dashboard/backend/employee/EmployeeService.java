package com.dashboard.backend.employee;

import com.dashboard.backend.DataBase.DataBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private EmployeeRepository employeeRepository;
    private DataBase dataBase;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository, DataBase dataBase) {
        this.employeeRepository = employeeRepository;
        this.dataBase = dataBase;
    }


//    public List<Employee> getAllEmployees(){
//
//        dataBase.getDataSource().getConnection(
//        return USER_DATA;
//    }
}
