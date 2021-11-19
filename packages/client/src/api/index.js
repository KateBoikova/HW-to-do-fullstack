import axios from 'axios';
import CONSTANTS from '../constants';

const axiosOptions = {
  baseURL: 'http://localhost:5000/api',
};

const apiInstance = axios.create(axiosOptions);

export const getTasks = () => {
  apiInstance.get('./tasks');
};

export const createTask = task => {
  return apiInstance.post('/tasks', task);
};

export const deleteTask = id => {
  apiInstance.delete(`/tasks/${id}`);
};

export const updateTask = (id, isDone) => {
  return apiInstance.patch(`/tasks/${id}`, { isDone });
};

export const changeTheme = theme => {
  const { BEIGE, BLACK } = CONSTANTS.THEMES;
  const newTheme = theme === BEIGE ? BLACK : BEIGE;
  return Promise.resolve({ data: newTheme });
};
