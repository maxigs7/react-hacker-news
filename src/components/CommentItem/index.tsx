import { VStack, Text, Box } from '@chakra-ui/layout';

import { IItem } from '../../shared/model';

interface IProps {
  comment: IItem;
}

export const CommentItem: React.FC<IProps> = ({ comment }) => {
  const date = new Date(comment.time * 1000).toLocaleDateString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <VStack align="flex-start" w="full">
      <Text fontSize="xs" fontStyle="italic">
        <Text as="span" fontWeight="bold">
          {comment.by}
        </Text>
        - {date}
      </Text>
      {comment.text && (
        <Box dangerouslySetInnerHTML={{ __html: comment.text }} fontSize="md" w="full" />
      )}
    </VStack>
  );
};
