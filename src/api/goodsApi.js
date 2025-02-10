import axios from 'axios';
import { API_KEY, API_URL } from '../config';

// Функция для получения товаров
export const fetchGoods = async () => {
  try {
    // Выполняем GET-запрос с помощью axios
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    // Возвращаем данные из ответа
    return response.data.shop;
  } catch (error) {
    // Обрабатываем ошибки
    console.error('Fetch error:', error);
    throw error; // Пробрасываем ошибку дальше
  }
};