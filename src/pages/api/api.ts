import ky from 'ky';

export const api = ky.create({
  prefixUrl: 'https://assignment-todolist-api.vercel.app',
});
