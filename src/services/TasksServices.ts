import axios from './Axios';
import { Task } from '@/interface/Task';

export const createTask = async (task: Task) => await axios.post('/task', task);
export const getTasks = async () => await axios.get('/task');
export const getTask = async (id: string) => await axios.get('/task/' + id);
export const updateTask = async (id: string, task: Task) =>
  await axios.put('/task/' + id, task);
export const deleteTask = async (id: string) =>
  await axios.delete('/task/' + id);
