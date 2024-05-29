import '../App.css';
import React from 'react';
import Navigation from '../components/navigation';
import logo from '../new_logo.png';

function EnterSite() {
    return (
        <div className='home'>
            <Navigation></Navigation>
            <div className='hp_names'>
            {/*<h1>Hope & Brian</h1>*/}
            <img src={logo} alt="Logo" className="logo" />
            <h4>8.3.24</h4>
            </div>
            {/*<VenueIcon className='venue'/>*/}
            
        </div>
    );
}

export default EnterSite;
