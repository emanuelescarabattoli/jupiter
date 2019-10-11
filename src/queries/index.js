import gql from "graphql-tag";

export const QUERY_STATISTICS_LIST = gql`
  {
    listStatistics {
      id
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
      registerrowSet {
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

export const QUERY_STATISTICS_DETAIL = gql`
  query detailStatistics($id: Int) {
    detailStatistics(id: $id) {
      id
      description
      note
      result
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

export const MUTATION_STATISTICS = gql`
  mutation mutationStatistics($id: ID, $description: String!, $note: String) {
    mutationStatistics(input: {id: $id, description: $description, note: $note}) {
      statistics {
        id
      }
      errors {
        field
        messages
      }
    }
  }
`;

export const QUERY_REGISTER_ROW_DETAIL = gql`
    query detailRegisterRow($id: Int) {
      detailRegisterRow(id: $id) {
        id
        date
        description
        period
        amount
        note
      }
    }
  `;

export const MUTATION_REGISTER_ROW = gql`
  mutation mutationRegisterRow($id: ID, $date: Date!, $description: String!, $period: String!, $amount: Float!, $note: String, $register: ID!) {
    mutationRegisterRow(input: {id: $id, date: $date, description: $description, period: $period, amount: $amount, note: $note, register: $register}) {
      registerRow {
        id
      }
      errors {
        field
        messages
      }
    }
  }
`;

export const MUTATION_TOKEN_AUTH = gql`
  mutation tokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;
