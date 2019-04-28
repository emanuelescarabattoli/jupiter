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

export const MUTATION_CREATE_REGISTER = gql`
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