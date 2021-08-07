// // import './Dashboard.css';
// import React, { useState, useEffect } from 'react';
// import { Skeleton } from 'antd';
// import apiGet from '../../apis/apiGet';
// import DashboardCalendar from './DashboardCalendar';
// import { useDispatch } from 'react-redux';
// import allActions from '../../redux/actions/index';

// const DashboardCalendarContainer = () => {
//   const [monthTasks, setMonthTasks] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (monthTasks.length === 0) {
//       const currentDate = new Date();
//       const fetchMonthData = async () => {
//         await apiGet({ url: `team_tasks/month/${currentDate.getMonth()}` })
//           // await apiGet({ url: `team_tasks/month/${8}` })
//           .then((res) => {
//             setMonthTasks(res.data._embedded.team_tasks);
//             console.log(monthTasks);
//           })
//           .catch((err) => {
//             console.error(err);
//           });
//       };
//       fetchMonthData();
//     }
//   }, [monthTasks]);

//   const getDay = (date) => {
//     const day = new Date(date);
//     return day.getDate();
//   };

//   const clickHandler = (task) => {
//     if (task !== null) {
//       // dispatch(allActions.teams.teamTaskSelected(task));
//     }
//   };

//   // const dateCellBuilder = () => {
//   //   return (
//   //     <ul className="events">
//   //       {monthTasks.map((item) => (
//   //         <li key={getDay(item.taskEnd)}>
//   //           <Badge status="success" />
//   //         </li>
//   //       ))}
//   //     </ul>
//   //   );
//   // };
//   return monthTasks.length !== 0 ? (
//     <DashboardCalendar className="calendar" monthTasks={monthTasks} clickHandler={clickHandler} />
//   ) : (
//     <Skeleton />
//   );
// };

// export default DashboardCalendarContainer;
