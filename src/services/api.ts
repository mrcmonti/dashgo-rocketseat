import axios from 'axios';
import { ApiError } from 'next/dist/server/api-utils';

export const api = axios.create({
    baseURL: 'http://localhost:3000/api/'
})