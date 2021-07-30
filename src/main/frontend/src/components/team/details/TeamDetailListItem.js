import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { List, Avatar, Button, Popconfirm } from 'antd';
import { NavLink } from 'react-router-dom';
import allActions from '../../../redux/actions';

const TeamDetailListItem = ({
  team,
  employee,
  setShowModal,
  handleRemoveTeamMember,
  confirmLoading,
}) => {
  const [danger, setDanger] = useState(false);
  const dispatch = useDispatch();
  return (
    <List.Item key={employee.id}>
      <List.Item.Meta
        avatar={<Avatar src={employee.avatar} />}
        title={
          <NavLink to={`/employee/${employee.id}`}>
            {`${employee.firstName} 
                    ${employee.lastName}`}
          </NavLink>
        }
        description={employee.email}
        onClick={() => dispatch(allActions.employees.employeeSelected(employee))}
      />
      <Popconfirm
        title={`Are you sure?`}
        okText="Yes"
        onConfirm={() => handleRemoveTeamMember(employee, team)}
        okButtonProps={{ loading: confirmLoading }}
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
