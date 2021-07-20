import React, { useEffect, useState, Suspense, lazy, createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';
import 'rc-texty/assets/index.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Typography } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    HomeOutlined,
    TeamOutlined,
    PlusOutlined
} from '@ant-design/icons';

import Login from '../login/Login';
import useToken from '../hooks/useToken';
import useEmployees from '../hooks/useEmployees';
import useCompany from '../hooks/useCompany';
import EmployeeList from './employee/EmployeeList';

const EmployeeDetails = lazy(() => import('./employee/EmployeeDetails'));
const TeamPage = lazy(() => import('../containers/TeamPage'));
const Dashboard = lazy(() => import('./Dashboard'));
const Preferences = lazy(() => import('./Preferences'));
const CreateTeam = lazy(() => import('./team/CreateTeam'));
const AddEmployee = lazy(() => import('./employee/AddEmployee'));

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

const App = () => {

    const employees = useSelector(state => state.employees.employeeData);
    const teams = useSelector(state => state.teams.teamData);
    const company = useSelector(state => state.company)

    const dispatch = useDispatch();
    const [employeesLoaded, teamsLoaded] = useEmployees();
    const [companyLoaded] = useCompany();
    const [isLoading, setIsLoading] = useState(true);
    const { token, setToken } = useToken();
    const [collapsed, setCollapsed] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState({});
    const [selectedTeamKey, setSelectedTeamKey] = useState({});
    const [createTeamVisible, setCreateTeamVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    useEffect(() => {
        if (employeesLoaded && teamsLoaded && isLoading) {

            if (Object.keys(employees).length !== 0 && employees.constructor !== Object) {
                if (Object.keys(teams).length !== 0 && teams.constructor !== Object) {
                    setIsLoading(false);
                }
            }
        }
    }, [employeesLoaded, employees, teamsLoaded, teams, isLoading]);



    // const showTeamModal = () => {
    //     setCreateTeamVisible(true);
    // };

    // const handleOk = () => {
    //     //setModalText('The modal will be closed after two seconds');
    //     setConfirmLoading(true);
    // };

    //   const handleCancel = () => {
    //     console.log('Clicked cancel button');
    //     setVisible(false);
    //   };

    const toggle = (event) => {
        event.preventDefault();
        setCollapsed(!collapsed);
    };

    // if (!token) {
    //     return <Login setToken={setToken} />
    // }

    return (
        isLoading ? <div>Loading...</div> :

            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" >
                        <Menu.Item key="home" icon={<HomeOutlined />}>
                            <div>Home</div>
                            <NavLink to="/" />
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Employees">  
                        <Menu.Item key="create-team" icon={<PlusOutlined />}>
                            Add Employee
                            <NavLink to={'/addemployee'} />
                        </Menu.Item>
                            <EmployeeList key="employee-list" setSelectedEmployee={setSelectedEmployee} />
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Teams">
                            <Menu.Item key="create-team" icon={<PlusOutlined />}>
                                Create Team
                                <NavLink to={'/createteam'} />
                            </Menu.Item>
                            {!teams ? "Loading..." : teams.map((t) => {
                                return (<Menu.Item key={t.key * 8} icon={<TeamOutlined />} title={t.teamName}
                                    onClick={() => setSelectedTeamKey(t.key)}>
                                    {t.teamName}
                                    <NavLink key={t.key * 8} to={`/team/${t.key * 8}`} />
                                </Menu.Item>)
                            })}
                        </SubMenu>
                    </Menu>

                </Sider>
                <Layout className="site-layout" >
                    <div>
                        <Header className="site-layout-background" style={{ padding: 0, background: '#f0f0f0' }}>
                            <div style={{ display: 'flex', alignSelf: 'center' }}>
                                <div style={{ paddingLeft: '10px' }}>
                                    {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                        className: 'trigger',
                                        onClick: (event) => toggle(event),
                                    })}
                                </div>
                                <div style={{ flex: '7 3', textAlign: 'center', lineHeight: '0' }}>
                                    <Title>{`${company.companyName} ${company.companySuffix}`}</Title>
                                    <i>{`"${company.catchPhrase}"`}</i>
                                </div>
                            </div>
                        </Header >
                    </div>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: '#fafafa',
                        }}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route exact path="/" component={Dashboard} />
                                <Route exact path="/dashboard" component={Dashboard} />
                                <Route exact path="/preferences" component={Preferences} />
                                <Route exact path="/addemployee" component={AddEmployee} />
                                <Route exact path="/createteam" component={CreateTeam} />
                                {!selectedEmployee ? <Route path="/employee/:employeeUrl" component={Dashboard} /> :
                                    <Route path="/employee/:employeeUrl"
                                        children={<EmployeeDetails employee={selectedEmployee} />} />}
                                {!selectedTeamKey ? <Route path="/team/:teamKey" component={Dashboard} /> :
                                    <Route path="/team/:teamKey"
                                        children={
                                            <TeamPage
                                                teams={teams}
                                                teamKey={selectedTeamKey}
                                            />}
                                    />}
                            </Switch>
                        </Suspense>
                    </Content>
                </Layout>
            </Layout>

    );
}

export default App;


