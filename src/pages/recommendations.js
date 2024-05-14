import '../App.css';
import React from 'react';
import Navigation from '../components/navigation';

function Activities() {
    return (
        <div class="static-background">
            <div class="main-content">

        {/*<div className='home'>*/}
            <Navigation></Navigation>
            <div className='content'>

<h2>Drinks</h2>
<ul className="two-column-list">
<li>The Wine Stand at Wolffer Estate<br></br><span><i>Sagaponack</i></span></li>
<li>Channing Daughters Winery<br></br><span><i>Bridgehampton</i></span></li>
<li>Sagaponack Farm Distillery<br></br><span><i>Sagaponack</i></span></li>
<li>Kidd Squid Brewery Co.<br></br><span><i>Sag Harbor</i></span></li>

</ul>


<h2>Eats</h2>
<ul className="two-column-list">
<li>Estia’s Little Kitchen<br></br><span><i>Sag Harbor</i></span></li>
<li>Sag Harbor Tavern<br></br><span><i>Sag Harbor</i></span></li>
<li>Goldberg’s Bagels<br></br><span><i>Everywhere</i></span></li>
<li>K Pasa<br></br><span><i>Sag Harbor</i></span></li>
<li>Baron’s Cove<br></br><span><i>Sag Harbor</i></span></li>
<li>Sen<br></br><span><i>Sag Harbor</i></span></li>
<li>Moby’s<br></br><span><i>East Hampton</i></span></li>
<li>Hampton Chutney<br></br><span><i>East Hampton</i></span></li>
</ul>
       
<h2>Activities</h2>
<ul className="two-column-list">
<li>Stroll Main Street and Long Wharf<br></br><span><i>Sag Harbor</i></span></li>
<li>Morton Refuge (nature walk by the bay)<br></br><span><i>Noyack</i></span></li>
</ul>

<h2>Beaches</h2>
<ul className="two-column-list">
<li>Long Beach (bay beach - day passes available)<br></br><span><i>Sag Harbor</i></span></li>
<li>Sagg Main Beach*<br></br><span><i>Sagaponack</i></span></li>
<li>Mecox Beach*<br></br><span><i>Sagaponack</i></span></li>
<li>Scott Cameron Beach*<br></br><span><i>Sagaponack</i></span></li>

</ul>
<p>*Due to town parking permit requirements, you will need to Uber to and from these ocean beaches</p>

       
        </div>

        </div>
            </div>
    );
}

export default Activities;
