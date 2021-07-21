import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ErrorBoundary } from 'react-error-boundary';
import axios from "axios";
import 'antd/dist/antd.css';

import useFetchMyApi from '../hooks/useFetchMyApi';
import EmployeeList from '../components/employee/EmployeeList';
import allActions from '../redux/actions/index';


const Employees = (props) => {
    const employees = useSelector(state => state.employees.employeeData);
    const [fetchedEmployees, setFetchedEmployees] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const isMounted = useRef(false);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        const getEmployees = async () => {
            setIsLoading(true);
            await axios.get(
                "http://localhost:8080/api/v1/employees",
                { "Content-Type": "application/json" }
            ).then((res) => {
                // if (isMounted.current) {
                // console.log(res.data)
                // const sorted = res.data._embedded.employeeList.sort((a, b) =>
                //     (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0));
                // console.log(sorted)
                setFetchedEmployees(res.data._embedded.employeeList);
                // dispatch(allActions.employees.employeeData(res.data._embedded.employeeList));
            }
            ).catch((error) => {
                console.log(error);
            });
        }
        getEmployees();
    }, [isMounted, dispatch]);

    useEffect(() => {
        if (fetchedEmployees) {
            const sorted = fetchedEmployees.sort((a, b) =>
                (a.lastName > b.lastName) ?
                    1 : ((b.lastName > a.lastName) ? -1 : 0))
            dispatch(allActions.employees.employeeData(sorted));
            setIsLoading(false);
        }
    }, [fetchedEmployees, dispatch])

    return (
        isLoading ? "Loading..." :
             <EmployeeList key="employee-list" isLoading={isLoading}/>               

    );
};

export default Employees;