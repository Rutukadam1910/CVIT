import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const coreValues = [
  { id: 1, number: '01', title: 'Innovation', description: 'We continuously push boundaries and embrace cutting-edge technologies to drive advancements in AI-based machine vision systems.', icon: '🔬' },
  { id: 2, number: '02', title: 'Excellence', description: 'We are committed to delivering solutions of the highest quality, accuracy, reliability, and performance that exceed our customer expectations.', icon: '🏆' },
  { id: 3, number: '03', title: 'Integrity', description: 'We uphold the highest ethical standards in all our interactions, ensuring transparency, honesty, and trustworthiness.', icon: '🛡️' },
  { id: 4, number: '04', title: 'Customer-Centric', description: "We prioritize understanding and meeting our clients' needs, providing end-to-end solutions and service support.", icon: '🎧' },
  { id: 5, number: '05', title: 'Responsibility', description: 'We take ownership of our commitments and actions, ensuring accountability in delivering on promises and achieving results.', icon: '✔️' },
  { id: 6, number: '06', title: 'Passion', description: 'We are passionate about our work and the impact of AI-based machine vision systems, driving us to innovate and make a difference in industries worldwide.', icon: '🔥' },
];

const CoreValues = () => {
  return (
    <>
      <style>{`
        * {
          font-family: 'Inter', sans-serif !important;
        }
        .core-values-container {
          width: 100%;
          background: #ffffff;
          color: #000000;
          padding: 93.8px 3.35vw 67px;
          box-sizing: border-box;
          min-height: 569.5px;
        }

        .heading-top-right {
          text-align: center;
          font-size: 2.8rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 46.9px;
          color: #1a1a1a;
        }

        .swiper-container {
          padding-bottom: 26.8px;
        }

        .core-card {
          background: #f9f9f9;
          border-radius: 10.72px;
          padding: 23.45px 20.1px;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-sizing: border-box;
          min-height: 254.6px;
          color: #1a1a1a;
          box-shadow: none;
          transition: transform 0.3s ease;
        }

        .core-card:hover {
          transform: translateY(-4.02px);
        }

        .core-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16.75px;
        }

        .core-card-header-left {
          display: flex;
          align-items: center;
          gap: 12.05px;
        }

        .core-card-number {
          background: #f72b2b;
          border-radius: 50%;
          width: 30.48px;
          height: 30.48px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 11.39px;
          color: white;
          flex-shrink: 0;
        }

        .core-card-title {
          font-size: 1.34rem;
          font-weight: 700;
          margin: 0;
          color: #1a1a1a;
        }

        .core-card-icon {
          font-size: 32.16px;
          flex-shrink: 0;
        }

        .core-card-body {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin-top: 17.42px;
          flex-grow: 1;
          gap: 16.75px;
        }

        .core-card-description {
          font-size: 0.938rem;
          line-height: 1.7;
        }
          
.swiper-container {
  padding-bottom: 50px; 
}

        .swiper-pagination {
          margin-top: 20px !important;
  text-align: center;
        }

        .swiper-pagination-bullet {
          width: 6.7px;
          height: 6.7px;
          background: #ccc;
          opacity: 1;
          border-radius: 50%;
          margin: 0.1px 4.02px !important;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #f72b2b;
          width: 8.04px;
          height: 8.04px;
        }

        @media(max-width: 768px) {
          .core-values-container {
            padding: 53.6px 3.35vw;
            min-height: auto;
          }

          .heading-top-right {
            font-size: 1.608rem;
          }

          .core-card-title {
            font-size: 1.005rem;
          }

          .core-card-description {
            font-size: 0.67rem;
          }

          .core-card-icon {
            font-size: 24.12px;
          }

          .core-card-number {
            width: 24.12px;
            height: 24.12px;
            font-size: 9.38px;
          }
        }
      `}</style>

      <section className="core-values-container" aria-label="Our Core Values Section">
        <h2 className="heading-top-right" tabIndex={-1}>
          OUR CORE VALUES
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={2}
          spaceBetween={20.1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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
    </>
  );
};

export default CoreValues;