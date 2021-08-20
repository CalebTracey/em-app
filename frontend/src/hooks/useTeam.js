import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useTeam = (teamKey) => {
  const [team, setTeam] = useState([]);
  const teams = useSelector((state) => state.teams.teamData);

  useEffect(() => {
    const k = parseInt(teamKey, 10);
    if (teams) {
      const teamMatch = teams.find(({ key }) => key === k / 8);
      setTeam(teamMatch);
    }
  }, [team, teams, teamKey]);

  return [team];
};

export default useTeam;
