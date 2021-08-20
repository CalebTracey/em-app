import React, { useState, useEffect } from 'react';
import { Descriptions, Tag, Card, Typography, PageHeader, Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AddTeamDropdown from './add/AddTeamDropdown';
import './Employees.css';
import allActions from '../../redux/actions';
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
const { Text } = Typography;

const EmployeeDetailsCard = ({ employee, teams }) => {
  const [teamName, setTeamName] = useState('No Team');
  const dispatch = useDispatch();
  const setTeamSelected = () => {
    const team = teams.filter(({ id }) => id === employee.team.id);
    dispatch(allActions.teams.teamSelected(team[0]));
  };

  useEffect(() => {
    if (employee.team.teamName !== '') {
      setTeamName(employee.team.teamName);
    }
  }, [employee]);
  return (
    <Card
      key={employee.id}
      style={{ boxShadow: '0 0 2.5em -2em', overflow: 'hidden' }}
      bodyStyle={{ padding: '2.5ch' }}
    >
      <PageHeader
        style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
        title={`${employee.firstName} ${employee.lastName}`}
        className="site-page-header"
        tags={
          employee.team === null ? null : (
            <Link to={`/EMapp/team/${employee.team.id}`} onClick={() => setTeamSelected()}>
              <Tag color="blue">{teamName}</Tag>
            </Link>
          )
        }
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          employee.team ? null : <AddTeamDropdown teams={teams} employee={employee} />,
        ]}
        avatar={{ src: employee.avatar }}
      />
      <Card style={{ boxShadow: '0 0 2.25em -2em' }}>
        <Typography ellipsis>
          <Descriptions
            contentStyle={{ wordBreak: 'break-all' }}
            labelStyle={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              minHeight: '3ch',
              overflowWrap: 'anywhere',
            }}
            bordered="true"
            size="small"
            title={<Text style={{ margin: '.75em' }}>Employee Information</Text>}
          >
            <Descriptions.Item label="Work ID:">
              <Text>{employee.id}</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Email:">
              <Text>{employee.email}</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Telephone:">
              <Text>{employee.phoneNumber}</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Job:">
              <Text>{employee.jobTitle}</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Address:">
              <Text>{employee.address}</Text>
            </Descriptions.Item>
          </Descriptions>
        </Typography>
      </Card>
    </Card>
  );
};

export default EmployeeDetailsCard;

EmployeeDetailsCard.propTypes = {
  employee: PropTypes.objectOf().isRequired,
  teams: PropTypes.objectOf().isRequired,
};
