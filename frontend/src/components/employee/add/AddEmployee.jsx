import '../Employees.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';
import allActions from '../../../redux/actions/index';
import AddEmployeeCardContainer from '../containers/AddEmployeeCardContainer';
import api from '../../../apis/api';

const AddEmployee = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [jobTitle, setJobTitle] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const data = JSON.stringify({
    firstName,
    lastName,
    email,
    jobTitle,
    phoneNumber,
    address,
    avatar: null,
    teams: [],
  });

  const onFinish = async () => {
    await api
      .post('employees', data)
      .then((res) => {
        dispatch(allActions.employees.employeeAdded(res.data));
        dispatch(allActions.employees.employeeSelected(res.data));
        message.success(`${firstName} ${lastName} added`);
        history.push('/EMapp');
      })
      .catch((error) => {
        message.error(`Problem adding ${firstName} ${lastName} to the list`);
        throw new Error(error);
      });
  };

  return (
    <AddEmployeeCardContainer
      setFirstName={setFirstName}
      setLastName={setLastName}
      setEmail={setEmail}
      setJobTitle={setJobTitle}
      setPhoneNumber={setPhoneNumber}
      setAddress={setAddress}
      onFinish={onFinish}
    />
  );
};

export default AddEmployee;
