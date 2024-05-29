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
            <h3 className='weekend_section'>Reception</h3>
            <p className='p_tag'>8/3 - 6:30 pm<br></br>
            Bridgehampton Tennis & Surf Club<br></br>
            231 Midocean Drive,<br></br>
            Bridgehampton, NY 11932</p>
        </div>
        <div className="column">
            <h3 className='weekend_section'>Beach Day</h3>
            <p className='p_tag'>8/4 - 11:00 am<br></br>
            Ocean Road Beach<br></br>
            1251 Ocean Rd,<br></br>
            Sagaponack, NY 11962</p>
        </div>
    </div>
    
    <div className='content'>
        <h2 className='asterisk'>Transportation</h2>
        <p className='asterisk'>The Hamptons Hopper will be available to take you safely to and from the venue for the celebration. Please check back the week of the wedding for exact details on pickup and dropoff. Please let Brian and Hope know where you're staying so we can coordinate.</p>
    </div>
</div>
    );
}

export default Weekend;
