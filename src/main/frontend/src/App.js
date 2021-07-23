import React, { useState, Suspense, lazy, createElement } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import 'rc-texty/assets/index.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import Login from './login/Login';
import useToken from './hooks/useToken';
import useCompany from './hooks/useCompany';
import SideNav from './components/SideNav';
import MainHeader from './components/MainHeader';
import useEmployees from './hooks/frontend_data_creator/useEmployees';

const Employees = lazy(() => import('./containers/Employees'));
const EmployeeDetails = lazy(() => import('./components/employee/EmployeeDetails'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Preferences = lazy(() => import('./components/Preferences'));
const CreateTeam = lazy(() => import('./components/team/CreateTeam'));
const AddEmployee = lazy(() => import('./components/employee/AddEmployee'));

const { Content } = Layout;

const App = () => {
    const company = useSelector(state => state.company)
    const [companyLoaded] = useCompany();
    const [collapsed, setCollapsed] = useState(false);

    const toggle = (event) => {
        event.preventDefault();
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh', }}>
            <SideNav collapsed={collapsed} />
            <Layout style={{ marginLeft: '200px' }}>
                <MainHeader
                    createElement={createElement}
                    collapsed={collapsed}
                    company={company}
                    toggle={toggle}
                />
                <Content
                    style={{
                        marginLeft: '200px',
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: '#fafafa',
                    }}>
                    <Suspense fallback="Loading...">
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/preferences" component={Preferences} />
                            <Route exact path="/addemployee" component={AddEmployee} />
                            <Route exact path="/createteam" component={CreateTeam} />
                            <Route exact path="/employees" component={Employees} />
                            <Route path="/employee/:id" component={EmployeeDetails} />
                        </Switch>
                    </Suspense>
                </Content>
            </Layout>
        </Layout >
    );
}

export default App;


