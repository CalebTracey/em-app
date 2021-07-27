import api from "./api";

export const apiPost = async ({ url, data }) => {
  console.log(data);
  const response = await api.post(url, data).catch((error) => {
    console.log(error);
  });
  return response;
};
