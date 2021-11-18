import axios from 'axios';
import CONSTANTS from '../constants';

const axiosOptions = {
  baseUrl: 'http://127.0.0.1:3000/api',
};

const apiInstance = axios.create({ axiosOptions });

const tasks = [
  {
    id: Date.now(),
    body: 'First task',
    isDone: false,
  },
];

export const getTasks = () => {
  return Promise.resolve({ data: tasks });
};

export const createTask = task => {
  const newTask = { ...task, id: Date.now() };
  tasks.push(newTask);
  return Promise.resolve({ data: newTask });
};

export const deleteTask = id => {
  return Promise.resolve();
};

export const updateTask = id => {
  const index = tasks.findIndex(t => id === t.id);
  let updatedTask = tasks[index];
  updatedTask.isDone = !updatedTask.isDone;
  return Promise.resolve({ data: { ...updatedTask } });
};

export const changeTheme = theme => {
  const { BEIGE, BLACK } = CONSTANTS.THEMES;
  const newTheme = theme === BEIGE ? BLACK : BEIGE;
  return Promise.resolve({ data: newTheme });
};
