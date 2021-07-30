package com.dashboard.backend.task;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import com.dashboard.backend.team.Team;
import com.dashboard.backend.team.TeamController;
import com.dashboard.backend.team.TeamModel;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;


@Component
public class TeamTaskModelAssembler extends RepresentationModelAssemblerSupport<TeamTask, TeamTaskModel> {

    public TeamTaskModelAssembler() {
        super(TeamTaskService.class, TeamTaskModel.class);
    }

    @Override
    public TeamTaskModel toModel(TeamTask teamTask) {

        TeamTaskModel teamTaskModel = instantiateModel(teamTask);

        teamTaskModel.add(
                linkTo(methodOn(TeamTaskController.class)
                        .getTeamTaskById(teamTask.getId()))
                .withSelfRel());

//        if(teamTask.getTeam() == null) {
//            teamTaskModel.setTeam(Objects);
//        }


        teamTaskModel.setId(teamTask.getId());
        teamTaskModel.setName(teamTaskModel.getName());
        teamTaskModel.setDescription(teamTask.getDescription());
        teamTaskModel.setClient(teamTask.getClient());
        teamTaskModel.setClientPhone(teamTask.getClientPhone());
        teamTaskModel.setTaskStart(teamTask.getTaskStart());
        teamTaskModel.setTaskEnd(teamTask.getTaskEnd());
        teamTaskModel.setDuration(teamTask.getDuration());
        teamTaskModel.setRemaining(teamTask.getRemaining());
        teamTaskModel.setTeam(toTeamModel(teamTask.getTeam()));
        return teamTaskModel;
    }

    @Override
    public CollectionModel<TeamTaskModel> toCollectionModel(Iterable<? extends TeamTask> entities) {

        CollectionModel<TeamTaskModel> teamTaskModels =
                super.toCollectionModel(entities);

        return teamTaskModels;
    }

    private TeamModel toTeamModel(Team team) {
        if (team == null) {
            TeamModel empty = new TeamModel();
            return empty;
        }
        return TeamModel.builder()
                        .id(team.getId())
                        .teamName(team.getTeamName())
                        .build().add(
                                linkTo(methodOn(TeamController.class)
                                        .getTeamById(team.getId()))
                                        .withSelfRel());
    }
}
