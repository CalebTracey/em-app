/* eslint-disable no-console */
import { useEffect } from 'react';

const useLog = (description, value) => {
  useEffect(() => {
    console.log(
      `%c ${description}: %c${value}`,
      'font-size: 12px',
      'font-size: 20px; color: green;'
    );
  });
};

export default useLog;
