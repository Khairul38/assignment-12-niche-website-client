import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeFirebase from '../../Firebase/Firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    /* Provider */
    const googleProvider = new GoogleAuthProvider();

    /* Google Login/Register */
    const loginUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    /* Log Out */
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    /* Get the currently signed -in user */
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    return { user, error, isLoading, setError, setUser, setIsLoading, loginUsingGoogle, logout }
};

export default useFirebase;