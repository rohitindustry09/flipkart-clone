// src/components/Flipkart.js

import React, { useState, useEffect } from 'react';
import '../Home.css'; // Make sure this path matches your project structure
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'; // Font Awesome CDN

const Flipkart = () => {
  const [accountNavVisible, setAccountNavVisible] = useState(false);
  const [threeDotsNavVisible, setThreeDotsNavVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSponsorSlide, setCurrentSponsorSlide] = useState(0);

  const slides = [
    '/Flipkart/0a35c58d1c3aa1c2.jpeg',
    '/Flipkart/5b4ee7252a7f6068.jpeg',
    '/Flipkart/603a80511c3be690.jpeg',
  ];

  const sponsorSlides = [
    '/Flipkart/5b4ee7252a7f6068.jpeg',
    '/Flipkart/603a80511c3be690.jpeg',
    '/Flipkart/0a35c58d1c3aa1c2.jpeg',
  ];

  const handleAccountBtnClick = (event) => {
    event.stopPropagation();
    setAccountNavVisible(!accountNavVisible);
    if (threeDotsNavVisible) {
      setThreeDotsNavVisible(false);
    }
  };

  const handleThreeDotsClick = (event) => {
    event.stopPropagation();
    setThreeDotsNavVisible(!threeDotsNavVisible);
    if (accountNavVisible) {
      setAccountNavVisible(false);
    }
  };

  const handleClickOutside = () => {
    setAccountNavVisible(false);
    setThreeDotsNavVisible(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const changeSlide = (direction, slidesType) => {
    if (slidesType === 'main') {
      const totalSlides = slides.length;
      setCurrentSlide((prev) => (prev + direction + totalSlides) % totalSlides);
    } else if (slidesType === 'sponsor') {
      const totalSponsorSlides = sponsorSlides.length;
      setCurrentSponsorSlide((prev) => (prev + direction + totalSponsorSlides) % totalSponsorSlides);
    }
  };

  useEffect(() => {
    const mainInterval = setInterval(() => changeSlide(1, 'main'), 3000); // Main slides auto-slide
    const sponsorInterval = setInterval(() => changeSlide(1, 'sponsor'), 1500); // Sponsor slides auto-slide
    return () => {
      clearInterval(mainInterval);
      clearInterval(sponsorInterval);
    };
  }, []);

  return (
    <div className="flipkart-nav">
      <span>Flipkart</span>
      <div className="flipkart-search">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input type="text" placeholder="Search for Products, and More" />
      </div>

      <div id="account-logo" className="flipkart-account-info">
        <div id="account-btn" onClick={handleAccountBtnClick}>
          <i className="fa-solid fa-user-doctor"></i>&nbsp;&nbsp;Account&nbsp;
          <span>
            <i id="drop-down" className="fa-solid fa-angle-down"></i>
          </span>
        </div>

        {accountNavVisible && (
          <div id="account-nav">
            <div id="account-options" className="log-in-account-info">
              <div className="account-log-in">
                <span>
                  <i className="fa-solid fa-user-doctor"></i>
                </span>
                My Profile
              </div>
              <hr />
              <div className="account-log-in">
                <span>
                  <i className="fa-regular fa-sun"></i>
                </span>
                SuperCoin Zone
              </div>
              {/* Other Account Options */}
            </div>
          </div>
        )}
      </div>

      <div className="">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
      <div className="">
        <i className="fa-solid fa-store"></i>
      </div>

      <div className="three-dots-info">
        <div className="event-caller-dot" id="event-caller-dot-id" onClick={handleThreeDotsClick}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>

        {threeDotsNavVisible && (
          <div id="three-dots-nav">
            <div className="three-dots-options-nav">
              <div className="three-dots-options">
                <i className="fa-regular fa-bell"></i>
                <span>Notifications Preference</span>
              </div>
              <div className="three-dots-options">
                <i className="fa-solid fa-headset"></i>
                <span>24×7 Customer Care</span>
              </div>
              {/* Other Three Dots Options */}
            </div>
          </div>
        )}
      </div>

      <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <div key={index} className={`dot ${currentSlide === index ? 'active' : ''}`}></div>
        ))}
      </div>

      <div className="accesories-offers">
        {/* Offers boxes */}
      </div>

      <h4>Top Deals</h4>
      <div className="big-deals">
        <div className="item">
          <div className="image"></div>
          <div className="text">Good brand</div>
        </div>
        {/* Other deals */}
      </div>

      <h4>SPONSORED</h4>
      <div className="sponsored-slider">
        <div
          className="sponsored-slides"
          style={{ transform: `translateX(-${currentSponsorSlide * 100}%)` }}
        >
          {sponsorSlides.map((slide, index) => (
            <div className="sponsored-slide" key={index}>
              <img src={slide} alt={`Sponsor Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flipkart;
