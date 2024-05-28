"use client";
import React, { useState, useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Slider() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 100;
  const images = [
    // Your images array...
    {
      id: 0,
      url: "https://i.postimg.cc/T14MqhQ2/IMG-3806.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/sX7jwYq6/IMG-0609.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/QCmB4Dwn/engage-color.jpg",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/v8C71btG/61602940569-279-A069-F-DEB8-484-A-8-ECD-2-A5-D15557-CF7.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/7P7gFjSh/IMG-3491.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/v80HN0Dj/IMG-6426.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/25NzZJXq/IMG-6636.avif",
    },
  ];

  // Function to open the popup with the selected image
  const openPopup = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="slider">
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          if (container) {
            container.scrollLeft -= scrollAmount;
          }
        }}
      >
        <ChevronLeftIcon />
      </button>
      <div className="images-container" ref={sliderRef}>
        {images.map((image) => (
          <img
            className="image"
            alt="sliderImage"
            key={image.id}
            src={image.url}
            onClick={() => openPopup(image.url)} // Add onClick handler here
          />
        ))}
      </div>
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          if (container) {
            container.scrollLeft += scrollAmount;
          }
        }}
      >
        <ChevronRightIcon />
      </button>
      {isPopupOpen && ( // Conditional rendering for the popup
        <div className="image-popup" onClick={closePopup}>
          <img src={selectedImage} alt="Selected" />
          {/*<p>Click anywhere to close</p>*/}
        </div>
      )}
    </div>
  );
}
