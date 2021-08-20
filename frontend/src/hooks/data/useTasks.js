// import { useEffect, useState } from 'react';
// // import { useDispatch } from 'react-redux';
// import faker from 'faker';

// const useTasks = () => {
//   faker.seed(12345);
//   const [tasksLoaded, setTasksLoaded] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   // const dispatch = useDispatch();

//   useEffect(() => {
//     if (!tasksLoaded) {
//       const arr = new Array(60).fill();
//       const getRandomInt = (min, max) => {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min) + min);
//       };
//       const myDate = new Date();
//       const date = new Date(
//         Date.UTC(myDate.getUTCFullYear(), myDate.getUTCMonth(), myDate.getUTCDate())
//       );
//       // const tn = faker.fake("{{company.bsBuzz}} {{company.bsAdjective}} {{company.bsNoun}}");
//       // const taskName = tn.charAt(0).toUpperCase() + tn.slice(1);

//       const generatedList = arr.map(() => ({
//         name: faker.fake('{{company.bsBuzz}} {{company.bsAdjective}} {{company.bsNoun}}'),
//         description: faker.name.jobTitle(),
//         client: faker.company.companyName(),
//         clientPhone: faker.phone.phoneNumberFormat(),
//         startDate: faker.date.recent(getRandomInt(30, 90), date).toDateString(),
//         endDate: faker.date.soon(getRandomInt(60, 25), date).toDateString(),
//         teamId: getRandomInt(1, 5),
//         // key: Math.floor(Math.random() * 1234567890000),
//         //address: faker.company.streetAddress(),
//       }));
//       setTasks(generatedList);
//       console.log(JSON.stringify(generatedList));
//       setTasksLoaded(true);
//     } else return;
//   }, [tasks, tasksLoaded]);

//   return [tasks];
// };

// export default useTasks;
