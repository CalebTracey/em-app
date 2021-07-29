import React from 'react';
import { Dropdown, Button, Menu, message } from 'antd';
import PropTypes from 'prop-types';
import { DownOutlined, TeamOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../redux/actions';

function AddTeamDropdown({ employee }) {
  const teams = useSelector((state) => state.teams.teamData);
  const dispatch = useDispatch();

  const success = (text) => {
    message.success(text);
  };

  const addToTeam = (selected) => {
    const selectedTeam = teams[selected.key];

    const updatedEmployees = selectedTeam.employee === undefined ? [] : selectedTeam.employee;

    updatedEmployees.push(employee);
    const updatedTeam = {
      teamName: selectedTeam.teamName,
      id: selectedTeam.id,
      employees: updatedEmployees,
    };
    dispatch(allActions.teams.teamUpdated(updatedTeam));
    success(`${employee.firstName} ${updatedEmployees.lastName} added to ${updatedTeam.teamName}`);
  };

  const items = teams.map((team) => (
    <Menu.Item key={team.id} icon={<TeamOutlined />} onClick={(t) => addToTeam(t)}>
      {team.teamName}
    </Menu.Item>
  ));

  const menu = <Menu>{items}</Menu>;

  return (
    <Dropdown overlay={menu}>
      <Button>
        Add to Team <DownOutlined />
      </Button>
    </Dropdown>
  );
}
AddTeamDropdown.propTypes = {
  employee: PropTypes.objectOf().isRequired,
};
export default AddTeamDropdown;
