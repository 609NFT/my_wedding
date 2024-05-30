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
      url: "https://i.postimg.cc/QCmB4Dwn/engage-color.jpg",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/8zrTvnQY/IMG-8189.jpg",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/k4PmDydv/IMG-6395.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/T14MqhQ2/IMG-3806.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/xd6bGqt7/000000150012-25.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/YSDBBzSK/IMG-6713.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/0yw63PPW/IMG-5552.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/25NzZJXq/IMG-6636.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/CKWp2pMN/IMG-3211.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/y827MZvc/6-F5-A176-D-E4-FB-43-C2-B2-BA-597-BA89-B43-B4.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/SQfWCD7D/IMG-3313.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/y884sQn5/IMG-3025.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/wBWbF9pT/IMG-3491.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/KYdtmW7D/IMG-3660.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/mgWxFZbv/IMG-3760.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/QtFmN5Wc/IMG-7411.avif",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/PxrDd8PT/IMG-7329.avif",
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
