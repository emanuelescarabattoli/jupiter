import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import PropTypes from "prop-types";

const QUERY = gql`
  {
    me {
      username
    }
  }
`;

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(QUERY);
  if (loading) return <div />;
  return (
    <Route
      {...rest}
      render={props => {
        if (error || !data.me || data.me.username === "") {
          return <Redirect to="/login" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired
};

export default PrivateRoute;
