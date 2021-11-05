import { useCallback } from 'react';

type UseFetchHookReturn = (url: string, init?: RequestInit) => Promise<any>;
type UseFetchHook = () => UseFetchHookReturn;

export const useFetch: UseFetchHook = () => {
  return useCallback(
    (url: string, init?: RequestInit) =>
      fetch(`https://hacker-news.firebaseio.com/v0/${url}.json`, init).then((response) => {
        if (response.ok) return response.json();
        throw Error(response.statusText);
      }),
    [],
  );
};
