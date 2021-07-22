import React, { useState, Suspense, lazy, createElement } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import 'rc-texty/assets/index.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Typography } from 'antd';

import Login from './login/Login';
import useToken from './hooks/useToken';
import useCompany from './hooks/useCompany';
import SideNav from './components/SideNav';
import MainHeader from './components/MainHeader';
import useEmployees from './hooks/frontend_data_creator/useEmployees';

const Employees = lazy(() => import('./containers/Employees'));
// const TeamPage = lazy(() => import('./components/team/TeamPage'));
// const TeamDetails = lazy(() => import('./components/team/TeamDetails'));
const EmployeeDetails = lazy(() => import('./components/employee/EmployeeDetails'));
// const Teams = lazy(() => import('./containers/Teams'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Preferences = lazy(() => import('./components/Preferences'));
const CreateTeam = lazy(() => import('./components/team/CreateTeam'));
const AddEmployee = lazy(() => import('./components/employee/AddEmployee'));

const { Content } = Layout;

const App = () => {
    const company = useSelector(state => state.company)
    //const [employeesLoaded, teamsLoaded] = useEmployees();
    const [companyLoaded] = useCompany();
    // const { token, setToken } = useToken();
    const [collapsed, setCollapsed] = useState(false);
    const history = useHistory();
    useEmployees();
    // Side-menu toggle
    const toggle = (event) => {
        event.preventDefault();
        setCollapsed(!collapsed);
    };

    // const employeesClicked = () => {
    //     history.push('/employees')
    // }

    return (
            <Layout style={{ minHeight: '100vh' }}>
                {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
                    <SideNav
                        // employeesClicked={employeesClicked}
                        collapsed={collapsed}
                    />
                {/* </ErrorBoundary > */}
                <div>
                    <MainHeader
                        createElement={createElement}
                        collapsed={collapsed}
                        company={company}
                        toggle={toggle}
                    />
                    <Layout className="site-layout" >
                        <Content
                            // props={this.state.props}
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                                background: '#fafafa',
                            }}>
                            {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Switch>
                                        <Route exact path="/" component={Dashboard} />
                                        <Route exact path="/dashboard" component={Dashboard} />
                                        <Route exact path="/preferences" component={Preferences} />
                                        <Route exact path="/addemployee" component={AddEmployee} />
                                        <Route exact path="/createteam" component={CreateTeam} />
                                        <Route exact path="/employees" component={Employees} />
                                        <Route path="/employee/:id" component={EmployeeDetails} />
                                        {/* <Route path="/employee/:employeeUrl" component={<Employees employee={setSelectedEmployee} />} />} */}
                                        {/* {!selectedTeamKey ? <Route path="/team/:teamKey" component={TeamPage} /> :
                                <Route path="/team/:teamKey" component={<Teams setSelectedTeamKey={setSelectedTeamKey} />}
                                />} */}
                                    </Switch>
                                </Suspense>
                            {/* </ErrorBoundary> */}
                        </Content>
                    </Layout>
                </div>
            </Layout >
    );
}

export default App;


