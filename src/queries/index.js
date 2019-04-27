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