import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://cogentsolutions-redesign-production.up.railway.app/api'
});