import { useCallback } from 'react';
import { IItem } from '../shared/model';
import { useFetch } from './useFetch';

export const useFetchItem = () => {
  const fetch = useFetch();
  return useCallback((id: number) => fetch(`item/${id}`).then((response: IItem) => response), [fetch]);
};
