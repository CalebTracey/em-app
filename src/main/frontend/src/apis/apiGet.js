import api from "./api";

export const apiGet = async ({ url, data }) => {
  const response = await api.get(url, data).catch((error) => {
    console.log(error);
  });
  return response;
};
