import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

export const registerUser = async (userData) => {
  const res = await axios.post(API_URL, userData);
  return res.data;
};

export const loginUser = async (username, password) => {
  const res = await axios.get(`${API_URL}?username=${username}&password=${password}`);
  if (res.data.length > 0) {
    return res.data[0];
  }
  throw new Error('Invalid credentials');
};