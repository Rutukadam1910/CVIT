// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useInView } from "react-intersection-observer";
// import backgroundImage from "../assets/blue2.jpg";

// const CustomerBenefitsdata = ({
//   label,
//   value,
//   unit,
//   min = 0,
//   max = 100,
//   size = 360,
//   strokeWidth = 39.6,
//   trigger,
// }) => {
//   const [displayValue, setDisplayValue] = useState(0);
//   const [needleAngle, setNeedleAngle] = useState(-180);
//   const [visible, setVisible] = useState(false);

//   const radius = size / 2 - strokeWidth;
//   const centerX = size / 2;
//   const centerY = size;
//   const startAngle = -180;
//   const endAngle = 0;
//   const totalAngle = endAngle - startAngle;

//   const valueToAngle = (val) => {
//     const percent = (val - min) / (max - min);
//     return startAngle + percent * totalAngle;
//   };

//   useEffect(() => {
//     setVisible(false);
//     setDisplayValue(0);
//     setNeedleAngle(startAngle);

//     const timeout = setTimeout(() => {
//       setVisible(true);
//       let frame = 0;
//       const totalFrames = 100;
//       const targetValue = Math.min(value, max);
//       const targetAngle = valueToAngle(targetValue);

//       const animate = () => {
//         frame++;
//         const progress = frame / totalFrames;
//         const eased = 1 - Math.pow(1 - progress, 3);
//         const bounce = eased + Math.sin(progress * Math.PI) * 0.015;

//         setDisplayValue(Math.floor(targetValue * eased));
//         setNeedleAngle(startAngle + (targetAngle - startAngle) * bounce);

//         if (frame < totalFrames) requestAnimationFrame(animate);
//       };

//       animate();
//     }, 134);

//     return () => clearTimeout(timeout);
//   }, [value, max, trigger]);

//   const segments = [
//     { from: 0, to: 50, color: "#8A1F1F" },
//     { from: 50, to: 75, color: "#C22B2B" },
//     { from: 75, to: 100, color: "#EF3A3A" },
//   ];

//   const ticks = [];
//   for (let t = 0; t <= max; t += 10) ticks.push(t);

//   const polarToCartesian = (angle, r) => {
//     const rad = (Math.PI / 180) * angle;
//     return [centerX + r * Math.cos(rad), centerY + r * Math.sin(rad)];
//   };

//   const arcPath = (start, end, r) => {
//     const [x1, y1] = polarToCartesian(start, r);
//     const [x2, y2] = polarToCartesian(end, r);
//     return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
//   };

//   const drawNeedle = () => {
//     const needleLength = radius;
//     const baseWidth = 11.52;
//     const angleRad = (Math.PI / 180) * needleAngle;

//     const tipX = centerX + needleLength * Math.cos(angleRad);
//     const tipY = centerY + needleLength * Math.sin(angleRad);

//     const baseLeftX = centerX + (baseWidth / 2) * Math.cos(angleRad + Math.PI / 2);
//     const baseLeftY = centerY + (baseWidth / 2) * Math.sin(angleRad + Math.PI / 2);

//     const baseRightX = centerX + (baseWidth / 2) * Math.cos(angleRad - Math.PI / 2);
//     const baseRightY = centerY + (baseWidth / 2) * Math.sin(angleRad - Math.PI / 2);

//     const semicircleRadius = 15.84;
//     const semicircleArcWidth = radius * 0.8;
//     const semicircleYOffset = 18.72;

//     const semicircleStartX = centerX - semicircleArcWidth / 2;
//     const semicircleEndX = centerX + semicircleArcWidth / 2;
//     const semicircleY = centerY + semicircleYOffset;

//     return (
//       <>
//         <polygon
//           points={`${baseLeftX},${baseLeftY} ${tipX},${tipY} ${baseRightX},${baseRightY}`}
//           fill="#ffffff"
//         />
//         <path
//           d={`
//             M ${semicircleStartX} ${semicircleY}
//             A ${semicircleRadius} ${semicircleRadius} 0 0 1 ${semicircleEndX} ${semicircleY}
//           `}
//           fill="#C22B2B"
//         />
//       </>
//     );
//   };

//   return (
    
//     <div
//       className={`flex flex-col items-center transition-all duration-1000 ${
//         visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
//       } mb-0`}
//       style={{ maxWidth: 367.2 }}
//     >
//       <div className="flex flex-col items-center">
//         <svg
//           width={size}
//           viewBox={`0 0 ${size} ${size / 2 + 14.4}`}
//           style={{ overflow: "visible", marginBottom: "98.46px", marginTop: "-145.16px" }}
//         >
//           <path
//             d={arcPath(startAngle, endAngle, radius)}
//             stroke="rgba(255,255,255,0.12)"
//             strokeWidth={strokeWidth}
//             fill="none"
//             strokeLinecap="round"
//           />
//           {segments.map((seg, i) => {
//             const start = valueToAngle(seg.from);
//             const end = valueToAngle(seg.to);
//             return (
//               <path
//                 key={i}
//                 d={arcPath(start, end, radius)}
//                 stroke={seg.color}
//                 strokeWidth={strokeWidth}
//                 strokeLinecap="round"
//                 fill="none"
//                 style={{ opacity: 0.9 }}
//               />
//             );
//           })}
//           {ticks.map((t, i) => {
//             if (t === min || t === max) return null;
//             const angle = valueToAngle(t);
//             const [x1, y1] = polarToCartesian(angle, radius - strokeWidth / 2);
//             const [x2, y2] = polarToCartesian(angle, radius + strokeWidth / 2);
//             return (
//               <line
//                 key={i}
//                 x1={x1}
//                 y1={y1}
//                 x2={x2}
//                 y2={y2}
//                 stroke="rgba(255,255,255,0.25)"
//                 strokeWidth="1.008"
//               />
//             );
//           })}
//           {ticks.map((t, i) => {
//             const angle = valueToAngle(t);
//             const [x, y] = polarToCartesian(angle, radius + 27.36);
//             return (
//               <text
//                 key={i}
//                 x={x}
//                 y={y}
//                 textAnchor="middle"
//                 dominantBaseline="middle"
//                 className="text-[0.72rem] font-medium"
//                 fill="rgba(255,255,255,0.75)"
//               >
//                 {t}
//               </text>
//             );
//           })}
//           {drawNeedle()}
//         </svg>
//       </div>

//       <div className="mt-3.6 text-center space-y-4.32">
//         <div
//           className="text-[1.2rem] font-extrabold text-white"
//           style={{
//             opacity: visible ? 1 : 0,
//             transition: "opacity 1s ease",
//             userSelect: "none",
//           }}
//         >
//           {displayValue}{unit}
//         </div>
//         <h3 className="text-[1.4rem] font-semibold text-white">{label}</h3>
//       </div>
//     </div>
//   );
// };

// const CustomerBenefits = () => {
//   const location = useLocation();
//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.3,
//   });

//   const metrics = [
//     { label: "Inspection Accuracy", value: 99, unit: "%" },
//     { label: "Production Efficiency", value: 20, unit: "%" },
//     { label: "Labour Cost Saving", value: 30, unit: "%" },
//     { label: "Minimise Downtime", value: 25, unit: "%" },
//     { label: "Inspection Speed", value: 10, unit: "%" },
//     { label: "Defect-Free Industry", value: 99, unit: "%" },
//   ];

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   return (
//     <div className="relative min-h-[100vh] min-w-[90vw] text-white pb-8" ref={ref}>
//  <div
//   className="absolute inset-0 bg-cover bg-center animate-fadeIn"
//   style={{
//     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 2)), url(${backgroundImage})`,
//     opacity: 0.1,
//   }}
// />
//       <div className="relative z-10 px-5 pt-1">
//         <div className="flex justify-center mb-1">
//           <h1
//             className="text-[2.8rem] font-bold text-center animate-heading tracking-tight"
//             style={{
//               color: "white",
//               fontFamily: "'Inter', sans-serif",
//             }}
//           >
//             CUSTOMER BENEFITS
//           </h1>
//         </div>

//         <div
//           className="grid grid-cols-1 md:grid-cols-3 gap-y-0 gap-x-6.7 justify-items-center mb-6.7"
//           style={{
//             color: "white",
//             fontFamily: "'Inter', sans-serif",
//           }}
//         >
//           {metrics.slice(0, 3).map((metric) => (
//             <CustomerBenefitsdata
//               key={metric.label}
//               label={metric.label}
//               value={metric.value}
//               unit={metric.unit}
//               trigger={inView}
//             />
//           ))}
//         </div>

//         <div
//           className="grid grid-cols-1 md:grid-cols-3 gap-y-0 gap-x-6.7 justify-items-center mb-6.7"
//           style={{
//             color: "white",
//             fontFamily: "'Inter', sans-serif",
//           }}
//         >
//           {metrics.slice(3, 6).map((metric) => (
//             <CustomerBenefitsdata
//               key={metric.label}
//               label={metric.label}
//               value={metric.value}
//               unit={metric.unit}
//               trigger={inView}
//             />
//           ))}
//         </div>
//       </div>

//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; }
//             to { opacity: 1; }
//           }
//           .animate-fadeIn {
//             animation: fadeIn 1.2s ease-in-out forwards;
//           }

//           @keyframes fadeSlideUp {
//             0% { opacity: 0; transform: translateY(26.8px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//           .animate-heading {
//             animation: fadeSlideUp 0.8s ease-out forwards;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default CustomerBenefits;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import backgroundImage from "../assets/blue2.jpg";

const CustomerBenefitsdata = ({
  label,
  value,
  unit,
  min = 0,
  max = 100,
  size = 360,
  strokeWidth = 39.6,
  trigger,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [needleAngle, setNeedleAngle] = useState(-180);
  const [visible, setVisible] = useState(false);

  const radius = size / 2 - strokeWidth;
  const centerX = size / 2;
  const centerY = size;
  const startAngle = -180;
  const endAngle = 0;
  const totalAngle = endAngle - startAngle;

  const valueToAngle = (val) => {
    const percent = (val - min) / (max - min);
    return startAngle + percent * totalAngle;
  };

  useEffect(() => {
    setVisible(false);
    setDisplayValue(0);
    setNeedleAngle(startAngle);

    const timeout = setTimeout(() => {
      setVisible(true);
      let frame = 0;
      const totalFrames = 100;
      const targetValue = Math.min(value, max);
      const targetAngle = valueToAngle(targetValue);

      const animate = () => {
        frame++;
        const progress = frame / totalFrames;
        const eased = 1 - Math.pow(1 - progress, 3);
        const bounce = eased + Math.sin(progress * Math.PI) * 0.015;

        // For "Defect-Free Industry", display one decimal place; otherwise, use integer
        if (label === "Defect-Free Industry") {
          setDisplayValue((targetValue * eased).toFixed(1));
        } else {
          setDisplayValue(Math.floor(targetValue * eased));
        }
        setNeedleAngle(startAngle + (targetAngle - startAngle) * bounce);

        if (frame < totalFrames) requestAnimationFrame(animate);
      };

      animate();
    }, 134);

    return () => clearTimeout(timeout);
  }, [value, max, trigger, label]);

  const segments = [
    { from: 0, to: 50, color: "#8A1F1F" },
    { from: 50, to: 75, color: "#C22B2B" },
    { from: 75, to: 100, color: "#EF3A3A" },
  ];

  const ticks = [];
  for (let t = 0; t <= max; t += 10) ticks.push(t);

  const polarToCartesian = (angle, r) => {
    const rad = (Math.PI / 180) * angle;
    return [centerX + r * Math.cos(rad), centerY + r * Math.sin(rad)];
  };

  const arcPath = (start, end, r) => {
    const [x1, y1] = polarToCartesian(start, r);
    const [x2, y2] = polarToCartesian(end, r);
    return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
  };

  const drawNeedle = () => {
    const needleLength = radius;
    const baseWidth = 11.52;
    const angleRad = (Math.PI / 180) * needleAngle;

    const tipX = centerX + needleLength * Math.cos(angleRad);
    const tipY = centerY + needleLength * Math.sin(angleRad);

    const baseLeftX = centerX + (baseWidth / 2) * Math.cos(angleRad + Math.PI / 2);
    const baseLeftY = centerY + (baseWidth / 2) * Math.sin(angleRad + Math.PI / 2);

    const baseRightX = centerX + (baseWidth / 2) * Math.cos(angleRad - Math.PI / 2);
    const baseRightY = centerY + (baseWidth / 2) * Math.sin(angleRad - Math.PI / 2);

    const semicircleRadius = 15.84;
    const semicircleArcWidth = radius * 0.8;
    const semicircleYOffset = 18.72;

    const semicircleStartX = centerX - semicircleArcWidth / 2;
    const semicircleEndX = centerX + semicircleArcWidth / 2;
    const semicircleY = centerY + semicircleYOffset;

    return (
      <>
        <polygon
          points={`${baseLeftX},${baseLeftY} ${tipX},${tipY} ${baseRightX},${baseRightY}`}
          fill="#ffffff"
        />
        <path
          d={`
            M ${semicircleStartX} ${semicircleY}
            A ${semicircleRadius} ${semicircleRadius} 0 0 1 ${semicircleEndX} ${semicircleY}
          `}
          fill="#C22B2B"
        />
      </>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "all 1000ms ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.75)",
        marginBottom: 0,
        maxWidth: 367.2,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <svg
          width={size}
          viewBox={`0 0 ${size} ${size / 2 + 14.4}`}
          style={{ overflow: "visible", marginBottom: "132.46px", marginTop: "-165.16px" }}
        >
          <path
            d={arcPath(startAngle, endAngle, radius)}
            stroke="rgba(255,255,255,0.12)"
            fill="none"
            strokeLinecap="round"
          />
          {segments.map((seg, i) => {
            const start = valueToAngle(seg.from);
            const end = valueToAngle(seg.to);
            return (
              <path
                key={i}
                d={arcPath(start, end, radius)}
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                fill="none"
                style={{ opacity: 0.9 }}
              />
            );
          })}
          {ticks.map((t, i) => {
            if (t === min || t === max) return null;
            const angle = valueToAngle(t);
            const [x1, y1] = polarToCartesian(angle, radius - strokeWidth / 2);
            const [x2, y2] = polarToCartesian(angle, radius + strokeWidth / 2);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.008"
              />
            );
          })}
          {ticks.map((t, i) => {
            const angle = valueToAngle(t);
            const [x, y] = polarToCartesian(angle, radius + 27.36);
            return (
              <text
                key={i}
                x={x}
                y={y}
                style={{
                  textAnchor: "middle",
                  dominantBaseline: "middle",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  fill: "rgba(255,255,255,0.75)",
                }}
              >
                {t}
              </text>
            );
          })}
          {drawNeedle()}
        </svg>
      </div>

      <div
        style={{
          marginTop: "14.4px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "6.28px",
        }}
      >
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: 800,
            color: "white",
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease",
            userSelect: "none",
          }}
        >
          {displayValue}{unit}
        </div>
        <h3
          style={{
            fontSize: "1.35rem",
            fontWeight: 600,
            color: "white",
          }}
        >
          {label}
        </h3>
      </div>
    </div>
  );
};

const CustomerBenefits = () => {
  const location = useLocation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const metrics = [
    { label: "Inspection Accuracy", value: 99, unit: "%" },
    { label: "Production Efficiency", value: 20, unit: "%" },
    { label: "Labour Cost Saving", value: 30, unit: "%" },
    { label: "Minimise Downtime", value: 25, unit: "%" },
    { label: "Inspection Speed", value: 10, unit: "%" },
    { label: "Defect-Free Industry", value: 99.9, unit: "%" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        minWidth: "90vw",
        color: "white",
        paddingBottom: "32px",
      }}
      ref={ref}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 2)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "fadeIn 1.2s ease-in-out forwards",
          opacity: 0.1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 10,
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "4px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "4px",
          }}
        >
          <h1
            style={{
              marginTop: "3rem",
              fontSize: "2.8rem",
              fontWeight: 700,
              textAlign: "center",
              animation: "fadeSlideUp 0.8s ease-out forwards",
              letterSpacing: "-0.02em",
              color: "white",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            CUSTOMER BENEFITS
          </h1>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "26.8px 26.8px",
            justifyItems: "center",
            marginBottom: "26.8px",
            color: "white",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {metrics.slice(0, 3).map((metric) => (
            <CustomerBenefitsdata
              key={metric.label}
              label={metric.label}
              value={metric.value}
              unit={metric.unit}
              trigger={inView}
            />
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "26.8px 26.8px",
            justifyItems: "center",
            marginBottom: "26.8px",
            color: "white",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {metrics.slice(3, 6).map((metric) => (
            <CustomerBenefitsdata
              key={metric.label}
              label={metric.label}
              value={metric.value}
              unit={metric.unit}
              trigger={inView}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(26.8px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .customer-benefits-text {
          font-size: 0.72rem;
          font-weight: 500;
          fill: rgba(255, 255, 255, 0.75);
        }
      `}</style>
    </div>
  );
};

export default CustomerBenefits;