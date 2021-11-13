import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { allContext } = useAuth();
    const { user, admin, isLoading } = allContext;
    if (!admin || isLoading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
            <CircularProgress />
        </Box>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children : <Redirect to={{
                pathname: "/",
                state: { from: location }
            }}></Redirect>}
        >

        </Route>
    );
};

export default AdminRoute;