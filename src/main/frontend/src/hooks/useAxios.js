import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';

const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (response === null) {
      const fetchData = () => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
          .then((res) => {
            console.log(res.data._embedded)
            // const data = JSON.parse(res.data);
            setResponse(res.data);
          })
          .catch((err) => {
            setError(err);
          })
          .finally(() => {
            setloading(false);
          });

      };
      fetchData();
    }


    // fetchData();
  }, [method, url, body, headers]);


  return { response, error, loading };
};

export default useAxios;