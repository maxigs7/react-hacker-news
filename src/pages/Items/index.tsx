import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router';
import { ItemCardList } from '../../components';
import { Loader } from '../../components/Loader';
import { useAsync } from '../../hooks/useAsync';
import { useFetchItems } from '../../hooks/useFetchItems';
import { IItem } from '../../shared/model';

const ItemsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const fetchItems = useFetchItems();
  const [{ data, isLoading }, dispatch] = useAsync<IItem[]>();
  const title = useMemo(() => {
    if (slug === 'topstories') return 'Top Stories';
    if (slug === 'beststories') return 'Best Stories';
    return 'News Stories';
  }, [slug]);

  useEffect(() => {
    dispatch(fetchItems(slug));
  }, [dispatch, fetchItems, slug]);

  return (
    <>
      <h1>{title}</h1>
      {isLoading && (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}
      {data && <ItemCardList items={data} />}
    </>
  );
};

export default ItemsPage;
