import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/Accounts'
});

export const Accounts_Register = (data) => API.post('/Register', data);
export const Accounts_Login = (data) => API.post('/Login', data);