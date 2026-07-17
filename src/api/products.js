import apiClient from './axios';

export const getProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data.data;
  } catch (error) {
    console.error('Error al tratar de cargar los productos:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await apiClient.get(`/products/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error al tratar de cargar el producto con id ${id}:`, error);
    throw error;
  }
};