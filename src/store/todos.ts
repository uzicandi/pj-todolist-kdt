import { atomWithQuery, atomWithMutation } from 'jotai-tanstack-query';
import { Item } from '@/apis/todos.type';
import { getTodos, patchTodo } from '@/apis/todos';
import { QueryClient } from '@tanstack/react-query';

export const todosAtom = atomWithQuery<Item[]>(() => ({
  queryKey: ['id'],
  queryFn: getTodos,
}));

export const patchTodosAtom = atomWithMutation(() => {
  const queryClient = new QueryClient();

  return {
    mutationKey: ['patch'],
    mutationFn: patchTodo,
    onMutate: ({ id, isCompleted }: Pick<Item, 'id' | 'isCompleted'>) => {
      return { id, isCompleted };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['id'] });
    },
  };
});
