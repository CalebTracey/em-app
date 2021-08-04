import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserOutlined } from '@ant-design/icons';

const EmployeeList = ({ employees, clickHandler }) => {
  const listNode = employees.map((employee) => (
    <Menu.Item key={employee.id} icon={<UserOutlined />} style={{ cursor: 'pointer' }}>
      {`${employee.lastName}, ${employee.firstName}`}
      <Link
        key={employee.id}
        to={`/EMapp/employees/${employee.id}`}
        onClick={() => clickHandler(employee)}
      />
    </Menu.Item>
  ));
  return <Menu.ItemGroup>{listNode}</Menu.ItemGroup>;
};

export default EmployeeList;

EmployeeList.propTypes = {
  employee: PropTypes.objectOf().isRequired,
  clickHandler: PropTypes.func,
};
