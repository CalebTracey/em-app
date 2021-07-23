import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { ErrorBoundry } from 'react-error-boundary';
import useAxios from '../hooks/useAxios';
import { useDispatch } from "react-redux";
import 'antd/dist/antd.css';
import allActions from '../redux/actions/index';

// const EmployeeListContainer = lazy(() => import('../components/employee/EmployeeListContainer'));
import EmployeeList from '../components/employee/EmployeeList';

const Employees = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);


    const { response, loading, error } = useAxios({
        method: 'get',
        url: 'api/v1/employees',
        headers: JSON.stringify({ accept: '*/*' }),
        body: null
    });

    const [data, setData] = useState([]);

    useEffect(() => {
        if (response !== null) {
            console.log(response)
            const sort = response.sort((a, b) =>
                (a.lastName > b.lastName) ? 1 :
                    ((b.lastName > a.lastName) ? -1 : 0));
            dispatch(allActions.employees.employeeData(sort));
            setIsLoading(false)
            setData(sort);
        }
    }, [response, dispatch]);

    const clickHandler = (employee) => {
        if (employee !== null) {
            dispatch(allActions.employees.employeeSelected(employee))
        }
    }

    console.log(data)
    return (
        loading ? "Loading..." :
            <EmployeeList
                key="employee-list"
                clickHandler={clickHandler}
                employees={data}
            /> 
    );
};

export default Employees;