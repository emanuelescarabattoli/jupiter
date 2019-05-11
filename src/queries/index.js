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
      note
      amount
      itemSet {
        id
        date
        description
        period
        amount
        note
      }
    }
  }
`;

export const MUTATION_REGISTER = gql`
  mutation mutationRegister($id: ID, $description: String!, $note: String) {
    mutationRegister(input: {id: $id, description: $description, note: $note}) {
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