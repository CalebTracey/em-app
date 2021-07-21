import React from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions, Avatar, Typography } from 'antd';
import 'antd/dist/antd.css';
import useEmployee from '../../hooks/useEmployee';


const { Title } = Typography;

const EmployeeDetails = () => {

    let { employeeUrl } = useParams();
    const [employee] = useEmployee({ employeeUrl});

    return (
        !employee ? <div>Loading...</div> :
        <div key={employee.id}>
                <div key={employee.idNum} style={{ position: "sticky", top: "20px", size: "medium" }}>
                    <div><Title level={3}>{`${employee.firstName} ${employee.lastName}`}</Title></div>
                    <div><Avatar shape="square" size={64} src={employee.photo} /></div>
                    <div>
                        <Descriptions title="Employee Information" bordered>
                            <Descriptions.Item label="Work ID">{employee.key}</Descriptions.Item>
                            <Descriptions.Item label="Email">{employee.email}</Descriptions.Item>
                            <Descriptions.Item label="Telephone">{employee.phoneNum}</Descriptions.Item>
                            <Descriptions.Item label="Job">{employee.job}</Descriptions.Item>
                            <Descriptions.Item label="Address">{employee.address}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
            </div>
    );
};

export default EmployeeDetails;