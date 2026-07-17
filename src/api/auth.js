import apiClient from './axios';

export const login = async (data) => {
  try {
    const response = await apiClient.post('/auth/login', data);
    return response.data.data;
  } catch (error) {
    console.error('Error al tratar de iniciar sesión:', error);
    throw error;
  }
};

export const register = async (data) => {
  try {
    const response = await apiClient.post('/auth/register', data);
    return response.data.data;
  } catch (error) {
    console.error('Error al tratar de registrar un nuevo usuario:', error);
    throw error;
  }
};