import { api } from '@/pages/api/api';
import { DetailItem, Item, UploadResponse } from './todos.type';

export const getTodos = async () => {
  return await api.get('api/jiwoo/items').json<Item[]>();
};

export const getTodo = async ({ id }: Pick<DetailItem, 'id'>) => {
  return await api.get(`api/jiwoo/items/${id}`).json<DetailItem>();
};

export const postTodos = async ({ name }: Pick<Item, 'name'>) => {
  return await api.post('api/jiwoo/items', { json: { name } }).json<Item>();
};

export const patchTodo = async ({
  id,
  name,
  isCompleted,
  memo,
  imageUrl,
}: DetailItem) => {
  return await api
    .patch(`api/jiwoo/items/${id}`, {
      json: { name, isCompleted, memo, imageUrl },
    })
    .json<Item>();
};

export const deleteTodo = async ({ id }: Pick<Item, 'id'>) => {
  return await api.delete(`api/jiwoo/items/${id}`).json<Item>();
};

export const uploadImage = async (formData: FormData) => {
  return await api
    .post('api/jiwoo/images/upload', { body: formData })
    .json<UploadResponse>();
};
