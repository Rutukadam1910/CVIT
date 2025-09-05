import React, { useEffect, useState } from "react";
import {
  Code2,
  Briefcase,
  Search,
  Handshake,
  Lightbulb,
  Wrench
} from "lucide-react";

const expertiseItems = [
  {
    id: "technical-proficiency",
    title: "Technical Proficiency",
    icon: <Code2 size={56} color="#31CDF0" />,
  },
  {
    id: "industry-experience",
    title: "Industry Experience",
    icon: <Briefcase size={56} color="#F95E00" />,
  },
  {
    id: "research-development",
    title: "Research and Development",
    icon: <Search size={56} color="#FCCA00" />,
  },
  {
    id: "collaborations-partnership",
    title: "Collaborations and Partnership",
    icon: <Handshake size={56} color="#0D6EFF" />,
  },
  {
    id: "innovative-solutions",
    title: "Innovative Solutions",
    icon: <Lightbulb size={56} color="#96E15C" />,
  },
  {
    id: "ongoing-support-maintenance",
    title: "Ongoing Support & Maintenance",
    icon: <Wrench size={56} color="#EC5A83" />,
  },
];

const OurExpertises = () => {
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setSubtitleVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <style>{`
        * {
          font-family: 'Inter', sans-serif !important;
        }
        .expertise-section {
          background: #0a0a0a;
          color: white;
          text-align: center;
          padding: 4rem 1.34rem;
          overflow: hidden;
        }
        .subtitle {
          background: rgba(255, 255, 255, 0.06);
          color: #cbd5e1;
          font-size: 1rem;
          padding: 0.35rem 0.9rem;
          border-radius: 13px;
          display: inline-block;
          margin-bottom: 0.8rem;
          font-weight: 600;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.6s ease;
        }
        .subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .heading {
          font-weight: 600;
          font-size: 2.6rem;
          margin-bottom: 2rem;
        }
        .expertise-scroll-wrapper {
          overflow-x: auto;
          white-space: nowrap;
          padding-bottom: 1rem;
           padding-top: 1rem;
          scrollbar-width: none;
        }
        .expertise-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }
        .expertise-grid {
          display: inline-flex;
          gap: 21px;
        }
        .expertise-card {
          background: rgba(255, 255, 255, 0.04);
          padding: 1.6rem 1.3rem;
          border-radius: 13px;
          backdrop-filter: blur(5px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 225px;
          height: 180px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.07);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          position: relative;
          cursor: default;
          transform: perspective(1000px);
        }
        .expertise-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: perspective(1000px) translateY(-8px) scale(1.05);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.15);
          z-index: 10;
        }
        .icon-wrapper-expertise {
          transition: transform 0.3s ease;
          margin-top: 1.2rem;
        }
        .expertise-card:hover .icon-wrapper-expertise {
          transform: scale(1.15);
        }
        .expertise-title {
          font-size: 0.85rem;
          color: #f0f4f8;
          margin-top: 1rem;
          font-weight: 600;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .heading {
            font-size: 2rem;
          }
          .expertise-title {
            font-size: 0.85rem;
          }
          .expertise-card {
            width: 180px;
            height: 200px;
            padding: 1rem;
          }
          .expertise-card:hover {
            transform: perspective(1000px) translateY(-6px) scale(1.03);
            box-shadow: 0 6px 15px rgba(255, 255, 255, 0.15), 0 0 20px rgba(255, 255, 255, 0.1);
          }
          .icon-wrapper-expertise svg {
            width: 42px;
            height: 42px;
          }
        }
      `}</style>

      <section className="expertise-section" aria-label="Our Expertises">
        <div className={`subtitle ${subtitleVisible ? "visible" : ""}`}>
          Where Skill Meets Innovation
        </div>
        <h2 className="heading">OUR EXPERTISES</h2>

        <div className="expertise-scroll-wrapper">
          <div className="expertise-grid">
            {expertiseItems.map(({ id, title, icon }) => (
              <div className="expertise-card" key={id}>
                <div className="icon-wrapper-expertise">{icon}</div>
                <div className="expertise-title">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurExpertises;