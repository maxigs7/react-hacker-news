import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAsync } from '../../hooks/useAsync';
import { useFetchItems } from '../../hooks/useFetchItems';
import { IItem } from '../../shared/model';

const ItemsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const fetchItems = useFetchItems();
  const [{ data }, dispatch] = useAsync<IItem[]>();

  useEffect(() => {
    dispatch(fetchItems(slug));
  }, [dispatch, fetchItems, slug]);

  return (
    <>
      <h1>Items Page</h1>
      {data && data.map((data) => <p key={data.id}>{JSON.stringify(data)}</p>)}
    </>
  );
};

export default ItemsPage;
