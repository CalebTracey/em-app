import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import 'antd/dist/antd.css';
import allActions from '../redux/actions/index';
import api from '../api';

const useEmployees = () => {
    const employees = useSelector(state => state.employees.employeeData);
    const dispatch = useDispatch();
    const [data, setData] = useState(null);

    useEffect(() => {
        const getEmployees = async () => {
            if (employees.length === 0 && data === null) {
                await api.get('api/v1/employees', null
                ).then(res => {
                    const sorted =
                        res.data._embedded.employeeList.sort((a, b) =>
                            (a.lastName > b.lastName) ? 1 :
                                ((b.lastName > a.lastName) ? -1 : 0));
                    setData(sorted);
                    dispatch(allActions.employees.employeeData(sorted))
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
        getEmployees();
    }, [employees, dispatch, data])
}

export default useEmployees;