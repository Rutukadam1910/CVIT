import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const chartDataArray = [
  { label: "Inspection Accuracy", value: 99, unit: "%", category: "Accuracy" },
  { label: "Production Efficiency", value: 80, unit: "%", category: "Efficiency" },
  { label: "Labour Cost Saving", value: 30, unit: "%", category: "Cost" },
  { label: "Minimise Downtime", value: 25, unit: "%", category: "Efficiency" },
  { label: "Inspection Speed", value: 90, unit: "%", category: "Speed" },
  { label: "Defect-Free Industry", value: 99, unit: "%", category: "Accuracy" },
];

const categories = ["All", "Accuracy", "Efficiency", "Speed", "Cost"];

const SpeedometerGauge = ({ value, label, unit }) => {
  const motionVal = useMotionValue(0);
  const [animatedVal, setAnimatedVal] = useState(0);
  const [angle, setAngle] = useState(-90);

  useEffect(() => {
    const targetAngle = (value / 100) * 180 - 90;
    let current = -90;
    const interval = setInterval(() => {
      current += 3;
      if (current >= targetAngle) {
        current = targetAngle;
        clearInterval(interval);
      }
      setAngle(current);
    }, 15);

    const controls = animate(motionVal, value, {
      duration: 1.5,
      onUpdate: latest => setAnimatedVal(Math.round(latest)),
    });

    return () => {
      clearInterval(interval);
      controls.stop();
    };
  }, [value]);

  return (
    <div className="speedometer">
      <svg viewBox="0 0 200 100" className="gauge-arc">
        <defs>
          <filter id="glow">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#b71c1c" floodOpacity="1" />
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#b71c1c" floodOpacity="0.7" />
          </filter>
        </defs>
        <path
          d="M 10 100 A 90 90 0 0 1 190 100"
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="20"
        />
        <path
          d="M 10 100 A 90 90 0 0 1 190 100"
          fill="none"
          stroke="#b71c1c"
          strokeDasharray={`${(value / 100) * 283}, 283`}
          strokeWidth="20"
          strokeLinecap="round"
        />
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="15"
          transform={`rotate(${angle} 100 100)`}
          stroke="#b71c1c"
          strokeWidth="4"
          filter="url(#glow)"
        />
        <circle cx="100" cy="100" r="5" fill="#b71c1c" />
      </svg>

      <div className="value-text">
        <motion.div className="val">{animatedVal}{unit}</motion.div>
        <div className="lbl">{label}</div>
      </div>

      <div className="range-labels">
        <span>0{unit}</span>
        <span>100{unit}</span>
      </div>
    </div>
  );
};

const RadialMultiArc = ({ data }) => {
  const radius = 80;
  const center = 100;
  const strokeWidth = 20;

  const total = data.length;
  const arcAngle = 360 / total;

  const polarToCartesian = (angleDeg) => {
    const angle = (angleDeg - 90) * (Math.PI / 180);
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  const describeArc = (startAngle, endAngle) => {
    const start = polarToCartesian(startAngle);
    const end = polarToCartesian(endAngle);
    const largeArc = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArc, 1, end.x, end.y
    ].join(" ");
  };

  return (
    <svg viewBox="0 0 200 200" className="radial-multichart">
      {data.map((item, i) => {
        const startAngle = i * arcAngle;
        const endAngle = startAngle + (arcAngle * item.value / 100);
        const color = ["#b71c1c", "#880e4f", "#ad1457", "#4a148c", "#1a237e", "#0d47a1"][i % 6];

        return (
          <path
            key={i}
            d={describeArc(startAngle, endAngle)}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

const CustomerBenefits = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData = selectedCategory === "All"
    ? chartDataArray
    : chartDataArray.filter(item => item.category === selectedCategory);

  return (
    <div className="customer-benefits-wrapper">
      <h2 className="heading">Customer Benefits Overview</h2>

      <div className="filter-dropdown">
        <label>Filter:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="multi-arc-container">
        <RadialMultiArc data={filteredData} />
      </div>

      <div className="graph-row">
        {filteredData.map((item, index) => (
          <SpeedometerGauge
            key={index}
            value={item.value}
            label={item.label}
            unit={item.unit}
          />
        ))}
      </div>

      <style>{`
        .customer-benefits-wrapper {
          background: #fff5f5;
          padding: 4rem 2rem;
          text-align: center;
          font-family: 'Segoe UI', sans-serif;
        }

        .heading {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #b71c1c;
          font-weight: 800;
          margin-bottom: 2rem;
        }

        .filter-dropdown {
          margin-bottom: 2rem;
        }

        .filter-dropdown select {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .graph-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }

        .speedometer {
          width: 100%;
          max-width: 280px;
          margin: 1.5rem auto;
          position: relative;
        }

        .gauge-arc {
          width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
        }

        .value-text {
          position: absolute;
          bottom: 10px;
          width: 100%;
          text-align: center;
        }

        .value-text .val {
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          font-weight: 700;
          color: #b71c1c;
        }

        .value-text .lbl {
          font-size: clamp(0.7rem, 1vw, 0.9rem);
          color: #333;
          margin-top: 4px;
        }

        .range-labels {
          position: absolute;
          bottom: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
          font-size: 0.75rem;
          color: #888;
        }

        .multi-arc-container {
          margin: 3rem auto 4rem;
          max-width: 320px;
        }

        .radial-multichart {
          width: 100%;
          height: auto;
        }

        @media (max-width: 768px) {
          .graph-row {
            flex-direction: column;
            align-items: center;
          }

          .multi-arc-container {
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomerBenefits;
