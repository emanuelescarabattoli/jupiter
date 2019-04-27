import gql from "graphql-tag";

const resolvers = {
  Mutation: {
    setCurrentDomanda: (_, variables, { cache }) => {
      const query = gql`
        {
          containers @client {
            domanda {
              currentDomanda
            }
          }
        }
      `;
      cache.writeQuery({
        query,
        data: {
          containers: {
            __typename: "Containers",
            domanda: {
              __typename: "Container",
              currentDomanda: variables.index
            }
          }
        }
      });
      return null;
    },
    setSelectedRisposte: (_, variables, { cache }) => {
      const query = gql`
        {
          containers @client {
            domanda {
              selectedRisposte
            }
          }
        }
      `;
      cache.writeQuery({
        query,
        data: {
          containers: {
            __typename: "Containers",
            domanda: {
              __typename: "Container",
              selectedRisposte: variables.selectedRisposte
            }
          }
        }
      });
      return null;
    },
    setPercentage: (_, variables, { cache }) => {
      const query = gql`
        {
          containers @client {
            domanda {
              percentage
            }
          }
        }
      `;
      cache.writeQuery({
        query,
        data: {
          containers: {
            __typename: "Containers",
            domanda: {
              __typename: "Container",
              percentage: variables.percentage
            }
          }
        }
      });
      return null;
    },
    setTotal: (_, variables, { cache }) => {
      const query = gql`
        {
          containers @client {
            domanda {
              total
            }
          }
        }
      `;
      cache.writeQuery({
        query,
        data: {
          containers: {
            __typename: "Containers",
            domanda: {
              __typename: "Container",
              total: variables.total
            }
          }
        }
      });
      return null;
    }
  }
};

export default resolvers;