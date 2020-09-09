import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

class LandingPage extends Component {
    render () {
        return (
            <div>
                <h1>New here?</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <Link to="/newuser">New User?</Link>
                <Link to="/login">Login</Link>
            </div>
        );
    }
}

export default LandingPage;