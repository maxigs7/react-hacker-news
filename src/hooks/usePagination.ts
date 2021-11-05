import { useCallback, useMemo, useState } from 'react';

interface UsePaginationProps {
  contentPerPage: number;
  count: number;
}

export interface UsePaginationReturn {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}

type UsePagination = (props: UsePaginationProps) => UsePaginationReturn;

export const usePagination: UsePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);
  // number of pages in total (total items / content on each page)
  const pageCount = useMemo(() => Math.ceil(count / contentPerPage), [contentPerPage, count]);
  // index of last item of current page
  const lastContentIndex = useMemo(() => page * contentPerPage, [page, contentPerPage]);
  // index of first item of current page
  const firstContentIndex = useMemo(
    () => lastContentIndex - contentPerPage,
    [lastContentIndex, contentPerPage],
  );

  // change page based on direction either front or back
  const changePage = useCallback((direction: boolean) => {
    setPage((state) => {
      // move forward
      if (direction) {
        // if page is the last page, do nothing
        if (state === pageCount) {
          return state;
        }
        return state + 1;
        // go back
      } else {
        // if page is the first page, do nothing
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  }, []);

  const setPageSAFE = useCallback(
    (num: number) => {
      // if number is greater than number of pages, set to last page
      if (num > pageCount) {
        setPage(pageCount);
        // if number is less than 1, set page to first page
      } else if (num < 1) {
        setPage(1);
      } else {
        setPage(num);
      }
    },
    [pageCount],
  );

  return useMemo(
    () => ({
      totalPages: pageCount,
      nextPage: () => changePage(true),
      prevPage: () => changePage(false),
      setPage: setPageSAFE,
      firstContentIndex,
      lastContentIndex,
      page,
    }),
    [pageCount, firstContentIndex, lastContentIndex, page],
  );
};
