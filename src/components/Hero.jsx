import { motion } from "framer-motion";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";
import { useState, useEffect } from "react";
import bgVideo from "../assets/bg-video.mp4";
import samurai1 from "../assets/samurai1.jpg";
import samurai2 from "../assets/samurai2.jpg";
import samurai3 from "../assets/samurai3.jpg";
import samurai4 from "../assets/samurai4.jpg";
import samurai5 from "../assets/samurai5.jpg";
import samurai6 from "../assets/samurai6.jpg";
import samurai7 from "../assets/samurai7.jpg";
import samurai8 from "../assets/samurai8.jpg";
import samurai9 from "../assets/samurai9.jpg";
import csharp from "../assets/csharp.png";
import bootstrap from "../assets/bootstrap.png";
import java from "../assets/java.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import openai from "../assets/openai.png";
import phyton from "../assets/phyton.png";
import react from "../assets/react.png";
import sql from "../assets/sql.png";
import adobe from "../assets/adobe.png";
import aws from "../assets/aws.png";
import aiWaifu from "../assets/ai-waifu.mp4";
import aboutLoading from "../assets/about-loading.mp4";
import Sakura from "./Sakura";
import sideKatana from "../assets/side-katana.mp4";
import { Link } from "react-router-dom";


import { Swiper, SwiperSlide }
from "swiper/react";

import {
  EffectCoverflow,
  Pagination,
  Autoplay
} from "swiper/modules";

import "swiper/css";

import "swiper/css/effect-coverflow";

import "swiper/css/pagination";


function Hero() {
        const [displayedText, setDisplayedText] =
        useState("");
        const speakRonin = (text) => {
        const speech =
          new SpeechSynthesisUtterance(text);

        speech.volume = 1;

        speech.rate = 0.9;

        speech.pitch = 0.7;

        speech.lang = "en-US";

        window.speechSynthesis.speak(speech);

      };

        const [prompt, setPrompt] =
        useState("");

      const [response, setResponse] =
        useState("");

      const [loading, setLoading] =
        useState(false);
      const askRonin = async () => {

    if(!prompt) return;

    setLoading(true);

    try{

      const res = await axios.post(

        "https://api.openai.com/v1/chat/completions",

        {

          model: "gpt-4.1-mini",

          messages: [

            {
              role: "system",

              content:
                "You are Ronin, a cyber samurai AI assistant."
            },

            {
              role: "user",

              content: prompt
            }

          ]

        },

        {

          headers: {

            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${
                import.meta.env
                .VITE_OPENAI_API_KEY
            }`

        }

      }

        );

       const aiReply =
          res.data.choices[0]
          .message.content;

       typeResponse(aiReply);

        

        }

        catch(err){

          setResponse(
            "SYSTEM ERROR..."
          );

        }

        setLoading(false);

      };

      const typeResponse = (text) => {

    setDisplayedText("");

    let index = 0;

    const interval = setInterval(() => {

      setDisplayedText(
        prev => prev + text.charAt(index)
      );

      index++;

      if(index >= text.length){

        clearInterval(interval);

      }

    }, 25);

  };

  const kaguraText =
  "HI! I'M YOUR AI ASSISTANT KAGURA. HOW MAY I HELP YOU?";

const [kaguraTyping, setKaguraTyping] =
  useState("");

useEffect(() => {

  let index = 0;

  let deleting = false;

  let timeout;

  const animate = () => {

    if (!deleting) {

      setKaguraTyping(
        kaguraText.slice(0, index)
      );

      index++;

      if (index > kaguraText.length) {

        deleting = true;

        timeout = setTimeout(
          animate,
          4000
        );

        return;

      }

      } else {

      setKaguraTyping(
        kaguraText.slice(0, index)
      );

      if (index > 0) {
        index--;
      }

      if (index === 0) {

        deleting = false;

      }

    }

    timeout = setTimeout(
      animate,
      deleting ? 40 : 90
    );

  };

      animate();

      return () => clearTimeout(timeout);

    }, []);

    const [loadingPage, setLoadingPage] =
      useState(false);

    const [loadingVideo, setLoadingVideo] =
      useState(aboutLoading);

    const [loadingText, setLoadingText] =
      useState("ACCESSING RONIN ARCHIVES...");

      const openAbout = () => {

  setLoadingVideo(aboutLoading);

  setLoadingText(
    "ACCESSING RONIN ARCHIVES..."
  );

  setLoadingPage(true);

  setTimeout(() => {

    document
      .getElementById("about")
      .scrollIntoView({
        behavior: "smooth"
      });

    setLoadingPage(false);

  }, 2000);

  };


  
  return (

  <>
   <Sakura />

    {
      loadingPage && (

        <LoadingScreen
          video={loadingVideo}
          text={loadingText}
          isIntro={false}
        />

      )
    }

    <div className="hero-wrapper">

      <section className="hero">

        <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        >
        <source src={bgVideo} type="video/mp4" />
        </video>

        

        <div className="hero-content">

          
          <p className="mini-title">
            DIGITAL RONIN
          </p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
          >

            {/* THE */}

            {"THE".split("").map((char, index) => (

              <motion.span
                key={index}

                initial={{
                  opacity: 0,
                  y: 80
                }}

                animate={{
                  opacity: [0, 1, 1],
                  y: [80, 0, 0]
                }}

                transition={{
                  duration: 2,
                  delay: index * 0.05,
                  repeat: Infinity,
                  repeatDelay: 3
                }}

                style={{
                  display: "inline-block"
                }}
              >
                {char}
              </motion.span>

            ))}

            <br />

            {/* MASTERLESS */}

            {"MASTERLESS".split("").map((char, index) => (

              <motion.span
                key={index + 20}

                initial={{
                  opacity: 0,
                  y: 80
                }}

                animate={{
                  opacity: [0, 1, 1],
                  y: [80, 0, 0]
                }}

                transition={{
                  duration: 2,
                  delay: index * 0.05 + 0.3,
                  repeat: Infinity,
                  repeatDelay: 3
                }}

                style={{
                  display: "inline-block"
                }}
              >
                {char}
              </motion.span>

            ))}

            <br />

            {/* CODER */}

            <span>

              {"CODER".split("").map((char, index) => (

                <motion.span
                  key={index + 40}

                  initial={{
                    opacity: 0,
                    y: 80
                  }}

                  animate={{
                    opacity: [0, 1, 1],
                    y: [80, 0, 0]
                  }}

                  transition={{
                    duration: 2,
                    delay: index * 0.05 + 0.6,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}

                  style={{
                    display: "inline-block"
                  }}
                >
                  {char}
                </motion.span>

              ))}

            </span>

          </motion.h1>

          <p className="hero-subtitle">
            Forging Code Like A Katana
          </p>

          <div className="hero-buttons">

           <Link to="/projects">
          <button className="primary-btn">
            VIEW PROJECTS
          </button>
          </Link>

             <a
            href="/ASHURA KING RHYZEN KOKUBUN.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className="secondary-btn primary">
              DOWNLOAD CV
              </button>
          </a>

          </div>

        </div>

      </section>

      <div className="floating-kanji">

          <span>侍</span>
          <span>刀</span>
          <span>炎</span>
          <span>死</span>
          <span>龍</span>

      </div>
       
      {/* LOWER STATS PANEL */}

      <div className="section-header">

        <p className="section-sub">
          COMBAT ANALYTICS
        </p>

        <h2 className="section-title">
          // RONIN STATS
        </h2>
        
        
      </div>

      <motion.section

        className="stats-panel"

        initial={{
          opacity: 0,
          y: 120
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1
        }}

        viewport={{
          once: true
        }}
      >

        <div className="stat-box">
          <h2>20+</h2>
          <p>PROJECTS COMPLETED</p>
        </div>

        <div className="stat-box">
          <h2>5+</h2>
          <p>YEARS EXPERIENCE</p>
        </div>

        <div className="stat-box">
          <h2>15+</h2>
          <p>HAPPY CLIENTS</p>
        </div>

        <div className="stat-box">
          <h2>10+</h2>
          <p>TECH STACKS MASTERED</p>
        </div>

               
           
      </motion.section>

           
       

  <div className="section-header">

    <p className="section-sub">
      SYSTEM ACTIVE
    </p>

    <h2 className="section-title">
      // RONIN ARSENAL
    </h2>

  </div>
  

        
<Swiper

effect={"coverflow"}

grabCursor={true}

centeredSlides={true}

slidesPerView={4.9}

centerInsufficientSlides={true}

observer={true}

observeParents={true}

spaceBetween={30}

loop={true}

allowTouchMove={true}

simulateTouch={true}

touchRatio={1.5}

speed={1200}

autoplay={{
  delay: 2200,
  disableOnInteraction: false,
  pauseOnMouseEnter: false,
}}

coverflowEffect={{
  rotate: 20,
  stretch: 0,
  depth: 150,
  modifier: 1.5,
  slideShadows: false,
  scale: 0.9,
}}

modules={[
  EffectCoverflow,
  Pagination,
  Autoplay
]}

className="roninSwiper"
>

    <SwiperSlide className="service-card">

      <div className="service-image">
        <img src={samurai1} alt="" />
      </div>

      <div className="service-content">

        <h3>
          AI AUTOMATION <br />
          ENGINEER
        </h3>

        <p>
          Building intelligent systems
          that automate and scale
          business processes.
        </p>

        <a href="#">
          VIEW PROJECTS →
        </a>

      </div>

    </SwiperSlide>

    <SwiperSlide className="service-card">

      <div className="service-image">
        <img src={samurai4} alt="" />
      </div>

      <div className="service-content">

        <h3>
          FULL STACK <br />
          DEVELOPER
        </h3>

        <p>
          Crafting seamless digital
          experiences from frontend
          to backend.
        </p>

        <a href="#">
          VIEW PROJECTS →
        </a>

      </div>

    </SwiperSlide>

     <SwiperSlide className="service-card">

      <div className="service-image">
        <img src={samurai2} alt="" />
      </div>

      <div className="service-content">

        <h3>
          GRAPHIC ARTIST <br />
          
        </h3>

       <p>
          Designing futuristic visuals
          and immersive digital artwork
          with creativity and innovation.
        </p>

        <a href="#">
          VIEW PROJECTS →
        </a>

      </div>

    </SwiperSlide>

     <SwiperSlide className="service-card">

      <div className="service-image">
        <img src={samurai5} alt="" />
      </div>

      <div className="service-content">

        <h3>
          BUSINESS 
          ANALYST
        </h3>

        <p>
          Analyzing business processes
          and transforming requirements
          into efficient digital solutions.
        </p>

        <a href="#">
          VIEW PROJECTS →
        </a>

      </div>

    </SwiperSlide>

     <SwiperSlide className="service-card">

      <div className="service-image">
        <img src={samurai6} alt="" />
      </div>

      <div className="service-content">

        <h3>
          FULL STACK <br />
          DEVELOPER
        </h3>

        <p>
          Crafting seamless digital
          experiences from frontend
          to backend.
        </p>

        <a href="#">
          VIEW PROJECTS →
        </a>

      </div>

    </SwiperSlide>

     <SwiperSlide className="service-card">

      <div className="service-image">
        <img src={samurai7} alt="" />
      </div>

      <div className="service-content">

        <h3>
          AI APP <br />
          DEVELOPER
        </h3>

        <p>
        Developing futuristic AI systems
        focused on automation, analytics,
        and seamless user experiences.
        </p>

        <a href="#">
          VIEW PROJECTS →
        </a>

      </div>

    </SwiperSlide>

     <SwiperSlide className="service-card">

      <div className="service-image">
        <img src={samurai9} alt="" />
      </div>

      <div className="service-content">

        <h3>
          FULL STACK <br />
          DEVELOPER
        </h3>

        <p>
          Crafting seamless digital
          experiences from frontend
          to backend.
        </p>

        <a href="#">
          VIEW PROJECTS →
        </a>

      </div>

    </SwiperSlide>

    <SwiperSlide className="service-card">

      <div className="service-image">
        <img src={samurai3} alt="" />
      </div>

      <div className="service-content">

        <h3>
          SOFTWARE <br />
          ENGINEER
        </h3>

        <p>
          Driving growth through
          data driven strategies
          and creative campaigns.
        </p>

        <a href="#">
          VIEW PROJECTS →
        </a>

      </div>

    </SwiperSlide>

  </Swiper>
  
  {/* TECH STACK */}

<div className="section-header">

  <p className="section-sub">
    COMBAT LOADOUT
  </p>

  <h2 className="section-title">
    // WEAPON ARSENAL
  </h2>

</div>

<section className="tech-section">

  <div className="tech-track">
  
  <div className="tech-card">
    <img src={react} alt="" />
    <p>REACT</p>
  </div>

  <div className="tech-card">
    <img src={node} alt="" />
    <p>NODE JS</p>
  </div>

  <div className="tech-card">
    <img src={phyton} alt="" />
    <p>PYTHON</p>
  </div>

  <div className="tech-card">
    <img src={mongo} alt="" />
    <p>MONGODB</p>
  </div>

  <div className="tech-card">
    <img src={openai} alt="" />
    <p>OPENAI</p>
  </div>

  <div className="tech-card">
    <img src={aws} alt="" />
    <p>AWS</p>
  </div>

   <div className="tech-card">
    <img src={csharp} alt="" />
    <p>C#</p>
  </div>

  <div className="tech-card">
    <img src={sql} alt="" />
    <p>SQL</p>
  </div>

   <div className="tech-card">
    <img src={java} alt="" />
    <p>JAVA</p>
  </div>

   <div className="tech-card">
    <img src={bootstrap} alt="" />
    <p>BOOTSTRAP</p>
  </div>

  <div className="tech-card">
    <img src={adobe} alt="" />
    <p>ADOBE</p>
  </div>

  </div>
 

  

  

</section>
  
<section className="ai-terminal">

  <div className="terminal-header">

     <h2>
      ASK KAGURA
    </h2>

    <div className="kagura-typing">
        <span>
      {kaguraTyping}
    </span>
</div>

  </div>

  <div className="terminal-body">

        <div className="ai-waifu">

  <video

    autoPlay
    loop
    muted
    playsInline

    >

    <source
      src={aiWaifu}
      type="video/webm"
    />

  </video>

   

  </div>

    <p>
      &gt; Welcome to the Ronin AI Terminal
    </p>

    <p>
      &gt; Ask about skills, projects, or missions.
    </p>

    <input

      type="text"

      placeholder="Ask the Ronin..."

      value={prompt}

      onChange={(e) =>
        setPrompt(e.target.value)
      }

      onKeyDown={(e) => {

        if(e.key === "Enter"){

          askRonin();

        }

      }}

    />

    <div className="ai-response">

    {

    loading

    ?

    "RONIN IS THINKING..."

    :

    response

    }

  </div>

  </div>

</section>


      </div>

  </>

);
}

export default Hero;