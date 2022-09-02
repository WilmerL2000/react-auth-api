import axios from 'axios';
import React, { useState } from 'react'
import { Link, Navigate } from "react-router-dom";

const Login = ({ user, setUser }) => {

    const [email, setEmail] = new useState();
    const [password, setPassword] = new useState();
    const [loggedIn, setLoggedIn] = new useState();
    const [errormessage, setSErrorMessage] = new useState();

    const data = {
        email,
        password,
    }

    /**
     * It takes the form data, sends it to the server, and then logs the response to the console.
     * @param e - the event object
     */
    const formSubmit = (e) => {
        e.preventDefault();

        /* Sending the data to the server and then setting the token in the local storage. */
        axios.post('/login', data)
            .then((response) => {
                /* Setting the token in the local storage. */
                localStorage.setItem('token', response.data.token)
                setLoggedIn(true);
                setUser(response.data.user)
            })
            .catch((error) => {
                setSErrorMessage(error.response.data.message);
            });
    }

    return (
        < div >
            {/* Checking if the user is logged in. If the user is logged in, it will redirect the user
            to the profile page. */
                localStorage.getItem('token') ? <Navigate to="/profile" /> :
                    loggedIn ? <Navigate to="/profile" /> :
                        <div className="row">
                            <div className="p-5 bg-secondary col-lg-4 offset-lg-4 mt-5 rounded text-white">
                                <h3 className="text-center">
                                    Login Account
                                </h3>
                                <form onSubmit={formSubmit}>
                                    {errormessage ?
                                        <div className="alert alert-danger" role="alert">
                                            {errormessage}
                                        </div>
                                        : null
                                    }
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" name="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" name="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ "width": "100%" }}>Login</button>
                                    <div className="mt-3 gap-3">
                                        <p>
                                            Forget My Password <Link to="/forget">Click here</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
            }
        </div >
    )
}

export default Login