import '../App.css';
import React from 'react';
import Navigation from '../components/navigation';

function Activities() {
    return (
        <div class="static-background">
            <div class="main-content">

        {/*<div className='home'>*/}
            <Navigation></Navigation>
            <div className='content_two'>

            <h3>Stay</h3>
            <p>Out of town family and friends, please book lodging as soon as possible as this is high season in the Hamptons. We recommend Airbnb or Vrbo. If you prefer a hotel, here are our suggestions in the area:</p>
<ul className="two-column-list">
<li><b>Baron's Cove Resort Hotel</b><br></br><span><i>Sag Harbor</i></span></li>
<li><b>Wainscott Inn</b><br></br><span><i>Sagaponack</i></span></li>
<li><b>Southampton Inn</b><br></br><span><i>Southampton</i></span></li>

</ul>


<h3 className='header_two'>Drinks</h3>
<ul className="two-column-list">
<li><b>The Wine Stand at Wolffer Estate</b><br></br><span><i>Sagaponack</i></span></li>
<li><b>Channing Daughters Winery</b><br></br><span><i>Bridgehampton</i></span></li>
<li><b>Sagaponack Farm Distillery</b><br></br><span><i>Sagaponack</i></span></li>
<li><b>Kidd Squid Brewery Co.</b><br></br><span><i>Sag Harbor</i></span></li>

</ul>


<h3 className='header_two'>Eats</h3>
<ul className="two-column-list">
<li><b>Estia’s Little Kitchen</b><br></br><span><i>Sag Harbor</i></span></li>
<li><b>Sag Harbor Tavern</b><br></br><span><i>Sag Harbor</i></span></li>
<li><b>Goldberg’s Bagels</b><br></br><span><i>Everywhere</i></span></li>
<li><b>K Pasa</b><br></br><span><i>Sag Harbor</i></span></li>
<li><b>Baron’s Cove</b><br></br><span><i>Sag Harbor</i></span></li>
<li><b>Sen</b><br></br><span><i>Sag Harbor</i></span></li>
<li><b>Moby’s</b><br></br><span><i>East Hampton</i></span></li>
<li><b>Hampton Chutney</b><br></br><span><i>East Hampton</i></span></li>
</ul>
       
<h3 className='header_two'>Activities</h3>
<ul className="two-column-list">
<li><b>Stroll Main Street and Long Wharf</b><br></br><span><i>Sag Harbor</i></span></li>
<li><b>Morton Refuge (nature walk by the bay)</b><br></br><span><i>Noyack</i></span></li>
</ul>

<h3 className='header_two'>Beaches</h3>
<ul className="two-column-list">
<li><b>Long Beach (bay beach - day passes available)</b><br></br><span><i>Sag Harbor</i></span></li>
<li><b>Sagg Main Beach*</b><br></br><span><i>Sagaponack</i></span></li>
<li><b>Mecox Beach*</b><br></br><span><i>Sagaponack</i></span></li>
<li><b>Scott Cameron Beach*</b><br></br><span><i>Sagaponack</i></span></li>

</ul>
<p>*Due to town parking permit requirements, you will need to Uber to and from these ocean beaches</p>

       
        </div>

        </div>
            </div>
    );
}

export default Activities;
