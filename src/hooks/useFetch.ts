import { useCallback } from 'react';

export const useFetch = () => {
  return useCallback(
    (url: string, init?: RequestInit) =>
      fetch(`https://hacker-news.firebaseio.com/v0/${url}.json`, init).then(
        (response) => {
          if (response.ok) return response.json();
          throw Error(response.statusText);
        },
        (reason) => {
          console.log(reason);
        },
      ),
    [],
  );
};
