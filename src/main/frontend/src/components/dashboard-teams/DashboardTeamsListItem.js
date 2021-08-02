import { List, Card, Typography, Badge, Popover } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import allActions from '../../redux/actions/index';
const { Title, Text } = Typography;

const DashboardTeamsListItem = ({ team }) => {
  const [taskArr, setTaskArr] = useState([]);
  const [taskNameArr, setTaskNameArr] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (team.teamTasks !== undefined) {
      setTaskArr(team.teamTasks);
    }
  }, [taskArr, taskNameArr, setTaskNameArr, team]);

  const dispatch = useDispatch();
  return (
    <Link to={`/team/${team.id}`}>
      <List.Item
        key={team.id}
        onClick={() => dispatch(allActions.teams.teamSelected(team))}
        style={{ padding: 0 }}
      >
        <Card
          bordered="false"
          hoverable
          style={{
            // overflow: 'hidden',
            margin: '.75em',
            width: 'auto',
            // minWidth: '15rem',
          }}
          bodyStyle={{ padding: '.5ch' }}
        >
          <Title style={{ fontSize: '1.25em', textAlign: 'center' }} level={3}>
            {team.teamName}
          </Title>
          <Card bodyStyle={{ padding: '1em' }}>
            <List>
              <Popover
                placement="left"
                content={team.employees.map((e) => (
                  <p>{`${e.id} - ${e.firstName} ${e.lastName}: ${e.jobTitle}`}</p>
                ))}
                title="Team Members"
              >
                <List.Item style={{ fontSize: '1em', padding: '.25ch' }}>
                  <Text>Members: </Text>
                  <Badge className="team-badge" count={team.employees.length} />
                </List.Item>
              </Popover>
              <Popover
                placement="left"
                content={taskArr.map((task) => (
                  <p>{`${task.taskStart} - ${task.taskEnd}: ${task.description}`}</p>
                ))}
                title="Tasks"
              >
                <List.Item style={{ fontSize: '1em', padding: '.25ch' }}>
                  <Text>Tasks: </Text>
                  <Badge className="team-badge" count={team.teamTasks.length} />
                </List.Item>
              </Popover>
            </List>
          </Card>
        </Card>
      </List.Item>
    </Link>
  );
};

export default DashboardTeamsListItem;
