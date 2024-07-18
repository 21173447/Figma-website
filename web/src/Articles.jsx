import React from "react";
import "./Articles.css";
const Articles = () => {
  return (
    <div className="card-container">
      <div className="section-header">
        <h2 className="section-title">Latest Articles</h2>
        <div className="underscore-line"></div>
      </div>

      <div className="cards-wrapper">
        <div className="single-card">
          <img src="/Images/drone1.png" alt="Drone Image 1" className="card-image" />
          <div className="card-content">
          <div className="underscore-line"></div>
            <h5 className="card-title">How to automate surveillance drones</h5>
          </div>
        </div>

        <div className="single-card">
          <img src="/Images/drone2.png" alt="Drone Image 2" className="card-image" />
          <div className="card-content">
          <div className="underscore-line"></div>
            <h5 className="card-title">Robotics and Artificial Intelligence</h5>
          </div>
        </div>

        <div className="single-card">
          <img src="/Images/drone4 1.png" alt="Drone Image 3" className="card-image" />
          <div className="card-content">
          <div className="underscore-line"></div>
            <h5 className="card-title">Improving Lives through Prosthetic Limbs</h5>
          </div>
        </div>

        <div className="single-card">
          <img src="/Images/drone6 1.png" alt="Drone Image 4" className="card-image" />
          <div className="card-content">
          <div className="underscore-line"></div>
            <h5 className="card-title">Power of Robotics in Agriculture</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
