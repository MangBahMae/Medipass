import request from './client';

export const getMyInfo = () => request('/api/users/me');

export const updateMyInfo = (data) =>
    request('/api/users/me', { method: 'PUT', body: JSON.stringify(data) });

export const getAllergies = () => request('/api/users/me/allergies');

export const addAllergy = (name) =>
    request('/api/users/me/allergies', { method: 'POST', body: JSON.stringify({ name }) });

export const deleteAllergy = (id) =>
    request(`/api/users/me/allergies/${id}`, { method: 'DELETE' });

export const getMedications = () => request('/api/users/me/medications');

export const addMedication = (koreanMedicationId) =>
    request('/api/users/me/medications', {
        method: 'POST',
        body: JSON.stringify({ koreanMedicationId }),
    });

export const deleteMedication = (id) =>
    request(`/api/users/me/medications/${id}`, { method: 'DELETE' });
