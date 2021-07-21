import React, { useState, useEffect, Suspense, lazy, createElement } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, NavLink, useHistory } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary'
import 'rc-texty/assets/index.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Typography } from 'antd';

import Login from '../login/Login';
import useToken from '../hooks/useToken';
import useCompany from '../hooks/useCompany';
import SideNav from './SideNav';
import MainHeader from './MainHeader';

const Employees = lazy(() => import('../containers/Employees'));
const TeamPage = lazy(() => import('./team/TeamPage'));
const TeamDetails = lazy(() => import('./team/TeamDetails'));
const EmployeeDetails = lazy(() => import('./employee/EmployeeDetails'));
const Teams = lazy(() => import('../containers/Teams'));
const Dashboard = lazy(() => import('./Dashboard'));
const Preferences = lazy(() => import('./Preferences'));
const CreateTeam = lazy(() => import('./team/CreateTeam'));
const AddEmployee = lazy(() => import('./employee/AddEmployee'));

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

const App = ({ ConfigProvider }) => {
    const company = useSelector(state => state.company)
    //const [employeesLoaded, teamsLoaded] = useEmployees();
    const [companyLoaded] = useCompany();
    const { token, setToken } = useToken();
    const [collapsed, setCollapsed] = useState(false);
    const [selectedTeamKey, setSelectedTeamKey] = useState({});
    const history = useHistory();
    const [props, setProps] = useState({...state => state});
    
    
    // Side-menu toggle
    const toggle = (event) => {
        event.preventDefault();
        setCollapsed(!collapsed);
        setProps({props, ...event});
    };

    const employeesClicked = () => {
        history.push('/employees')
    }
    // const navToEmployees = () => history.push('/employees');

    return (
            <Layout style={{ minHeight: '100vh' }}>
                {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
                    <SideNav
                    props={props}
                        employeesClicked={employeesClicked}
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
                                        <Route path="/employee/:employeeUrl" component={EmployeeDetails} />
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


