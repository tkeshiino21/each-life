import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetSeasonPhotosQuery, Season } from '../../generated/graphql';
import PageLayout from '../organisms/layout/PageLayout';
import { Wrap, Loader } from '../atoms';
import Photo from '../organisms/Photo';

const SeasonsPhotos = () => {
  const location = useLocation();
  const switchSeason = () => {
    switch (location.pathname) {
      case '/photos/spring':
        return Season.Spring;
      case '/photos/summer':
        return Season.Summer;
      case '/photos/autumn':
        return Season.Autumn;
      case '/photos/winter':
        return Season.Winter;
      default:
        return Season.Spring;
    }
  };
  const { loading, error, data } = useGetSeasonPhotosQuery({
    variables: { season: switchSeason() },
  });

  if (loading) return <Loader />;
  if (error) return <p>err ...</p>;
  if (!data) return <p>err ...</p>;

  return (
    <PageLayout>
      <Wrap m="48px" rm="12px" style={{ minHeight: '72vh' }}>
        {data.photos.map((photo) => {
          return (
            <li key={photo.id}>
              <Photo photo={photo} />
            </li>
          );
        })}
      </Wrap>
    </PageLayout>
  );
};

export default SeasonsPhotos;
