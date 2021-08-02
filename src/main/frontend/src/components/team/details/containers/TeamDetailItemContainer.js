import React, { Suspense } from 'react';
import TeamDetailListItem from '../TeamDetailListItem';
import { Skeleton } from 'antd';

const TeamDetailItemContainer = ({
  team,
  employee,
  setShowModal,
  handleRemoveTeamMember,
  confirmLoading,
}) => {
  return (
    <Suspense fallback={<Skeleton />}>
      <TeamDetailListItem
        key={employee.id}
        team={team}
        employee={employee}
        setShowModal={setShowModal}
        handleRemoveTeamMember={handleRemoveTeamMember}
        confirmLoading={confirmLoading}
      />
    </Suspense>
  );
};

export default TeamDetailItemContainer;
