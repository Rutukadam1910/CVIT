// // import React, { useEffect, useState } from "react";

// // export default function LoadingSpinner({
// //   size = 240,
// //   message = "Loading",
// //   ariaLabel = "Loading",
// // }) {
// //   const svgSize = size;
// //   const strokeWidth = 6;

// //   // Smooth dot animation for "Loading..."
// //   const [dotCount, setDotCount] = useState(0);
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setDotCount((prev) => (prev < 3 ? prev + 1 : 0));
// //     }, 500);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const dots = Array.from({ length: 3 }, (_, i) => (
// //     <span
// //       key={i}
// //       className="inline-block transition-opacity duration-500"
// //       style={{ opacity: i < dotCount ? 1 : 0 }}
// //     >
// //       .
// //     </span>
// //   ));

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
// //       <div className="flex flex-col items-center p-6">
// //         {/* Infinity Shape + Text */}
// //         <div
// //           className="relative flex flex-col items-center"
// //           style={{ width: svgSize, height: svgSize / 1.1 }}
// //           role="img"
// //           aria-label={ariaLabel}
// //         >
// //           {/* Rotating Halo */}
// //           <div className="absolute inset-0 flex items-center justify-center">
// //             <div
// //               className="rounded-full opacity-20"
// //               style={{
// //                 width: svgSize * 0.9,
// //                 height: svgSize * 0.9,
// //                 border: "1px solid rgba(255,255,255,0.2)",
// //                 transformOrigin: "center",
// //                 animation: "spin-slow 6s linear infinite",
// //               }}
// //             />
// //           </div>

// //           {/* Infinity SVG */}
// //           <svg
// //             key="infinity-svg"
// //             viewBox="0 0 200 100"
// //             className="relative z-10 w-full h-full"
// //             preserveAspectRatio="xMidYMid meet"
// //           >
// //             <defs>
// //               <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
// //                 <feGaussianBlur stdDeviation="2.2" result="b" />
// //                 <feMerge>
// //                   <feMergeNode in="b" />
// //                   <feMergeNode in="SourceGraphic" />
// //                 </feMerge>
// //               </filter>
// //             </defs>

// //             {/* Base Path */}
// //             <path
// //               id="infinityPath"
// //               d="M20,50 C20,20 80,20 100,50 C120,80 180,80 180,50 C180,20 120,20 100,50 C80,80 20,80 20,50 Z"
// //               fill="none"
// //               stroke="#ffffff"
// //               strokeWidth={strokeWidth}
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeOpacity="0.18"
// //             />

// //             {/* Animated Stroke */}
// //             <path
// //               d="M20,50 C20,20 80,20 100,50 C120,80 180,80 180,50 C180,20 120,20 100,50 C80,80 20,80 20,50 Z"
// //               fill="none"
// //               stroke="#ef3a3a"
// //               strokeWidth={strokeWidth}
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeDasharray="300"
// //               strokeDashoffset="300"
// //               style={{ animation: "draw 2.4s ease-in-out infinite" }}
// //             />

// //             {/* Moving Glow Dots */}
// //             <g>
// //               <circle r="5" fill="#ef3a3a" filter="url(#f1)" opacity="0.98">
// //                 <animateMotion dur="2.4s" repeatCount="indefinite" rotate="auto">
// //                   <mpath xlinkHref="#infinityPath" />
// //                 </animateMotion>
// //               </circle>

// //               <circle r="2.2" fill="#ef3a3a" opacity="0.9">
// //                 <animateMotion dur="2.4s" repeatCount="indefinite" rotate="auto">
// //                   <mpath xlinkHref="#infinityPath" />
// //                 </animateMotion>
// //               </circle>
// //             </g>
// //           </svg>

// //           {/* Loading Text */}
// //           <p
// //             className="text-lg font-semibold text-white tracking-widest transition-opacity duration-500"
// //             style={{ marginTop: "-60px" }}
// //           >
// //             {message}
// //             {dots}
// //           </p>
// //         </div>
// //       </div>

// //       <style>{`
// //         @keyframes draw {
// //           0% { stroke-dashoffset: 300; opacity: 0.7 }
// //           25% { stroke-dashoffset: 180; opacity: 1 }
// //           50% { stroke-dashoffset: 60; opacity: 1 }
// //           75% { stroke-dashoffset: -40; opacity: 1 }
// //           100% { stroke-dashoffset: -300; opacity: 0.7 }
// //         }

// //         @keyframes spin-slow {
// //           from { transform: rotate(0deg); }
// //           to { transform: rotate(360deg); }
// //         }

// //         svg { shape-rendering: geometricPrecision; }
// //       `}</style>
// //     </div>
// //   );
// // }





// import React, { useEffect, useRef, useState } from "react";

// export default function LoadingSpinner({
//   size = 240,
//   message = "Loading",
//   ariaLabel = "Loading",
//   duration = 2400, // sync duration (ms)
// }) {
//   const svgSize = size;
//   const strokeWidth = 7;
//   const pathRef = useRef(null);
//   const dotRef = useRef(null);
//   const strokeRef = useRef(null);

//   const [dotCount, setDotCount] = useState(0);

//   // Loading dots animation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDotCount((prev) => (prev < 3 ? prev + 1 : 0));
//     }, 500);
//     return () => clearInterval(interval);
//   }, []);

//   // Sync stroke and dot animation
//   useEffect(() => {
//     if (!pathRef.current || !dotRef.current || !strokeRef.current) return;

//     const path = pathRef.current;
//     const dot = dotRef.current;
//     const stroke = strokeRef.current;

//     const totalLength = path.getTotalLength();

//     let start = null;
//     let animationFrame;

//     const animate = (timestamp) => {
//       if (!start) start = timestamp;
//       const elapsed = timestamp - start;
//       const progress = (elapsed % duration) / duration;

//       // Stroke dash animation - seamless loop
//       stroke.setAttribute("stroke-dasharray", totalLength);
//       stroke.setAttribute(
//         "stroke-dashoffset",
//         totalLength - ((elapsed / duration) * totalLength) % totalLength
//       );

//       // Dot follows same progress
//       const p = path.getPointAtLength(totalLength * progress);
//       dot.setAttribute("cx", p.x);
//       dot.setAttribute("cy", p.y);

//       animationFrame = requestAnimationFrame(animate);
//     };

//     animationFrame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrame);
//   }, [duration]);

//   const dots = Array.from({ length: 3 }, (_, i) => (
//     <span
//       key={i}
//       className="inline-block transition-opacity duration-500"
//       style={{ opacity: i < dotCount ? 1 : 0 }}
//     >
//       .
//     </span>
//   ));

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
//       <div className="flex flex-col items-center p-6">
//         <div
//           className="relative flex flex-col items-center"
//           style={{ width: svgSize, height: svgSize / 1.1 }}
//           role="img"
//           aria-label={ariaLabel}
//         >
//           {/* Rotating Halo */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div
//               className="rounded-full opacity-20"
//               style={{
//                 width: svgSize * 0.95,
//                 height: svgSize * 0.95,
//                 border: "1px solid rgba(255,255,255,0.2)",
//                 transformOrigin: "center",
//                 animation: "spin-slow 6s linear infinite",
//               }}
//             />
//           </div>

//           {/* Infinity SVG */}
//           <svg
//             viewBox="0 0 240 120"
//             className="relative z-10 w-full h-full"
//             preserveAspectRatio="xMidYMid meet"
//           >
//             <defs>
//               <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
//                 <feGaussianBlur stdDeviation="2.2" result="b" />
//                 <feMerge>
//                   <feMergeNode in="b" />
//                   <feMergeNode in="SourceGraphic" />
//                 </feMerge>
//               </filter>
//             </defs>

//             {/* Base Path */}
//             <path
//               ref={pathRef}
//               d="M20,60 C20,20 100,20 120,60 C140,100 220,100 220,60 
//                  C220,20 140,20 120,60 C100,100 20,100 20,60 Z"
//               fill="none"
//               stroke="#ffffff"
//               strokeWidth={strokeWidth}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeOpacity="0.18"
//             />

//             {/* Animated Stroke (controlled by JS) */}
//             <path
//               ref={strokeRef}
//               d="M20,60 C20,20 100,20 120,60 C140,100 220,100 220,60 
//                  C220,20 140,20 120,60 C100,100 20,100 20,60 Z"
//               fill="none"
//               stroke="#ef3a3a"
//               strokeWidth={strokeWidth}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />

//             {/* Moving Glow Dot */}
//             <circle
//               ref={dotRef}
//               r="6"
//               fill="#ef3a3a"
//               filter="url(#f1)"
//               opacity="0.98"
//             />
//           </svg>

//           {/* Loading Text */}
//           <p
//             className="text-lg font-bold text-white tracking-widest transition-opacity duration-500"
//             style={{ marginTop: "-65px" }}
//           >
//             {message}
//             {dots}
//           </p>
//         </div>
//       </div>

//       <style>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         svg { shape-rendering: geometricPrecision; }
//       `}</style>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";

export default function LoadingSpinner({
  size = 240,
  message = "Loading",
  ariaLabel = "Loading",
  duration = 2400, // sync duration (ms)
}) {
  const svgSize = size;
  const strokeWidth = 7;
  const pathRef = useRef(null);
  const dotRef = useRef(null);
  const strokeRef = useRef(null);

  const [dotCount, setDotCount] = useState(0);

  // Loading dots animation (...)
  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev < 3 ? prev + 1 : 0));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Sync stroke and dot animation
  useEffect(() => {
    if (!pathRef.current || !dotRef.current || !strokeRef.current) return;

    const path = pathRef.current;
    const dot = dotRef.current;
    const stroke = strokeRef.current;

    const totalLength = path.getTotalLength();
    const dashLength = totalLength / 2; // size of visible segment

    let start = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = (elapsed % duration) / duration;

      // Stroke dash animation - seamless infinite scroll
      stroke.setAttribute("stroke-dasharray", `${dashLength} ${totalLength}`);
      stroke.setAttribute(
        "stroke-dashoffset",
        -((elapsed / duration) * totalLength)
      );

      // Dot follows same progress
      const p = path.getPointAtLength(totalLength * progress);
      dot.setAttribute("cx", p.x);
      dot.setAttribute("cy", p.y);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration]);

  const dots = Array.from({ length: 3 }, (_, i) => (
    <span
      key={i}
      className="inline-block transition-opacity duration-500"
      style={{ opacity: i < dotCount ? 1 : 0 }}
    >
      .
    </span>
  ));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center p-6">
        <div
          className="relative flex flex-col items-center"
          style={{ width: svgSize, height: svgSize / 1.1 }}
          role="img"
          aria-label={ariaLabel}
        >
          {/* Rotating Halo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="rounded-full opacity-20"
              style={{
                width: svgSize * 0.95,
                height: svgSize * 0.95,
                border: "1px solid rgba(255,255,255,0.2)",
                transformOrigin: "center",
                animation: "spin-slow 6s linear infinite",
              }}
            />
          </div>

          {/* Infinity SVG */}
          <svg
            viewBox="0 0 240 120"
            className="relative z-10 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.2" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base Path */}
            <path
              ref={pathRef}
              d="M20,60 C20,20 100,20 120,60 C140,100 220,100 220,60 
                 C220,20 140,20 120,60 C100,100 20,100 20,60 Z"
              fill="none"
              stroke="#ffffff"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.18"
            />

            {/* Animated Stroke */}
            <path
              ref={strokeRef}
              d="M20,60 C20,20 100,20 120,60 C140,100 220,100 220,60 
                 C220,20 140,20 120,60 C100,100 20,100 20,60 Z"
              fill="none"
              stroke="#ef3a3a"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Moving Glow Dot */}
            <circle
              ref={dotRef}
              r="6"
              fill="#ef3a3a"
              filter="url(#f1)"
              opacity="0.98"
            />
          </svg>

          {/* Loading Text */}
          <p
            className="text-lg font-bold text-white tracking-widest transition-opacity duration-500"
            style={{ marginTop: "-65px" }}
          >
            {message}
            {dots}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        svg { shape-rendering: geometricPrecision; }
      `}</style>
    </div>
  );
}
