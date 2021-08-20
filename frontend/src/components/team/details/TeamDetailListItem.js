import React, { useState } from 'react';
import { List, Avatar, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

const TeamDetailListItem = ({
  team,
  employee,
  setShowModal,
  handleRemoveTeamMember,
  fetchFullEmployeeInfo,
}) => {
  const [danger, setDanger] = useState(false);

  return (
    <List.Item key={employee.id}>
      <List.Item.Meta
        avatar={<Avatar src={employee.avatar} />}
        title={
          <Link
            // eslint-disable-next-line no-underscore-dangle
            onClick={() => fetchFullEmployeeInfo(employee._links.self.href)}
            to={`/EMapp/employees/${employee.id}`}
          >
            {`${employee.firstName} 
                    ${employee.lastName}`}
          </Link>
        }
        description={employee.email}
      />
      <Popconfirm
        title="Are you sure?"
        okText="Yes"
        onConfirm={() => handleRemoveTeamMember(employee, team)}
      >
        <Button
          size="small"
          danger={danger}
          value={employee}
          type="default"
          onClick={() => setShowModal(employee.id)}
          onMouseEnter={() => setDanger(true)}
          onMouseLeave={() => setDanger(false)}
        >
          Remove
        </Button>
      </Popconfirm>
    </List.Item>
  );
};

export default TeamDetailListItem;
