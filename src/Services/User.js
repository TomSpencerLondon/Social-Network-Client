import { fetchWrapper } from './fetchApi';

export const register = (user) => fetchWrapper({ endpoint: '/register', method: 'POST', body: user });

export const login = (user) => fetchWrapper({ endpoint: '/login', method: 'POST', body: user });
