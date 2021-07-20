package com.dashboard.backend.employee;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class EmployeeConfig {

    @Bean
    CommandLineRunner commandLineRunner(EmployeeRepository repository){
        return args -> {
            Employee caleb = new Employee(
                        "Caleb",
                        "Tracey",
                        "caleb.tracey@gmail",
                        "Head Chef",
                        "1234",
                        "20 chev"
                );
            Employee joe = new Employee(
                    "Joe",
                    "Tracey",
                    "Joe.tracey@gmail",
                    "Sous Chef",
                    "1234",
                    "25 chev"
            );

            repository.saveAll(List.of(caleb, joe));
        };
    }
}
