import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import faker from 'faker';
import allActions from '../redux/actions/index';

const useTasks = () => {
  faker.seed(12345);
  const [tasksLoaded, setTasksLoaded] = useState(false);
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tasksLoaded) {
      const arr = new Array(6).fill();
      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      };
      const myDate = new Date();
      const date = new Date(
        Date.UTC(
          myDate.getUTCFullYear(),
          myDate.getUTCMonth(),
          myDate.getUTCDate(),
        ),
      );
      // const tn = faker.fake("{{company.bsBuzz}} {{company.bsAdjective}} {{company.bsNoun}}");
      // const taskName = tn.charAt(0).toUpperCase() + tn.slice(1);

      const generatedList = arr.map(() => ({
        taskName: faker.fake(
          '{{company.bsBuzz}} {{company.bsAdjective}} {{company.bsNoun}}',
        ),
        taskDescription: faker.name.jobTitle(),
        client: faker.company.companyName(),
        clientPhone: faker.phone.phoneNumberFormat(),
        startDate: faker.date
          .recent(getRandomInt(5, 60), date)
          .toDateString(),
        endDate: faker.date
          .soon(getRandomInt(5, 60), date)
          .toDateString(),
        key: Math.floor(Math.random() * 1234567890000),
        //address: faker.company.streetAddress(),
      }));
      setTasks(generatedList);
      setTasksLoaded(true);
    } else return;
  }, [tasks, tasksLoaded]);

  return [tasks];
};

export default useTasks;
