import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import { EmployeeTeamCard } from './EmployeeTeamCard';
import EmployeeDetailsCard from './EmployeeDetailsCard';

// eslint-disable-next-line react/prop-types
const EmployeeCardContainer = ({ employee, teams }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [relevantTeams, setRelevantTeams] = useState([]);

  useEffect(() => {
    if (!teams === undefined || !teams.length === 0) {
      const res = teams.map((team) => ({
        ...team,
        teamMembers: team.teamMembers.filter(({ id }) => id === employee.id),
      }));
      if (res) {
        setRelevantTeams(res);
      }
    }

    return () => setIsLoading(false);
  }, [teams, employee]);

  return isLoading ? (
    <Spin />
  ) : (
    <div>
      <EmployeeTeamCard employee={employee} teams={relevantTeams} />
      <EmployeeDetailsCard employee={employee} teams={teams} />
    </div>
  );
};
export default EmployeeCardContainer;

EmployeeCardContainer.propTypes = {
  teams: PropTypes.objectOf().isRequired,
  employee: PropTypes.objectOf().isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  employees: PropTypes.objectOf().isRequired,
};
