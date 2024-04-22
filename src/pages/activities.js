import '../App.css';
import React from 'react';
import Navigation from '../components/navigation';

function Activities() {
    return (
        <div className='home'>
            <Navigation></Navigation>
            <div className='content'>
            <h1> Things To Do </h1>
            <ul>
                <li>Stroll and shop Main Street Sag Harbor</li>
                <li>Shop and stroll Main Street Bridgehmpton</li>
                <li>Stroll the Long Wharf & Windmill</li>
                <li>Whaling Museum</li>
                <li>Morton Refuge (nature walk to the bay)</li>
            </ul>

            <h2>Beaches</h2>

<ul>
    <li>Long Beach (bay beach can buy a day pass and park here on the weekends)</li>
    <li>*Mecox</li>
    <li>*Sagg Main</li>
    <li>*Scott Cameron</li>
</ul>

<p>*Due to town parking permit requirements, you will need to Uber to and from these ocean beaches</p>
        </div>


            </div>
    );
}

export default Activities;
