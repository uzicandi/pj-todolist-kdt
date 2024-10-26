import { api } from '@/pages/api/api';
import { Item } from './todos.type';

export const getTodos = async () => {
  return await api.get('api/jiwoo/items').json<Item[]>();
};

export const getTodo = async ({ id }: Pick<Item, 'id'>) => {
  return await api.get(`api/jiwoo/items/${id}`).json<Item>();
};

export const postTodos = async ({ name }: Pick<Item, 'name'>) => {
  return await api.post('api/jiwoo/items', { json: { name } }).json<Item>();
};

export const patchTodo = async ({
  id,
  isCompleted,
}: Pick<Item, 'id' | 'isCompleted'>) => {
  return await api
    .patch(`api/jiwoo/items/${id}`, { json: { isCompleted } })
    .json<Item>();
};
