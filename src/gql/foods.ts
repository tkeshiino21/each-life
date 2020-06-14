import { gql } from '@apollo/client';

export const GET_FOODS = gql`
  query GetFoods {
    foods {
      id
      image {
        id
        handle
      }
      caption
      ingredients
      updatedAt
    }
  }
`;
