import { useSuspenseQuery } from '@tanstack/react-query';
import { getTodos } from './todos';
import { Item } from './todos.type';

export const useQueryTodos = () =>
  useSuspenseQuery<Item[]>({
    queryKey: ['id'],
    queryFn: () => {
      return getTodos();
    },
  });
