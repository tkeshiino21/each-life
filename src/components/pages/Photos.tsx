import React, { FC } from 'react';
import { MdArrowDownward } from 'react-icons/md';
import PageLayout from '../organisms/layout/PageLayout';
import HeroHeader from '../organisms/HeroHeader';
import { Wrap, Flex, Text } from '../atoms';
import { useGetPhotosQuery } from '../../generated/graphql';
import { Loader } from '../atoms/Loader';
import Photo from '../organisms/Photo';

const Photos: FC = () => {
  const { loading, error, data } = useGetPhotosQuery();

  if (loading) return <Loader />;
  if (error) return <p>err ...</p>;
  if (!data) return <p>err ...</p>;

  return (
    <PageLayout>
      <Wrap m="48px" rm="12px" style={{ minHeight: '72vh' }}>
        <Flex
          width="100%"
          direction="column"
          justify="center"
          aligns="center"
          height="80vh"
        >
          <HeroHeader />
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              marginTop: '32px',
            }}
          >
            <MdArrowDownward />
            <Text>FetchMore</Text>
          </div>
        </Flex>
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

export default Photos;
