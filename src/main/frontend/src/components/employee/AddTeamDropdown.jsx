import React, { Fragment } from 'react';
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

  const addToTeam = (team) => {
    const selectedTeam = teams[team.key];
    const updatedEmployees = [...selectedTeam.employees, employee];

    const updatedTeam = {
      teamName: selectedTeam.teamName,
      id: selectedTeam.id,
      employees: updatedEmployees,
    };
    dispatch(allActions.teams.teamUpdated(updatedTeam));
    success(`${employee.firstName} ${updatedEmployees.lastName} added to ${updatedTeam.teamName}`);
  };

  const menuItems = teams.map((team) => (
    <Fragment key={`${team.teamName}-${team.id}`}>
      <Menu.Item key={team.id} identifier={team.id - 1} icon={<TeamOutlined />} onClick={addToTeam}>
        {team.teamName}
      </Menu.Item>
    </Fragment>
  ));

  const menu = <Menu>{menuItems}</Menu>;

  return (
    <Dropdown overlay={menu}>
      <Button>
        <>
          Add to Team <DownOutlined />
        </>
      </Button>
    </Dropdown>
  );
}
AddTeamDropdown.propTypes = {
  employee: PropTypes.objectOf().isRequired,
};
export default AddTeamDropdown;
