import React, { useState } from 'react';
import { List, Avatar, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

const TeamDetailListItem = ({
  team,
  employee,
  setShowModal,
  handleRemoveTeamMember,
  handlePopCancel,
  confirmLoading,
}) => {
  const [danger, setDanger] = useState(false);
  return (
    <List.Item key={employee.id}>
      <List.Item.Meta
        avatar={<Avatar src={employee.avatar} />}
        title={
          <Link to={`/employee/${employee.id}`}>
            {`${employee.firstName} 
                    ${employee.lastName}`}
          </Link>
        }
        description={employee.email}
      />
      <Popconfirm
        title={`Are you sure?`}
        okText="Yes"
        onConfirm={() => handleRemoveTeamMember(employee, team)}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handlePopCancel}
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
