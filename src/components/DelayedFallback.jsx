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

  // Hide scrollbar when showing the spinner
  useEffect(() => {
    if (showSpinner) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [showSpinner]);

  return showSpinner ? (
    <LoadingSpinner 
      message={message} 
      fullScreen={true}
      size={250}
      duration={2000}
    />
  ) : null;
};

export default DelayedFallback;