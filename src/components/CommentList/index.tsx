import { Divider, VStack } from '@chakra-ui/layout';

import { IItem } from '../../shared/model';
import { CommentItem } from '../CommentItem';

interface IProps {
  comments: IItem[];
}

export const CommentList: React.FC<IProps> = ({ comments }) => {
  return (
    <VStack w="full">
      {comments.map((comment, index) => (
        <>
          <CommentItem comment={comment} key={comment.id} />
          {index < comments.length - 1 && <Divider />}
        </>
      ))}
    </VStack>
  );
};
