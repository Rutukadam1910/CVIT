// import React, { useEffect } from "react";

// const LoadingSpinner = () => {
//   useEffect(() => {
//     if (document.styleSheets.length > 0) {
//       const styleSheet = document.styleSheets[0];

//       const keyframesSpin = `
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }`;

//       const keyframesSpinReverse = `
//         @keyframes spinReverse {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(-360deg); }
//         }`;

//       const keyframesPulse = `
//         @keyframes pulse {
//           0%, 100% { transform: scale(1); opacity: 1; }
//           50% { transform: scale(1.3); opacity: 0.7; }
//         }`;

//       const exists = (name) => {
//         for (let i = 0; i < styleSheet.cssRules.length; i++) {
//           const rule = styleSheet.cssRules[i];
//           if (rule.name === name) return true;
//         }
//         return false;
//       };

//       if (!exists("spin")) styleSheet.insertRule(keyframesSpin, styleSheet.cssRules.length);
//       if (!exists("spinReverse")) styleSheet.insertRule(keyframesSpinReverse, styleSheet.cssRules.length);
//       if (!exists("pulse")) styleSheet.insertRule(keyframesPulse, styleSheet.cssRules.length);
//     }
//   }, []);

//   return (
//     <div style={styles.overlay}>
//       <div style={styles.spinner}>
//         <div style={styles.outerRing}></div>
//         <div style={styles.middleRing}></div>
//         <div style={styles.innerRing}></div>
//         <div style={styles.centerGlow}></div>
//       </div>
//     </div>
//   );
// };

// const primaryColor = "#ef3a3a";
// const secondaryColor = "#f87171"; // lighter red

// const styles = {
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100vw",
//     height: "100vh",
//     backgroundColor: "#0a0a0a",
//     backdropFilter: "blur(10px)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 9999,
//   },
//   spinner: {
//     position: "relative",
//     width: "100px",
//     height: "100px",
//   },
//   outerRing: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100px",
//     height: "100px",
//     borderRadius: "50%",
//     border: `6px solid transparent`,
//     borderTopColor: secondaryColor,
//     borderBottomColor: secondaryColor,
//     animation: "spin 2.5s linear infinite",
//     boxShadow: `0 0 15px ${secondaryColor}`,
//   },
//   middleRing: {
//     position: "absolute",
//     top: "12px",
//     left: "12px",
//     width: "76px",
//     height: "76px",
//     borderRadius: "50%",
//     border: `6px solid transparent`,
//     borderLeftColor: primaryColor,
//     borderRightColor: primaryColor,
//     animation: "spinReverse 1.8s ease-in-out infinite",
//     boxShadow: `0 0 10px ${primaryColor}`,
//   },
//   innerRing: {
//     position: "absolute",
//     top: "24px",
//     left: "24px",
//     width: "52px",
//     height: "52px",
//     borderRadius: "50%",
//     border: `6px solid transparent`,
//     borderTopColor: secondaryColor,
//     borderBottomColor: secondaryColor,
//     animation: "spin 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite",
//     boxShadow: `0 0 8px ${secondaryColor}`,
//   },
//   centerGlow: {
//     position: "absolute",
//     top: "calc(50% - 10px)",
//     left: "calc(50% - 10px)",
//     width: "20px",
//     height: "20px",
//     borderRadius: "50%",
//     backgroundColor: primaryColor,
//     boxShadow: `0 0 15px ${primaryColor}, 0 0 30px ${secondaryColor}`,
//     animation: "pulse 2s ease-in-out infinite",
//   },
// };

// export default LoadingSpinner;