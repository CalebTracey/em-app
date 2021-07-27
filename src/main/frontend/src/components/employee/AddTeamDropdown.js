import React from "react";
import { Dropdown, Button, Menu, message } from "antd";
import { DownOutlined, TeamOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/actions";

const AddTeamDropdown = ({ employee }) => {
  const teams = useSelector((state) => state.teams.teamData);
  const dispatch = useDispatch();

  const success = (text) => {
    message.success(text);
  };

  const addToTeam = (selected) => {
    const selectedTeam = teams[selected.key];

    const updatedEmployees =
      selectedTeam.employees === undefined ? [] : selectedTeam.employees;

    updatedEmployees.push(employee);
    const updatedTeam = {
      teamName: selectedTeam.teamName,
      id: selectedTeam.id,
      employees: updatedEmployees,
    };
    dispatch(allActions.teams.teamUpdated(updatedTeam));
    success(
      `${employee.firstName} ${employee.lastName} added to ${updatedTeam.teamName}`
    );
  };

  const items = teams.map((team) => {
    return (
      <Menu.Item
        key={team.id}
        icon={<TeamOutlined />}
        onClick={(team) => addToTeam(team)}
      >
        {team.teamName}
      </Menu.Item>
    );
  });

  const menu = <Menu>{items}</Menu>;

  return (
    <Dropdown overlay={menu}>
      <Button>
        Add to Team <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default AddTeamDropdown;
