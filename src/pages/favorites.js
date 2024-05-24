import '../App.css';
import React from 'react';
import Navigation from '../components/navigation';
//import PhotoGallery from '../components/photoGallery';
import Slider from '../components/slider.tsx';

function Favorites() {
    return (
        <div className="static-background">
            <Navigation></Navigation>
            <Slider></Slider>
        </div>
    );
}

export default Favorites;
