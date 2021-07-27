import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../redux/actions/index";
import { apiGet } from "../apis/apiGet";
import TeamList from "../components/team/TeamList";

const Teams = () => {
  const teams = useSelector((state) => state.teams.teamData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (teams.length === 0) {
      apiGet({
        url: "teams",
        data: null,
      }).then((res) => {
        console.log(res);
        const sort = res.data._embedded.teamList.sort((a, b) =>
          a.id > b.id ? 1 : b.id > a.id ? -1 : 0
        );
        dispatch(allActions.teams.teamData(sort));
      });
    }
  }, [teams]);

  const clickHandler = (team) => {
    if (team !== null) {
      dispatch(allActions.teams.teamSelected(team));
    }
  };
  return <TeamList key="team-list" clickHandler={clickHandler} />;
};

export default Teams;
