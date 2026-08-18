import request from './client';

export const searchKoreanMedications = (query) =>
    request(`/api/medications/korean?query=${encodeURIComponent(query)}`);
