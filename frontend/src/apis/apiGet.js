import api from './api';

const apiGet = async ({ url }) => {
  return await api.get(url);
};

export default apiGet;
