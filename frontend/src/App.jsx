import './App.css';
import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Layout, Skeleton } from 'antd';
import { ConnectedRouter } from 'connected-react-router';
import useCompany from './hooks/data/useCompany';
import SideNav from './layout/SideNav';
import MainHeader from './layout/MainHeader';
import { history } from './redux/store';

const { Content } = Layout;

const Routes = lazy(() => import('./Routes'));

const App = () => {
  const company = useSelector((state) => state.company);
  useCompany();
  return (
    <ConnectedRouter history={history}>
      <Layout style={{ height: '100%' }}>
        <SideNav />
        <Layout style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
          <MainHeader company={company} />
          <Content className="content">
            <Suspense
              fallback={
                <div className="skeleton">
                  <Skeleton active paragraph={{ rows: 10 }} />
                </div>
              }
            >
              <Routes />
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </ConnectedRouter>
  );
};

export default App;
