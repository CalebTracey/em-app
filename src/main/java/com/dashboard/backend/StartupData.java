//package com.dashboard.backend;
//
//import com.dashboard.backend.employee.Employee;
//import com.dashboard.backend.employee.EmployeeRepository;
//import com.dashboard.backend.employee.EmployeeService;
//import com.dashboard.backend.team.Team;
//import com.dashboard.backend.team.TeamRepository;
//import com.dashboard.backend.team.TeamService;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//
//public class StartupData {
//
//    @Bean
//    public CommandLineRunner mappingDemo(TeamService teamService,
//                                         EmployeeService employeeService) {
//        return args -> {
//
//            Team 1 = new Team("Team One");
//            teamService.save(1);
//            Team 2 = new Team("Team One");
//            teamService.save(2);
//            Team 3 = new Team("Team One");
//            teamService.save(3);
//            Team 4 = new Team("Team One");
//            teamService.save(4);
//
////            employeeService.save(new Employee(1, "Introduction contents", "Introduction", team));
////            employeeService.save(new Employee(65, "Java 8 contents", "Java 8", team));
////            employeeService.save(new Employee(95, "Concurrency contents", "Concurrency", team));
//      //  };
//}
