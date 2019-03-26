import React, { Component } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="Header_Main">
                <section className="left-section">
                    <p>
                        <Link to="/">Movie Collection</Link> 
                    </p>
                </section>
                <section className="right-section">
                    <ul>
                        <li><Link to="/about">About</Link> </li>
                        <li><Link to="/work">Work</Link> </li>
                        <li><Link to="/concatus">Concat US</Link> </li>
                    </ul>
                </section>
                
            </div>
        );
    }
}

export default Header;