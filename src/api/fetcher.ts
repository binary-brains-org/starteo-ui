import axios, { AxiosInstance } from 'axios';

const baseURL: string = 'https://backend.com'; // TODO: change it

const fetcher: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});

export default fetcher;
