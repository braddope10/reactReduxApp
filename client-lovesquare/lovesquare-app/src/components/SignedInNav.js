import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './App.css'

class SignedInNav extends Component {
    render() {
        return (
            <nav>
                <Link to="/">
                    <h3>Love Square</h3>
                </Link>
                
                <ul className="nav-links">
                    <Link to="/posts">
                        <li>Posts</li>
                    </Link>
                   
                    <Link to="/signup">
                        <li>Profile</li>
                    </Link>

                    <Link to="/about">
                        <li>About</li>
                    </Link>

                    <Link to="/logout">
                        <li>Logout</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default SignedInNav