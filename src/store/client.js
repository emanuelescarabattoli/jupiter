import ApolloClient from "apollo-boost";

import defaults from "./defaults"; 
import resolvers from "./resolvers"; 


const configuration = {
  uri: process.env.API_BASE_URL,
  credentials: "include",
  clientState: {
    defaults,
    resolvers
  }
};

export default new ApolloClient(configuration);