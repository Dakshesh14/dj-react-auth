import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            if (!isAuthenticated) {
                const alert = {
                    type: 'danger',
                    message: 'You need to be logged in to access this page',
                }
                return <Redirect to={{
                    pathname: "/login",
                    state: alert
                }} />;
            } else {
                return <Component {...props} />;
            }
        }}
    />
);

const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated,
});

export default connect(
    mapStateToProps,
    null
)(PrivateRoute);