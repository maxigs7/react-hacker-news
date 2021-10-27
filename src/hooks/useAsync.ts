import { useCallback, useReducer } from 'react';

interface IState<T> {
  data?: T;
  error?: string;
  isLoading: boolean;
}

const initialState = {
  isLoading: false,
};

const createReducer =
  <T>() =>
  (state: IState<T>, action: any): IState<T> => {
    if (action.type === 'request') {
      return { ...state, isLoading: true, data: undefined, error: undefined };
    }
    if (action.type === 'success') {
      return { ...state, isLoading: false, data: action.payload, error: undefined };
    }
    if (action.type === 'error') {
      return { ...state, isLoading: false, data: undefined, error: action.payload };
    }
    return state;
  };

export const useAsync = <T>(): [IState<T>, (promiseFn: Promise<T>) => void] => {
  const reducer = createReducer<T>();
  const [state, dispatch] = useReducer(reducer, initialState);

  const asyncFn = useCallback((promiseFn: Promise<T>) => {
    dispatch({ type: 'request' });
    promiseFn.then(
      (data) => {
        dispatch({ type: 'success', payload: data });
      },
      (reason) => {
        dispatch({ type: 'error', payload: reason });
      },
    );
  }, []);

  return [state, asyncFn];
};
