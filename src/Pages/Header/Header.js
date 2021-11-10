import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Header.css';
import logo1 from '../../Images/logo-1.png';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { allContext } = useAuth();
    const { user, logout } = allContext;
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <HashLink className="navbar-brand" to="/#">
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
                                <HashLink className="nav-link" smooth to="/packages#">
                                    Packages
                                </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" smooth to="/destinations#">
                                    Destinations
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
                                <li className="navbar-nav nav-item dropdown me-3">
                                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dashboard
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><HashLink className="dropdown-item" smooth to="/myBookings#">My Bookings</HashLink></li>
                                        <li><HashLink className="dropdown-item" smooth to="/allBookings#">Manage All Bookings</HashLink></li>
                                        <li><HashLink className="dropdown-item" smooth to="/addPackage#">Add a New Package</HashLink></li>
                                    </ul>
                                </li>
                                <h5 className="me-3 my-2 text-color">{user.displayName}</h5>
                                <button onClick={logout} className="btn btn-primary">Logout</button>
                            </> :
                            <div className="d-flex gap-3">
                                <Link className="btn btn-primary" to="/login" role="button">Login</Link>
                                <Link className="btn btn-primary" to="/register" role="button">Register</Link>
                            </div>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;