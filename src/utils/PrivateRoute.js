import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";


const QUERY = gql`
  {
    me {
      username
    }
  }
`;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Query query={QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div />;
      return (
        <Route
          {...rest}
          render={props => {
            if (error || data.me.username === "") {
              return <Redirect to="/login" />;
            }
            return <Component {...props} />;
          }}
        />
      );
    }}
  </Query>
);

PrivateRoute.propTypes =  {
  component: PropTypes.any.isRequired
};

export default PrivateRoute;