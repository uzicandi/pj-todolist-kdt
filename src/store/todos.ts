import {
  atomWithQuery,
  atomWithMutation,
  queryClientAtom,
} from 'jotai-tanstack-query';
import { atom } from 'jotai';
import { DetailItem, Item } from '@/apis/todos.type';
import {
  deleteTodo,
  getTodo,
  getTodos,
  patchTodo,
  postTodos,
} from '@/apis/todos';

export const todosAtom = atomWithQuery<Item[]>(() => ({
  queryKey: ['todos'],
  queryFn: getTodos,
}));

export const todoAtom = (todoId: number) => {
  return atomWithQuery<DetailItem>(() => ({
    queryKey: ['todos', todoId],
    queryFn: () => getTodo({ id: todoId }),
  }));
};

export const postTodosAtom = atomWithMutation((get) => {
  return {
    mutationKey: ['todos'],
    mutationFn: postTodos,
    onSuccess: () => {
      const client = get(queryClientAtom);
      client.invalidateQueries({ queryKey: ['todos'] });
    },
  };
});

export const patchTodosAtom = atomWithMutation((get) => {
  return {
    mutationKey: ['todos'],
    mutationFn: patchTodo,
    onSuccess: () => {
      const client = get(queryClientAtom);
      client.invalidateQueries({ queryKey: ['todos'] });
    },
  };
});

export const deleteTodosAtom = atomWithMutation((get) => {
  return {
    mutationKey: ['todos'],
    mutationFn: deleteTodo,
    onSuccess: () => {
      const client = get(queryClientAtom);
      client.invalidateQueries({ queryKey: ['todos'] });
    },
  };
});
