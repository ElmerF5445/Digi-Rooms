import axios from 'axios';
const API = axios.create({
    baseURL: 'http://localhost:5000/api/Rooms'
});

export const Rooms_Get = () => API.get('/');
export const Rooms_Create = (Room_Data) => API.post('/', Room_Data);
export const Rooms_Delete = (Room_ID) => API.delete(`/${Room_ID}`);