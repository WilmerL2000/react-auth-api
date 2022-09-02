import React, { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

const Register = ({ setUser }) => {

  const [name, setName] = new useState();
  const [email, setEmail] = new useState();
  const [password, setPassword] = new useState();
  const [password_confirmation, setPasswordConfirmation] = new useState();
  const [loggedIn, setLoggedIn] = new useState();

  const data = {
    name,
    email,
    password,
    password_confirmation
  }

  const formSubmit = (e) => {
    e.preventDefault();

    /* Sending the data to the server and then setting the token in the local storage. */
    axios.post('/register', data)
      .then((response) => {
        /* Setting the token in the local storage. */
        localStorage.setItem('token', response.data.token)
        setLoggedIn(true);
        setUser(response.data.user)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {/* Checking if the user is logged in. If the user is logged in, it will redirect the user to the
      profile page. */
      loggedIn === true ? <Navigate to="/profile" /> :
        <div className="row">
          <div className="p-5 bg-secondary col-lg-4 offset-lg-4 mt-5 rounded text-white">
            <h3 className="text-center">
              Register Account
            </h3>
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label">User Name</label>
                <input type="text" name="name" className="form-control" required onChange={(e) => setName(e.target.value)} />
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
              <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ "width": "100%" }}>Register</button>
            </form>
            <div className="mt-3 gap-3">
              <p>
                Forget My Password <Link to="/forget">Click here</Link>
              </p>
              <p>
                Have an account? <Link to="/login">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      }
    </div >
  )
}

export default Register