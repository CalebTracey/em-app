import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../redux/actions/index";
import { EmployeeList } from "../components/employee/EmployeeList";
import { apiGet } from "../apis/apiGet";

export const Employees = () => {
  const employees = useSelector((state) => state.employees.employeeData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (employees.length === 0) {
      apiGet({
        url: "employees",
        headers: null,
        data: null,
      }).then((res) => {
        const sort = res.data._embedded.employeeList.sort((a, b) =>
          a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
        );
        dispatch(allActions.employees.employeeData(sort));
      });
    }
  }, [employees]);

  const clickHandler = (employee) => {
    if (employee !== null) {
      dispatch(allActions.employees.employeeSelected(employee));
    }
  };
  return <EmployeeList clickHandler={clickHandler} employees={employees} />;
};

export default Employees;
