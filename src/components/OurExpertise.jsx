import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
    translationKey: "OurExpertise.item1.title",
    icon: <Code2 size={56} color="#31CDF0" />,
  },
  {
    id: "industry-experience",
    translationKey: "OurExpertise.item2.title",
    icon: <Briefcase size={56} color="#F95E00" />,
  },
  {
    id: "research-development",
    translationKey: "OurExpertise.item3.title",
    icon: <Search size={56} color="#FCCA00" />,
  },
  {
    id: "collaborations-partnership",
    translationKey: "OurExpertise.item4.title",
    icon: <Handshake size={56} color="#0D6EFF" />,
  },
  {
    id: "innovative-solutions",
    translationKey: "OurExpertise.item5.title",
    icon: <Lightbulb size={56} color="#96E15C" />,
  },
  {
    id: "ongoing-support-maintenance",
    translationKey: "OurExpertise.item6.title",
    icon: <Wrench size={56} color="#EC5A83" />,
  },
];

const OurExpertise = () => {
  const { t } = useTranslation();
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setSubtitleVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="expertise-section" aria-label={t("OurExpertise.ariaLabel", "Our Expertises")}>
      <div className={`subtitle ${subtitleVisible ? "visible" : ""}`}>
        {t("OurExpertise.subtitle", "Where Skill Meets Innovation")}
      </div>
      <h2 className="heading">{t("OurExpertise.heading", "OUR EXPERTISES")}</h2>

      <div className="expertise-scroll-wrapper">
        <div className="expertise-grid">
          {expertiseItems.map(({ id, translationKey, icon }) => (
            <div className="expertise-card" key={id}>
              <div className="icon-wrapper-expertise">{icon}</div>
              <div className="expertise-title">{t(translationKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;