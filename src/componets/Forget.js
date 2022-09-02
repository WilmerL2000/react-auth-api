import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

const Forget = () => {

  const [email, setEmail] = new useState();
  const [succesmessage, setSuccessMessage] = new useState();
  const [errormessage, setSErrorMessage] = new useState();

  const data = {
    email,
  }

  const formSubmit = (e) => {
    e.preventDefault();

    axios.post('/forgetpassword', data)
      .then((response) => {
        setSuccessMessage(response.data.message);
        document.getElementById('forgetform').reset();
      })
      .catch((error) => {
        setSErrorMessage(error.response.data.message);
      });
  }

  return (
    <div>
      <div className="row">
        <div className="p-5 bg-secondary col-lg-4 offset-lg-4 mt-5 rounded text-white">
          <h3 className="text-center">
            Forget Password
          </h3>
          <form onSubmit={formSubmit} id="forgetform">
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
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" name="email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ "width": "100%" }}>Forget</button>
          </form>
          <div className="mt-3 gap-3">
            <p>
              Have an Account? <Link to="/login">Login here</Link>
            </p>
            <p>
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forget