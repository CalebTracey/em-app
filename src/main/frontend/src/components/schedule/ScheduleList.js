import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

export default ScheduleList = ({ employees, clickHandler }) => {
  const listNode = employees.map((employee) => {
    return (
      <Menu.Item
        key={employee.id}
        icon={<UserOutlined />}
        style={{ cursor: "pointer" }}
      >
        {`${employee.lastName}, ${employee.firstName}`}
        <Link
          key={employee.id}
          to={`/employee/${employee.id}`}
          onClick={() => clickHandler(employee)}
        />
      </Menu.Item>
    );
  });
  return <Menu.ItemGroup children={listNode} />;
};
