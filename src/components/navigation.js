import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import logo from '../new_logo.png';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);  // State for managing the menu toggle

    return (
        <nav>
            <div className="nav-content">
                <Link  className='test' to="/home"><h3 style={{ marginBottom: '0px' }}>Hope & Brian</h3>
                    {/*<img src={logo} alt="Logo" className="logo" />*/}
                </Link>
                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    &#9776;  {/* Hamburger icon */}
                </button>
                <ul className={isOpen ? "nav-links open" : "nav-links"}>
                    {/*<li><Link to="/stay">Stay</Link></li>*/}
                    <li><Link to="/weekend">Weekend</Link></li>
                    <li><Link to="/recommendations">Favorites</Link></li>
                    <li><Link to="/favorites">Moments</Link></li>
                    <li><Link target="_blank" to="https://www.zola.com/registry/brianandhope2024">Gifts</Link></li>
                    <li><Link className='rsvp' target="_blank" to="https://hopebrian.rsvpify.com">RSVP</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
