import "./Projects.css";
import garageImg from "../assets/garage.png";
import garage1 from "../assets/garage.png";
import garage2 from "../assets/garage2.png";
import garage3 from "../assets/garage3.png";

import { useState, useEffect } from "react";

function Projects() {
    const images = [
  garage1,
  garage2,
  garage3
];

const [currentSlide, setCurrentSlide] =
    useState(0);

      useEffect(() => {

        const interval = setInterval(() => {

          setCurrentSlide((prev) =>
            prev === images.length - 1
              ? 0
              : prev + 1
          );

        }, 3000);

        return () => clearInterval(interval);

      }, []);
  return (

    <section className="projects-section">

  <div className="project-card">

    {/* LEFT SIDE */}
    <div className="left-side">

      {/* MAIN IMAGE */}
      <div className="project-image">
        <img src={garageImg} alt="" />
      </div>

      {/* SLIDESHOW */}
      <div className="project-slideshow">

        <img
          src={images[currentSlide]}
          alt=""
        />

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="project-info">

      <p className="project-subtitle">
        SMART CAR BOOKING PLATFORM
      </p>

      <h1 className="project-title">
        Garage Management System
      </h1>

      <p className="project-description">
        Smart car booking system with real-time scheduling,
        GPS tracking, customer management and service monitoring.
      </p>

      <div className="tech-stack">

        <span className="tech-badge">C#</span>
        <span className="tech-badge">ASP.NET</span>
        <span className="tech-badge">SQL Server</span>
        <span className="tech-badge">MVC</span>

      </div>

      <div className="project-buttons">

        <button className="project-btn primary">
          VIEW PROJECT
        </button>

        <button className="project-btn secondary">
          GITHUB
        </button>

      </div>

    </div>

  </div>

</section>
  );

}

export default Projects;