// src/components/Services/index.js
import React from 'react';
import './services.css'; // Import the CSS for styling
import webdev from '../Img/istockphoto-1346294889-612x612.webp';
import ui from '../Img/premium_photo-1678565879444-f87c8bd9f241.avif';
import fullstack from '../Img/photo-1667372283536-a832e74401c2.avif';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>My Services</h2>
      <div className="service_container">
        <div className="servicecard">
          <h3>What Can I Do for You</h3>
          <p>I offer professional web and backend development services, specializing in full-stack Java development, MySQL database management, API integration (including Google APIs), and server creation using Node.js. Whether it's building scalable web applications, designing e-commerce platforms, or deploying backend solutions, I ensure robust and efficient performance tailored to your business needs</p>
          <ul className="myexpertise">
            <li>On time / fast</li>
            <li>Under the budget</li>
            <li>Quality assured</li>
          </ul>
        </div>

        <div className="services-container">
          <div className="service">
            <h3>Web Development</h3>
            <div className="service-content">
              <img src={webdev} alt="Web Development Icon" />
              <p>Build responsive, modern websites with HTML, CSS, and JavaScript.</p>
            </div>
          </div>

          <div className="service">
            <h3>UI/UX Design</h3>
            <div className="service-content">
              <img src={ui} alt="UI/UX Design Icon" />
              <p>Create user-friendly and visually appealing interfaces.</p>
            </div>
          </div>

          <div className="service">
            <h3>Full-Stack Development</h3>
            <div className="service-content">
              <img src={fullstack} alt="Full-Stack Development Icon" />
              <p>Develop complete solutions with front-end and back-end integration.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Services;
