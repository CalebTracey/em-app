import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Typography } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
const { Title, Text } = Typography;

const MainHeader = ({ company }) => {
  return (
    <Header
      className="site-layout-background"
      style={{
        textAlign: 'center',
        padding: 0,
        lineHeight: 0,
        background: '#f0f0f0',
        height: '64px',
      }}
    >
      <Title>{`${company.companyName} ${company.companySuffix}`}</Title>
      <Text
        style={{ lineHeight: 0 }}
        italic={true}
      >{`"${company.catchPhrase}"`}</Text>
    </Header>
  );
};

export default MainHeader;
