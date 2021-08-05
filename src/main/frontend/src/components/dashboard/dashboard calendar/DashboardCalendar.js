// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import DashboardCalendarTileContent from './DashboardCalendarTileContent';

// const DashboardCalendar = ({ monthTasks, clickHandler }) => {
//   const [value, onChange] = useState(new Date());

//   // const tileContentList = monthTasks.map((task) => {
//   //   return <DashboardCalendarTileContent task={task} clickHandler={clickHandler} />;
//   // });

//   const getDay = (date) => {
//     const day = new Date(date);
//     return day.getDate();
//   };

//   console.log(monthTasks);
//   const tileContent = ({ date, view }) => {
//     // Add class to tiles in month view only
//     if (view === 'month') {
//       // Check if a date React-Calendar wants to check is on the list of dates to add class to
//         const myDate = new Date(task.taskEnd);
//         const dateMatch = [];
//         if (date.getDate() === getDay(myDate)) {
//           dateMatch.concat(
//             <DashboardCalendarTileContent task={task} clickHandler={clickHandler} />
//           );
//         }
//         return dateMatch;
//       });
//       // if (datesToAddContentTo.find((dDate) => isSameDay(dDate, date))) {
//       // return 'My content';
//       // }
//     }
//   };
//   return <Calendar onChange={onChange} minDetail="month" value={value} tileContent={tileContent} />;
// };
// export default DashboardCalendar;
