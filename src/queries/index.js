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

export const MUTATION_ITEM = gql`
  mutation mutationItem($id: ID, $date: Date!, $description: String!, $period: String!, $amount: Float!, $note: String, $register: ID!) {
    mutationItem(input: {id: $id, date: $date, description: $description, period: $period, amount: $amount, note: $note, register: $register}) {
      item {
        id
      }
      errors {
        field
        messages
      }
    }
  }
`;

export const QUERY_ITEM_DETAIL = gql`
  query detailItem($id: Int) {
    detailItem(id: id) {
      id
      date
      description
      period
      amount
      note
    }
  }
`;