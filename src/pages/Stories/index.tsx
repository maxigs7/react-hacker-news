import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Heading } from '@chakra-ui/layout';

import { StoriesContainer } from '../../containers/StoriesContainer';

const StoriesPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const title = useMemo(() => {
    if (slug === 'ask') return 'Ask Stories';
    if (slug === 'best') return 'Best Stories';
    if (slug === 'show') return 'Show Stories';
    if (slug === 'top') return 'Top Stories';
    return 'News Stories';
  }, [slug]);

  return (
    <>
      <Heading mb={4} size="lg" textAlign="center">
        {title}
      </Heading>

      <StoriesContainer ids={[]} />
    </>
  );
};

export default StoriesPage;
