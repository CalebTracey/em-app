import React, {useEffect, useState } from 'react';
import { Descriptions, Avatar, Card, Typography, Menu, Spin, Skeleton } from 'antd';
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import 'antd/dist/antd.css';
import useEmployees from '../../hooks/useEmployees';

const { Title } = Typography;

const EmployeeDetailsCard = ({ employee }) => {
    // useEmployees();

    // useEffect(() => {
    //     if (employee === undefined || !employee) {
    //         const match = employees.find(({ id }) => id === eId);
    //         setItemInfo(match);
    //         setIsLoading(false);
    //     } else {
    //         setItemInfo(employee);
    //         setIsLoading(false);
    //     }
    // }, [eId, employee, employees])

    console.log(employee)
    return (
            <Card>
                <div key={employee.id}>
                    <div key={employee.id} style={{ position: "sticky", top: "20px", size: "medium" }}>
                        <div><Title level={3}>{`${employee.firstName} ${employee.lastName}`}</Title></div>
                        <div><Avatar shape="square" size={64} src={employee.avatar} /></div>
                        <div>
                            <Descriptions title="Employee Information" bordered>
                                <Descriptions.Item label="Work ID">{employee.id}</Descriptions.Item>
                                <Descriptions.Item label="Email">{employee.email}</Descriptions.Item>
                                <Descriptions.Item label="Telephone">{employee.phoneNumber}</Descriptions.Item>
                                <Descriptions.Item label="Job">{employee.jobTitle}</Descriptions.Item>
                                <Descriptions.Item label="Address">{employee.address}</Descriptions.Item>
                            </Descriptions>
                        </div>
                    </div>
                </div>
            </Card>

    );
};

export default EmployeeDetailsCard;