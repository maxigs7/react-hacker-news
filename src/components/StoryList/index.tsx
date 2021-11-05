import { VStack } from '@chakra-ui/layout';

import { IItem } from '../../shared/model';
import { StoryItem } from '../StoryItem';

interface IProps {
  items: IItem[];
}

export const StoryList: React.FC<IProps> = ({ items }) => {
  return (
    <VStack>
      {items.map((item) => (
        <StoryItem item={item} key={item.id} />
      ))}
    </VStack>
  );
};
