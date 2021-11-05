import React, { useMemo } from 'react';

import { ChatIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Heading, Link, Text, VStack } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/react';

import { IItem } from '../../shared/model';

export const ItemSummary: React.FC<IItem> = ({ descendants, time, text, title, url }) => {
  const date = useMemo(
    () =>
      new Date(time * 1000).toLocaleDateString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
    [time],
  );

  return (
    <VStack align="flex-start" bg="white" boxShadow="md" p={3}>
      <Text fontSize="xs" fontStyle="italic">
        {date}
      </Text>
      <Heading as="h1" fontSize="lg" fontWeight="bold">
        {title}
      </Heading>

      {text && <Box dangerouslySetInnerHTML={{ __html: text }} />}

      <HStack>
        {descendants && (
          <Text fontSize="sm">
            <ChatIcon mr={1} /> {descendants}
          </Text>
        )}

        {url && (
          <Link href={url} isExternal>
            <ExternalLinkIcon mx="2px" />
          </Link>
        )}
      </HStack>
    </VStack>
  );
};
