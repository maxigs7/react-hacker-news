import React, { useEffect } from 'react';

import { Flex, Heading, VStack } from '@chakra-ui/layout';

import { Loader } from '../../components';
import { CommentList } from '../../components/CommentList';
import { useAsync } from '../../hooks/useAsync';
import { useFetchItems } from '../../hooks/useFetchItems';
import { IItem } from '../../shared/model';

interface IProps {
  comments: number[];
}

export const CommentsContainer: React.FC<IProps> = ({ comments }) => {
  const fetchItems = useFetchItems();
  const { data, execute, isLoading } = useAsync<IItem[]>(() => fetchItems(comments));

  useEffect(() => {
    execute();
  }, []);

  if (isLoading) {
    return (
      <Flex align="center" justify="center" p="10">
        <Loader />
      </Flex>
    );
  }

  return (
    <VStack align="flex-start" bg="white" boxShadow="md" mt={5} p={3}>
      <Heading fontSize="lg" fontWeight="bold">
        Comments
      </Heading>

      {data && <CommentList comments={data} />}
    </VStack>
  );
};
