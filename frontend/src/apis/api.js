import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:8080/api/v1/',
  baseURL: 'https://employee-mngmt-dash.herokuapp.com/api/vi/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: '*',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
