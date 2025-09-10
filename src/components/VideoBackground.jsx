import React, { memo } from "react";

const backgroundVideo = "https://res.cloudinary.com/dpsdxf2bc/video/upload/q_auto/background_cimxfk.mp4";

const VideoBackground = memo(({ videoRef }) => (
  <div className="video-wrapper">
    <video
      ref={videoRef}
      className="video-background"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      crossOrigin="anonymous"
      aria-hidden="true"
      onError={(e) => {
        const videoElement = e.target;
        console.error("Background video error:", {
          message: videoElement.error?.message || "Unknown video error",
          code: videoElement.error?.code || "No code",
          src: videoElement.src || backgroundVideo,
        });
      }}
    >
      <source src={backgroundVideo} type="video/mp4" />
    </video>
    <div className="video-overlay" />
  </div>
));

export default VideoBackground;