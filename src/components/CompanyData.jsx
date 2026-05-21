import React, { useEffect, useRef, useState } from "react";
import "../Styles/CompanyData.css";

const stats = [
  {
    id: 1,
    value: 70,
    suffix: "+",
    label: "Projects Deployed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3 2-2 3 3" />
      </svg>
    ),
    accent: "#EF3A3A",
    glow: "rgba(239,58,58,0.35)",
    delay: 0,
  },
  {
    id: 2,
    value: 100,
    suffix: "%",
    label: "Success Rate",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    accent: "#00D4FF",
    glow: "rgba(0,212,255,0.3)",
    delay: 150,
  },
  {
    id: 3,
    value: 17,
    suffix: "",
    label: "People Strong Team",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    accent: "#FF6B35",
    glow: "rgba(255,107,53,0.3)",
    delay: 300,
  },
  {
    id: 4,
    value: 1000,
    suffix: "+",
    label: "Machine Vision Lights Sold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    accent: "#A855F7",
    glow: "rgba(168,85,247,0.3)",
    delay: 450,
  },
];

function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [started, target, duration]);

  return count;
}

function StatCard({ stat, inView }) {
  const [visible, setVisible] = useState(false);
  const count = useCountUp(stat.value, 2000, visible);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setVisible(true), stat.delay);
      return () => clearTimeout(t);
    }
  }, [inView, stat.delay]);

  return (
    <div
      className="cd-card"
      style={{
        "--accent": stat.accent,
        "--glow": stat.glow,
        "--delay": `${stat.delay}ms`,
      }}
    >
      {/* Animated border gradient */}
      <div className="cd-card-border" />

      {/* Glow orb background */}
      <div className="cd-card-glow" />

      {/* Icon */}
      <div className="cd-icon-wrap" style={{ color: stat.accent }}>
        {stat.icon}
        <div className="cd-icon-ring" />
      </div>

      {/* Counter */}
      <div className="cd-number">
        <span className="cd-digit">{count}</span>
        <span className="cd-suffix" style={{ color: stat.accent }}>
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <div className="cd-label">{stat.label}</div>

      {/* Bottom bar */}
      <div className="cd-bar" style={{ background: stat.accent }} />
    </div>
  );
}

export default function CompanyData() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cd-section" ref={sectionRef}>
      {/* Ambient background particles */}
      <div className="cd-bg-grid" />
      <div className="cd-scanline" />

      {/* Floating orbs */}
      <div className="cd-orb cd-orb-1" />
      <div className="cd-orb cd-orb-2" />
      <div className="cd-orb cd-orb-3" />

      <div className="cd-inner">
        {/* Header */}
        <div className={`cd-header ${inView ? "cd-header--visible" : ""}`}>
          <div className="cd-eyebrow">
            <span className="cd-eyebrow-line" />
            <span className="cd-eyebrow-text">PERFORMANCE METRICS</span>
            <span className="cd-eyebrow-line" />
          </div>
          <h2 className="cd-title">
            Our <span className="cd-title-accent">Numbers</span>
          </h2>
          <p className="cd-subtitle">
            Precision, performance, and proven results — the data behind our excellence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="cd-grid">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}