import "./App.css";
import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Layout, Spin } from "antd";
import useCompany from "./hooks/frontend_data/useCompany";
import SideNav from "./layout/SideNav";
import { mainHeader } from "./layout/MainHeader";

const Employees = lazy(() => import("./containers/Employees"));
const Dashboard = lazy(() => import("./layout/dashboard/Dashboard"));
const Preferences = lazy(() => import("./containers/Preferences"));
const Schedule = lazy(() => import("./containers/Schedule"));
const FullSchedule = lazy(() => import("./components/schedule/FullSchedule"));
const CreateTeam = lazy(() => import("./components/team/CreateTeam"));
const TeamPage = lazy(() => import("./components/team/TeamPage"));
const AddEmployee = lazy(() => import("./components/employee/AddEmployee"));
const Teams = lazy(() => import("./containers/Teams"));
const EmployeeDetails = lazy(() =>
  import("./components/employee/EmployeeDetails")
);
const { Content } = Layout;

const App = () => {
  const company = useSelector((state) => state.company);
  const [companyLoaded] = useCompany();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideNav />
      <Layout className="site-layout" style={{ paddingLeft: "200px" }}>
        {mainHeader({ company })}
        <Content
          style={{
            flex: "auto",
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#fafafa",
          }}
        >
          <Suspense
            fallback={
              <div>
                <Spin />
              </div>
            }
          >
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/preferences" component={Preferences} />
              <Route exact path="/addemployee" component={AddEmployee} />
              <Route exact path="/create-team" component={CreateTeam} />
              <Route exact path="/employees" component={Employees} />
              <Route exact path="/schedule" component={Schedule} />
              <Route exact path="/full-schedule" component={FullSchedule} />
              <Route exact path="/teams" component={Teams} />
              <Route path="/employee/:id" component={EmployeeDetails} />
              <Route path="/team/:teamId" component={TeamPage} />
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
    // </div>
  );
};

export default App;
