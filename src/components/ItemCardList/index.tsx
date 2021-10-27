import { IItem } from '../../shared/model';
import { ItemCard } from '../ItemCard';
import styles from './item-card-list.module.css';

interface IProps {
  items: IItem[];
}

export const ItemCardList: React.FC<IProps> = ({ items }) => {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};
