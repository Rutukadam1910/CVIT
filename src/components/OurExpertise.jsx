import React, { useEffect, useState } from "react";
import {
  Code2,
  Briefcase,
  Search,
  Handshake,
  Lightbulb,
  Wrench
} from "lucide-react";
import "../Styles/OurExpertise.css";

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

const OurExpertise = () => {
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setSubtitleVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
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
  );
};

export default OurExpertise;