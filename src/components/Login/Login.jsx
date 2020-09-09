import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

class Login extends Component {
    render () {
        return (
            <div>
                <h1>Please Log In!</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <div>TODO..</div>
            </div>
        );
    }
}

export default Login;