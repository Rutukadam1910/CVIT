import React, { useEffect, useRef } from "react";
import "../Styles/Gallery.css"; // Import the CSS file

const Gallery = ({ galleryImages, loadGallery, onImageClick }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    if (!loadGallery || !galleryImages.length || !trackRef.current) return;

    const track = trackRef.current;
    track.innerHTML = "";

    // Set the CSS variable for the number of images
    track.style.setProperty('--set-size', galleryImages.length.toString());

    const fragment = document.createDocumentFragment();

    // ORIGINAL SET
    galleryImages.forEach((src) => {
      const li = document.createElement("li");
      const img = document.createElement("img");

      img.src = src;
      img.alt = "Gallery image";
      img.loading = "lazy";
      img.draggable = false;
      img.onclick = () => onImageClick(src);

      li.appendChild(img);
      fragment.appendChild(li);
    });

    // DUPLICATE SET (for seamless loop)
    galleryImages.forEach((src) => {
      const li = document.createElement("li");
      const img = document.createElement("img");

      img.src = src;
      img.alt = "Gallery image duplicate";
      img.loading = "lazy";
      img.draggable = false;
      img.onclick = () => onImageClick(src);

      li.appendChild(img);
      fragment.appendChild(li);
    });

    track.appendChild(fragment);

    // Start animation AFTER layout settles
    requestAnimationFrame(() => {
      track.classList.add("running");
    });

    return () => {
      track.classList.remove("running");
    };
  }, [loadGallery, galleryImages, onImageClick]);

  if (!loadGallery || galleryImages.length === 0) {
    return (
      <div className="marquee">
        <div className="gallery-loading">Loading gallery...</div>
      </div>
    );
  }

  return (
    <div className="marquee">
      <ul className="marquee-content" ref={trackRef} />
    </div>
  );
};

export default Gallery;