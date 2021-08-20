import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../redux/actions/index';
import apiGet from '../apis/apiGet';
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

const useGetEmployees = ({ data }) => {
  const dispatch = useDispatch();
  const [result, setResult] = useState({
    data: null,
    error: null,
    isLoading: false,
  });
  const getEmployees = useCallback(() => {
    setResult((prevState) => ({ ...prevState, isLoading: true }));
    apiGet(
      {
        url: 'employees',
      },
      data
    )
      .then((res) => {
        const sort = res.data._embedded.employees.sort((a, b) =>
          a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
        );
        setResult({ data: sort, isLoading: false, error: null });
        dispatch(allActions.employees.employeeData(sort));
      })
      .catch((error) => {
        setResult({ data: null, isLoading: false, error });
      });
  }, [data, dispatch]);

  return [result, getEmployees];
};
export default useGetEmployees;
