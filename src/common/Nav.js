import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Nav = ({ user, setUser }) => {

    const [loggedOut, setLoggedOut] = new useState();

    const Logout = () => {
        localStorage.clear();
        setUser('');
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-info" to="/">Wilmers Learning</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-info" aria-current="page" to="/">Home</Link>
                            </li>
                            {user ?
                                <li className="nav-item">
                                    <Link className="nav-link text-info" to="/profile">Profile</Link>
                                </li>
                                : null
                            }
                        </ul>
                        {user ?
                            <span className="navbar-text">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link text-info" to="/" onClick={Logout}>Logout</Link>
                                    </li>
                                </ul>
                            </span>
                            :
                            <span className="navbar-text">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active text-info" aria-current="page" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-info" to="/register">Register</Link>
                                    </li>
                                </ul>
                            </span>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav