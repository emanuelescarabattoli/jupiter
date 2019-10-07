import ApolloClient from "apollo-boost";

export default new ApolloClient({
  uri: process.env.API_BASE_URL,
  request: operation => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token ? `JWT ${token}` : ""
      }
    });
  }
});
