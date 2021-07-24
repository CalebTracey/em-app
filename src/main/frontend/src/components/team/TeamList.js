import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

const TeamList = ({ teams, clickHandler }) => {
  // const teams = useSelector(state => state.teams.teamData);

  const listNode = teams.map((team) => {
    return (
      <Menu.Item
        key={team.teamName}
        icon={<TeamOutlined />}
        title={team.teamName}
        onClick={() => clickHandler(team)}
      >
        {team.teamName}
        <Link to={`/team/${team.id}`} />
      </Menu.Item>
    );
  });
  return <Menu.ItemGroup children={listNode} />;
};

export default TeamList;
