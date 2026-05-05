import React from "react";
import "../Styles/ImageZoomModal.css"; // Import the new CSS file

const ImageZoomModal = ({
  selectedImage,
  zoomLevel,
  position,
  isDragging,
  zoomContainerRef,
  onClose,
  onZoomIn,
  onZoomOut,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}) => {
  const zoomImageStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",

    transform:
      zoomLevel > 1
        ? `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`
        : "translate(-50%, -50%) scale(1)",

    transition: isDragging ? "none" : "transform 0.2s ease-out",
    willChange: "transform",
  };

  return (
    <div className="modal" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div
          ref={zoomContainerRef}
          className="zoom-container"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img src={selectedImage} alt="Zoomed" style={zoomImageStyle} draggable={false} />
        </div>
        <div className="button-container">
          <button className="control-btn" onClick={onZoomIn} aria-label="Zoom in">+</button>
          <button className="control-btn" onClick={onZoomOut} aria-label="Zoom out">-</button>
          <button className="close-btn" onClick={onClose} aria-label="Close zoom modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageZoomModal;