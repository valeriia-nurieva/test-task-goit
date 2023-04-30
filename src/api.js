import axios from 'axios';

axios.defaults.baseURL = 'https://644b7e0617e2663b9df0a34d.mockapi.io/';

export const getUsers = async ({ page, limit }) => {
  try {
    const { data } = await axios.get(`/users?page=${page}&limit=${limit}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (userId, credentials) => {
  try {
    const { data } = await axios.put(`/users/${userId}`, credentials);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
