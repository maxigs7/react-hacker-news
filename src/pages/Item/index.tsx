import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Flex } from '@chakra-ui/react';

import { ItemSummary, Loader } from '../../components';
import { CommentsContainer, UserContainer } from '../../containers';
import { useAsync } from '../../hooks/useAsync';
import { useFetchItem } from '../../hooks/useFetchItem';
import { IItem } from '../../shared/model';

const ItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const fetchItem = useFetchItem();
  const { data: item, execute, isLoading } = useAsync<IItem>(() => fetchItem(+id));

  useEffect(() => {
    execute();
  }, []);

  if (isLoading) {
    return (
      <Flex align="center" justify="center" p="20">
        <Loader />
      </Flex>
    );
  }
  if (!item) return null;

  // UNIX TIME

  return (
    <>
      <ItemSummary {...item} />
      <UserContainer id={item.by} />
      {item.kids && <CommentsContainer comments={item.kids} />}
    </>
  );
};

export default ItemPage;
