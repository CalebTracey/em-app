import React from 'react';
import { Input, Card, Form, Button, Select } from 'antd';
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import './Create.css';

const CreateTeamForm = ({ handleCreateSubmit, handleSelection, children, setTitle }) => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Card className="create-team-card">
      <Form layout="vertical" requiredMark>
        <Form.Item label="Team Name" required tooltip="This is a required field">
          <Input placeholder="Team Name" onChange={(event) => setTitle(event.target.value)} />
        </Form.Item>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Select Team Members"
          onChange={handleSelection}
        >
          {children}
        </Select>
        <Form.Item>
          <Button type="primary" onClick={handleCreateSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </div>
);
export default CreateTeamForm;
