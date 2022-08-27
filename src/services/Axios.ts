import axios, { AxiosInstance } from 'axios';

const axiosIntance: AxiosInstance = axios.create({
  baseURL: 'https://mevn-back-production.up.railway.app//api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosIntance;
