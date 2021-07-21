import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

const TeamList = ({ setSelectedTeamKey }) => {
    const teams = useSelector(state => state.teams.teamData);
    const [isLoading, setIsLoading] = useState(true);

    return (
        !isLoading ? "Loading..." : teams.map((t) => {
            return (<Menu.Item key={t.key * 8} icon={<TeamOutlined />} title={t.teamName}
                onClick={() => setSelectedTeamKey(t.key)}>
                {t.teamName}
                <NavLink key={t.key * 8} to={`/team/${t.key * 8}`} />
            </Menu.Item>
            )
        })
    );
};

export default TeamList;