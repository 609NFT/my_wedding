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
       
<h2>Our Favorites</h2>
<h4>Breakfast</h4>
<ul>
    <li>Estia’s Little Kitchen</li>
    <li>Goldberg’s Bagels</li>
    <li>Jimmy Jim’s Deli</li>
    <li>Cromers Market</li>
    <li>Provisions</li>
    <li>K Pasa</li>
</ul>

<h4>Lunch</h4>
<ul>
<li>Corner Bar</li>
<li>Page</li>
<li>American Hotel</li>
<li>El Taco Bar</li>
<li>Estia’s Little Kitchen</li>
<li>Provisions</li>
<li>Barrons Cove</li>
<li>K Pasa</li>
<li>Sen</li>
<li>Carissa</li>
<li>Goldberg’s Bagels</li>
</ul>

<h4>Spirits</h4>
<ul>
<li>Wollfer Estate Vineyards</li>
<li>Wolffer Winestand</li>
<li>Sagaponack Farm Distillery</li>
<li>Channing Daughters Winery</li>
<li>Kidd Squid Brewery</li>

</ul>
       
       
        </div>


            </div>
    );
}

export default Activities;
