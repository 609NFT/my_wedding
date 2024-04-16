import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../h_b.png';  // Adjust the path to your actual logo file

function Navigation() {
    return (
        <nav>
            <div className="nav-content">
                <Link to="/home">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">Stay</Link></li>
                    <li><Link to="/weekend">Weekend</Link></li>
                    <li><Link to="/activities">Activities</Link></li>
                    <li><Link to="/rsvp">RSVP</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
