import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const useEmployee = ({ employeeUrl}) => {
    const [employee, setEmployee] = useState({})
    const employees = useSelector(state => state.employees)

    useEffect(() => {
        if (employees) {
        const employeeMatch =
            employees.find(({ key }) => key === parseInt(employeeUrl));
        setEmployee(employeeMatch);
        //console.log(employeeUrl)
        }

    }, [employee, employees, employeeUrl]);
    return [employee]
};

export default useEmployee;