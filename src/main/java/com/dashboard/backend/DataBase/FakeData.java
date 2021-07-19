package com.dashboard.backend.DataBase;

import com.dashboard.backend.employee.Employee;

import java.util.ArrayList;
import java.util.List;

public class FakeData {

    private ArrayList<Employee> USER_DATA;

    Employee caleb = new Employee("Caleb", "Tracey", "Chef");
    Employee jim = new Employee("Jim", "BeefCake", "Sous Chef");

    public FakeData(ArrayList<Employee> USER_DATA) {
        this.USER_DATA = USER_DATA;
    }

    private List<Employee> getEmployees(){
        USER_DATA.add(caleb);
        USER_DATA.add(jim);

        return USER_DATA;
    }



}
