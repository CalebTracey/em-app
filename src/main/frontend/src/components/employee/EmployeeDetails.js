import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Descriptions, Avatar, Typography } from 'antd';
import 'antd/dist/antd.css';
import faker from 'faker'
// import useEmployee from '../../hooks/useEmployee';

const { Title } = Typography;

const EmployeeDetails = () => {
    const employeeSelected = useSelector(state => state.employees.employeeSelected);
    const employees = useSelector(state => state.employees.employeeData);
    const [employee, setEmployee] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const checkEmployee = async () => {
            if (employeeSelected === undefined) {
                const response = await employees.find(({
                    employeeId }) => employeeId === parseInt(id));
                setEmployee(response);
            } else {
                setEmployee(employeeSelected);
                return;
            }
        }
        checkEmployee();
    }, [employeeSelected, employees, id]);

    useEffect(() => {
        if (employee.avatar === null) {
            employee.avatar = faker.image.avatar();
        }
    }, [employee])

    console.log(employee)
    return (
            <div key={employee.employeeId}>
                <div key={employee.employeeId} style={{ position: "sticky", top: "20px", size: "medium" }}>
                    <div><Title level={3}>{`${employee.firstName} ${employee.lastName}`}</Title></div>
                    <div><Avatar shape="square" size={64} src={employee.avatar} /></div>
                    <div>
                        <Descriptions title="Employee Information" bordered>
                            <Descriptions.Item label="Work ID">{employee.employeeId}</Descriptions.Item>
                            <Descriptions.Item label="Email">{employee.email}</Descriptions.Item>
                            <Descriptions.Item label="Telephone">{employee.phoneNumber}</Descriptions.Item>
                            <Descriptions.Item label="Job">{employee.jobTitle}</Descriptions.Item>
                            <Descriptions.Item label="Address">{employee.address}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
            </div>
    );
};

export default EmployeeDetails;