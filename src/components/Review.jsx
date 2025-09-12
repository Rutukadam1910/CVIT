import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import indiamartLogo from "../assets/logo/indiamart.png";
import googleimg from "../assets/logo/google.png";
import "../Styles/Review.css";

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
  );
};

export default Review;