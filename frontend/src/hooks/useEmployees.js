// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import allActions from '../redux/actions/index';
// import api from '../apis/api';

// const useEmployees = () => {
//   const employees = useSelector((state) => state.employees.employeeData);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (employees.length > 0) {
//       return;
//     }
//     const getEmployees = async () => {
//       if (employees.length === 0) {
//         await api
//           .get('api/v1/employees', null)
//           .then((res) => {
//             const sorted = res.data._embedded.employeeList.sort((a, b) =>
//               a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
//             );
//             dispatch(allActions.employees.employeeData(sorted));
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       }
//     };
//     getEmployees();
//   }, [employees, dispatch]);
// };

// export default useEmployees;
