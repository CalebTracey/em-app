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
      key={employee.key}
      actions={<Link to={`/employee/${employee.key}`} />}
    >
      <List.Item.Meta
        avatar={<Avatar src={employee.photo} />}
        title={
          <Link innerRef={ref} to={`/employee/${employee.key}`}>
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
        //onConfirm={() => onRemove}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handlePopCancel}
      >
        <Button
          size="small"
          danger={danger}
          value={employee}
          type="default"
          onClick={() => setShowModal(employee.key)}
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
