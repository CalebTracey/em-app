import React from 'react';
import TeamDetailListItem from '../TeamDetailListItem';

const TeamDetailItemContainer = ({
  team,
  employee,
  setShowModal,
  handleRemoveTeamMember,
  confirmLoading,
}) => {
  return (
    <TeamDetailListItem
      key={employee.id}
      team={team}
      employee={employee}
      setShowModal={setShowModal}
      handleRemoveTeamMember={handleRemoveTeamMember}
      confirmLoading={confirmLoading}
    />
  );
};

export default TeamDetailItemContainer;
