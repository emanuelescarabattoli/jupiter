import gql from "graphql-tag";

export const QUERY_STATISTICS_LIST = gql`
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

export const QUERY_REGISTER_LIST = gql`
  {
    listRegister {
      id
      description
      note
      amount
    }
  }
`;

export const QUERY_REGISTER_DETAIL = gql`
  query detailRegister($id: Int) {
    detailRegister(id: $id) {
      id
      description
    }
  }
`;

export const MUTATION_REGISTER_CREATE = gql`
  mutation createRegister($description: String!, $note: String) {
    mutationRegister(input: {description: $description, note: $note}) {
      register {
        id
      }
      errors {
        field
        messages
      }
    }
  }
`;