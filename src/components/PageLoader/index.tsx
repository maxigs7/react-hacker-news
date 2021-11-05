import React from 'react';

import { Box, Flex } from '@chakra-ui/react';

import { Loader } from '../Loader';

export const PageLoader: React.FC = () => (
  <Box bg="hn-orange.200" h="full" left={0} opacity={0.75} pos="fixed" top={0} w="full" zIndex={50}>
    <Flex align="center" h="full" justify="center" w="full">
      <Loader />
    </Flex>
  </Box>
);
