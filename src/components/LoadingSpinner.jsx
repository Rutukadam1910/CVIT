import React, { useEffect, useRef, useState } from "react";

export default function LoadingSpinner({
  size = 240,
  message = "Loading",
  ariaLabel = "Loading",
  duration = 2400,
  fullScreen = false,
}) {
  const [responsiveSize, setResponsiveSize] = useState(size);

  // --- NEW: Effect to handle scrollbar visibility ---
  // This effect will hide the main browser scrollbar when the spinner
  // is in fullScreen mode and restore it when the component unmounts.
  useEffect(() => {
    // Store the original overflow styles to restore them later
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    if (fullScreen) {
      // Hide scrollbars on both body and html elements
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    // Cleanup function: This runs when the component unmounts or the `fullScreen` prop changes
    return () => {
      // Restore the original overflow styles
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [fullScreen]); // This effect runs only when the `fullScreen` prop changes

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Base calculations for different screen sizes
      if (fullScreen) {
        // For full screen mode, use more aggressive scaling
        const maxWidth = viewportWidth * 0.7; // Reduced from 0.9
        const maxHeight = viewportHeight * 0.4; // Reduced from 0.5
        
        // Apply additional scaling for very small screens
        let scaleFactor = 1;
        if (viewportWidth < 480) {
          scaleFactor = 0.7; // Extra scaling for mobile
        } else if (viewportWidth < 768) {
          scaleFactor = 0.85; // Scaling for tablets
        }
        
        const newSize = Math.min(size, maxWidth, maxHeight) * scaleFactor;
        setResponsiveSize(newSize);
      } else {
        // For regular mode, also implement responsive scaling
        let newSize = size;
        
        // Apply scaling based on viewport width
        if (viewportWidth < 480) {
          newSize = Math.min(size, 120); // Cap at 120px for mobile
        } else if (viewportWidth < 768) {
          newSize = Math.min(size, 160); // Cap at 160px for tablets
        } else if (viewportWidth < 1024) {
          newSize = Math.min(size, 200); // Cap at 200px for small desktops
        } else {
          newSize = Math.min(size, 240); // Default max size
        }
        
        setResponsiveSize(newSize);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size, fullScreen]);

  const svgSize = fullScreen ? responsiveSize : Math.min(responsiveSize, 120);
  const strokeWidth = fullScreen ? Math.max(3, responsiveSize / 34) : Math.max(2, responsiveSize / 40);
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
    const dashLength = totalLength / 2;

    let start = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = (elapsed % duration) / duration;

      // Stroke dash animation
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

  const containerClass = fullScreen 
    ? "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden" 
    : "flex items-center justify-center min-h-[80px] py-4";

  // Responsive text size based on screen size
  const getTextSize = () => {
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 480) return "text-xs";
    if (viewportWidth < 768) return "text-sm";
    return "text-sm";
  };
  
  const textSize = getTextSize();
  
  // Reduced margin-top to bring text closer to infinity shape, scaled proportionally
  const textMarginTop = fullScreen ? `${-svgSize * 0.1}px` : "-8px"; 

  return (
    <div 
      className={containerClass}
      role={fullScreen ? "status" : "img"}
      aria-live="polite"
      aria-label={fullScreen ? "Loading page content" : ariaLabel}
    >
      <div className="flex flex-col items-center p-2">
        <div
          className="relative flex flex-col items-center"
          style={{ 
            width: svgSize, 
            height: svgSize / 1.2, // Slightly reduced height to accommodate closer text
            marginBottom: fullScreen ? '0' : '4px' // Small bottom margin for non-fullscreen
          }}
        >
          {/* Infinity SVG - Positioned slightly higher to make room for closer text */}
          <div style={{ transform: fullScreen ? 'translateY(-2px)' : 'translateY(-1px)' }}>
            <svg
              viewBox="0 0 240 120"
              className="relative z-10 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation={fullScreen ? "2.2" : "1"} result="b" />
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
                r={fullScreen ? Math.max(3, svgSize / 40) : Math.max(2, svgSize / 60)}
                fill="#ef3a3a"
                filter="url(#f1)"
                opacity="0.98"
              />
            </svg>
          </div>

          {/* Loading Text - Much closer to the infinity shape */}
          <p
            className={`${textSize} font-semibold text-white tracking-wide whitespace-nowrap transition-opacity duration-500`}
            style={{ 
              marginTop: textMarginTop,
              lineHeight: 1,
              letterSpacing: '0.05em',
              // Additional fine-tuning for perfect alignment
              paddingTop: fullScreen ? '2px' : '1px'
            }}
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

        .loading-spinner svg { 
          shape-rendering: geometricPrecision; 
        }

        /* Ensure text stays on one line */
        .whitespace-nowrap {
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}