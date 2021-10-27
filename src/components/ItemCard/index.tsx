import { IItem } from '../../shared/model';
import { Card } from '../Card';
import styles from './item-card.module.css';

interface IProps {
  item: IItem;
}

export const ItemCard: React.FC<IProps> = ({ item }) => {
  return <Card>{item.id}</Card>;
};
