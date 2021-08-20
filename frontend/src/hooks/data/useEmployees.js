// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import faker from 'faker';
// // import useTasks from '../useTasks';

// const useEmployees = () => {
//   // faker
//   // const dataLoaded = useSelector((state) => state.dataLoad);
//   const employeeState = useSelector((state) => state.employees.employeeData);
//   const teamsState = useSelector((state) => state.teams.teamData);
//   const [employeesLoaded, setEmployeesLoaded] = useState(true);
//   const [teamsLoaded, setTeamsLoaded] = useState(true);
//   const [tasksLoaded, setTasksLoaded] = useState(true);
//   // const [taskData] = useTasks();
//   // const tasksHalfLength = Math.ceil(taskData.length / 2);
//   const halfLength = Math.ceil(employeeState.length / 2);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // if (!dataLoaded) {
//     // if (Object.keys(employeeState).length === 0 && employeeState.constructor === Object) {
//     //   setEmployeesLoaded(false);
//     // }
//     // if (Object.keys(teamsState).length === 0 && teamsState.constructor === Object) {
//     //   setTeamsLoaded(false);
//     //   setTasksLoaded(false);
//     // }

//     // if (!employeesLoaded) {
//     const arr = new Array(100).fill();
//     const min = Math.floor(1);
//     const max = Math.ceil(6);
//     const randomTeamNum = () => {
//       return Math.floor(Math.random() * (max - min) + min);
//     };
//     const generatedList = arr.map(() => ({
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       job: faker.name.jobTitle(),
//       address: faker.address.streetAddress(),
//       phoneNum: faker.phone.phoneNumberFormat(),
//       // key: Math.floor(Math.random() * 1234567890000),
//       photo: faker.image.avatar(),
//       email: faker.internet.exampleEmail(),
//       dob: faker.date.between(new Date('1980', '1', '1'), new Date('2000', '1', '1')),
//       teamNum: randomTeamNum(),
//     }));
//     generatedList.sort((a, b) => (a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0));
//     console.log(JSON.stringify(generatedList));
//     setEmployeesLoaded(true);

//     // if (employeesLoaded && !teamsLoaded && !tasksLoaded) {
//     //   //console.log(employeeState)
//     //   const [one, two] = [
//     //     employeeState.slice(0, halfLength),
//     //     employeeState.slice(halfLength, employeeState.length),
//     //   ];
//     //   console.log(taskData);
//     //   const [taskOne, taskTwo] = [
//     //     taskData.slice(0, tasksHalfLength),
//     //     taskData.slice(tasksHalfLength, taskData.length),
//     //   ];
//     //   //console.log()
//     //   var teamOne = {
//     //     teamName: 'Team One',
//     //     id: 0,
//     //     key: 1,
//     //     team: one,
//     //     tasks: taskOne,
//     //   };
//     //   var teamTwo = {
//     //     teamName: 'Team Two',
//     //     id: 1,
//     //     key: 2,
//     //     team: two,
//     //     tasks: taskTwo,
//     //   };
//     //   const teamsArray = [];
//     //   teamsArray.splice(0, 0, teamOne);
//     //   teamsArray.splice(1, 0, teamTwo);
//     //   // dispatch(allActions.teams.teamData(teamsArray));
//     //   //dispatch(allActions.teams.teamTasks())
//     //   // dispatch(allActions.dataLoad(true));
//     //   setTeamsLoaded(true);
//     //   setTasksLoaded(true);
//     // }
//     // }
//   }, [
//     employeeState,
//     dispatch,
//     employeesLoaded,
//     halfLength,
//     teamsLoaded,
//     teamsState,
//     // dataLoaded,
//     // taskData,
//     // tasksHalfLength,
//     tasksLoaded,
//   ]);

//   return [employeesLoaded, teamsLoaded];
// };

// export default useEmployees;
