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
import pos1 from "../assets/pos1.png";
import pos2 from "../assets/pos2.png";
import pos3 from "../assets/pos3.png";
import pos4 from "../assets/pos4.png";
import pos5 from "../assets/pos5.png";
import pos6 from "../assets/pos6.png";
import pos7 from "../assets/pos7.png";
import pos8 from "../assets/pos8.png";
import pos9 from "../assets/pos9.png";


// IMPORTS AI sudy//

import study1 from "../assets/study1.png";
import study2 from "../assets/study2.png";
import study3 from "../assets/study3.png";
import study4 from "../assets/study4.png";
import study5 from "../assets/study5.png";
import study6 from "../assets/study6.png";
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

const posImages = [
  pos1,
  pos2,
  pos3,
  pos4,
  pos5,
  pos6,
  pos7,
  pos8,
  pos9
];



const studyImages = [
  study1,
  study2,
  study3,
  study4,
  study5,
  study6
];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPosSlide, setCurrentPosSlide] = useState(0);

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

  useEffect(() => {

  const interval = setInterval(() => {

    setCurrentPosSlide((prev) =>
      prev === posImages.length - 1
        ? 0
        : prev + 1
    );

  }, 3000);

  return () => clearInterval(interval);

}, [posImages.length]);

// STATE

const [currentStudySlide, setCurrentStudySlide] =
  useState(0);

// LEFT
const prevStudySlide = () => {

  setCurrentStudySlide((prev) =>
    prev === 0
      ? studyImages.length - 1
      : prev - 1
  );

};

// RIGHT
const nextStudySlide = () => {

  setCurrentStudySlide((prev) =>
    prev === studyImages.length - 1
      ? 0
      : prev + 1
  );

};

useEffect(() => {

  const interval = setInterval(() => {

    setCurrentStudySlide((prev) =>
      prev === studyImages.length - 1
        ? 0
        : prev + 1
    );

  }, 3000);

  return () => clearInterval(interval);

}, [studyImages.length]);

  return (

    <section className="projects-section">

      <div className="project-card">

        {/* LEFT SIDE */}
        <div className="left-side">

          {/* MAIN IMAGE */}
          <div className="project-image">

              <img
            src={images[currentSlide]}
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

      <div className="project-card reverse">

  {/* LEFT SIDE */}
  <div className="left-side">

    <div className="project-image">

      <img
          src={posImages[currentPosSlide]}
          alt="POS System"
        />

    </div>

    <div className="feature-carousel">

      {posImages.map((img, index) => {

        const position =
          index === currentPosSlide
            ? "active"
            : index ===
              (currentPosSlide - 1 + posImages.length) % posImages.length
            ? "left"
            : index ===
              (currentPosSlide + 1) % posImages.length
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

     <div className="pos-slide-dots">

      {posImages.map((_, index) => (

        <span
          key={index}
          className={`pos-dot ${
            currentPosSlide === index
              ? "active"
              : ""
          }`}
          onClick={() =>
            setCurrentPosSlide(index)
          }
        />

      ))}

    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="project-info">

    <p className="project-subtitle">
      FASTFOOD POINT OF SALE SYSTEM
    </p>

    <h1 className="project-title">
      RHYZEN FASTFOOD POS
    </h1>

    <p className="project-description">
      Modern ASP.NET Core MVC Point of Sale
      and inventory management system with
      transaction processing, inventory tracking,
      receipt generation, sales reports,
      and administrative controls.
    </p>

    <div className="tech-stack">

      <span className="tech-badge">
        C#
      </span>

      <span className="tech-badge">
        ASP.NET CORE
      </span>

      <span className="tech-badge">
        SQL SERVER
      </span>

      <span className="tech-badge">
        MVC CORE
      </span>

    </div>

    <div className="project-buttons">

      <a
        href="/RHYZEN FASTFOOD POS SYSTEM.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <button className="project-btn primary">
          VIEW PROJECT
        </button>
      </a>

      <a
        href="https://github.com/Ashuraking1993/Rhyzen-FastFoodPOS"
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


       

    {/* ================= AI STUDY ASSISTANT ================= */}

<div className="project-card">

  {/* LEFT SIDE */}
  <div className="study-left-side">

    {/* MAIN IMAGE */}
    <div className="study-main-image">

      <img
        src={studyImages[currentStudySlide]}
        alt="AI Study Assistant"
      />

    </div>

    {/* THUMBNAILS */}
    <div className="study-thumb-wrapper">

  {/* LEFT */}
  <button
    className="thumb-arrow"
    onClick={prevStudySlide}
  >
    ❮
  </button>

  {/* THUMB CONTAINER */}
  <div className="study-thumb-container">

    <div
      className="study-thumb-track"
      style={{
        transform: `translateX(-${
          currentStudySlide * 155
        }px)`
      }}
    >

      {studyImages.map((img, index) => (

        <div
          key={index}
          className={`study-card ${
            currentStudySlide === index
              ? "active"
              : ""
          }`}
          onClick={() =>
            setCurrentStudySlide(index)
          }
        >

          <img
            src={img}
            alt=""
          />

        </div>

      ))}

    </div>

  </div>

  {/* RIGHT */}
  <button
    className="thumb-arrow"
    onClick={nextStudySlide}
  >
    ❯
  </button>

</div>

  </div>

  {/* RIGHT SIDE */}
  <div className="study-project-info">

    <p className="study-project-subtitle">
      AI POWERED EDUCATION PLATFORM
    </p>

    <h1 className="study-project-title">
      AI STUDY ASSISTANT
    </h1>

    <p className="study-project-description">

      Futuristic AI-powered learning platform
      designed to help students study smarter
      through intelligent summaries,
      AI-generated quizzes,
      personalized learning analytics,
      and real-time AI tutoring assistance.

    </p>

    {/* TECH STACK */}
    <div className="study-tech-stack">

      <span className="study-tech-badge">
        REACT
      </span>

      <span className="study-tech-badge">
        ASP.NET CORE
      </span>

      <span className="study-tech-badge">
        OPENAI API
      </span>

      <span className="study-tech-badge">
        NEON DB SERVER
      </span>

    </div>

    {/* BUTTONS */}
    <div className="study-project-buttons">

          <a
        href="https://rhyzen-ai-study.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >

        <button className="study-btn primary">
          VIEW PROJECT LIVE DEMO
        </button>

      </a>

      <a
        href="https://github.com/Ashuraking1993/rhyzen-ai-study"
        target="_blank"
        rel="noreferrer"
      >

        <button className="study-btn secondary">
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