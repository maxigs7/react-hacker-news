import { useEffect, useMemo } from 'react';

import { Flex } from '@chakra-ui/layout';

import { Paginator, StoryList } from '../../components';
import { Loader } from '../../components/Loader';
import withItemIds, { IWithItemIdsProps } from '../../hoc/withItemIds';
import { useAsync } from '../../hooks/useAsync';
import { useFetchItems } from '../../hooks/useFetchItems';
import { usePagination } from '../../hooks/usePagination';
import { IItem } from '../../shared/model';

const contentPerPage = 15;

export const StoriesContainer = withItemIds(({ ids }: IWithItemIdsProps) => {
  const fetchItems = useFetchItems();
  const { firstContentIndex, lastContentIndex, nextPage, page, prevPage, totalPages } =
    usePagination({
      contentPerPage,
      count: ids.length,
    });
  const idsPaginated = useMemo(
    () => ids.slice(firstContentIndex, lastContentIndex),
    [firstContentIndex, lastContentIndex],
  );
  const { data, isLoading, execute } = useAsync<IItem[]>(() => fetchItems(idsPaginated));

  useEffect(() => {
    if (idsPaginated) {
      execute();
    }
  }, [idsPaginated]);

  if (isLoading) {
    return (
      <Flex align="center" justify="center" p="20">
        <Loader />
      </Flex>
    );
  }

  return (
    <>
      <Paginator
        alignSelf="center"
        mb={3}
        nextPage={nextPage}
        page={page}
        prevPage={prevPage}
        totalPages={totalPages}
      />

      {data && <StoryList items={data} />}

      <Paginator
        alignSelf="center"
        mt={3}
        nextPage={nextPage}
        page={page}
        prevPage={prevPage}
        totalPages={totalPages}
      />
    </>
  );
});
