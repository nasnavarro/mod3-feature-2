import apiClient from './axios';

export const getReviews = async (productId) => {
  try {
    const response = await apiClient.get(`/products/${productId}/reviews`);
    return response.data.data;
  } catch (error) {
    console.error(`Error al tratar de cargar las reseñas del producto con id ${productId}:`, error);
    throw error;
  }
};