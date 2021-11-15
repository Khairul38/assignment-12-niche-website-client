import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { allContext } = useAuth();
    const { user, isLoading} = allContext;
    if (isLoading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
            <CircularProgress sx={{ color: '#EC9C31' }} />
        </Box>
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