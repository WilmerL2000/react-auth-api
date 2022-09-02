import React, { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

const Reset = () => {

    const [token, setToken] = new useState();
    const [email, setEmail] = new useState();
    const [password, setPassword] = new useState();
    const [password_confirmation, setPasswordConfirmation] = new useState();
    const [succesmessage, setSuccessMessage] = new useState();
    const [errormessage, setSErrorMessage] = new useState();
    const [changeIt, setChangeIt] = new useState();

    const data = {
        token,
        email,
        password,
        password_confirmation
    }

    const formSubmit = (e) => {
        e.preventDefault();

        axios.post('/resetpassword', data)
            .then((response) => {
                setSuccessMessage(response.data.message);
                document.getElementById('formsubmit').reset();
                setTimeout(() => { setChangeIt(true) }, 2000)
            })
            .catch((error) => {
                setSErrorMessage(error.response.data.message);
            });
    }

    return (
        <div>
            {changeIt === true ? <Navigate to="/login" /> :
                <div className="row">
                    <div className="p-5 bg-secondary col-lg-4 offset-lg-4 mt-5 rounded text-white">
                        <h3 className="text-center">
                            Reset Account
                        </h3>
                        <form onSubmit={formSubmit} id="formsubmit">
                            {succesmessage ?
                                <div className="alert alert-success" role="alert">
                                    {succesmessage}
                                </div>
                                :
                                errormessage ?
                                    <div className="alert alert-danger" role="alert">
                                        {errormessage}
                                    </div>
                                    : null
                            }
                            <div className="mb-3">
                                <label className="form-label">Pin Code</label>
                                <input type="text" name="token" className="form-control" required onChange={(e) => setToken(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" name="password_confirmation" className="form-control" required onChange={(e) => setPasswordConfirmation(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ "width": "100%" }}>Reset Password</button>
                        </form>
                    </div>
                </div>
            }

        </div>
    )
}

export default Reset