/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { lazy, useEffect, useState } from 'react';
import { PageHeader } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import EmployeeDetailsRedirect from './EmployeeDetailsRedirect';

const EmployeeDetailsCard = lazy(() => import('./EmployeeDetailsCard'));

const EmployeeDetails = ({ employee }) => {
  const [reroute, setReroute] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (employee && parseInt(id, 10) !== employee.id) {
      setReroute(true);
    }
    return () => setReroute(false);
  }, [employee, id]);

  return !reroute ? (
    <>
      <PageHeader
        fontWeight="bold"
        className="site-page-header"
        onBack={() => history.goBack()}
        title={employee.name}
      />
      <div
        style={{
          margin: '5em',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <EmployeeDetailsCard employee={employee} />
      </div>
    </>
  ) : (
    <EmployeeDetailsRedirect id={id} />
  );
};

export default EmployeeDetails;
