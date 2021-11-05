import { useCallback } from 'react';

import { IUser } from '../shared/model';
import { useFetch } from './useFetch';

type UseFetchUserReturn = (id: string) => Promise<IUser>;
type UseFetchUser = () => UseFetchUserReturn;

export const useFetchUser: UseFetchUser = () => {
  const fetch = useFetch();
  return useCallback(
    (id: string) => fetch(`user/${id}`).then((response: IUser) => response),
    [fetch],
  );
};
