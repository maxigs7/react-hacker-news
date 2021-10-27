import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components';
import { useAsync } from '../../hooks/useAsync';
import { useFetchItem } from '../../hooks/useFetchItem';
import { IItem } from '../../shared/model';
import styles from './item.module.css';

const ItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const fetchItem = useFetchItem();
  const [{ data, isLoading }, dispatch] = useAsync<IItem>();

  useEffect(() => {
    // TODO: Validate string on route (regexp for numbers)
    dispatch(fetchItem(+id));
  }, [dispatch, fetchItem, id]);

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }
  if (!data) return null;

  // UNIX TIME
  const date = new Date(data.time * 1000);

  return (
    <div className={styles.container}>
      <span className={styles.date}>{date.toLocaleDateString()}</span>
      <h1 className={styles.title}>{data.title}</h1>
      {data.text && <div dangerouslySetInnerHTML={{ __html: data.text }} className={styles.text} />}

      <div className={styles.userInfo}>Created by {data.by}</div>
    </div>
  );
};

export default ItemPage;
