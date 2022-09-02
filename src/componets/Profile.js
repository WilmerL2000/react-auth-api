import React from 'react'
import { Link, Navigate } from "react-router-dom";

const Profile = ({ user }) => {

  const { name, email } = user;


  return (
    <div>
      {localStorage.getItem('token') ? <div className="row">
        <div className="p-5 bg-secondary col-lg-4 offset-lg-4 mt-5 rounded text-white">
          <h3 className="text-center">
            User Profile
          </h3>
          <ul className="list-group">
            <li className="list-group-item">Name: {name} </li>
            <li className="list-group-item">Email: {email} </li>
          </ul>
        </div>
      </div>
        : <Navigate to="/login" />
      }
    </div>
  )
}

export default Profile