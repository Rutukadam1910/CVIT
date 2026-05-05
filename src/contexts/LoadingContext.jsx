// src/contexts/LoadingContext.js
import React, { createContext, useContext } from 'react';

// Create the context
// Initialize with null to avoid 'undefined' errors before the provider is used
const LoadingContext = createContext(null);

// Create a custom hook for easy access to the context
export const useLoading = () => {
  const context = useContext(LoadingContext);
  // Check for null as well, in case the context is used outside a provider
  if (context === undefined || context === null) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

// Export the context itself so the provider component can use it
export { LoadingContext };