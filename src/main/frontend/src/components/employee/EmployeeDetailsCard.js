import React from "react";
import { Descriptions, Avatar, Card, Typography } from "antd";
import AddTeamDropdown from "./AddTeamDropdown";

const { Title } = Typography;

export const EmployeeDetailsCard = ({ employee, teams }) => {
  return (
    <Card key={employee.id}>
      <div key={employee.id}>
        <div>
          <Title
            level={3}
          >{`${employee.firstName} ${employee.lastName}`}</Title>
        </div>
        <div>
          <Avatar shape="square" size={64} src={employee.avatar} />
        </div>
        <div>
          <AddTeamDropdown teams={teams} employee={employee} />
        </div>
        <div>
          <Descriptions title="Employee Information" bordered>
            <Descriptions.Item label="Work ID">{employee.id}</Descriptions.Item>
            <Descriptions.Item label="Email">
              {employee.email}
            </Descriptions.Item>
            <Descriptions.Item label="Telephone">
              {employee.phoneNumber}
            </Descriptions.Item>
            <Descriptions.Item label="Job">
              {employee.jobTitle}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              {employee.address}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </Card>
  );
};
