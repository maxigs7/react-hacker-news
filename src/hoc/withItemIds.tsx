import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Flex } from '@chakra-ui/layout';

import { Loader } from '../components';
import { useAsync } from '../hooks/useAsync';
import { useFetchItemIds } from '../hooks/useFetchItemIds';

export interface IWithItemIdsProps {
  ids: number[];
}

const withItemIds =
  <P extends IWithItemIdsProps>(Component: React.ComponentType<P>) =>
  (props: P): React.ReactElement => {
    const fetchItemIds = useFetchItemIds();
    const { slug } = useParams<{ slug: string }>();
    const { data, isLoading, execute } = useAsync<number[]>(() => fetchItemIds(slug));

    useEffect(() => {
      execute();
    }, [slug]);

    if (isLoading) {
      return (
        <Flex align="center" justify="center" p="20">
          <Loader />
        </Flex>
      );
    }

    return <Component {...(props as P)} ids={data || []} />;
  };

export default withItemIds;
