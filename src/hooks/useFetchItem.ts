import { useCallback } from 'react';

import { IItem } from '../shared/model';
import { useFetch } from './useFetch';

type UseFetchItemReturn = (id: number) => Promise<IItem>;
type UseFetchItem = () => UseFetchItemReturn;

export const useFetchItem: UseFetchItem = () => {
  const fetch = useFetch();
  return useCallback(
    (id: number) => fetch(`item/${id}`).then((response: IItem) => response),
    [fetch],
  );
};
