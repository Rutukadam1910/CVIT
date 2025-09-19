// src/components/DelayedFallback.jsx
import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const DelayedFallback = ({ message = "Loading...", delay = 300 }) => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return showSpinner ? (
    <LoadingSpinner 
      message={message} 
      fullScreen={false}
      size={120}
      duration={2000}
    />
  ) : null;
};

export default DelayedFallback;