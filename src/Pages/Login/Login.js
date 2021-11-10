import React from 'react';
import icon1 from '../../Images/icon/google-icon.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Login.css'

const Login = () => {
    const { allContext } = useAuth();
    const {
        setUser,
        setError,
        setIsLoading,
        loginUsingGoogle, error } = allContext;

    /* Redirect */
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location?.state?.from || '/';

    /* Google Login & Redirect */
    const handleGoogleLogin = () => {
        loginUsingGoogle()
            .then(result => {
                setUser(result.user);
                setError('');
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="banner-login banner-ls mx-auto">
            <div className="d-login">
                <div className="text-center mx-auto">
                    <h1>Login Account</h1>
                    <br />
                    {/* On Click */}
                    <button onClick={handleGoogleLogin} className="btn btn-outline-primary mb-4">
                        <img width="40px" src={icon1} alt="" /> <span className="fs-6 fw-bold p-3">Login with Google</span>
                    </button>
                    <span className="d-block text-danger">
                        {error}
                    </span>
                    <h6>Don’t have an account? <Link to='/register'>Register</Link></h6>
                </div>
            </div>
        </div >
    );
};

export default Login;