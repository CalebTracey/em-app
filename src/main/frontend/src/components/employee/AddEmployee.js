import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Button, Card } from 'antd';
import axios from 'axios';
import allActions from '../../redux/actions/index';
// import useApiPost from '../../hooks/useApiPost';

const AddEmployee = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [jobTitle, setJobTitle] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [address, setAddress] = useState(null);
    const dispatch = useDispatch();

    const onFinish = async () => {
        const data = JSON.stringify({
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'jobTitle': jobTitle,
            'phoneNumber': phoneNumber,
            'address': address
        });
        const config = {
            method: 'post',
            url: 'http://localhost:8080/api/v1/employees/upload',
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };
        await axios(config)
            .then(function (res) {
                res.data["key"] = res.data.employeeId * 123456789000;
                dispatch(allActions.employees.employeeAdded(res.data));

                //console.log(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }} >
            <Card style={{ width: 500, alignSelf: 'center' }}>
                <Form
                    layout="vertical"
                    requiredMark={true}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item label="First name" required tooltip="This is a required field">
                        <Input
                            placeholder="First name"
                            onChange={(event) => setFirstName(event.target.value)} />
                    </Form.Item>
                    <Form.Item label="Last name" required tooltip="This is a required field">
                        <Input
                            placeholder="Last name"
                            onChange={(event) => setLastName(event.target.value)} />
                    </Form.Item>
                    <Form.Item label="Email" required tooltip="This is a required field">
                        <Input
                            placeholder="Email"
                            onChange={(event) => setEmail(event.target.value)} />
                    </Form.Item>
                    <Form.Item label="Job title" required tooltip="This is a required field">
                        <Input
                            placeholder="Job title"
                            onChange={(event) => setJobTitle(event.target.value)} />
                    </Form.Item>
                    <Form.Item label="Phone number" required tooltip="This is a required field">
                        <Input
                            placeholder="Phone number"
                            onChange={(event) => setPhoneNumber(event.target.value)} />
                    </Form.Item>
                    <Form.Item label="Address" required tooltip="This is a required field">
                        <Input
                            placeholder="Address"
                            onChange={(event) => setAddress(event.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit
                    </Button>
                    </Form.Item>
                </Form>
            </Card>

        </div>
    );
};

export default AddEmployee;