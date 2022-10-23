import { gql } from '@apollo/client';

export const GET_ALL_NEWS = gql`
  query getAllNews {
    getAllNews {
      date
      id
      title
      description
      photos {
        id
        small
        large
        alt
        newsId
      }
    }
  }
`;

export const GET_ONE_NEWS = gql`
  query getNews($id: ID) {
    getNews(id: $id) {
      id
      date
      title
      description
      photos {
        id
        small
        large
        alt
        newsId
      }
    }
  }
`;
