import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase/useFirebase';
import useServices from '../Hooks/useServices/useServices';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const { services } = useServices();
    const data = { allContext, services };
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;