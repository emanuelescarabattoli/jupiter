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

export const MUTATION_REGISTER_DELETE = gql`
  mutation mutationDeleteRegister($pk: Int!) {
    mutationDeleteRegister(pk: $pk) {
      success
    }
  }
`;

export const MUTATION_REGISTER_ROW_DELETE = gql`
  mutation mutationDeleteRegisterRow($pk: Int!) {
    mutationDeleteRegisterRow(pk: $pk) {
      success
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

export const MUTATION_STATISTICS_DELETE = gql`
  mutation mutationDeleteStatistics($pk: Int!) {
    mutationDeleteStatistics(pk: $pk) {
      success
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

export const QUERY_STATISTICS_ROW_REGISTER_DETAIL = gql`
  query detailStatisticsRowRegister($id: Int) {
    detailStatisticsRowRegister(id: $id) {
      id
      register {
        id
        description
      }
    }
  }
`;

export const QUERY_STATISTICS_ROW_STATISTICS_DETAIL = gql`
  query detailStatisticsRowStatistics($id: Int) {
    detailStatisticsRowStatistics(id: $id) {
      id
      register {
        id
        description
      }
    }
  }
`;

export const QUERY_STATISTICS_ROW_REGISTER_LIST = gql`
  query listStatisticsRowRegister($statistics: Int) {
    listStatisticsRowRegister(statistics: $statistics) {
      register {
        id
        description
      }
    }
  }
`;

export const QUERY_STATISTICS_ROW_STATISTICS_LIST = gql`
  query listStatisticsRowStatistics($statistics: Int) {
    listStatisticsRowStatistics(statistics: $statistics) {
      statistics {
        id
        description
      }
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

export const MUTATION_STATISTICS_ROW_REGISTER = gql`
  mutation mutationStatisticsRowRegister($id: ID, $parentStatistics: ID!, $register: ID!) {
    mutationStatisticsRowRegister(input: {id: $id, parentStatistics: $parentStatistics, register: $register}) {
      statisticsRowRegister {
        id
      }
      errors {
        field
        messages
      }
    }
  }
`;

export const MUTATION_STATISTICS_ROW_STATISTICS = gql`
  mutation mutationStatisticsRowStatistics($id: ID, $parentStatistics: ID!, $statistics: ID!) {
    mutationStatisticsRowStatistics(input: {id: $id, parentStatistics: $parentStatistics, statistics: $statistics}) {
      statisticsRowRegister {
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
