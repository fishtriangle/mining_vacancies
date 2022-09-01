import { gql } from "@apollo/client";

export const UPDATE_ENTERPRISE = gql`
  mutation updateEnterprise($input: EnterpriseInput) {
    updateEnterprise(input: $input) {
      content
    }
  }
`;
