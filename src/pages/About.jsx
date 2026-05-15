import { useEffect, useState } from "react";
import profileImage
from "../assets/profile.png";
import MahoganyLeaves
from "../components/MahoganyLeaves";
import aboutVideo
from "../assets/about-bg.mp4";
import profileVideo
from "../assets/profile.mp4";
import "../App.css";

function About() {

  const [reveal, setReveal] =
    useState(false);

        useEffect(() => {

        const timer = setTimeout(() => {

            setReveal(true);

        }, 300);

        return () => clearTimeout(timer);

        }, []);

  return (

    <>

      <MahoganyLeaves />

        <video
            autoPlay
            loop
            muted
            playsInline
            className="about-bg-video"
            >

            <source
                src={aboutVideo}
                type="video/mp4"
            />

            </video>

            <div
            className={`about-fade ${
                reveal ? "fade-done" : ""
            }`}
            />

            <section className="about-content">
            {/* HERO */}

                    <div className="dossier-hero">

                        <p className="system-text">
                        CLASSIFIED DIGITAL ARCHIVE
                        </p>

                        <h1 className="dossier-title">
                        RONIN DOSSIER
                        </h1>
                       

                    </div>

                    {/* PROFILE */}

                <div className="profile-section">

                <div className="profile-left">

                <div className="profile-left">

                <video
                    src={profileVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="profile-image"
                />

                <div className="profile-scan"></div>

                </div>

                <div className="profile-scan"></div>

                </div>

                <div className="profile-right">

                  <div className="intro-wrapper">

                    <span className="intro-static">
                    HI, I'M
                    </span>

                    <ul className="dynamic-texts">
                    <li><span>ASHURA KING RHYZEN</span></li>
                    <li><span>A SOFTWARE ENGINEER</span></li>
                    <li><span>A WEB DEVELOPER</span></li>
                    <li><span>A DIGITAL RONIN</span></li>
                    </ul>

                </div>

                <div className="dossier-grid">

                <div className="dossier-card">
                 <p>STATUS</p>
                <span>システム 起動</span>
                <p>SYSTEM ACTIVE</p>
                </div>

                <div className="dossier-card">
                 <p>FACTION</p>
                <span>企業連合</span>
                <p>ACCENTURE</p>
                </div>

                <div className="dossier-card">
                    <p>ROLE</p>
                <span>ソフトウェア技師</span>
                <p>SOFTWARE ENGINEER</p>
                </div>

                <div className="dossier-card">
                <p>CLASS</p>
                 <span>デジタル浪人</span>
                <p>DIGITAL RONIN</p>
                </div>

            </div>

                </div>

            </div>

             {/* TIMELINE */}

           <div className="timeline-section">

                <h2 className="section-title">
                    MISSION OBJECTIVE
                </h2>

                <div className="mission-terminal">
                    <p className="typing-text">
                    {`> SOFTWARE ENGINEER WITH EXPERIENCE IN APPLICATION SUPPORT,
                DATA ANALYTICS, AND FULL-STACK DEVELOPMENT.

                > PASSIONATE ABOUT BUILDING MODERN DIGITAL EXPERIENCES,
                AUTOMATION TOOLS, AND INTERACTIVE WEB SYSTEMS.

                > CURRENTLY FOCUSED ON CREATING CINEMATIC UI/UX,
                AI-POWERED PROJECTS, AND CREATIVE DEVELOPMENT SOLUTIONS.`}
                    </p>
                </div>

                </div>
            
            {/* SPECIALIZATION */}

            <div className="special-section">

                <h2 className="section-title">
                SPECIALIZED OPERATIONS
                </h2>

                <div className="special-grid">

                <div className="special-card">
                <span>ソフトウェア工学</span>
                SOFTWARE ENGINEERING
                </div>

                <div className="special-card">
                <span>データ専門家</span>
                DATA SPECIALIST
                </div>

                <div className="special-card">
                <span>アプリ支援</span>
                APPLICATION SUPPORT
                </div>

                <div className="special-card">
                <span>クラウド基盤</span>
                CLOUD INFRASTRUCTURE
                </div>

                <div className="special-card">
                <span>アクセス制御</span>
                ACCESS CONTROL
                </div>

                <div className="special-card">
                <span>業務分析</span>
                BUSINESS ANALYST
                </div>

                </div>

            </div>

             {/* INTERESTS */}

  <div className="interest-section">

    <h2 className="section-title">
      OFF-DUTY ACTIVITIES
    </h2>

    <div className="interest-grid">

      <div className="interest-card">
        <span>ゲーム</span>
        <p>GAMING</p>
        </div>

      <div className="interest-card">
        <span>音楽</span>
        <p>MUSIC</p>
      </div>

       <div className="interest-card">
        <span>映画</span>
        <p>MOVIES</p>
    </div>

      <div className="interest-card">
        <span>旅行</span>
        <p>TRAVEL</p>
      </div>

      <div className="interest-card">
        <span>冒険</span>
        <p>ADVENTURE</p>
  </div>

    </div>

  </div>


        {/* END */}

        <div className="dossier-end">

            <h1>
            END OF DOSSIER
            </h1>

            <p>
            PRESS TO RETURN TO SYSTEM
            </p>

        </div>

            </section>

    </>

  );

}

export default About;