import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Typography } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;

const MainHeader = ({
    createElement,
    collapsed,
    company,
    toggle }) => {
    return (
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
    );
};

export default MainHeader;