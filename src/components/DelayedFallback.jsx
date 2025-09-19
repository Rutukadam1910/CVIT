// src/components/DelayedFallback.js
import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const DelayedFallback = ({ message, delay = 300 }) => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return showSpinner ? <LoadingSpinner message={message} /> : null;
};

export default DelayedFallback;