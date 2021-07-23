import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ErrorBoundry } from 'react-error-boundary';
import { useDispatch, useSelector } from "react-redux";
import 'antd/dist/antd.css';
import allActions from '../redux/actions/index';
import api from '../api';

// const EmployeeListContainer = lazy(() => import('../components/employee/EmployeeListContainer'));
import EmployeeList from '../components/employee/EmployeeList';

const Employees = () => {
    const employees = useSelector(state => state.employees.employeeData);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getEmployees = async () => {
            if (employees.length === 0 && data === null) {
                setIsLoading(true);
                await api.get('api/v1/employees', null
                ).then(res => {
                    const sorted =
                        res.data._embedded.employeeList.sort((a, b) =>
                            (a.lastName > b.lastName) ? 1 :
                                ((b.lastName > a.lastName) ? -1 : 0));
                    setData(sorted)
                    dispatch(allActions.employees.employeeAdded(res.data));
                }).catch(function (error) {
                    console.log(error);
                });
                setIsLoading(false)
            }
        }
        getEmployees();
    }, [employees, dispatch, data])

    const clickHandler = (employee) => {
        if (employee !== null) {
            dispatch(allActions.employees.employeeSelected(employee))
        }
    }

    return (
        isLoading ? "Loading..." :
            <EmployeeList
                key="employee-list"
                clickHandler={clickHandler}
                employees={data}
            />
    );
};

export default Employees;