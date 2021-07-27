import { Button } from "antd";
import Layout from "antd/lib/layout/layout";
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const company = useSelector((state) => state.company);
  const teams = useSelector((state) => state.teams);
  const state = useSelector((state) => state.state);

  return (
    <Layout>
      <div>Dashboard1234</div>
      <div>{company.companyName}</div>
      <div>
        <Button type="primary"></Button>
      </div>
    </Layout>
  );
};

export default Dashboard;
