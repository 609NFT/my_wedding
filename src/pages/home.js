import '../App.css';
import React from 'react';
import Navigation from '../components/navigation';


function EnterSite() {
    return (
        <div className='home'>
            <Navigation></Navigation>
            <div className='hp_names'>
            <h1>Hope & Brian</h1>
            <h5>8.3.24</h5>
            </div>
            {/*<VenueIcon className='venue'/>*/}
            
        </div>
    );
}

export default EnterSite;
