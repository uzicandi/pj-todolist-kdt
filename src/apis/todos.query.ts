import {
  useSuspenseQuery,
  useMutation,
  QueryClient,
} from '@tanstack/react-query';
import { getTodos, patchTodo } from './todos';
import { Item } from './todos.type';

export const useQueryTodos = () =>
  useSuspenseQuery<Item[]>({
    queryKey: ['id'],
    queryFn: () => {
      return getTodos();
    },
  });

export const useMutationTodos = () => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['id'] });
    },
  });
};
