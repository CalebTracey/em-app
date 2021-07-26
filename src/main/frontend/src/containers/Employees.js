import React, { useState, useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import allActions from "../redux/actions/index";
import useEmployees from "../hooks/useEmployees";
import { Spin } from "antd";

const EmployeeList = lazy(() => import("../components/employee/EmployeeList"));

const Employees = () => {
  const employees = useSelector((state) => state.employees.employeeData);
  const selected = useSelector((state) => state.employees.employeeSelected);
  const dispatch = useDispatch();

  useEmployees();

  useEffect(() => {
    if (employees) {
    }
  }, [employees]);

  const clickHandler = (employee) => {
    if (employee !== null) {
      dispatch(allActions.employees.employeeSelected(employee));
    }
  };
  return (
    <Suspense
      fallback={
        <div>
          <Spin />
        </div>
      }
    >
      <EmployeeList
        key="employee-list"
        clickHandler={clickHandler}
        employees={employees}
      />
    </Suspense>
  );
};

export default Employees;
