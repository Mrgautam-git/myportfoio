// src/components/Services/index.js
import React from 'react';
// Import the CSS for styling
import chatsitevideo from './Recording 2025-03-17 153405.mp4'
import video from './Recording 2025-03-17 151400.mp4';
import fullstack from '../Img/photo-1667372283536-a832e74401c2.avif';



const Projects = () => {
  return (
    <section className="services" id="services">
      <h2>My Projects</h2>
      <div className="service_container">
        <div className="services-container">
          <div className="service">
            <h3>personal chating site</h3>
            <div className="service-content">
            <video src={chatsitevideo} autoPlay muted loop width="300" height="200">
      Your browser does not support the video tag.
    </video>
              <p>This is build in html,css and javascript and i use isocket for backend server <b>istock</b> this is best backend server for short response server like chating <a href="https://chatsitefrontend.onrender.com/">My Chating site</a></p>
            </div>
          </div>

          <div className="service">
  <h3>E-commerce Site</h3>
  <div className="service-content">
    <video src={video} autoPlay muted loop width="300" height="200">
      Your browser does not support the video tag.
    </video>
    <p>
      Explore a seamless shopping experience with our user-friendly and visually appealing interface. 
      <a href="https://myecommercesite-iix2.onrender.com" target="_blank" rel="noopener noreferrer"> Shop Now</a>
    </p>
  </div>
</div>  


          <div className="service">
            <h3>Full-Stack Development</h3>
            <div className="service-content">
              <img src={fullstack} alt="Full-Stack Development Icon" />
              <p>Develop complete solutions with front-end and back-end integration.</p>
            </div>
          </div>
          <div className="service">
            <h3>Full-Stack Development</h3>
            <div className="service-content">
              <img src={fullstack} alt="Full-Stack Development Icon" />
              <p>Develop complete solutions with front-end and back-end integration.</p>
            </div>
          </div>
          <div className="service">
            <h3>Full-Stack Development</h3>
            <div className="service-content">
              <img src={fullstack} alt="Full-Stack Development Icon" />
              <p>Develop complete solutions with front-end and back-end integration.</p>
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

export default Projects;
