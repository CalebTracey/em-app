import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Menu, Spin } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

const TeamList = ({ clickHandler, teams }) => {
  const listNode =
    teams.length <= 1 ? (
      <Redirect to="/" />
    ) : (
      teams.map((team) => {
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
      })
    );

  return !teams ? <Spin /> : <Menu.ItemGroup>{listNode}</Menu.ItemGroup>;
};

export default TeamList;
