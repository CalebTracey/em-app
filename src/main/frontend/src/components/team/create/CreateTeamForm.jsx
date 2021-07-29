import React from 'react';
import { Input, Card, Form, Button, Select } from 'antd';

import './Create.css';

const createTeamForm = ({ handleCreateSubmit, handleSelection, children, setTitle }) => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Card style={{ width: 500, alignSelf: 'center' }}>
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
export default createTeamForm;
