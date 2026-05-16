import "./Projects.css";

import { useState, useEffect } from "react";

import garage1 from "../assets/garage.png";
import garage2 from "../assets/garage2.png";
import garage3 from "../assets/garage3.png";
import garage4 from "../assets/garage4.png";
import garage5 from "../assets/garage5.png";
import garage6 from "../assets/garage6.png";
import garage7 from "../assets/garage7.png";
import garage8 from "../assets/garage8.png";
import garage9 from "../assets/garage9.png";
import garage10 from "../assets/garage10.png";
import garage11 from "../assets/garage11.png";
import garage12 from "../assets/garage12.png";
import garage13 from "../assets/garage13.png";

function Projects() {

  const images = [
    garage1,
    garage2,
    garage3,
    garage4,
    garage5,
    garage6,
    garage7,
    garage8,
    garage9,
    garage10,
    garage11,
    garage12,
    garage13
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === images.length - 1
          ? 0
          : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, [images.length]);

  return (

    <section className="projects-section">

      <div className="project-card">

        {/* LEFT SIDE */}
        <div className="left-side">

          {/* MAIN IMAGE */}
          <div className="project-image">

            <img
              src={garage1}
              alt="Garage System"
            />

          </div>

          {/* 3D CAROUSEL */}
          <div className="feature-carousel">

            {images.map((img, index) => {

              const position =
                index === currentSlide
                  ? "active"
                  : index ===
                    (currentSlide - 1 + images.length) % images.length
                  ? "left"
                  : index ===
                    (currentSlide + 1) % images.length
                  ? "right"
                  : "hidden";

              return (

                <div
                  key={index}
                  className={`feature-card ${position}`}
                >

                  <img
                    src={img}
                    alt=""
                  />

                </div>

              );

            })}

          </div>

          {/* DOTS */}
          <div className="slide-dots">

            {images.map((_, index) => (

              <span
                key={index}
                className={`dot ${
                  currentSlide === index
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setCurrentSlide(index)
                }
              />

            ))}

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
            Smart car booking system with
            real-time scheduling,
            GPS tracking,
            customer management,
            payment integration,
            and financial reporting.
          </p>

          <div className="tech-stack">

            <span className="tech-badge">
              C#
            </span>

            <span className="tech-badge">
              ASP.NET
            </span>

            <span className="tech-badge">
              SQL SERVER
            </span>

            <span className="tech-badge">
              MVC
            </span>

          </div>

          <div className="project-buttons">

           <a
          href="/Rhyzen Car Booking and Management System_Manual.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button className="project-btn primary">
            VIEW PROJECT
          </button>
        </a>

          <a
              href="https://github.com/Ashuraking1993/rhyzen-garage-system"
              target="_blank"
              rel="noreferrer"
            >
              <button className="project-btn secondary">
                GITHUB
              </button>
            </a>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Projects;