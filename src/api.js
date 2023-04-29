import axios from 'axios';

axios.defaults.baseURL = 'https://644b7e0617e2663b9df0a34d.mockapi.io/';

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`/users`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
