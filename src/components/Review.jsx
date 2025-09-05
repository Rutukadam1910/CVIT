import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import indiamartLogo from "../assets/indiamart.png"; // Adjust path as needed
import googleimg from "../assets/google.png";

const Review = () => {
  const [count, setCount] = useState(0);
  const target = 1248;
  const rating = 4.5;

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(counter);
  }, []);

  return (
    <>
      <div className="review-container">
        {/* Card 1 */}
        <div className="card2">
          <h3 className="heading-primary">
            We Are Business Who Cares, And it Shows
          </h3>
        </div>

        <div className="divider" />

        {/* Card 2: Indiamart */}
        <a
          href="https://www.indiamart.com/cvit-solution/"
          target="_blank"
          rel="noopener noreferrer"
          className="card fade-in delay-1 link-card"
        >
          <div className="icon-wrapper">
            <img src={indiamartLogo} alt="Indiamart" className="indiamart-img" />
          </div>
          <h3 className="heading-secondary mt-tight">Reach us On Indiamart</h3>
          <p className="subtext">Discover Our Services</p>
        </a>

        <div className="divider" />

        {/* Card 3: Google Review */}
        <a
          href="https://www.google.com/search?q=CVIT+SOLUTION+PVT+LTD+Reviews&hl=en#lrd=0x3bc2bbea4fee3e13:0xd4aaec345ec569d8,3"
          target="_blank"
          rel="noopener noreferrer"
          className="card fade-in delay-2 link-card"
        >
          <div className="icon-wrapper">
            <img src={googleimg} alt="google" className="google-img" />
          </div>
          <div className="stars-wrapper">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <span className="rating-text">{rating.toFixed(1)}/5</span>
          </div>
          <h3 className="heading-secondary mt-tight">Rate Us on Google</h3>
          <p className="subtext">{count.toLocaleString()} reviews</p>
        </a>
      </div>

      <style>{`
        .review-container {
          display: flex;
          justify-content: space-around;
          align-items: stretch;
          flex-wrap: wrap;
          padding: 1rem 2rem;
          background-color: #fff;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          max-width: 1900px;
          margin: 0 auto;
          min-height: 250px;
        }

        .card {
          flex: 1 1 250px;
          min-width: 350px;
          max-width: 450px;
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fff;
          text-decoration: none;
          border-radius: 10px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
          
        .card2 {
          flex: 1 1 250px;
          min-width: 350px;
          max-width: 450px;
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fff;
          text-decoration: none;
          border-radius: 10px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .link-card:hover {
          cursor: pointer;
        }

        .link-card {
          text-decoration: none;
          color: inherit;
        }

        .divider {
          width: 1px;
          background-color: #ccc;
          height: auto;
          min-height: 80%;
          align-self: center;
        }

        .heading-primary {
          color: #ef3a3a;
          font-weight: 600;
          font-size: 1.25rem;
          text-align: center;
        }

        .heading-secondary {
          color: #374151;
          font-weight: 600;
          font-size: 1rem;
        }

        .mt-tight {
          margin-top: 0.5rem;
        }

        .subtext {
          font-size: 0.85rem;
          color: #9ca3af;
          margin-top: 0.2rem;
        }

        .indiamart-img {
          width: 120px;
          height: 120px;
          object-fit: contain;
        }

           .indiamart-img:hover{
            cursor: pointer;
        }

        .google-img {
          width: 90px;
          height: 90px;
        }
        
         .google-img:hover {
           cursor: pointer;
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 90px;
        }

        .stars-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 0.4rem;
        }

        .stars {
          display: flex;
          gap: 4px;
          font-size: 1.3rem;
          color: #facc15;
        }

        .rating-text {
          font-size: 1rem;
          font-weight: 500;
          color: #4b5563;
          animation: fadeIn 1s ease-in;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.6s forwards ease-in-out;
        }

        
        .delay-1 {
          animation-delay: 0.2s;
        }

        .delay-2 {
          animation-delay: 0.4s;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .review-container {
            flex-direction: column;
            align-items: center;
          }

          .divider {
            width: 80%;
            height: 1px;
            background-color: #ccc;
            margin: 1.5rem 0;
          }

          .card {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Review;
