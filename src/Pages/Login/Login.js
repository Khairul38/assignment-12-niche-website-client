import React, { useState } from 'react';
import icon1 from '../../Images/icon/google-icon.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import loginImg from '../../Images/main-home-banner-01.jpg'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { allContext } = useAuth();
    const {
        loginUsingGoogle,
        handleLogin, ColorButton,
        error } = allContext;

    /* Redirect */
    const location = useLocation();
    const history = useHistory();

    /* Login data */
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    /* Google Login & Redirect */
    const handleGoogleLogin = () => {
        loginUsingGoogle(location, history);
    }

    /* Email+Password Login & Redirect */
    const loginSubmit = (e) => {
        e.preventDefault();
        handleLogin(loginData.email, loginData.password, location, history);
    }
    return (
        <>
            <Header></Header>
            <div className="container row mx-auto align-items-center g-4 my-5">
                <div className="col-md-7">
                    <img className="img-fluid" src={loginImg} alt="" />
                </div>
                <div className=" col-md-5">
                    <h1>Login Account</h1>
                    {/* On Submit */}
                    <form onSubmit={loginSubmit} className="mt-5">
                        <div className="mb-3">
                            <label htmlFor="validationDefault02" className="form-label">Email</label>
                            {/* On Blur */}
                            <input onChange={handleOnChange} type="email" name="email" className="form-control" id="validationDefault02"
                                placeholder="Email" aria-label="Email"
                                autoComplete="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="validationDefault03" className="form-label">Password</label>
                            {/* On Blur */}
                            <input onChange={handleOnChange} type="password" name="password" className="form-control" id="validationDefault03"
                                placeholder="Password"
                                autoComplete="current-password" aria-label="Password" required />
                            <div className="text-danger">
                                {error}
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" />
                                <label className="form-check-label" htmlFor="invalidCheck2">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                        <h6>Don’t have an account? <Link to='/register'>Register</Link></h6>
                        <div className="d-grid col-12 mt-3">
                            <ColorButton
                                type="submit"
                                variant="contained">
                                LOGIN
                            </ColorButton>
                        </div>
                    </form>
                    <div className="text-center mt-2">
                        <h6>Or</h6>
                        {/* On Click */}
                        <ColorButton onClick={handleGoogleLogin} variant="contained"><img width="40px" src={icon1} alt="" /><span className="fw-bold px-3">Login with Google</span></ColorButton>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;