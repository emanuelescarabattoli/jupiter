import gql from "graphql-tag";

export const QUERY_LIST_STATISTICS = gql`
  {
    listStatistics {
      id
      formula
      description
      note
      result
    }
  }
`;

export const QUERY_LIST_REGISTER = gql`
  {
    listRegister {
      id
      description
      note
      amount
    }
  }
`;