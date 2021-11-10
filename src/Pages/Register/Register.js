import React from 'react';
import icon1 from '../../Images/icon/google-icon.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Register.css';

const Register = () => {
    const { allContext } = useAuth();
    const {
        setUser,
        setIsLoading,
        loginUsingGoogle,
        setError, error } = allContext;

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
        <div className="mx-auto banner-register banner-rs">
            <div className="d-login">
                <div className="text-center mx-auto">
                    <h1>Register an Account</h1>
                    <br />
                    {/* On Click */}
                    <button onClick={handleGoogleLogin} className="btn btn-outline-primary mb-2">
                        <img width="40px" src={icon1} alt="" /> <span className="fs-6 fw-bold p-3">Register with Google</span>
                    </button>
                    <span className="d-block text-danger">
                        {error}
                    </span>
                    <h6>Already have an account? <Link to='/login'>login</Link></h6>
                </div>
            </div>
        </div>
    );
};

export default Register;