import React from 'react';
import TeamDetailListItem from './TeamDetailListItem';

const TeamDetailItemContainer = ({
  team,
  employee,
  setShowModal,
  handleRemoveTeamMember,
  handlePopCancel,
  confirmLoading,
}) => {
  return (
    <TeamDetailListItem
      team={team}
      employee={employee}
      setShowModal={setShowModal}
      handleRemoveTeamMember={handleRemoveTeamMember}
      handlePopCancel={handlePopCancel}
      confirmLoading={confirmLoading}
    />
  );
};

export default TeamDetailItemContainer;
