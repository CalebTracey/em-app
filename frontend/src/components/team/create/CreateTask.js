import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Card, Form, Button, DatePicker, Space } from 'antd';
import allActions from '../../../redux/actions/index';
import './Create.css';

const { RangePicker } = DatePicker;

const CreateTask = () => {
  const teams = useSelector((state) => state.teams.teamData);
  const [taskTitle, setTaskTitle] = useState('');
  // const [children, setChildren] = useState([]);
  // const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();

  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };

  const onOk = (value) => {
    console.log('onOk: ', value);
  };

  const handleSubmit = () => {
    var newTeam = {
      // taskName: title,
      // taskDescription: newId,
      // client: newKey,
      // clientPhone: employeeMatch,
      // startDate: [],
      // endDate: ,
      // key: ,
    };
    dispatch(allActions.teams.teamData());
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Card style={{ width: 500, alignSelf: 'center' }}>
        <Form layout="vertical" requiredMark={true}>
          <Form.Item label="Team Name" required tooltip="This is a required field">
            <Input placeholder="Team Name" onChange={(event) => setTaskTitle(event.target.value)} />
          </Form.Item>
          <Form.Item label="Team Name" required tooltip="This is a required field">
            <Input placeholder="Team Name" onChange={(event) => setTaskTitle(event.target.value)} />
          </Form.Item>
          <Form.Item label="Team Name" required tooltip="This is a required field">
            <Input placeholder="Team Name" onChange={(event) => setTaskTitle(event.target.value)} />
          </Form.Item>
          <Form.Item label="Team Name" required tooltip="This is a required field">
            <Input placeholder="Team Name" onChange={(event) => setTaskTitle(event.target.value)} />
          </Form.Item>
          <Space direction="vertical" size={12}>
            <DatePicker showTime onChange={onChange} onOk={onOk} />
            <RangePicker
              showTime={{ format: 'HH:mm' }}
              format="YYYY-MM-DD HH:mm"
              onChange={onChange}
              onOk={onOk}
            />
          </Space>
          <Form.Item>
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CreateTask;
