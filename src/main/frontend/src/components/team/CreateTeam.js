import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Card, Form, Button, Select } from 'antd';
import allActions from '../../redux/actions/index'
import 'antd/dist/antd.css';
import './Create.css';

const { Option } = Select;

const CreateTeam = () => {
    const employees = useSelector(state => state.employees.employeeData);
    const teams = useSelector(state => state.teams.teamData);
    const [title, setTitle] = useState('');
    const [children, setChildren] = useState([]);
    const [selected, setSelected] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (children === undefined || children.length === 0) {
            employees.forEach((e) => {
                setChildren((children) =>
                    [...children, <Option key={e.key}>
                        {`${e.firstName} ${e.lastName}`}</Option>]
                )
            })
        }
    }, [employees, children])

    const handleChange = (event) => {
        setSelected(event)
    }

    const handleSubmit = () => {
        const employeeMatch = selected.map((s) => {
            return employees.find(({ key }) => key === parseInt(s))
        })
        let arr = []
        teams.map((t) => arr.push(t))
        const newId = (teams.length);
        const newKey = (teams.length + 1);
        var newTeam = ({
            teamName: title,
            id: newId,
            key: newKey,
            team: employeeMatch,
            tasks: []
        });
        arr.push(newTeam)
        dispatch(allActions.teams.teamData(arr))
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }} >
            <Card style={{ width: 500, alignSelf: 'center' }}>
                <Form
                    layout="vertical"
                    requiredMark={true}
                >
                    <Form.Item label="Team Name" required tooltip="This is a required field">
                        <Input
                            placeholder="Team Name"
                            onChange={(event) => setTitle(event.target.value)} />
                    </Form.Item>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Select Team Members"
                        onChange={(event) => handleChange(event)}
                    >
                        {children}
                    </Select>
                    <Form.Item>
                        <Button type="primary" onClick={handleSubmit}>Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

        </div>

    );
};

export default CreateTeam;