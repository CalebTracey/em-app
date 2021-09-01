import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:8080/api/v1/',
  baseURL: 'https://employee-mngmt-dash.herokuapp.com/api/v1/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: '*',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
