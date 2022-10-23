import { gql } from '@apollo/client';

export const GET_ALL_ENTERPRISES = gql`
  query getAllEnterprises {
    getAllEnterprises {
      id
      title
      logo
      vacancies {
        id
        vacancy
        requirements
        docs
        salary
        authorId
      }
      photos {
        id
        small
        large
        alt
        authorId
      }
      marker {
        id
        value
        top
        left
        corner
      }
      contacts
    }
  }
`;

export const GET_ONE_ENTERPRISE = gql`
  query getEnterprise($id: ID) {
    getEnterprise(id: $id) {
      id
      title
      logo
      contacts
      vacancies {
        id
        vacancy
        requirements
        docs
        salary
        authorId
      }
      photos {
        id
        small
        large
        alt
        authorId
      }
      marker {
        id
        value
        top
        left
        corner
      }
    }
  }
`;
