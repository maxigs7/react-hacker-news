import { useCallback } from 'react';

import { IItem } from '../shared/model';
import { useFetch } from './useFetch';
import { useFetchItem } from './useFetchItem';

type UseFetchItemsReturn = (ids: number[]) => Promise<IItem[]>;
type UseFetchItems = () => UseFetchItemsReturn;

export const useFetchItems: UseFetchItems = () => {
  const fetch = useFetch();
  const fetchItem = useFetchItem();

  return useCallback((ids: number[]): Promise<IItem[]> => Promise.all(ids.map(fetchItem)), [fetch]);
};
