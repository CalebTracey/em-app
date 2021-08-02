import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { List, Avatar, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import allActions from '../../../redux/actions';

const TeamDetailListItem = ({ team, employee, setShowModal, handleRemoveTeamMember }) => {
  const [danger, setDanger] = useState(false);
  const dispatch = useDispatch();

  return (
    <List.Item key={employee.id}>
      <List.Item.Meta
        avatar={<Avatar src={employee.avatar} />}
        title={
          <Link
            onClick={() => dispatch(allActions.employees.employeeSelected(employee))}
            to={`/employees/${employee.id}`}
          >
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
