package com.dashboard.backend;


import com.dashboard.backend.employee.Employee;
import com.dashboard.backend.employee.EmployeeRepository;
import com.dashboard.backend.employee.EmployeeService;
import com.dashboard.backend.team.Team;
import com.dashboard.backend.team.TeamRepository;
import com.dashboard.backend.team.TeamService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;

@Configuration

class AppConfig {

    public @Bean
    EmployeeService employeeService() {
        return new EmployeeService(employeeRepository());
    }

    public @Bean
    EmployeeRepository employeeRepository() {
        return new EmployeeRepository() {

            @Override
            public Employee findByTeamId(Long teamId) {
                return null;
            }

            @Override
            public Optional<Employee> findByEmployeeEmail(String email) {
                return Optional.empty();
            }

            @Override
            public List<Employee> findAll() {
                return null;
            }

            @Override
            public List<Employee> findAll(Sort sort) {
                return null;
            }

            @Override
            public List<Employee> findAllById(Iterable<Long> iterable) {
                return null;
            }

            @Override
            public <S extends Employee> List<S> saveAll(Iterable<S> iterable) {
                return null;
            }

            @Override
            public void flush() {

            }

            @Override
            public <S extends Employee> S saveAndFlush(S s) {
                return null;
            }

            @Override
            public <S extends Employee> List<S> saveAllAndFlush(Iterable<S> iterable) {
                return null;
            }

            @Override
            public void deleteAllInBatch(Iterable<Employee> iterable) {

            }

            @Override
            public void deleteAllByIdInBatch(Iterable<Long> iterable) {

            }

            @Override
            public void deleteAllInBatch() {

            }

            @Override
            public Employee getOne(Long aLong) {
                return null;
            }

            @Override
            public Employee getById(Long aLong) {
                return null;
            }

            @Override
            public <S extends Employee> List<S> findAll(Example<S> example) {
                return null;
            }

            @Override
            public <S extends Employee> List<S> findAll(Example<S> example, Sort sort) {
                return null;
            }

            @Override
            public Page<Employee> findAll(Pageable pageable) {
                return null;
            }

            @Override
            public <S extends Employee> S save(S s) {
                return null;
            }

            @Override
            public Optional<Employee> findById(Long aLong) {
                return Optional.empty();
            }

            @Override
            public boolean existsById(Long aLong) {
                return false;
            }

            @Override
            public long count() {
                return 0;
            }

            @Override
            public void deleteById(Long aLong) {

            }

            @Override
            public void delete(Employee employee) {

            }

            @Override
            public void deleteAllById(Iterable<? extends Long> iterable) {

            }

            @Override
            public void deleteAll(Iterable<? extends Employee> iterable) {

            }

            @Override
            public void deleteAll() {

            }

            @Override
            public <S extends Employee> Optional<S> findOne(Example<S> example) {
                return Optional.empty();
            }

            @Override
            public <S extends Employee> Page<S> findAll(Example<S> example, Pageable pageable) {
                return null;
            }

            @Override
            public <S extends Employee> long count(Example<S> example) {
                return 0;
            }

            @Override
            public <S extends Employee> boolean exists(Example<S> example) {
                return false;
            }
        };
    }

    public @Bean
    TeamService teamService() {
        return new TeamService(teamRepository());
    }

    public @Bean
    TeamRepository teamRepository() {
        return new TeamRepository() {
            @Override
            public List<Team> findAll() {
                return null;
            }

            @Override
            public List<Team> findAll(Sort sort) {
                return null;
            }

            @Override
            public List<Team> findAllById(Iterable<Long> iterable) {
                return null;
            }

            @Override
            public <S extends Team> List<S> saveAll(Iterable<S> iterable) {
                return null;
            }

            @Override
            public void flush() {

            }

            @Override
            public <S extends Team> S saveAndFlush(S s) {
                return null;
            }

            @Override
            public <S extends Team> List<S> saveAllAndFlush(Iterable<S> iterable) {
                return null;
            }

            @Override
            public void deleteAllInBatch(Iterable<Team> iterable) {

            }

            @Override
            public void deleteAllByIdInBatch(Iterable<Long> iterable) {

            }

            @Override
            public void deleteAllInBatch() {

            }

            @Override
            public Team getOne(Long aLong) {
                return null;
            }

            @Override
            public Team getById(Long aLong) {
                return null;
            }

            @Override
            public <S extends Team> List<S> findAll(Example<S> example) {
                return null;
            }

            @Override
            public <S extends Team> List<S> findAll(Example<S> example, Sort sort) {
                return null;
            }

            @Override
            public Page<Team> findAll(Pageable pageable) {
                return null;
            }

            @Override
            public <S extends Team> S save(S s) {
                return null;
            }

            @Override
            public Optional<Team> findById(Long aLong) {
                return Optional.empty();
            }

            @Override
            public boolean existsById(Long aLong) {
                return false;
            }

            @Override
            public long count() {
                return 0;
            }

            @Override
            public void deleteById(Long aLong) {

            }

            @Override
            public void delete(Team team) {

            }

            @Override
            public void deleteAllById(Iterable<? extends Long> iterable) {

            }

            @Override
            public void deleteAll(Iterable<? extends Team> iterable) {

            }

            @Override
            public void deleteAll() {

            }

            @Override
            public <S extends Team> Optional<S> findOne(Example<S> example) {
                return Optional.empty();
            }

            @Override
            public <S extends Team> Page<S> findAll(Example<S> example, Pageable pageable) {
                return null;
            }

            @Override
            public <S extends Team> long count(Example<S> example) {
                return 0;
            }

            @Override
            public <S extends Team> boolean exists(Example<S> example) {
                return false;
            }
        };
    }


}