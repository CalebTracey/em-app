import api from './api';

const apiPut = async ({ url, data }) => {
  await api.put(url, data);
};
export default apiPut;
