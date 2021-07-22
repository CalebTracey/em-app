import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Descriptions, Avatar, Typography } from 'antd';
import 'antd/dist/antd.css';
import faker from 'faker'
// import useEmployee from '../../hooks/useEmployee';

const { Title } = Typography;

const EmployeeDetails = () => {
    const employees = useSelector(state => state.employees.employeeData);
    const [isLoading, setIsLoading] = useState(true);
    const [employee, setEmployee] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const findEmployee = async () => {
            const response = await employees.find(({ employeeId }) =>
                employeeId === parseInt(id));
            // const { employee } = await response;
            setEmployee(response);
            setIsLoading(false);
        }
        findEmployee();
    }, [employees, id]);

    useEffect(() => {
        if (employee.avatar === null) {
            employee.avatar = faker.image.avatar();
        }
    }, [employee])
    return (
        isLoading ? <div>Loading...</div> :
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