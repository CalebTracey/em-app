import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { ErrorBoundry } from 'react-error-boundary';
import { useDispatch } from "react-redux";
import 'antd/dist/antd.css';
import allActions from '../../redux/actions/index';

// const EmployeeList = lazy(() => import('./EmployeeList'));
import EmployeeList from './EmployeeList';

const EmployeeListContainer = ({ employees }) => {
    const dispatch = useDispatch();
    const [sorted, setSorted] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        const sort = employees.sort((a, b) => 
            (a.lastName > b.lastName) ? 1 :
                ((b.lastName > a.lastName) ? -1 : 0));
        dispatch(allActions.employees.employeeData(sort));
        setSorted(sort)
        setIsLoading(false)

    }, [dispatch, employees]);

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
                employees={sorted}
            />
    );
};

export default EmployeeListContainer;