package com.dashboard.backend.team;

import com.dashboard.backend.employee.Employee;
import com.dashboard.backend.employee.EmployeeController;
import com.dashboard.backend.employee.EmployeeModel;
import com.dashboard.backend.task.TeamTask;
import com.dashboard.backend.task.TeamTaskController;
import com.dashboard.backend.task.TeamTaskModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class TeamModelAssembler extends RepresentationModelAssemblerSupport<Team, TeamModel> {

    public TeamModelAssembler() {
        super(TeamService.class, TeamModel.class);
    }

    @Override
    public TeamModel toModel(Team team) {

        TeamModel teamModel = instantiateModel(team);

        teamModel.add(
                linkTo(methodOn(TeamController.class)
                        .getTeamById(team.getId()))
                            .withSelfRel());

        if (team.getEmployees() == null ) {
            teamModel.setEmployees(Collections.emptyList());
        } else {
            teamModel.setEmployees(toEmployeeModel(team.getEmployees()));
        }

        if (team.getTeamTasks() == null ) {
            teamModel.setTeamTasks(Collections.emptyList());
        } else {
            teamModel.setTeamTasks(toTeamTaskModel(team.getTeamTasks()));
        }

        teamModel.setId(team.getId());
        teamModel.setTeamName(team.getTeamName());
//        teamModel.setEmployees(toEmployeeModel(team.getEmployees()));
//        teamModel.setTeamTasks(toTeamTaskModel(team.getTeamTasks()));

        return teamModel;
    }

    @Override
    public CollectionModel<TeamModel> toCollectionModel(Iterable<? extends Team> entities){
        CollectionModel<TeamModel> teamModels = super.toCollectionModel(entities);

        teamModels.add(linkTo(methodOn(TeamController.class).getAllTeams()).withSelfRel());

        return teamModels;
    }

    private List<TeamTaskModel> toTeamTaskModel(List<TeamTask> teamTasks) {
        if (teamTasks.isEmpty())
            return Collections.emptyList();

        return teamTasks.stream()
                .map(teamTask -> TeamTaskModel.builder()
                        .id(teamTask.getId())
                        .name(teamTask.getName())
                        .clientPhone(teamTask.getClientPhone())
                        .client(teamTask.getClient())
                        .remaining(teamTask.getRemaining())
                        .duration(teamTask.getDuration())
                        .description(teamTask.getDescription())
                        .taskEnd(teamTask.getTaskEnd())
                        .taskStart(teamTask.getTaskStart())
//                .team(toModel(teamTask.getTeam()))
                        .build().add(
                                linkTo(methodOn(TeamTaskController.class)
                                        .getTeamTaskById(teamTask.getId()))
                                        .withSelfRel()
                        )).collect(Collectors.toList());
    }

    private List<EmployeeModel> toEmployeeModel(List<Employee> employees) {
        if (employees.isEmpty())
            return Collections.emptyList();

        return employees.stream()
                .map(employee -> EmployeeModel.builder()
                        .id(employee.getId())
                        .firstName(employee.getFirstName())
                        .lastName(employee.getLastName())
                        .avatar(employee.getAvatar())
                        .build()
                        .add(linkTo(
                                methodOn(EmployeeController.class)
                                        .getEmployeeById(employee.getId()))
                                .withSelfRel()))
                .collect(Collectors.toList());
    }

}

