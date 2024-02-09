import axios, { AxiosInstance } from 'axios';

const baseURL: string = import.meta.env.VITE_BASE_URL || ''; // TODO: change it

const fetcher: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});

export default fetcher;
