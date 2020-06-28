import { failLogin } from './loginService';

const fetch = require('node-fetch');

export const handleResponse = (response) => {
  if (response.ok) return response.json().catch(() => {});
  if (response.status === 401) {
    failLogin();
    throw response;
  }
  throw new Error(response.text());
};

export const fetchWrapper = async ({
  endpoint,
  method = 'GET',
  headers = { 'Content-Type': 'application/json' },
  body
} = {}) => {
  const payload = { method, headers };
  if (body) {
    payload.body = JSON.stringify(body);
  }
  const response = await fetch(process.env.API_URL + endpoint, payload);
  return handleResponse(response);
};
