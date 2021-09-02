/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title, Text } = Typography;

const MainHeader = ({ company }) => (
  <Header
    className="site-layout-background"
    style={{
      textAlign: 'center',
      padding: 0,
      lineHeight: 0,
      background: '#f0f2f5',
      height: '8ch',
    }}
  >
    <Title
      style={{ lineHeight: 1.5, fontSize: '2vw', color: '#434343' }}
    >{`${company.companyName} ${company.companySuffix}`}</Title>
    <Text
      style={{ lineHeight: 0, fontSize: '1vw', color: '#bfbfbf' }}
      italic
    >{`"${company.catchPhrase}"`}</Text>
  </Header>
);

export default MainHeader;
