import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './App.css'

class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to="/">
                    <h3>Hotel Santa Rita</h3>
                </Link>
                
                <ul className="nav-links">
                    <Link to="/posts">
                        <li>Guest List</li>
                    </Link>

                    <Link to="/about">
                        <li>About</li>
                    </Link>

                </ul>
            </nav>
        )
    }
}


export default Nav