import React, { useEffect } from 'react';

import { CopyIcon, StarIcon } from '@chakra-ui/icons';
import { VStack, Text, HStack, Box } from '@chakra-ui/layout';

import { useAsync } from '../../hooks/useAsync';
import { useFetchUser } from '../../hooks/useFetchUser';
import { IUser } from '../../shared/model';

interface IProps {
  id: string;
}

export const UserContainer: React.FC<IProps> = ({ id }) => {
  const fetchUser = useFetchUser();
  const { data, execute } = useAsync<IUser>(() => fetchUser(id));

  useEffect(() => {
    execute();
  }, []);

  if (!data) return null;

  return (
    <VStack align="flex-start" bg="white" boxShadow="md" mt={5} p={3}>
      <HStack align="center">
        <Text fontWeight="bold" mr={5}>
          Created by {id}
        </Text>
        <StarIcon />
        <span>{data.karma} </span>
        {data.submitted && (
          <>
            <CopyIcon />
            <span>{data.submitted.length}</span>
          </>
        )}
      </HStack>

      {data?.about && (
        <Box
          dangerouslySetInnerHTML={{ __html: data.about }}
          fontSize="md"
          fontStyle="italic"
          fontWeight="light"
        />
      )}
    </VStack>
  );
};
