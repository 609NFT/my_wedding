import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">Stay</Link></li>
                <li><Link to="/weekend">Weekend</Link></li>
                <li><Link to="/activities">Activities</Link></li>
                <li><Link to="/rsvp">RSVP</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
