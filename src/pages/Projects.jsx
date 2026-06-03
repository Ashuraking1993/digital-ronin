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

import study1 from "../assets/study1.png";
import study2 from "../assets/study2.png";
import study3 from "../assets/study3.png";
import study4 from "../assets/study4.png";
import study5 from "../assets/study5.png";
import study6 from "../assets/study6.png";

import sro from "../assets/projects/sro.png";
import sro1 from "../assets/projects/sro1.png";
import sro2 from "../assets/projects/sro2.png";
import sro3 from "../assets/projects/sro3.png";
import sro4 from "../assets/projects/sro4.png";
import sro5 from "../assets/projects/sro5.png";

import groceryPos1 from "../assets/grocerypos/pos1.png";
import groceryPos2 from "../assets/grocerypos/pos2.png";
import groceryPos3 from "../assets/grocerypos/pos3.png";
import groceryPos4 from "../assets/grocerypos/pos4.png";
import groceryPos5 from "../assets/grocerypos/pos5.png";
import groceryPos6 from "../assets/grocerypos/pos6.png";
import groceryPos7 from "../assets/grocerypos/pos7.png";

import admindash from "../assets/QMS/admindash.png";
import agentlogin from "../assets/QMS/agent-login.png";
import agent from "../assets/QMS/agent.png";
import display from "../assets/QMS/display.png";
import kiosk from "../assets/QMS/kiosk.png";

function Projects() {
  const images = [
    garage1, garage2, garage3, garage4, garage5, garage6, garage7,
    garage8, garage9, garage10, garage11, garage12, garage13,
  ];
  const posImages = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9];
  const studyImages = [study1, study2, study3, study4, study5, study6];
  const sroImages = [sro, sro1, sro2, sro3, sro4, sro5];
  const groceryPosImages = [groceryPos1, groceryPos2, groceryPos3, groceryPos4, groceryPos5, groceryPos6, groceryPos7];
  const qmsImages = [kiosk, display, agentlogin, agent, admindash];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPosSlide, setCurrentPosSlide] = useState(0);
  const [currentStudySlide, setCurrentStudySlide] = useState(0);
  const [currentSroSlide, setCurrentSroSlide] = useState(0);
  const [currentGroceryPosSlide, setCurrentGroceryPosSlide] = useState(0);
  const [currentQmsSlide, setCurrentQmsSlide] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setCurrentSlide(p => (p + 1) % images.length), 3000);
    return () => clearInterval(i);
  }, [images.length]);

  useEffect(() => {
    const i = setInterval(() => setCurrentPosSlide(p => (p + 1) % posImages.length), 3000);
    return () => clearInterval(i);
  }, [posImages.length]);

  useEffect(() => {
    const i = setInterval(() => setCurrentStudySlide(p => (p + 1) % studyImages.length), 3000);
    return () => clearInterval(i);
  }, [studyImages.length]);

  useEffect(() => {
    const i = setInterval(() => setCurrentSroSlide(p => (p + 1) % sroImages.length), 4000);
    return () => clearInterval(i);
  }, [sroImages.length]);

  useEffect(() => {
    const i = setInterval(() => setCurrentGroceryPosSlide(p => (p + 1) % groceryPosImages.length), 3000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const i = setInterval(() => setCurrentQmsSlide(p => (p + 1) % qmsImages.length), 3000);
    return () => clearInterval(i);
  }, []);

  const pos = (index, current, total) => {
    if (index === current) return "active";
    if (index === (current - 1 + total) % total) return "left";
    if (index === (current + 1) % total) return "right";
    return "hidden";
  };

  return (
    <section className="pj-section">

      {/* GARAGE */}
      <div className="pj-card">
        <div className="pj-corner" />
        <div className="pj-left">
          <div className="pj-main-img"><img src={images[currentSlide]} alt="Garage System" /></div>
          <div className="pj-carousel">
            {images.map((img, i) => (
              <div key={i} className={`pj-ci ${pos(i, currentSlide, images.length)}`}><img src={img} alt="" /></div>
            ))}
          </div>
          <div className="pj-dots">
            {images.map((_, i) => (
              <span key={i} className={`pj-dot ${currentSlide === i ? "active" : ""}`} onClick={() => setCurrentSlide(i)} />
            ))}
          </div>
        </div>
        <div className="pj-info">
          <p className="pj-eyebrow">SMART CAR BOOKING PLATFORM</p>
          <h1 className="pj-title">Garage Management System</h1>
          <p className="pj-desc">Smart car booking system with real-time scheduling, GPS tracking, customer management, payment integration, and financial reporting.</p>
          <div className="pj-tech"><span>C#</span><span>ASP.NET</span><span>SQL SERVER</span><span>MVC</span></div>
          <div className="pj-btns">
            <a href="/Rhyzen Car Booking and Management System_Manual.pdf" target="_blank" rel="noreferrer"><button className="pj-btn pj-primary">VIEW PROJECT</button></a>
            <a href="https://github.com/Ashuraking1993/rhyzen-garage-system" target="_blank" rel="noreferrer"><button className="pj-btn pj-secondary">GITHUB</button></a>
          </div>
        </div>
      </div>

      {/* POS */}
      <div className="pj-card pj-reverse">
        <div className="pj-corner" />
        <div className="pj-left">
          <div className="pj-main-img"><img src={posImages[currentPosSlide]} alt="POS" /></div>
          <div className="pj-carousel">
            {posImages.map((img, i) => (
              <div key={i} className={`pj-ci ${pos(i, currentPosSlide, posImages.length)}`}><img src={img} alt="" /></div>
            ))}
          </div>
          <div className="pj-dots">
            {posImages.map((_, i) => (
              <span key={i} className={`pj-dot ${currentPosSlide === i ? "active" : ""}`} onClick={() => setCurrentPosSlide(i)} />
            ))}
          </div>
        </div>
        <div className="pj-info">
          <p className="pj-eyebrow">FASTFOOD POINT OF SALE SYSTEM</p>
          <h1 className="pj-title">Rhyzen Fastfood POS</h1>
          <p className="pj-desc">Modern ASP.NET Core MVC Point of Sale and inventory management system with transaction processing, inventory tracking, receipt generation, sales reports, and administrative controls.</p>
          <div className="pj-tech"><span>C#</span><span>ASP.NET CORE</span><span>SQL SERVER</span><span>MVC CORE</span></div>
          <div className="pj-btns">
            <a href="https://ryzen-fastfood-demo.vercel.app/" target="_blank" rel="noreferrer"><button className="pj-btn pj-primary">VIEW PROJECT LIVE DEMO</button></a>
            <a href="https://github.com/Ashuraking1993/Rhyzen-FastFoodPOS" target="_blank" rel="noreferrer"><button className="pj-btn pj-secondary">GITHUB</button></a>
          </div>
        </div>
      </div>

      {/* AI STUDY */}
      <div className="pj-card">
        <div className="pj-corner" />
        <div className="pj-left">
          <div className="pj-main-img"><img src={studyImages[currentStudySlide]} alt="AI Study" /></div>
          <div className="pj-thumbs">
            <button className="pj-arrow" onClick={() => setCurrentStudySlide(p => p === 0 ? studyImages.length - 1 : p - 1)}>❮</button>
            <div className="pj-thumb-viewport">
              <div className="pj-thumb-track" style={{ transform: `translateX(-${currentStudySlide * 155}px)` }}>
                {studyImages.map((img, i) => (
                  <div key={i} className={`pj-thumb ${currentStudySlide === i ? "active" : ""}`} onClick={() => setCurrentStudySlide(i)}><img src={img} alt="" /></div>
                ))}
              </div>
            </div>
            <button className="pj-arrow" onClick={() => setCurrentStudySlide(p => (p + 1) % studyImages.length)}>❯</button>
          </div>
        </div>
        <div className="pj-info">
          <p className="pj-eyebrow">AI POWERED EDUCATION PLATFORM</p>
          <h1 className="pj-title">AI Study Assistant</h1>
          <p className="pj-desc">Futuristic AI-powered learning platform designed to help students study smarter through intelligent summaries, AI-generated quizzes, personalized learning analytics, and real-time AI tutoring assistance.</p>
          <div className="pj-tech"><span>REACT</span><span>ASP.NET CORE</span><span>OPENAI API</span><span>NEON DB</span></div>
          <div className="pj-btns">
            <a href="https://rhyzen-ai-study.vercel.app/" target="_blank" rel="noreferrer"><button className="pj-btn pj-primary">VIEW PROJECT LIVE DEMO</button></a>
            <a href="https://github.com/Ashuraking1993/rhyzen-ai-study" target="_blank" rel="noreferrer"><button className="pj-btn pj-secondary">GITHUB</button></a>
          </div>
        </div>
      </div>

      {/* SILKROAD */}
      <div className="pj-card pj-card-gold pj-reverse">
        <div className="pj-corner pj-corner-gold" />
        <div className="pj-left">
          <div className="pj-main-img pj-img-gold"><img src={sroImages[currentSroSlide]} alt="Silkroad" /></div>
          <div className="pj-thumbs">
            <button className="pj-arrow pj-arrow-gold" onClick={() => setCurrentSroSlide(p => p === 0 ? sroImages.length - 1 : p - 1)}>❮</button>
            <div className="pj-thumb-viewport">
              <div className="pj-thumb-track" style={{ transform: `translateX(-${currentSroSlide * 155}px)` }}>
                {sroImages.map((img, i) => (
                  <div key={i} className={`pj-thumb pj-thumb-gold ${currentSroSlide === i ? "active" : ""}`} onClick={() => setCurrentSroSlide(i)}><img src={img} alt="" /></div>
                ))}
              </div>
            </div>
            <button className="pj-arrow pj-arrow-gold" onClick={() => setCurrentSroSlide(p => (p + 1) % sroImages.length)}>❯</button>
          </div>
        </div>
        <div className="pj-info">
          <p className="pj-eyebrow pj-eyebrow-gold">GAMING WEBSITE PLATFORM</p>
          <h1 className="pj-title pj-title-gold">Silkroad Reborn</h1>
          <p className="pj-desc">Modern Silkroad Online fully functional website built with React, immersive animations, responsive layouts, game showcases, event boards and premium UI/UX.</p>
          <div className="pj-tech pj-tech-gold"><span>REACT</span><span>FRAMER MOTION</span><span>CSS3</span><span>VERCEL</span></div>
          <div className="pj-btns">
            <a href="https://silkroad-reborn-landing.vercel.app" target="_blank" rel="noreferrer"><button className="pj-btn pj-btn-gold">LIVE DEMO</button></a>
            <a href="https://github.com/Ashuraking1993/silkroad-reborn-landing" target="_blank" rel="noreferrer"><button className="pj-btn pj-secondary">GITHUB</button></a>
          </div>
        </div>
      </div>

      {/* GROCERY POS */}
      <div className="pj-card">
        <div className="pj-corner" />
        <div className="pj-left">
          <div className="pj-main-img"><img src={groceryPosImages[currentGroceryPosSlide]} alt="Grocery POS" /></div>
          <div className="pj-thumbs">
            <button className="pj-arrow" onClick={() => setCurrentGroceryPosSlide(p => p === 0 ? groceryPosImages.length - 1 : p - 1)}>❮</button>
            <div className="pj-thumb-viewport">
              <div className="pj-thumb-track" style={{ transform: `translateX(-${currentGroceryPosSlide * 155}px)` }}>
                {groceryPosImages.map((img, i) => (
                  <div key={i} className={`pj-thumb ${currentGroceryPosSlide === i ? "active" : ""}`} onClick={() => setCurrentGroceryPosSlide(i)}><img src={img} alt="" /></div>
                ))}
              </div>
            </div>
            <button className="pj-arrow" onClick={() => setCurrentGroceryPosSlide(p => (p + 1) % groceryPosImages.length)}>❯</button>
          </div>
        </div>
        <div className="pj-info">
          <p className="pj-eyebrow">POINT OF SALE MANAGEMENT SYSTEM</p>
          <h1 className="pj-title">Grocery POS</h1>
          <p className="pj-desc">Modern Point of Sale and Inventory Management System featuring product inventory, sales monitoring, stock control, reporting, and authentication. Built using ASP.NET Core MVC, SQL Server, Entity Framework, and C#.</p>
          <div className="pj-tech"><span>ASP.NET CORE</span><span>C#</span><span>SQL SERVER</span><span>ENTITY FRAMEWORK</span><span>MVC</span></div>
          <div className="pj-btns">
            <a href="https://rhyzen-grocery-pos-demo.vercel.app" target="_blank" rel="noreferrer"><button className="pj-btn pj-primary">VIEW PROJECT LIVE DEMO</button></a>
            <a href="https://github.com/Ashuraking1993/Rhyzen-Grocery-POS_demo" target="_blank" rel="noreferrer"><button className="pj-btn pj-secondary">GITHUB</button></a>
          </div>
        </div>
      </div>

      {/* QSMART */}
      <div className="pj-card pj-reverse">
        <div className="pj-corner" />
        <div className="pj-left">
          <div className="pj-main-img"><img src={qmsImages[currentQmsSlide]} alt="QSmart" /></div>
          <div className="pj-thumbs">
            <button className="pj-arrow" onClick={() => setCurrentQmsSlide(p => p === 0 ? qmsImages.length - 1 : p - 1)}>❮</button>
            <div className="pj-thumb-viewport">
              <div className="pj-thumb-track" style={{ transform: `translateX(-${currentQmsSlide * 155}px)` }}>
                {qmsImages.map((img, i) => (
                  <div key={i} className={`pj-thumb ${currentQmsSlide === i ? "active" : ""}`} onClick={() => setCurrentQmsSlide(i)}><img src={img} alt="" /></div>
                ))}
              </div>
            </div>
            <button className="pj-arrow" onClick={() => setCurrentQmsSlide(p => (p + 1) % qmsImages.length)}>❯</button>
          </div>
        </div>
        <div className="pj-info">
          <p className="pj-eyebrow">ENTERPRISE QUEUE MANAGEMENT SYSTEM</p>
          <h1 className="pj-title">QSmart</h1>
          <p className="pj-desc">Enterprise Queue Management System designed for banks, hospitals, government offices, and service centers. Features ticket generation, kiosk interface, agent management, live display boards, branch management, queue monitoring, and role-based access.</p>
          <div className="pj-tech"><span>ASP.NET CORE</span><span>REACT</span><span>TYPESCRIPT</span><span>SIGNALR</span><span>SQL SERVER</span><span>EF CORE</span></div>
          <div className="pj-btns">
            <a href="https://qms-demo-omega.vercel.app/" target="_blank" rel="noreferrer"><button className="pj-btn pj-primary">VIEW PROJECT LIVE DEMO</button></a>
            <a href="https://github.com/Ashuraking1993/QSmart_System" target="_blank" rel="noreferrer"><button className="pj-btn pj-secondary">GITHUB</button></a>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Projects;
