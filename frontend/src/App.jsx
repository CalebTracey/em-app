import './App.css';
import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import SkeletonLoad from './utils/SkeletonLoad';
import useCompany from './hooks/data/useCompany';
import SideNav from './layout/SideNav';
import MainHeader from './layout/MainHeader';
import { ConnectedRouter } from 'connected-react-router';
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
        <Layout>
          <MainHeader company={company} />
          <Content className="content">
            <Suspense fallback={<SkeletonLoad />}>
              <Routes />
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </ConnectedRouter>
  );
};

export default App;
