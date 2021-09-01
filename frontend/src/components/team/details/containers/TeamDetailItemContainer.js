/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useDispatch } from 'react-redux';
import { List } from 'antd';
import axios from 'axios';
import TeamDetailListItem from '../TeamDetailListItem';
import allActions from '../../../../redux/actions';

const TeamDetailItemContainer = ({ team, setShowModal, handleRemoveTeamMember }) => {
  const dispatch = useDispatch();

  const fetchFullEmployeeInfo = async (url) => {
    await axios
      .get(url)
      .then((res) => {
        dispatch(allActions.employees.employeeSelected(res.data));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  const teamList = team.employees.map((e) => (
    <TeamDetailListItem
      team={team}
      key={e.id}
      employee={e}
      setShowModal={setShowModal}
      fetchFullEmployeeInfo={fetchFullEmployeeInfo}
      handleRemoveTeamMember={handleRemoveTeamMember}
    />
  ));

  return <List>{teamList}</List>;
};

export default TeamDetailItemContainer;
