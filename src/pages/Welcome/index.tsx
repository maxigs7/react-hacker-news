import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@chakra-ui/button';
import { Box, Heading } from '@chakra-ui/layout';

const WelcomePage: React.FC = () => {
  return (
    <>
      <Heading as="h1" size="xl" textAlign="center">
        Welcome to Hacker News Clone
      </Heading>

      <Box mt={5} mx="auto">
        <Button as={Link} colorScheme="hn-orange" to="/stories/new">
          Check the new stories
        </Button>
      </Box>
    </>
  );
};

export default WelcomePage;
