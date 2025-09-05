

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import VanillaTilt from "vanilla-tilt";

const steps = [
  {
    step: 1,
    title: "Requirement Understanding",
    description: (
      <ul className="custom-bullets">
        <li>Define scope of project and conduct an end-to-end study of the current process at the customer site.</li>
        <li>Analyze key project parameters, including environmental and operational constraints.</li>
        <li>Discuss automation opportunities to replace or enhance manual processes using machine vision systems.</li>
        <li>Evaluate the feasibility and limitations of deploying a machine vision system on the shop floor.</li>
      </ul>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.35 w-3.35 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Hardware Design and Setup",
    description: (
          <ul className="custom-bullets nested">
            <li>Design and fabricate custom hardware components Camera mounting fixtures</li>
            <li>Protective enclosures for cameras and computers</li>
            <li>Machine vision-specific lighting setups</li>
          </ul> 
    
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.35 w-3.35 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Software and Network Design",
    description: (
      <ul className="custom-bullets">
        <li>Finalize vision system architecture and process flow.</li>
        <li>Design a user-friendly interface for operators and administrators.</li>
      </ul>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.35 w-3.35 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Business Requirement Document (BRD) & Design Approval Process (DAP)",
    description: ( 
          <ul className="custom-bullets ">
            <li>Prepare and sign off on BRD Covers end-to-end project requirements and deliverables.</li>
            <li>Design Document Captures the agreed technical and functional specifications.</li>
          </ul> 
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.35 w-3.35 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    step: 5,
    title: "Procurement of Material",
    description: (
      <ul className="custom-bullets">
        <li>Procure all hardware components as per approved specifications and quantities.</li>
      </ul>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.35 w-3.35 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    step: 6,
    title: "Software Prototyping",
    description: (
      <ul className="custom-bullets">
        <li>Develop and customize AI algorithms.</li>
        <li>Perform unit testing on individual software modules.</li>
        <li>Integrate modules with the AI model and conduct internal validation.</li>
      </ul>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.35 w-3.35 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
  {
    step: 7,
    title: "On-Site Installation",
    description: (
      <ul className="custom-bullets">
        <li>Install all physical hardware, including server enclosures and camera systems, at the customer site.</li>
      </ul>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.35 w-3.35 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    step: 8,
    title: "Data Collection & AI Model Generation",
    description: (
      <ul className="custom-bullets">
        <li>Collect process-specific image/video data.</li>
        <li>Perform data annotation and preprocessing.</li>
        <li>Train AI models and conduct iterative model testing to optimize performance.</li>
      </ul>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.35 w-3.35 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    step: 9,
    title: "System Integration",
    description: (   
          <ul className="custom-bullets">
            <li>Integrate the vision system with User control systems (e.g., PLCs, HMIs)</li>
            <li>Plant database or MES/ERP systems</li>
          </ul>   
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.35 w-3.35 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    step: 10,
    title: "User Acceptance Testing (UAT)",
    description: (
      <ul className="custom-bullets">
        <li>Conduct full-system UAT with customer stakeholders.</li>
        <li>Capture and resolve any issues during UAT.</li>
        <li>Finalize the solution upon successful user approval.</li>
      </ul>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.35 w-3.35 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

function Implementation() {
  const timelineLineRef = useRef(null);
  const timelineEndRef = useRef(null);
  const titleUnderlineRef = useRef(null);
  const timelineItemsRefs = useRef([]);
  const animationPlayedRef = useRef(false);
  const gsapTimelineRef = useRef(null);
  const animationTriggerRef = useRef(null);

  useEffect(() => {
    const chars = document.querySelectorAll(".heading-animated .char-inner");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(
      chars,
      {
        duration: 0.8,
        y: "0%",
        opacity: 1,
        stagger: 0.05,
      }
    );

    tl.to(
      chars,
      {
        duration: 1.5,
        scaleY: 1.15,
        transformOrigin: "center bottom",
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: {
          each: 0.1,
          from: "center",
        },
      },
      "+=1.5"
    );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      scale: 1.03,
      perspective: 670,
      transition: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
    });
  }, []);

  const animateParticles = (particlesContainer) => {
    const particles = particlesContainer.querySelectorAll(".particle");
    particles.forEach((particle) => {
      const x = (Math.random() - 0.5) * 53.6;
      const y = (Math.random() - 0.5) * 53.6;
      const size = 1.34 + Math.random() * 2.68;
      const delay = Math.random() * 0.335;
      const duration = 0.67 + Math.random() * 1.005;
      const color = Math.random() > 0.5 ? "#ef3a3a" : "#ff9e80";

      gsap.set(particle, {
        x: 0,
        y: 0,
        width: size,
        height: size,
        opacity: 0,
        backgroundColor: color,
      });

      gsap.to(particle, {
        x: x,
        y: y,
        opacity: 0.8,
        duration: 0.268,
        delay: delay,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(particle, {
            x: x * 2,
            y: y * 2,
            opacity: 0,
            duration: duration,
            ease: "power1.in",
          });
        },
      });
    });
  };

  const initAnimation = () => {
    const timelineItems = timelineItemsRefs.current;
    const timelineLine = timelineLineRef.current;
    const timelineEnd = timelineEndRef.current;
    const titleUnderline = titleUnderlineRef.current;

    timelineItems.forEach((item) => {
      const particlesContainer = item.querySelector(".particles");
      if (particlesContainer.children.length === 0) {
        for (let i = 0; i < 15; i++) {
          const particle = document.createElement("div");
          particle.classList.add("particle");
          particlesContainer.appendChild(particle);
        }
      }
    });

    gsap.set(timelineItems, { opacity: 0, y: 13.4 });
    gsap.set(".text-reveal span, .custom-bullets li", { y: "100%", opacity: 0 });
    gsap.set(timelineLine, { height: 0 });
    gsap.set(timelineEnd, { opacity: 0 });
    if (titleUnderline) gsap.set(titleUnderline, { scaleX: 0 });
    timelineItems.forEach((item) => item.classList.remove("visible"));

    const container = document.querySelector(".timeline-container");
    const lastStepItem = container.querySelector('.timeline-item:last-child');
    const lastDot = lastStepItem?.querySelector(".timeline-dot");

    const containerRect = container?.getBoundingClientRect();
    const dotRect = lastDot?.getBoundingClientRect();
    const lineHeightToLastDot = dotRect && containerRect
      ? dotRect.top + dotRect.height / 2 - containerRect.top
      : 0;

    const totalDuration = 15;
    const mainTimeline = gsap.timeline();

    mainTimeline.to(titleUnderline, {
      scaleX: 1,
      duration: 0.67,
      ease: "power2.out",
    });

    mainTimeline.to(
      timelineLine,
      {
        height: lineHeightToLastDot,
        duration: totalDuration,
        ease: "linear",
      },
      0
    );

    const stepPositions = timelineItems.map(item => {
      const dot = item.querySelector(".timeline-dot");
      if (!dot) return 0;
      const dotRect = dot.getBoundingClientRect();
      return dotRect.top + dotRect.height / 2 - containerRect.top;
    });

    timelineItems.forEach((item, index) => {
      const dot = item.querySelector(".timeline-dot");
      const glow = item.querySelector(".glow");
      const textElements = item.querySelectorAll(".text-reveal span");
      const bulletElements = item.querySelectorAll(".custom-bullets li");
      const particlesContainer = item.querySelector(".particles");

      const posRatio = stepPositions[index] / lineHeightToLastDot;
      const startTime = posRatio * totalDuration;

      mainTimeline.to(
        dot,
        {
          scale: 1.5,
          boxShadow:
            "0 0 0 5.36px rgba(239, 58, 58, 0.3), 0 0 16.75px rgba(239, 58, 58, 0.6)",
          duration: 0.402,
          ease: "elastic.out(1, 0.5)",
          onStart: () => {
            gsap.to(glow, {
              opacity: 0.8,
              duration: 0.402,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(glow, {
                  opacity: 0,
                  duration: 1.005,
                  ease: "power2.in",
                });
              },
            });
            animateParticles(particlesContainer);
          },
        },
        startTime
      );

      mainTimeline.to(
        dot,
        {
          scale: 1,
          boxShadow:
            "0 0 0 2.68px rgba(239, 58, 58, 0.2), 0 0 10.05px rgba(239, 58, 58, 0.4)",
          duration: 0.402,
          ease: "power2.out",
          onComplete: () => {
            item.classList.add("visible");
          },
        },
        startTime + 0.402
      );

      mainTimeline.to(
        item,
        {
          opacity: 1,
          y: 0,
          duration: 0.67,
          ease: "back.out(1.7)",
        },
        startTime + 0.5025
      );

      mainTimeline.to(
        textElements,
        {
          y: 0,
          opacity: 1,
          duration: 0.536,
          stagger: 0.0804,
          ease: "power3.out",
        },
        startTime + 0.938
      );

      mainTimeline.to(
        bulletElements,
        {
          y: 0,
          opacity: 1,
          duration: 0.536,
          stagger: 0.0804,
          ease: "power3.out",
        },
        startTime + 0.938
      );
    });

    mainTimeline.to(
      timelineEnd,
      {
        opacity: 1,
        duration: 0.67,
        ease: "power2.out",
      },
      totalDuration
    );

    return mainTimeline;
  };

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationPlayedRef.current) {
          animationPlayedRef.current = true;
          if (gsapTimelineRef.current) {
            gsapTimelineRef.current.kill();
          }
          gsapTimelineRef.current = initAnimation();
          gsapTimelineRef.current.play();
        }
      });
    };

    const observerOptions = {
      rootMargin: "-60.3px 0px 0px 0px",
      threshold: 0,
    };

    const triggerElement = animationTriggerRef.current;
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (triggerElement) {
      observer.observe(triggerElement);
    }

    return () => {
      observer.disconnect();
      if (gsapTimelineRef.current) {
        gsapTimelineRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      const timelineItems = timelineItemsRefs.current;

      timelineItems.forEach((item, index) => {
        if (item.classList.contains("visible")) {
          const depth = 0.03 + ((index % 3) * 0.0067);
          const moveX = mouseX * depth * 20.1;
          const moveY = mouseY * depth * 20.1;

          gsap.to(item.querySelector(".content-inner"), {
            x: moveX,
            y: moveY,
            duration: 1,
            ease: "power1.out",
          });
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        :root {
            --primary: #ef3a3a;
            --primary-light: #ff6b6b;
            --primary-dark: #c62828;
            --secondary: #ff9e80;
            --accent: #ffccbc;
            --bg-gradient-1: #fff5f5;
            --bg-gradient-2: #ffe5e5;
        }
        * {
          font-family: 'Inter', sans-serif !important;
        }

        @keyframes pulse-bg {
            0% { opacity: 0.3; }
            50% { opacity: 0.7; }
            100% { opacity: 0.3; }
        }
        
        .implementation-root {
            background-color: black;
            min-height: 100vh;
            max-width: 100%;
            overflow-x: hidden;
            cursor: default;
            position: relative;
            color: white;
        }
        .timeline-container {
            position: relative;
        }
        
        .timeline-line {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 15.41px;
            background: linear-gradient(to bottom, var(--primary-light), var(--primary), var(--primary-dark));
            transform: translateX(-50%);
            opacity: 0.7;
            box-shadow: 0 0 10.05px rgba(239, 58, 58, 0.3);
            height: 0;
            transition: height 0.335s linear;
            border-radius: 5.36px;
        }
        
        .timeline-item {
            position: relative;
            margin-bottom: 53.6px;
            opacity: 0;
            transform: translateY(13.4px);
        }
        
        .timeline-item:last-child {
            margin-bottom: 13.4px;
        }
        
        .timeline-dot {
            position: absolute;
            top: 13.4px;
            left: 50%;
            transform: translateX(-50%);
            width: 23.45px;
            height: 23.45px;
            border-radius: 50%;
            background: var(--primary);
            border: 2.68px solid #fff;
            box-shadow: 0 0 0 2.68px rgba(239, 58, 58, 0.2), 0 0 10.05px rgba(239, 58, 58, 0.4);
            z-index: 10;
            transition: all 0.335s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .timeline-dot::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.8);
            opacity: 0;
            z-index: 2;
        }
        
        .timeline-item.visible .timeline-dot::before {
            animation: pulse 1.675s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        
        @keyframes pulse {
            0% {
                width: 0;
                height: 0;
                opacity: 0.8;
            }
            100% {
                width: 33.5px;
                height: 33.5px;
                opacity: 0;
            }
        }
        
        .text-center {
            margin-top: 3.35rem;
        }
        
        .timeline-content {
            position: relative;
            width: calc(90% - 13px);
            padding: 30px;
            border-radius: 20px;
            background: white;
            box-shadow: 0 6.7px 20.1px rgba(239, 58, 58, 0.1), 0 3.35px 10.05px rgba(0, 0, 0, 0.05);
            transition: all 0.335s cubic-bezier(0.34, 1.56, 0.64, 1);
            overflow: hidden;
            transform-style: preserve-3d;
            perspective: 670px;
            backdrop-filter: blur(3.35px);
            border: 0.67px solid rgba(255, 255, 255, 0.8);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        
        .timeline-content::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 10.72px;
            padding: 1.34px;
            background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent), var(--secondary), var(--primary));
            background-size: 300% 100%;
            -webkit-mask: 
                linear-gradient(#fff 0 0) content-box, 
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.335s ease;
        }
        
        .timeline-item.visible:hover .timeline-content::before {
            opacity: 1;
            animation: border-flow 2.68s linear infinite;
        }
        
        @keyframes border-flow {
            0% { background-position: 0% 0; }
            100% { background-position: 300% 0; }
        }
        
        .timeline-item:nth-child(odd) .timeline-content {
            margin-left: 221.1px;
            text-align: left;
            padding-left: 26.8px;
            padding-right: 10.72px;
        }
        
        .timeline-item:nth-child(odd) .timeline-content .arrow {
            left: -6.7px;
            right: auto;
            box-shadow: -3.35px 3.35px 6.7px rgba(0, 0, 0, 0.05);
            border-left: 0.67px solid rgba(255, 255, 255, 0.8);
            border-bottom: 0.67px solid rgba(255, 255, 255, 0.8);
            background: white;
            transform: rotate(45deg);
            z-index: 1;
        }
        
        .timeline-item:nth-child(even) .timeline-content {
            margin-left: -201.0px;
            text-align: left;
            direction: ltr;
            padding-right: 30px;
            padding-left: 37px;
        }
        
        .timeline-item:nth-child(even) .timeline-content .step-badge {
            justify-content: flex-end;
            margin-left: 490px;
            text-align: left;
            direction: ltr;
        }
        
        .timeline-item:nth-child(even) .timeline-content .mt-4.flex.items-center {
            justify-content: flex-start;
        }
        
        .timeline-item:nth-child(even) .timeline-content .icon-container {
            order: 2;
            margin-left: 5.36px;
            margin-right: 0;
        }
        
        .timeline-item:nth-child(even) .timeline-content span.ml-2 {
            order: 1;
            margin-left: 0;
            margin-right: 5.36px;
            text-align: right;
        }
        
        .timeline-item:nth-child(even) .timeline-content .arrow {
            left: auto;
            right: -6.7px;
            box-shadow: 3.35px -3.35px 6.7px rgba(0, 0, 0, 0.05);
            border-right: 0.67px solid rgba(255, 255, 255, 0.8);
            border-top: 0.67px solid rgba(255, 255, 255, 0.8);
            background: white;
            transform: rotate(45deg);
            z-index: 1;
        }
        
        .glow {
            position: absolute;
            width: 53.6px;
            height: 53.6px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(239, 58, 58, 0.6) 0%, rgba(255, 158, 128, 0.3) 50%, rgba(239, 58, 58, 0) 70%);
            filter: blur(10.05px);
            opacity: 0;
            z-index: 1;
            pointer-events: none;
            top: 13.4px;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        
        .particles {
            position: absolute;
            width: 67px;
            height: 67px;
            top: 13.4px;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            pointer-events: none;
        }
        
        .particle {
            position: absolute;
            width: 2.68px;
            height: 2.68px;
            border-radius: 50%;
            background: var(--primary-light);
            opacity: 0;
            box-shadow: 0 0 6.7px rgba(239, 58, 58, 0.8);
        }
        
        .progress-indicator {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2.01px;
            width: 0;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            transition: width 0.536s cubic-bezier(0.34, 1.56, 0.64, 1);
            border-radius: 0 0 0 10.72px;
        }
        
        .timeline-item.visible:hover .progress-indicator {
            width: 100%;
            border-radius: 0 0 10.72px 10.72px;
        }
        
        .content-inner {
            transform: translateZ(13.4px);
            transition: transform 0.335s ease;
            display: flex;
            flex-direction: column;
            gap: 0.67rem;
        }
        
        .timeline-item.visible:hover .content-inner {
            transform: translateZ(20.1px);
        }
        
        .text-reveal {
            overflow: hidden;
            margin: 0;
        }
        
        .text-reveal span {
            display: block;
            transform: translateY(100%);
            opacity: 0;
        }
        
        .floating-shapes {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
            opacity: 0.5;
        }
        
        .shape {
            position: absolute;
            background: linear-gradient(135deg, rgba(239, 58, 58, 0.05) 0%, rgba(255, 158, 128, 0.05) 100%);
            border-radius: 50%;
            animation: float 10.05s infinite linear;
        }
        
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            100% {
                transform: translateY(-670px) rotate(720deg);
            }
        }
        
        .step-badge {
            position: relative;
            overflow: hidden;
            z-index: 1;
            color: black;
            background: linear-gradient(135deg, rgba(239, 58, 58, 0.1) 0%, rgba(255, 158, 128, 0.1) 100%);
            border: 0.67px solid rgba(239, 58, 58, 0.2);
            transition: all 0.335s ease;
            font-size: 1.2rem;
            padding: 2.01px 6.7px;
            border-radius: 10px;
            align-self: flex-start;
            margin-bottom: 0.67rem;
        }
        
        .timeline-item.visible:hover .step-badge {
            background: linear-gradient(135deg, rgba(239, 58, 58, 0.2) 0%, rgba(255, 158, 128, 0.2) 100%);
            transform: translateY(-1.34px);
        }
        
        .icon-container {
            transition: all 0.335s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            width: 26.8px;
            height: 26.8px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: rgba(239, 58, 58, 0.1);
        }
        
        .timeline-item.visible:hover .icon-container {
            transform: rotate(360deg) scale(1.2);
            background: rgba(239, 58, 58, 0.2);
        }
        
        .heading-animated .char {
            margin-right: 0.0335em;
        }
        
        .heading-animated .char.space {
            margin-right: 0.201em;
        }
        
        .heading-animated .char-inner {
            transform: translateY(100%);
            opacity: 0;
            will-change: transform, opacity;
        }
        
        .custom-bullets {
            list-style: none;
            padding-left: 20px;
            margin: 0;
            align-self: flex-start;
        }
        
        .custom-bullets li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 10px;
            color: #4a5568;
            transform: translateY(100%);
            opacity: 0;
            transition: all 0.335s ease;
            line-height: 1.5;
        }
        
        .custom-bullets li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            width: 8px;
            height: 8px;
            background: var(--primary);
            border-radius: 50%;
            transform: translateY(-50%) scale(0.8);
            transition: all 0.335s ease;
            box-shadow: 0 0 6px rgba(239, 58, 58, 0.5);
        }
        
        .timeline-item.visible .custom-bullets li::before {
            animation: bullet-pulse 1.675s ease-in-out infinite;
        }
        
        .custom-bullets.nested {
            padding-left: 20px;
            margin-top: 0;
            margin-left: 0.67rem;
        }
        
        .custom-bullets.nested li::before {
            background: var(--secondary);
            width: 6px;
            height: 6px;
            box-shadow: 0 0 4px rgba(255, 158, 128, 0.5);
        }
        
        @keyframes bullet-pulse {
            0% {
                transform: translateY(-50%) scale(0.8);
                opacity: 0.7;
            }
            50% {
                transform: translateY(-50%) scale(1.2);
                opacity: 1;
            }
            100% {
                transform: translateY(-50%) scale(0.8);
                opacity: 0.7;
            }
        }
        
        @media (max-width: 768px) {
            .timeline-line {
                left: 20.1px;
            }
            
            .timeline-dot {
                left: 20.1px;
            }
            
            .timeline-content {
                width: calc(90% - 53.6px);
                margin-left: 40.2px !important;
            }
            
            .timeline-item:nth-child(odd) .timeline-content .arrow,
            .timeline-item:nth-child(even) .timeline-content .arrow {
                left: -6.7px;
                right: auto;
            }
            
            .particles {
                left: 20.1px;
            }
            
            .glow {
                left: 20.1px;
            }
            
            .timeline-end {
                left: 20.1px;
            }
            
            .custom-bullets {
                padding-left: 15px;
            }
            
            .custom-bullets li {
                padding-left: 15px;
            }
            
            .custom-bullets.nested {
                padding-left: 15px;
            }
        }
      `}</style>

      <div className="implementation-root">
        <div className="floating-shapes" aria-hidden="true">
          <div
            className="shape"
            style={{ width: 53.6, height: 53.6, top: "10%", left: "10%", animationDuration: "16.75s" }}
          />
          <div
            className="shape"
            style={{ width: 80.4, height: 80.4, top: "20%", left: "80%", animationDuration: "20.1s" }}
          />
          <div
            className="shape"
            style={{ width: 33.5, height: 33.5, top: "50%", left: "15%", animationDuration: "13.4s" }}
          />
          <div
            className="shape"
            style={{ width: 67, height: 67, top: "70%", left: "85%", animationDuration: "14.74s" }}
          />
          <div
            className="shape"
            style={{ width: 46.9, height: 46.9, top: "90%", left: "40%", animationDuration: "12.06s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto" role="main">
          <div
            ref={animationTriggerRef}
            aria-hidden="true"
            style={{ position: "absolute", top: "120.6px", left: "0", right: "0", height: "0.67px", pointerEvents: "none" }}
          />

          <div className="text-center mb-10">
            <h1
              className="text-4xl font-bold text-white-600 mb-5 relative inline-block heading-animated"
              tabIndex={0}
              aria-label="Implementation Roadmap"
            >
              {Array.from("IMPLEMENTATION ROADMAP").map((char, i) => (
                <span
                  key={i}
                  className={`char${char === " " ? " space" : ""}`}
                  aria-hidden="true"
                  style={{ display: "inline-block", overflow: "hidden" }}
                >
                  <span className="char-inner" style={{ display: "inline-block" }}>
                    {char}
                  </span>
                </span>
              ))}
              <span
                ref={titleUnderlineRef}
                className="absolute -bottom-1.34 left-0 w-full h-0.67 bg-gradient-to-r from-primary to-secondary transform scale-x-0 origin-left transition-transform duration-335 roadmap-title-underline"
                aria-hidden="true"
              />
            </h1>
          </div>

          <div className="timeline-container py-5.36 relative" aria-label="Website development timeline">
            <div
              className="timeline-line"
              id="timeline-line"
              ref={timelineLineRef}
              aria-hidden="true"
            />
            <div
              className="timeline-end"
              id="timeline-end"
              ref={timelineEndRef}
              aria-hidden="true"
            />

            {steps.map(({ step, title, description, icon }, idx) => (
              <article
                key={step}
                ref={(el) => (timelineItemsRefs.current[idx] = el)}
                className="timeline-item mb-10 relative"
                data-step={step}
                tabIndex={-1}
                aria-label={`Step ${step}: ${title}`}
              >
                <div className="timeline-dot" aria-hidden="true"></div>
                <div className="glow" aria-hidden="true"></div>
                <div className="particles" aria-hidden="true"></div>

                <div
                  className="timeline-content js-tilt"
                  data-tilt-max="10"
                  data-tilt-speed="400"
                  data-tilt-perspective="670"
                  tabIndex={0}
                >
                  <div className="arrow" aria-hidden="true" />
                  <div className="content-inner">
                    <div className="bg-red-50 text-primary text-1xl font-semibold px-2 py-0.67 rounded-full inline-block mb-1.8 step-badge">
                      STEP {step}
                    </div>
                    <div className="text-reveal">
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        <span>{title}</span>
                      </h3>
                    </div>
                    <div className="text-reveal">
                      <div className="text-gray-600 text-1.2xl">{description}</div>
                    </div>
                  </div>
                  <div className="progress-indicator" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Implementation;