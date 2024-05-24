import React, { useState, useEffect } from 'react';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Initialize photoUrls inside useEffect to prevent dependency changes
    const photoUrls = [
      'https://i.postimg.cc/QCmB4Dwn/engage-color.jpg',
      'https://i.postimg.cc/v80HN0Dj/IMG-6426.avif',
      'https://i.postimg.cc/25NzZJXq/IMG-6636.avif',
      // Add more photo URLs here
    ];
    setPhotos(photoUrls);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <h1>Photo Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`View ${index + 1}`} style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
