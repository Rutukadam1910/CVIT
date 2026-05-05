// // src/components/Careers.js
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { ClipboardList, CheckSquare, Cpu } from "lucide-react";
// import Navbar from "./Navbar";
// import "../Styles/Careers.css";

// const Careers = () => {
//   const [expandedId, setExpandedId] = useState(null);
//   const navigate = useNavigate();

//   const jobs = [
//     {
//       id: 1,
//       title: "Software Engineer",
//       subtitle: "Computer Vision Intern",
//       time: "Internship • Full-time(Onsite)",
//       overview: "Join our R&D team to design, develop, and maintain cutting-edge computer vision applications. Work on real industrial projects using OpenCV, YOLO, TensorFlow, and more.",
//       responsibilities: [
//         "Design, develop, and maintain computer vision applications",
//         "Troubleshoot and resolve software defects",
//         "Write clean, efficient, and well-documented code",
//         "Use OpenCV for image processing tasks",
//         "Utilize NumPy for numerical computations",
//         "Develop and optimize computer vision algorithms",
//         "Apply machine learning techniques to enhance model performance",
//         "Stay updated with the latest advancements in computer vision",
//         "Collaborate closely with team members to ensure successful project delivery"
//       ],
//       qualifications: [
//         "Currently pursuing or completed degree in Computer Science, Electrical Engineering, or related field",
//         "Experience with version control systems (Git)",
//         "Familiarity with Python libraries and frameworks related to machine learning (TensorFlow, Keras, PyTorch)"
//       ],
//       technicalSkills: [
//         "Python", "C++", "Java", "OpenCV", "scikit-image", "YOLO",
//         "TensorFlow", "PyTorch", "Keras", "NumPy", "Pandas",
//         "CNNs", "Object Detection", "Image Segmentation", "Git", "Docker", "Jupyter"
//       ],
//     },
    
//     {
//       id: 2,
//       title: "Service Engineer",
//       subtitle: "On-site Project Support Technician",
//       time: "Full-time • 6 Days/Week • 9:30 to 6:30",
//       overview: "Join our dynamic team delivering technical support, installation, and maintenance of industrial vision systems. Ensure optimal performance and client satisfaction through hands-on expertise.",
//       responsibilities: [
//         "On-Site Technical Support",
//         "Vision Inspection System Installation",
//         "Data Collection and Analysis",
//         "Electrical Wiring and Panel Installation",
//         "Documentation and Reporting",
//         "Customer Interaction and Support"
//       ],
//       qualifications: [
//         "Bachelor's degree or Diploma in Electrical Engineering or related technical discipline",
//         "Basic Computer Knowledge",
//         "Experience with Vision Inspection Systems",
//         "Electrical Wiring",
//         "System Troubleshooting",
//         "PLC Panel assembly and cabling"
//       ],
//     }
//   ];

//   return (
//     <div className="cvit-corporate-careers">
//       <Navbar />

//       {/* HERO SECTION */}
//       <section className="hero-parallax">
//         <div className="parallax-bg"></div>
//         <div className="hero-overlay"></div>
//         <div className="hero-container">
//           <div className="hero-content-pro">
//             <p className="eyebrow">We're Hiring</p>
//             <h1 className="hero-headline">
//               Join CVIT<br />
//               <span className="gradient-headline">Build the Future of Vision AI</span>
//             </h1>
//             <p className="hero-subhead">Empowering Intelligence. Delivering Solutions.</p>
//             <div className="hero-cta">
//               <a href="#positions" className="btn-primary-pro">Open Roles</a>
//             </div>
//             <div className="marquee-pro">
//               <div className="marquee-track">
//                 <span>NOW HIRING → Computer Vision Intern • Service Engineer</span>
//                 <span>NOW HIRING → Computer Vision Intern • Service Engineer</span>
//                 <span>NOW HIRING → Computer Vision Intern • Service Engineer</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* OPEN POSITIONS */}
//       <section className="positions-section" id="positions">
//         <div className="container-pro">
//           <div className="section-header">
//             <h2 className="section-title-pro">Open Positions</h2>
//             <p className="section-desc">Be part of something bigger. Build industrial AI that matters.</p>
//           </div>

//           <div className="jobs-grid-pro">
//             {jobs.map((job) => (
//               <motion.article
//                 key={job.id}
//                 className="job-card-compact"
//                 layout
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7 }}
//               >
//                 <motion.div className="compact-card-inner" layout>
//                   <div
//                     className="compact-header"
//                     onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
//                   >
//                     <div className="title-group-compact">
//                       <h3>{job.title}</h3>
//                       <p className="subtitle-compact">{job.subtitle}</p>
//                     </div>
//                     <div className="tags-compact">
//                       <span className="tag-compact">{job.time}</span>
//                     </div>
//                     <button className="toggle-btn">
//                       {expandedId === job.id ? "Close" : "View Details"}
//                     </button>
//                   </div>

//                   <AnimatePresence initial={false}>
//                     {expandedId === job.id && (
//                       <motion.div
//                         className="expanded-wrapper"
//                         initial={{ height: 0 }}
//                         animate={{ height: "auto" }}
//                         exit={{ height: 0 }}
//                         transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
//                       >
//                         <div className="expanded-content">
//                           <p className="overview-expanded">{job.overview}</p>

//                           <div className="specs-grid">
//                             {/* Responsibilities */}
//                             <div className="spec-col">
//                               <h4>
//                                 <ClipboardList size={24} />
//                                 Responsibilities
//                               </h4>
//                               <ol className="numbered-icon-list">
//                                 {job.responsibilities.map((item, i) => (
//                                   <li key={i}>
                                    
//                                     <span>{item}</span>
//                                   </li>
//                                 ))}
//                               </ol>
//                             </div>

//                             {/* Qualifications */}
//                             <div className="spec-col">
//                               <h4>
//                                 <CheckSquare size={24} />
//                                 Requirements & Skills
//                               </h4>
//                               <ol className="numbered-icon-list">
//                                 {job.qualifications.map((item, i) => (
//                                   <li key={i}>
                                    
//                                     <span>{item}</span>
//                                   </li>
//                                 ))}
//                               </ol>

//                               {/* Technical Skills - Numbered Pills */}
//                               {job.technicalSkills && (
//                                 <>
//                                   <h4 className="tech-heading-expanded">
//                                     <Cpu size={24} />
//                                     Technical Skills
//                                   </h4>
//                                   <div className="tech-pills-expanded">
//                                     {job.technicalSkills.map((skill, i) => (
//                                       <span key={i} className="tech-pill-expanded"> 
//                                         {skill}
//                                       </span>
//                                     ))}
//                                   </div>
//                                 </>
//                               )}
//                             </div>
//                           </div>

//                           {/* Apply Section */}
//                           <div className="apply-section">
//                             <p className="apply-text">
//                               Send your resume to <br />
//                               <a href="mailto:nri@cvit.in">nri@cvit.in</a> and{" "}
//                               <a href="mailto:kunal.wankhede@cvit.in">kunal.wankhede@cvit.in</a>
//                             </p>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               </motion.article>
//             ))}
//           </div>

//           {/* Final CTA */}
//           <div className="final-cta-pro">
//             <h3>Not seeing your role?</h3>
//             <p>
//               We're always looking for passionate talent.<br />
//               Send your resume to →
//               <a href="mailto:nri@cvit.in" className="cta-bold"> nri@cvit.in</a> or
//               <a href="mailto:kunal.wankhede@cvit.in" className="cta-bold"> kunal.wankhede@cvit.in</a>
//             </p>
//           </div>

//           {/* Back to Home */}
//           <div className="back-home-container">
//             <button onClick={() => navigate("/")} className="back-home-btn">
//               Back to Home
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Careers;



// src/components/Careers.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ClipboardList, CheckSquare, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import "../Styles/Careers.css";
import SideBar from "./Sidebar";
import Footer from "./Footer";

const Careers = () => {
  const { t, i18n } = useTranslation();
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  // Force re-render on language change
  useEffect(() => {
    setExpandedId(null);
  }, [i18n.language]);

  const jobs = [
    {
      id: 1,
      title: t("Careers.Jobs.SoftwareEngineer.Title"),
      subtitle: t("Careers.Jobs.SoftwareEngineer.Subtitle"),
      time: t("Careers.Jobs.SoftwareEngineer.Type"),
      overview: t("Careers.Jobs.SoftwareEngineer.Overview"),
      responsibilities: t("Careers.Jobs.SoftwareEngineer.Responsibilities", { returnObjects: true }) || [],
      qualifications: t("Careers.Jobs.SoftwareEngineer.Qualifications", { returnObjects: true }) || [],
      technicalSkills: t("Careers.Jobs.SoftwareEngineer.TechnicalSkills", { returnObjects: true }) || [],
    },
    {
      id: 2,
      title: t("Careers.Jobs.ServiceEngineer.Title"),
      subtitle: t("Careers.Jobs.ServiceEngineer.Subtitle"),
      time: t("Careers.Jobs.ServiceEngineer.Type"),
      overview: t("Careers.Jobs.ServiceEngineer.Overview"),
      responsibilities: t("Careers.Jobs.ServiceEngineer.Responsibilities", { returnObjects: true }) || [],
      qualifications: t("Careers.Jobs.ServiceEngineer.Qualifications", { returnObjects: true }) || [],
    },
  ];

  return (
    <>
    <div className="cvit-corporate-careers">
      <Navbar />
      <SideBar/>
      {/* HERO SECTION — FIXED: No visible tags */}
      <section className="hero-parallax">
        <div className="parallax-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content-pro">
            <p className="eyebrow">{t("Careers.Hero.Eyebrow")}</p>

            {/* This renders HTML perfectly — <br /> and <span> work flawlessly */}
            <h1
              className="hero-headline"
              dangerouslySetInnerHTML={{ __html: t("Careers.Hero.Headline") }}
            />

            <p className="hero-subhead">{t("Careers.Hero.Subhead")}</p>
            <div className="hero-cta">
              <a href="#positions" className="btn-primary-pro">
                {t("Careers.Hero.CTA")}
              </a>
            </div>
            <div className="marquee-pro">
              <div className="marquee-track">
                <span>{t("Careers.Hero.Marquee")}</span>
                <span>{t("Careers.Hero.Marquee")}</span>
                <span>{t("Careers.Hero.Marquee")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REST OF THE PAGE — unchanged */}
      <section className="positions-section" id="positions">
        <div className="container-pro">
          <div className="section-header">
            <h2 className="section-title-pro">{t("Careers.OpenPositions.Title")}</h2>
            <p className="section-desc">{t("Careers.OpenPositions.Description")}</p>
          </div>

          <div className="jobs-grid-pro">
            {jobs.map((job) => (
              <motion.article
                key={job.id}
                className="job-card-compact"
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <motion.div className="compact-card-inner" layout>
                  <div
                    className="compact-header"
                    onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                  >
                    <div className="title-group-compact">
                      <h3>{job.title}</h3>
                      <p className="subtitle-compact">{job.subtitle}</p>
                    </div>
                    <div className="tags-compact">
                      <span className="tag-compact">{job.time}</span>
                    </div>
                    <button className="toggle-btn">
                      {expandedId === job.id
                        ? t("Careers.OpenPositions.CloseDetails")
                        : t("Careers.OpenPositions.ViewDetails")}
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {expandedId === job.id && (
                      <motion.div
                        className="expanded-wrapper"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="expanded-content">
                          <p className="overview-expanded">{job.overview}</p>

                          <div className="specs-grid">
                            {/* Responsibilities */}
                            <div className="spec-col">
                              <h4>
                                <ClipboardList size={24} />
                                {t("Careers.OpenPositions.Responsibilities")}
                              </h4>
                              <ol className="numbered-icon-list">
                                {job.responsibilities.map((item, i) => (
                                  <li key={i}><span>{item}</span></li>
                                ))}
                              </ol>
                            </div>

                            {/* Qualifications */}
                            <div className="spec-col">
                              <h4>
                                <CheckSquare size={24} />
                                {t("Careers.OpenPositions.Requirements") || "Requirements & Skills"}
                              </h4>
                              <ol className="numbered-icon-list">
                                {job.qualifications.map((item, i) => (
                                  <li key={i}><span>{item}</span></li>
                                ))}
                              </ol>

                              {/* Technical Skills */}
                              {job.technicalSkills?.length > 0 && (
                                <>
                                  <h4 className="tech-heading-expanded">
                                    <Cpu size={24} />
                                    {t("Careers.OpenPositions.TechnicalSkills")}
                                  </h4>
                                  <div className="tech-pills-expanded">
                                    {job.technicalSkills.map((skill, i) => (
                                      <span key={i} className="tech-pill-expanded">
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>

                          {/* Apply Section */}
                          <div className="apply-section">
                          <p
                                  className="apply-text"
                                 dangerouslySetInnerHTML={{ __html: t("Careers.OpenPositions.ApplyText") }}
                          />


                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.article>
            ))}
          </div>

          {/* Final CTA */}
          <div className="final-cta-pro">
            <h3>{t("Careers.OpenPositions.NoRoleTitle")}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: t("Careers.OpenPositions.NoRoleText")
                  .replace("nri@cvit.in", "<a href='mailto:nri@cvit.in' class='cta-bold'>nri@cvit.in</a>")
                  .replace("kunal.wankhede@cvit.in", "<a href='mailto:kunal.wankhede@cvit.in' class='cta-bold'>kunal.wankhede@cvit.in</a>"),
              }}
            />
          </div>

          {/* Back to Home */}
          <div className="back-home-container">
            <button onClick={() => navigate("/")} className="back-home-btn">
              {t("Careers.OpenPositions.BackToHome")}
            </button>
          </div>
        </div>
      </section>

      <Footer/>
    </div>

    </>
  );
};

export default Careers;