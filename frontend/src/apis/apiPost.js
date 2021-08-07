import api from './api';

const apiPost = async ({ url, data }) => {
  await api.post(url, data);
};
export default apiPost;
