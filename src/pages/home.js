import '../App.css';
import React from 'react';
import Navigation from '../components/navigation';
import { ReactComponent as VenueIcon } from '../venue.svg';


function EnterSite() {
    return (
        <div className='home'>
            <Navigation></Navigation>
            <VenueIcon className='venue'/>
            
        </div>
    );
}

export default EnterSite;
