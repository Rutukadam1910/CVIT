import React, { useEffect } from "react";

const LoadingSpinner = () => {
  useEffect(() => {
    // Check if stylesheets exist
    if (document.styleSheets.length > 0) {
      const styleSheet = document.styleSheets[0];
      const keyframes =
        `@keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }`;

      // Check if the keyframe rule already exists to avoid duplicates
      let ruleExists = false;
      for (let i = 0; i < styleSheet.cssRules.length; i++) {
        const rule = styleSheet.cssRules[i];
        if (rule.name === "spin") {
          ruleExists = true;
          break;
        }
      }
      if (!ruleExists) {
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
      }
    }
  }, []);

  return (
    <div style={styles.overlay}>
      <div style={styles.spinner}></div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  spinner: {
    width: "60px",
    height: "60px",
    border: "8px solid #f3f3f3",
    borderTop: "8px solid #EF3A3A",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default LoadingSpinner;