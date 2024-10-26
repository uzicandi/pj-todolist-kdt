import {
  atomWithQuery,
  atomWithMutation,
  queryClientAtom,
} from 'jotai-tanstack-query';
import { Item } from '@/apis/todos.type';
import { getTodo, getTodos, patchTodo, postTodos } from '@/apis/todos';

export const todosAtom = atomWithQuery<Item[]>(() => ({
  queryKey: ['todos'],
  queryFn: getTodos,
}));

export const todoAtom = (todoId: number) => {
  console.log({ todoId });
  return atomWithQuery<Item>(() => ({
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
    onMutate: ({ id, isCompleted }: Pick<Item, 'id' | 'isCompleted'>) => {
      return { id, isCompleted };
    },
    onSettled: () => {
      const client = get(queryClientAtom);
      client.invalidateQueries({ queryKey: ['todos'] });
    },
  };
});
