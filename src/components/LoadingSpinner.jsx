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
