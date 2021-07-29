import React, { useEffect } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { Menu, Spin } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

const TeamList = ({ clickHandler, teams }) => {
  // const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (teams.length === 0 || undefined) {
      history.push('/');
    }
  }, [history, teams]);

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
  return !teams ? <Spin /> : <Menu.ItemGroup children={listNode} />;
};

export default TeamList;
