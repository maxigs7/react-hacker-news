import { useCallback } from 'react';
import { IItem } from '../shared/model';
import { useFetch } from './useFetch';
import { useFetchItem } from './useFetchItem';

const maxItems = 10;

export const useFetchItems = () => {
  const fetch = useFetch();
  const fetchItem = useFetchItem();
  // TODO: Improve adding external pagination
  const fetchItems = useCallback((response: number[]) => Promise.all(response.slice(0, maxItems).map(fetchItem)), [fetchItem]);
  return useCallback((key: string): Promise<IItem[]> => fetch(key).then(fetchItems), [fetch, fetchItems]);
};
