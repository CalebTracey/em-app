import React, { useRef, useState } from 'react';
import { List, Avatar, Button, Popconfirm } from 'antd';

import { Link } from 'react-router-dom';

const TeamDetailListItem = ({
  team,
  employee,
  setShowModal,
  handleRemoveTeamMember,
  handlePopCancel,
  confirmLoading,
  innerRef,
  nodeMap,
}) => {
  const [danger, setDanger] = useState(false);
  const ref = useRef();
  return (
    // <div>
    <List.Item
      key={employee.id}
      actions={<Link to={`/employee/${employee.id}`} />}
    >
      <List.Item.Meta
        avatar={<Avatar src={employee.avatar} />}
        title={
          <Link innerRef={ref} to={`/employee/${employee.id}`}>
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

    // </div>
  );
};

export default TeamDetailListItem;
