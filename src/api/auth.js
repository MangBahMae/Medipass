import request from './client';

export const signup = (data) =>
    request('/api/auth/signup', { method: 'POST', body: JSON.stringify(data) });

export const login = (data) =>
    request('/api/auth/login', { method: 'POST', body: JSON.stringify(data) });
