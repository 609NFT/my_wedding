import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../h_b.png';  // Ensure the path to your logo file is correct

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);  // State for managing the menu toggle

    return (
        <nav>
            <div className="nav-content">
                <Link to="/home">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    &#9776;  {/* Hamburger icon */}
                </button>
                <ul className={isOpen ? "nav-links open" : "nav-links"}>
                    {/*<li><Link to="/stay">Stay</Link></li>
                    <li><Link to="/venue">Venue</Link></li>*/}
                    <li><Link to="/weekend">Weekend</Link></li>
                    <li><Link to="/recommendations">Recommendations</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    <li><Link className='rsvp' target="_blank" to="https://hopebrian.rsvpify.com">RSVP</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
