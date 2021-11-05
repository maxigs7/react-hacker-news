import { useCallback } from 'react';

import { useFetch } from './useFetch';

type UseFetchItemsReturn = (key: string) => Promise<number[]>;
type UseFetchItems = () => UseFetchItemsReturn;

export const useFetchItemIds: UseFetchItems = () => {
  const fetch = useFetch();

  return useCallback(
    (key: string): Promise<number[]> =>
      fetch(`${key}stories`).then((response: number[]) => response),
    [fetch],
  );
};
