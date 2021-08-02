import './App.css';
import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Layout, Spin, Space } from 'antd';
import useCompany from './hooks/frontend_data/useCompany';
import SideNav from './layout/SideNav';
import { mainHeader } from './layout/MainHeader';
import { ConnectedRouter } from 'connected-react-router';

const Employees = lazy(() => import('./containers/Employees'));
const TeamDeletedPage = lazy(() => import('./components/team/TeamDeletedPage'));
const Preferences = lazy(() => import('./containers/Preferences'));
const Schedule = lazy(() => import('./containers/Schedule'));
const FullSchedule = lazy(() => import('./components/schedule/FullSchedule'));
const CreateTeam = lazy(() => import('./components/team/create/CreateTeam'));
const TeamPage = lazy(() => import('./components/team/TeamPage'));
const AddEmployee = lazy(() => import('./components/employee/AddEmployee'));
const Teams = lazy(() => import('./containers/Teams'));
const EmployeeDetails = lazy(() => import('./components/employee/EmployeeDetails.jsx'));
const ApiContainer = lazy(() => import('./containers/ApiContainer'));

const { Content } = Layout;

const App = ({ history }) => {
  const company = useSelector((state) => state.company);
  useCompany();

  return (
    <ConnectedRouter history={history}>
      <Layout style={{ minHeight: '100vh' }}>
        <SideNav />
        <Layout className="site-layout" style={{ paddingLeft: '12.5rem' }}>
          {/* <Space direction="vertical" style={{ width: '-webkit-fill-available' }}> */}
          {mainHeader({ company })}
          <Content
            style={{
              flex: 'auto',
              margin: '1.5rem 1.5rem',
              // padding: '2.5rem',
              // minHeight: 280,
              boxShadow: '0 0 1.5em -1em',

              background: '#fafafa',
            }}
          >
            <Suspense
              fallback={
                <>
                  <Spin />
                </>
              }
            >
              <Switch>
                <Route exact path="/" component={ApiContainer} />
                <Route exact path="/dashboard" component={ApiContainer} />
                <Route exact path="/preferences" component={Preferences} />
                <Route exact path="/addemployee" component={AddEmployee} />
                <Route exact path="/create-team" component={CreateTeam} />
                <Route exact path="/employees" component={Employees} />
                <Route exact path="/schedule" component={Schedule} />
                <Route exact path="/full-schedule" component={FullSchedule} />
                <Route exact path="/teams" component={Teams} />
                <Route path="/employees/:id" component={EmployeeDetails} />
                <Route path="/team/:teamId" component={TeamPage} />
                <Route exact path="/team-deleted" component={TeamDeletedPage} />
              </Switch>
            </Suspense>
          </Content>
          {/* </Space> */}
        </Layout>
      </Layout>
    </ConnectedRouter>
    // </div>
  );
};

export default App;
