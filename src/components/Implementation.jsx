import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import '../Styles/Implementation.css';

const steps = [
  {
    step: 1,
    titleKey: 'Implementation.step1.title',
    descriptionKey: 'Implementation.step1.description',
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
    titleKey: 'Implementation.step2.title',
    descriptionKey: 'Implementation.step2.description',
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
    titleKey: 'Implementation.step3.title',
    descriptionKey: 'Implementation.step3.description',
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
    titleKey: 'Implementation.step4.title',
    descriptionKey: 'Implementation.step4.description',
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
    titleKey: 'Implementation.step5.title',
    descriptionKey: 'Implementation.step5.description',
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
    titleKey: 'Implementation.step6.title',
    descriptionKey: 'Implementation.step6.description',
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
    titleKey: 'Implementation.step7.title',
    descriptionKey: 'Implementation.step7.description',
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
    titleKey: 'Implementation.step8.title',
    descriptionKey: 'Implementation.step8.description',
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
    titleKey: 'Implementation.step9.title',
    descriptionKey: 'Implementation.step9.description',
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
    titleKey: 'Implementation.step10.title',
    descriptionKey: 'Implementation.step10.description',
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
  const { t } = useTranslation();
  const timelineLineRef = useRef(null);
  const timelineEndRef = useRef(null);
  const titleUnderlineRef = useRef(null);
  const timelineItemsRefs = useRef([]);
  const animationPlayedRef = useRef(false);
  const gsapTimelineRef = useRef(null);
  const animationTriggerRef = useRef(null);

  const initAnimation = () => {
    const timelineItems = timelineItemsRefs.current;
    const timelineLine = timelineLineRef.current;
    const timelineEnd = timelineEndRef.current;
    const titleUnderline = titleUnderlineRef.current;

    gsap.set(timelineItems, { opacity: 0, y: 13.4 });
    gsap.set('.text-reveal span, .custom-bullets li', { y: '100%', opacity: 0 });
    gsap.set(timelineLine, { height: 0 });
    gsap.set(timelineEnd, { opacity: 0 });
    if (titleUnderline) gsap.set(titleUnderline, { scaleX: 0 });
    timelineItems.forEach((item) => item.classList.remove('visible'));

    const container = document.querySelector('.timeline-container');
    const lastStepItem = container.querySelector('.timeline-item:last-child');
    const lastDot = lastStepItem?.querySelector('.timeline-dot');

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
      ease: 'power2.out',
    });

    mainTimeline.to(
      timelineLine,
      {
        height: lineHeightToLastDot,
        duration: totalDuration,
        ease: 'linear',
      },
      0
    );

    const stepPositions = timelineItems.map((item) => {
      const dot = item.querySelector('.timeline-dot');
      if (!dot) return 0;
      const dotRect = dot.getBoundingClientRect();
      return dotRect.top + dotRect.height / 2 - containerRect.top;
    });

    timelineItems.forEach((item, index) => {
      const dot = item.querySelector('.timeline-dot');
      const textElements = item.querySelectorAll('.text-reveal span');
      const bulletElements = item.querySelectorAll('.custom-bullets li');

      const posRatio = stepPositions[index] / lineHeightToLastDot;
      const startTime = posRatio * totalDuration;

      mainTimeline.to(
        dot,
        {
          scale: 1,
          boxShadow:
            '0 0 0 2.68px rgba(239, 58, 58, 0.2), 0 0 10.05px rgba(239, 58, 58, 0.4)',
          duration: 0.402,
          ease: 'power2.out',
          onComplete: () => {
            item.classList.add('visible');
          },
        },
        startTime
      );

      mainTimeline.to(
        item,
        {
          opacity: 1,
          y: 0,
          duration: 0.67,
          ease: 'back.out(1.7)',
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
          ease: 'power3.out',
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
          ease: 'power3.out',
        },
        startTime + 0.938
      );
    });

    mainTimeline.to(
      timelineEnd,
      {
        opacity: 1,
        duration: 0.67,
        ease: 'power2.out',
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
      rootMargin: '-60.3px 0px 0px 0px',
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

  return (
    <div className="implementation-root">
      <div className="floating-shapes" aria-hidden="true">
        <div
          className="shape"
          style={{ width: 53.6, height: 53.6, top: '10%', left: '10%', animationDuration: '16.75s' }}
        />
        <div
          className="shape"
          style={{ width: 80.4, height: 80.4, top: '20%', left: '80%', animationDuration: '20.1s' }}
        />
        <div
          className="shape"
          style={{ width: 33.5, height: 33.5, top: '50%', left: '15%', animationDuration: '13.4s' }}
        />
        <div
          className="shape"
          style={{ width: 67, height: 67, top: '70%', left: '85%', animationDuration: '14.74s' }}
        />
        <div
          className="shape"
          style={{ width: 46.9, height: 46.9, top: '90%', left: '40%', animationDuration: '12.06s' }}
        />
      </div>

      <div className="max-w-4xl mx-auto" role="main">
        <div
          ref={animationTriggerRef}
          aria-hidden="true"
          style={{ position: 'absolute', top: '120.6px', left: '0', right: '0', height: '0.67px', pointerEvents: 'none' }}
        />

        <div className="text-center mb-10">
          <h1
            className="main-title"
            tabIndex={0}
            aria-label={t('Implementation.ariaLabel', 'Implementation Roadmap')}
          >
            {t('Implementation.title', 'IMPLEMENTATION ROADMAP')}
            <span
              ref={titleUnderlineRef}
              className="title-underline"
              aria-hidden="true"
            />
          </h1>
        </div>

        <div className="timeline-container py-5.36 relative" aria-label={t('Implementation.timelineAriaLabel', 'Website development timeline')}>
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

          {steps.map(({ step, titleKey, descriptionKey}, idx) => (
            <article
              key={step}
              ref={(el) => (timelineItemsRefs.current[idx] = el)}
              className="timeline-item mb-10 relative"
              data-step={step}
              tabIndex={-1}
              aria-label={t(`Implementation.step${step}.ariaLabel`, `Step ${step}: ${t(titleKey)}`)}
            >
              <div className="timeline-dot" aria-hidden="true"></div>
              <div className="timeline-content" tabIndex={0}>
                <div className="arrow" aria-hidden="true" />
                <div className="content-inner">
                  <div className="step-badge">
                    {t(`Implementation.step${step}.badge`, `STEP ${step}`)}
                  </div>
                  <div className="text-reveal">
                    <h3 className="timeline-title">
                      <span>{t(titleKey)}</span>
                    </h3>
                  </div>
                  <div className="text-reveal">
                    <div className="bullet-container">
                      <ul className="custom-bullets">
                        {t(descriptionKey, { returnObjects: true }).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Implementation;