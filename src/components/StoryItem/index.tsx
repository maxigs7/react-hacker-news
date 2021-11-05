import { Link as ReactLink } from 'react-router-dom';

import { StarIcon, ChatIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Divider, Flex, HStack, Link, Text } from '@chakra-ui/layout';

import { IItem } from '../../shared/model';

interface IProps {
  item: IItem;
}

export const StoryItem: React.FC<IProps> = ({ item }) => {
  const date = new Date(item.time * 1000).toLocaleDateString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <HStack
      bg="white"
      borderLeft={item.type === 'job' ? 5 : 0}
      borderLeftColor="hn-orange.500"
      borderLeftStyle="solid"
      boxShadow="base"
      minH="100px"
      p={4}
      w="full"
    >
      <HStack fontSize="xl" justify="center" w="20">
        <StarIcon />
        <Text color="hn-orange.500" fontWeight="bold">
          {item.score}
        </Text>
      </HStack>
      <Divider orientation="vertical" />
      <Flex direction="column" w="full">
        <Text fontSize="xs" fontStyle="italic">
          {date}
        </Text>
        <Text as={ReactLink} fontSize="lg" fontWeight="bold" to={`/item/${item.id}`}>
          {item.title}
        </Text>
        <HStack>
          {item.descendants && (
            <Text fontSize="sm" mt="auto">
              <ChatIcon /> {item.descendants}
            </Text>
          )}
          {item.url && (
            <Link href={item.url} isExternal>
              <ExternalLinkIcon mx="2px" />
            </Link>
          )}
        </HStack>
      </Flex>
    </HStack>
  );
};
