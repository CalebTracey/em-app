import React, { useState, useEffect } from 'react';
import { Descriptions, Tag, Skeleton, Card, Typography, PageHeader, Button, Space } from 'antd';
import PropTypes from 'prop-types';
import AddTeamDropdown from './AddTeamDropdown';
import './Employees.css';

const { Title, Text } = Typography;

const EmployeeDetailsCard = ({ employee, teams }) => {
  const [teamName, setTeamName] = useState('No Team');

  useEffect(() => {
    if (employee.teams.length !== 0) {
      setTeamName(employee.teams[0].teamName);
    }
  }, [employee]);
  return (
    <Card
      key={employee.id}
      style={{ boxShadow: '0 0 2.5em -2em', overflow: 'hidden' }}
      bodyStyle={{ padding: '2.5ch' }}
    >
      {/* <div key={employee.id}> */}
      <PageHeader
        style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
        title={`${employee.firstName} ${employee.lastName}`}
        className="site-page-header"
        // subTitle="This is a subtitle"
        tags={<Tag color="blue">{teamName}</Tag>}
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
          <AddTeamDropdown teams={teams} employee={employee} />,
        ]}
        avatar={{ src: employee.avatar }}
      ></PageHeader>

      {/* Button key="1" type="primary"> */}

      {/* <Avatar shape="square" size={64} src={employee.avatar} /> */}
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
            <Descriptions.Item label={'Work ID:'}>
              <Text>{employee.id}</Text>
            </Descriptions.Item>
            <Descriptions.Item label={'Email:'}>
              <Text>{employee.email}</Text>
            </Descriptions.Item>
            <Descriptions.Item label={'Telephone:'}>
              <Text>{employee.phoneNumber}</Text>
            </Descriptions.Item>
            <Descriptions.Item label={'Job:'}>
              <Text>{employee.jobTitle}</Text>
            </Descriptions.Item>
            <Descriptions.Item label={'Address:'}>
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
