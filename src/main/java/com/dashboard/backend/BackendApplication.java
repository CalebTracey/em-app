package com.dashboard.backend;

import com.dashboard.backend.employee.EmployeeService;
import com.dashboard.backend.team.Team;
import com.dashboard.backend.team.TeamService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan
public class BackendApplication {


    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);

    }

//    @Bean
//    public CommandLineRunner mappingDemo(TeamService teamService
//                                         EmployeeService employeeService) {
//        return args -> {

//            Team one = new Team(Team One);
//            teamService.save(one);
//            Team two = new Team(Team Two);
//            teamService.save(two);
//            Team three = new Team(Team Three);
//            teamService.save(three);
//            Team four = new Team(Team Four);
//            teamService.save(four);
        };


//        }

//
//    @PostConstruct
//    public void populateContext() {
//        // all references to servletContext go here including the
//        // bit where we call the appropriate setters in beanThing
//    }


