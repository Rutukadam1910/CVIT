import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Styles/CoreValues.css';

const CoreValues = () => {
  const { t } = useTranslation();

  const coreValues = [
    {
      id: 1,
      number: '01',
      title: t('CoreValues.value1.title', 'Innovation'),
      description: t('CoreValues.value1.description', 'We continuously push boundaries and embrace cutting-edge technologies to drive advancements in AI-based machine vision systems.'),
      icon: '🔬',
    },
    {
      id: 2,
      number: '02',
      title: t('CoreValues.value2.title', 'Excellence'),
      description: t('CoreValues.value2.description', 'We are committed to delivering solutions of the highest quality, accuracy, reliability, and performance that exceed our customer expectations.'),
      icon: '🏆',
    },
    {
      id: 3,
      number: '03',
      title: t('CoreValues.value3.title', 'Integrity'),
      description: t('CoreValues.value3.description', 'We uphold the highest ethical standards in all our interactions, ensuring transparency, honesty, and trustworthiness.'),
      icon: '🛡️',
    },
    {
      id: 4,
      number: '04',
      title: t('CoreValues.value4.title', 'Customer-Centric'),
      description: t('CoreValues.value4.description', "We prioritize understanding and meeting our clients' needs, providing end-to-end solutions and service support."),
      icon: '🎧',
    },
    {
      id: 5,
      number: '05',
      title: t('CoreValues.value5.title', 'Responsibility'),
      description: t('CoreValues.value5.description', 'We take ownership of our commitments and actions, ensuring accountability in delivering on promises and achieving results.'),
      icon: '✔️',
    },
    {
      id: 6,
      number: '06',
      title: t('CoreValues.value6.title', 'Passion'),
      description: t('CoreValues.value6.description', 'We are passionate about our work and the impact of AI-based machine vision systems, driving us to innovate and make a difference in industries worldwide.'),
      icon: '🔥',
    },
  ];

  return (
    <section className="core-values-container" aria-label={t('CoreValues.sectionAriaLabel', 'Our Core Values Section')}>
      <h2 className="heading-top-right" tabIndex={-1}>
        {t('CoreValues.sectionTitle', 'OUR CORE VALUES')}
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={2}
        spaceBetween={20.1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 13.4 },
          768: { slidesPerView: 2, spaceBetween: 20.1 },
          1024: { slidesPerView: 3, spaceBetween: 20.1 },
        }}
        className="swiper-container"
        aria-live="polite"
      >
        {coreValues.map(({ id, number, title, description, icon }) => (
          <SwiperSlide key={id} tabIndex={0}>
            <article className="core-card" role="group" aria-labelledby={`corevalue-title-${id}`}>
              <div className="core-card-header">
                <div className="core-card-header-left">
                  <div className="core-card-number">{number}</div>
                  <h3 className="core-card-title" id={`corevalue-title-${id}`}>{title}</h3>
                </div>
                <div className="core-card-icon" aria-hidden="true">{icon}</div>
              </div>
              <div className="core-card-body">
                <p className="core-card-description">{description}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CoreValues;