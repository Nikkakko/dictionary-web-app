import axios from 'axios';
const BASE_URL = import.meta.env.VITE_DICTIONARY_API;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export const getWord = async (word: string) => {
  const response = await instance.get(`/${word}`);
  return response.data[0];
};
