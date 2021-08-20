import React from 'react';
import AddEmployeeCard from '../add/AddEmployeeCard';
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

const AddEmployeeCardContainer = ({
  setFirstName,
  setLastName,
  setEmail,
  setJobTitle,
  setPhoneNumber,
  setAddress,
  onFinish,
}) => (
  <AddEmployeeCard
    setFirstName={setFirstName}
    setLastName={setLastName}
    setEmail={setEmail}
    setJobTitle={setJobTitle}
    setPhoneNumber={setPhoneNumber}
    setAddress={setAddress}
    onFinish={onFinish}
  />
);

export default AddEmployeeCardContainer;
