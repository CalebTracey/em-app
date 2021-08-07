import React from 'react';
import AddEmployeeCard from '../AddEmployeeCard';
const AddEmployeeCardContainer = ({
  setFirstName,
  setLastName,
  setEmail,
  setJobTitle,
  setPhoneNumber,
  setAddress,
  onFinish,
}) => {
  return (
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
};

export default AddEmployeeCardContainer;
