import { gql } from "@apollo/client";

export const GET_ALL_ENTERPRISES = gql`
  query {
    getAllEnterprises {
      id
      title
    }
  }
`;

export const GET_ONE_ENTERPRISE = gql`
  query getEnterprise($id: ID) {
    getEnterprise(id: $id) {
      id
      title
      vacancies {
        id
        vacancy
        requirements
        docs
      }
    }
  }
`;
