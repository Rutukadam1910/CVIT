import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "../Styles/CustomerBenefits.css";

const CustomerBenefitsdata = ({
  label,
  value,
  unit,
  min = 0,
  max = 100,
  size: propSize = 360,
  strokeWidth: propStrokeWidth = 39.6,
  trigger,
}) => {
  const { t } = useTranslation();

  // Much more aggressive responsive sizing for small screens
  const getGaugeSize = useMemo(() => {
    return () => {
      const width = window.innerWidth;
      if (width <= 100) {
        return { size: propSize * 0.08, strokeWidth: propStrokeWidth * 0.08 };
      } else if (width <= 160) {
        return { size: propSize * 0.12, strokeWidth: propStrokeWidth * 0.12 };
      } else if (width <= 240) {
        return { size: propSize * 0.16, strokeWidth: propStrokeWidth * 0.16 };
      } else if (width <= 320) {
        return { size: propSize * 0.2, strokeWidth: propStrokeWidth * 0.2 };
      } else if (width <= 480) {
        return { size: propSize * 0.3, strokeWidth: propStrokeWidth * 0.3 };
      } else if (width <= 720) {
        return { size: propSize * 0.4, strokeWidth: propStrokeWidth * 0.4 };
      } else if (width <= 900) {
        return { size: propSize * 0.5, strokeWidth: propStrokeWidth * 0.5 };
      } else if (width <= 1100) {
        return { size: propSize * 0.6, strokeWidth: propStrokeWidth * 0.6 };
      } else if (width <= 1300) {
        return { size: propSize * 0.7, strokeWidth: propStrokeWidth * 0.7 };
      }
      return { size: propSize, strokeWidth: propStrokeWidth };
    };
  }, [propSize, propStrokeWidth]);

  const { size, strokeWidth } = getGaugeSize();
  const [displayValue, setDisplayValue] = useState(0);
  const [needleAngle, setNeedleAngle] = useState(-180);
  const [visible, setVisible] = useState(false);

  const radius = size / 2 - strokeWidth;
  const centerX = size / 2;
  const centerY = size;
  const startAngle = -180;
  const endAngle = 0;

  const valueToAngle = (val) => {
    const percent = (val - min) / (max - min);
    return startAngle + percent * (endAngle - startAngle);
  };

  useEffect(() => {
    setVisible(false);
    setDisplayValue(0);
    setNeedleAngle(startAngle);

    const timeout = setTimeout(() => {
      if (trigger) {
        setVisible(true);
        let frame = 0;
        const totalFrames = 200;

        const isSpeedMetric = unit === "x";
        // For "10x" → we want needle at 10 on the 0–100 scale
        const targetGaugeValue = isSpeedMetric ? 10 : Math.min(value, max);
        const targetAngle = valueToAngle(targetGaugeValue);

        const animate = () => {
          frame++;
          const progress = frame / totalFrames;
          const eased = 1 - Math.pow(1 - progress, 3); // Smooth ease-out
          const bounce = eased + Math.sin(progress * Math.PI) * 0.008;

          // Display value animation
          if (label === t("DefectFreeIndustry")) {
            setDisplayValue((99.9 * eased).toFixed(1));
          } else if (isSpeedMetric) {
            // Smooth count from 1.0x → 10.0x
            const displaySpeed = 1 + (9 * eased);
            setDisplayValue(displaySpeed.toFixed(1));
          } else {
            setDisplayValue(Math.floor(value * eased));
          }

          // Needle moves to correct position: 10x = 10 on gauge
          setNeedleAngle(startAngle + (targetAngle - startAngle) * bounce);

          if (frame < totalFrames) {
            requestAnimationFrame(animate);
          } else if (isSpeedMetric) {
            setDisplayValue("10.0");
          }
        };

        animate();
      }
    }, 134);

    return () => clearTimeout(timeout);
  }, [value, max, trigger, label, unit, t, startAngle]);

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
    const baseWidth = 11.52 * (size / 360);
    const angleRad = (Math.PI / 180) * needleAngle;

    const tipX = centerX + needleLength * Math.cos(angleRad);
    const tipY = centerY + needleLength * Math.sin(angleRad);

    const baseLeftX = centerX + (baseWidth / 2) * Math.cos(angleRad + Math.PI / 2);
    const baseLeftY = centerY + (baseWidth / 2) * Math.sin(angleRad + Math.PI / 2);

    const baseRightX = centerX + (baseWidth / 2) * Math.cos(angleRad - Math.PI / 2);
    const baseRightY = centerY + (baseWidth / 2) * Math.sin(angleRad - Math.PI / 2);

    const semicircleRadius = 15.84 * (size / 360);
    const semicircleArcWidth = radius * 0.8;
    const semicircleYOffset = 18.72 * (size / 360);
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
    <div className={`gauge-container ${visible ? "opacity-1" : "opacity-0"}`} style={{ maxWidth: size }}>
      <div className="gauge-wrapper">
        <svg
          width={size}
          viewBox={`0 0 ${size} ${size / 2 + 14.4 * (size / 360)}`}
          className="gauge-svg"
          style={{
            marginBottom: `${135.46 * (size / 360)}px`,
            marginTop: `${-155.16 * (size / 360)}px`,
          }}
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
                strokeWidth={1.008 * (size / 360)}
              />
            );
          })}
          {ticks.map((t, i) => {
            const angle = valueToAngle(t);
            const [x, y] = polarToCartesian(angle, radius + 27.36 * (size / 360));
            return (
              <text
                key={i}
                x={x}
                y={y}
                className="tick-label"
                style={{ fontSize: `${0.72 * (size / 360)}rem`}}
              >
                {t}
              </text>
            );
          })}
          {drawNeedle()}
        </svg>
      </div>

      <div
        className="gauge-text"
        style={{
          marginTop: `${14.4 * (size / 360)}px`,
          gap: `${6.28 * (size / 360)}px`,
        }}
      >
        <div
          className={`gauge-value ${visible ? "opacity-1" : "opacity-0"}`}
          style={{ fontSize: `${1.2 * (size / 360)}rem`}}
        >
          {unit === "x" ? `${displayValue}x` : `${displayValue}${unit}`}
        </div>
        <h3 className="gauge-label" style={{ fontSize: `${1.35 * (size / 360)}rem`}}>
          {label}
        </h3>
      </div>
    </div>
  );
};

const CustomerBenefits = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

const metrics = [
  { label: t("InspectionAccuracy"), value: 99, unit: "%" },
  { label: t("ProductionEfficiency"), value: 20, unit: "%" },
  { label: t("LaborCostSaving"), value: 30, unit: "%" }, 
  { label: t("MinimizeDowntime"), value: 25, unit: "%" }, 
  { label: t("InspectionSpeed"), value: 10, unit: "x" },
  { label: t("DefectFreeIndustry"), value: 99.9, unit: "%" },
];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="customer-benefits" ref={ref}>
      <div className="background-overlay" />
      <div className="content-container">
        <div className="title-container">
          <h1 className="customer-benefits-title">{t("CustomerBenefitsTitle")}</h1>
        </div>

        {/* Single grid for all metrics - CSS will handle responsive layout */}
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <CustomerBenefitsdata key={metric.label} {...metric} trigger={inView} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerBenefits;