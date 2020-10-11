import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './App.css'

class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to="/">
                    <h3>Love Square</h3>
                </Link>
                
                <ul className="nav-links">
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                   

                    <Link to="/signup">
                        <li>Sign Up</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}


export default Nav