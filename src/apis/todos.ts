import { api } from '@/pages/api/api';
import { Item } from './todos.type';

export const getTodos = async () => {
  return await api.get('api/jiwoo/items').json<Item[]>();
};
