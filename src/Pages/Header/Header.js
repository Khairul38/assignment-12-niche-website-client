import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Header.css';
import logo1 from '../../Images/logo-1.png';
import { HashLink } from 'react-router-hash-link';
import { Button } from '@mui/material';

const Header = () => {
    const { allContext } = useAuth();
    const { user, logout } = allContext;
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <HashLink className="navbar-brand me-5" to="/#">
                        <img src={logo1} alt="" />
                    </HashLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <HashLink className="nav-link active" aria-current="page" smooth to="/home#">Home</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" smooth to="/products#">
                                    Products
                                </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" smooth to="/aboutUs#">
                                    About Us
                                </HashLink>
                            </li>
                        </ul>
                        {user.email ?
                            <>
                                <li className="navbar-nav nav-item me-3">
                                    <HashLink className="nav-link" smooth to="/dashboard#">
                                        Dashboard
                                    </HashLink>
                                </li>
                                <h5 className="me-3 my-2 text-color">{user.displayName}</h5>
                                <Button
                                    onClick={logout} variant="contained">Logout</Button>
                            </> :
                            <div className="d-flex gap-3">
                                <Link to="/login"><Button
                                    variant="contained">Login</Button>
                                </Link>
                                <Link to="/register" ><Button
                                    variant="contained">Register</Button>
                                </Link>
                            </div>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;