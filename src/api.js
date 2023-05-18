import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getTasks = () => {
    return axios.get(`${API_BASE_URL}/tasks`);
};

export const addTask = (task) => {
    return axios.post(`${API_BASE_URL}/tasks`, task);
};