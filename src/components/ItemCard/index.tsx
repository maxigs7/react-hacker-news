import { FaLink, FaRegComment, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { IItem } from '../../shared/model';
import { Card } from '../Card';
import styles from './item-card.module.css';

interface IProps {
  item: IItem;
}

export const ItemCard: React.FC<IProps> = ({ item }) => {
  const date = new Date(item.time * 1000);
  return (
    <Card className={styles.container}>
      <span className={styles.date}>{date.toLocaleDateString()}</span>
      <Link to={`/item/${item.id}`} className={styles.title}>
        {item.title}
      </Link>
      {!!item.url && (
        <a className={styles.link} target="_blank" href={item.url} rel="noreferrer">
          <FaLink />
          Visit Link
        </a>
      )}
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          {!!item.score && (
            <>
              <FaThumbsUp /> {item.score}
            </>
          )}
        </div>
        <div className={styles.footerItem}>
          {!!item.descendants && (
            <>
              <FaRegComment /> {item.descendants}
            </>
          )}
        </div>
      </div>
    </Card>
  );
};
