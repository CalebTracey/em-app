import axios from 'axios';

export default axios.create({
   baseURL: 'http://localhost:8080/api/v1/',
//  baseURL: 'https://employee-dash-app.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
