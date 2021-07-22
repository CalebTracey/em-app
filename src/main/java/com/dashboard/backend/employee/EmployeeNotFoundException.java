package com.dashboard.backend.employee;

class EmployeeNotFoundException extends RuntimeException {

    EmployeeNotFoundException(Long id) {

        super("Could not find employee " + id);
    }
}
