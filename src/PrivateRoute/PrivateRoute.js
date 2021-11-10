import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { allContext } = useAuth();
    const { user, isLoading} = allContext;
    if (isLoading) {
        return <div className="d-flex justify-content-center mt-3">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect to={{
                pathname: "/login",
                state: { from: location }
            }}></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;