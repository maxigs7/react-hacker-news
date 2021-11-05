import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Flex } from '@chakra-ui/react';

import { Navbar, PageLoader } from './components';
import { routes } from './routes';

const App: React.FC = () => (
  <Flex
    bg="hn-orange.100"
    direction="column"
    flex={1}
    minH="100vh"
    overflow="hidden"
    overflowX="hidden"
    overflowY="auto"
    pos="relative"
  >
    <Navbar />
    <Flex
      as="main"
      direction="column"
      maxW="container.lg"
      mx="auto"
      px={{ base: 4, sm: 6, lg: 8 }}
      py={8}
      width="full"
    >
      <Suspense fallback={<PageLoader />}>
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
          <Redirect from="/" to="/welcome" exact />
          <Redirect from="*" to="/404" />
        </Switch>
      </Suspense>
    </Flex>
  </Flex>
);

export default App;
