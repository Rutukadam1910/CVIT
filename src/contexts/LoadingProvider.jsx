// src/contexts/LoadingProvider.jsx
import React, { useState } from 'react';
import { LoadingContext } from './LoadingContext'; // Import the context definition

// This file now ONLY exports a React component
const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // Start with true for the initial load
  const [loadingMessage, setLoadingMessage] = useState('Loading...');

  // The value provided by the context
  const value = { isLoading, setIsLoading, loadingMessage, setLoadingMessage };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;