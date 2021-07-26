import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import "antd/dist/antd.css";
import useEmployees from "../../hooks/useEmployees";
import EmployeeDetailsCard from "./EmployeeDetailsCard";
import useTeams from "../../hooks/useTeams";

const EmployeeDetails = () => {
  const employee = useSelector((state) => state.employees.employeeSelected);
  const teams = useSelector((state) => state.teams.teamsData);
  return !employee ? (
    <Redirect to="/" />
  ) : (
    <EmployeeDetailsCard employee={employee} teams={teams} />
  );
};

export default EmployeeDetails;
