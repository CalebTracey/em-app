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
        <Header
            className="site-layout-background"
            style={{
                padding: 0,
                lineHeight: 0,
                background: '#f0f0f0',
                height: '64px',                
                // display: 'flex',
                // alignSelf: 'center'
            }}>
            <div style={{
                paddingLeft: '10px',
                paddingTop: '10px',
               
            }}>
{/* 
                {createElement(
                    collapsed ?
                        MenuUnfoldOutlined :
                        MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: (event) => toggle(event),
                })} */}
            <div style={{
                // flex: '7 3',
                textAlign: 'center',
                marginTop:'-15px',
                paddingTop: "10px"
            }}>
                <Title >{`${company.companyName} ${company.companySuffix}`}</Title>
                <i>{`"${company.catchPhrase}"`}</i>
            </div>
            </div>
        </Header >
    );
};

export default MainHeader;