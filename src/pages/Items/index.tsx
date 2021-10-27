import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Loader } from '../../components/Loader';
import { useAsync } from '../../hooks/useAsync';
import { useFetchItems } from '../../hooks/useFetchItems';
import { IItem } from '../../shared/model';

const ItemsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const fetchItems = useFetchItems();
  const [{ data, isLoading }, dispatch] = useAsync<IItem[]>();

  useEffect(() => {
    dispatch(fetchItems(slug));
  }, [dispatch, fetchItems, slug]);

  return (
    <>
      <h1>Items Page</h1>
      {isLoading && (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}
      {data && data.map((data) => <p key={data.id}>{JSON.stringify(data)}</p>)}
    </>
  );
};

export default ItemsPage;
