import { gql } from '@apollo/client';

export const GET_PHOTOS = gql`
  query GetPhotos {
    photos {
      id
      image {
        id
        url
      }
      caption
      updatedAt
    }
  }
`;

export const GET_SEASON_PHOTOS = gql`
  query GetSeasonPhotos($season: Season) {
    photos(where: { season: $season }) {
      id
      image {
        id
        url
      }
      caption
      updatedAt
    }
  }
`;
