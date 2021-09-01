/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import '../Employees.css';
import { Form, Input, Button, Card } from 'antd';

const AddEmployeeCard = ({
  setFirstName,
  setLastName,
  setEmail,
  setJobTitle,
  setPhoneNumber,
  setAddress,
  onFinish,
}) => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Card className="add-employee-card" title="Add Employee">
      <Form layout="vertical" requiredMark onFinish={onFinish}>
        <Form.Item label="First name" required tooltip="This is a required field">
          <Input placeholder="First name" onChange={(event) => setFirstName(event.target.value)} />
        </Form.Item>
        <Form.Item label="Last name" required tooltip="This is a required field">
          <Input placeholder="Last name" onChange={(event) => setLastName(event.target.value)} />
        </Form.Item>
        <Form.Item label="Email" required tooltip="This is a required field">
          <Input placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
        </Form.Item>
        <Form.Item label="Job title" required tooltip="This is a required field">
          <Input placeholder="Job title" onChange={(event) => setJobTitle(event.target.value)} />
        </Form.Item>
        <Form.Item label="Phone number" required tooltip="This is a required field">
          <Input
            placeholder="Phone number"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Address" required tooltip="This is a required field">
          <Input placeholder="Address" onChange={(event) => setAddress(event.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </div>
);

export default AddEmployeeCard;
