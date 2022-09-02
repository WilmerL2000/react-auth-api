import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from '../componets/Home';
import Login from '../componets/Login';
import Register from '../componets/Register';
import Forget from '../componets/Forget';
import Profile from '../componets/Profile';
import Reset from '../componets/Reset';
import axios from 'axios';

const Header = () => {

    const [user, setUser] = new useState();

    /* A function that is called when the component is mounted. */
    useEffect(() => {
        /* Getting the user from the server. */
        axios.get('/user')
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    // const mainUser = (user) => {
    //     setUser(user);
    // }

    return (
        <Router>
            <Nav
                user={user}
                setUser={setUser}
            />
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/login" element={<Login
                    user={user}
                    setUser={setUser}
                />}
                />
                <Route path="/register" element={<Register
                    setUser={setUser}
                />}
                />
                <Route path="/forget" element={<Forget />} />
                <Route path="/reset/:id" element={<Reset />} />
                <Route path="/profile" element={<Profile
                    user={user}
                />}
                />
            </Routes>
        </Router>
    )
}

export default Header