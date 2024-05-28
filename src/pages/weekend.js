import '../App.css';
import React from 'react';
import Navigation from '../components/navigation';

function Weekend() {
    return (
<div className="static-background">
    <Navigation></Navigation>
    
    {/* New Side-by-side sections */}
    <div className="two-columns">
        <div className="column">
            <h3 className='weekend_section'>Private Ceremony</h3>
            <p className='p_tag'>3:30 pm<br></br>
            Madoo Conservancy<br></br>
            618 Sagg Main St,<br></br>
            Sagaponack, NY 11962</p>
        </div>
        <div className="column">
            <h3 className='weekend_section'>Reception</h3>
            <p className='p_tag'>6:30 pm<br></br>
            Bridgehampton Tennis and Surf Club<br></br>
            231 Midocean Drive,<br></br>
            Bridgehampton, NY, 11932</p>
        </div>
    </div>
    
    {/* Existing Transportation section */}
    <div className='content'>
        <h2>Transportation</h2>
        <p>The Hamptons Hopper is available to take you safely to and from the venue for the celebration...</p>
        <p>Please text Donna (516)-695-6003 if you’d like a lift!</p>
    </div>
</div>
    );
}

export default Weekend;
