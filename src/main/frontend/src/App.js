import React, {
  useState,
  Suspense,
  lazy,
  createElement,
} from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import 'rc-texty/assets/index.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import Login from './login/Login';
import useToken from './hooks/useToken';
import useCompany from './hooks/frontend_data/useCompany';
import SideNav from './components/SideNav';
import MainHeader from './components/MainHeader';
import useWindowDimensions from './hooks/useWindowDimensions';

const Employees = lazy(() => import('./containers/Employees'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Preferences = lazy(() => import('./components/Preferences'));
const CreateTeam = lazy(() => import('./components/team/CreateTeam'));
const AddEmployee = lazy(() =>
  import('./components/employee/AddEmployee'),
);
const TeamPage = lazy(() => import('./components/team/TeamPage'));
const EmployeeDetails = lazy(() =>
  import('./components/employee/EmployeeDetails'),
);

const { Content } = Layout;

const App = () => {
  const company = useSelector((state) => state.company);
  const [companyLoaded] = useCompany();
  const [collapsed, setCollapsed] = useState(false);
  const { height, width } = useWindowDimensions();

  const toggle = (event) => {
    event.preventDefault();
    setCollapsed(!collapsed);
  };

  // const contentWidth = () => {

  // }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideNav collapsed={collapsed} />
      <Layout className="site-layout" style={{ marginLeft: '200px' }}>
        <MainHeader
          className="site-layout-background"
          createElement={createElement}
          collapsed={collapsed}
          company={company}
          toggle={toggle}
        />
        <Content
          className="site-layout-background"
          style={{
            flex: 'auto',
            marginLeft: '200px',
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#fafafa',
          }}
        >
          <Suspense fallback="Loading...">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route
                exact
                path="/preferences"
                component={Preferences}
              />
              <Route
                exact
                path="/addemployee"
                component={AddEmployee}
              />
              <Route
                exact
                path="/createteam"
                component={CreateTeam}
              />
              <Route exact path="/employees" component={Employees} />
              <Route
                path="/employee/:employeeId"
                component={EmployeeDetails}
              />
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
